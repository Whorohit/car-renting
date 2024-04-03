import { NextApiRequest, NextApiResponse } from "next";
import prisma from '../../../../libs/db'
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        res.status(485).end();
    }
    try {
        const { carid, RentorSell,startdate,enddate } = req.body
        let isavailable:boolean;
        if (RentorSell === "Sell") {
        const    data = await prisma.purchase.findMany({
                where: {
                    carModalId: carid
                },
                include: {
                    CarModal : true // Include the associated CarModal model
                }
            })
            if(!data)
            {
                return res.status(400).json({ error: 'Start date must be greater than the end date of the last rental.',isavailable:false });
            }
            return res.status(200).json({message:"Slot is empty" ,isavailable:true})


        }
        if (RentorSell === "Rent") {
            const latestEndDate = await prisma.rent.findFirst({
                where: {
                    carModalId: carid
                },
                orderBy: {
                    enddatetime: 'desc' // Order by end date in descending order to get the latest
                },
                select: {
                    enddatetime: true
                }
            })
            if (latestEndDate) {
                const lastEndDate = new Date(latestEndDate.enddatetime);
                const newStartDate = new Date(startdate);
                
                // Compare the start date of the new rental with the end date of the last rental
                if (newStartDate <= lastEndDate) {
                    return res.status(400).json({ error: 'Start date must be greater than the end date of the last rental.',isavailable:false });
                }
            }
             return res.status(200).json({message:"Slot is empty" ,isavailable:true})
        }

    } catch (error) {
        console.log(error);
        res.status(500).end();

    }

}