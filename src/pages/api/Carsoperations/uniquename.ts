import { NextApiRequest, NextApiResponse } from "next";
import prisma from '../../../../libs/db'

interface modal {
    Modal: string
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(485).end();
    }
    try {
        let uniqueCarNames = await prisma.carModal.findMany({
            distinct: ['Modal'], // Specify the field for which you want unique values
            select: {
                Modal: true // Select the field you want to return
            }
        })
        let uniqueCarNamelist = uniqueCarNames.length>0 ? uniqueCarNames.map((car: modal) => car.Modal):[]
        return res.status(200).json(uniqueCarNamelist)

    } catch (error) {
        console.log(error);

        return res.status(500).json({ message: "error" })
    }

}