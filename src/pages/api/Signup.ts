import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from 'bcryptjs'
import prisma from "../../../libs/db"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        // Return 405 Method Not Allowed if the request method is POST
        return res.status(405).end();
    }

    try {
        const { email, Password, name } = req.body;
        const password = await bcrypt.hash(Password, 12);
        const user = await prisma.user.create({
            data: {
                email,
                name,
                password
            }
        });
        
        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(400).end();
    }
}
