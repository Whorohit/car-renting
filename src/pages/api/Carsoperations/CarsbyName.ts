import { NextApiRequest, NextApiResponse } from "next";
import prisma from '../../../../libs/db'
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(200).end();
    }
    try {
        const { CarsbyName, pagenumber } = req.query;
        if (!CarsbyName || typeof CarsbyName !== 'string') {
            throw new Error('Invaild Id')

        }
        console.log(CarsbyName);
        
        let take = 10; // Default number of items per page
        let skip = 0; // Number of items to skip

        if (pagenumber && parseInt(pagenumber as string) > 0) {
            skip = (parseInt(pagenumber as string) - 1) * take;
        }
        console.log(skip, take);
        const countCar = await prisma.carModal.count({
            where: {
                Modal: CarsbyName
            }
        })
        const cars = await prisma.carModal.findMany({
            where: {
                Modal: CarsbyName
            },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true // Include additional fields from the user if needed
                    }
                },

                brand: {
                    select: {
                        brandname: true
                    }
                }


            },
            take: take,
            skip: skip,

        })


        const serializedCars = cars?.map((car: any) => ({
            ...car,
            price: car.price.toString(), // Convert BigInt to string
            driven: car.driven.toString() // Convert BigInt to string
        }));
        console.log(serializedCars);
        return res.status(200).json({ serializedCars, countCar });


    } catch (error) {
        console.log(error);
        return res.status(500).end()
    }
}