import { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "../../../../libs/ServerAuth";
import prisma from '../../../../libs/db';
import bcrypt from 'bcryptjs'
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method !== "PATCH") {
        res.status(485).end()

    }
    try {
        const { currentUser } = await serverAuth(req, res)
        const { oldpassword, newpassword,
        } = req.body
        if (!oldpassword || !newpassword) {
            res.status(200).json({ message: "Wrong Password", success: false })
            throw new Error('Missing Fields')
        }
        const user = await prisma.user.findUnique({
            where: {
                id: currentUser.id
            },
        })

        const isCorrectPassword = await bcrypt.compare(
            oldpassword,
            user.password
        );
        console.log(isCorrectPassword);

        if (!isCorrectPassword) {

            res.status(200).json({ message: "Wrong Password", success: false })
        }

        const Password = await bcrypt.hash(newpassword, 12);
        const updatedUser = await prisma.user.update({
            where: {
                id: currentUser.id
            },
            data: {
                password: Password
            }

        })

        res.status(200).json({ message: "Password update successfully", success: true })

    } catch (error) {
        res.status(500).json({ message: "something  went Wrong" })
    }
}