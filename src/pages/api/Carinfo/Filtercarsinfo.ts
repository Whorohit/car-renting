import { NextApiRequest, NextApiResponse } from "next";
import prisma from '../../../../libs/db'
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        console.log(444);

        return res.status(485).json({ m: "ggggg" });


    }
    try {
        const { Brand, Body, pricerange, Transmission, Fuel, order, } = req.body
        const { pagenumber } = req.query;

        let take = 10; // Default number of items per page
        let skip = 0; // Number of items to skip

        if (pagenumber && parseInt(pagenumber as string) > 0) {
            skip = (parseInt(pagenumber as string) - 1) * take;
        }
        let makes: any = [];
        if (Brand && Brand.length > 0) {
            makes = await prisma.make.findMany({
                where: {
                    brandname: { in: Brand }
                },
                select: {
                    id: true
                }
            });
        }

        let whereConditions: any = {};

        if (Brand && Brand.length > 0) {
            const makesId = makes.map((item: { id: any }) => item.id);
            whereConditions.brandId = { in: makesId };
        }

        if (Body && Body.length > 0) {
            whereConditions.Body = { in: Body };
        }

        if (Transmission && Transmission.length > 0) {
            whereConditions.transmission = { in: Transmission };
        }

        if (Fuel && Fuel.length > 0) {
            whereConditions.fuel = { in: Fuel };
        }

        const priceCondition = pricerange ? {
            gte: pricerange[0] || 0,
            lte: pricerange[1] || 2000000
        } : {};

        const carsdata = await prisma.carModal.findMany({
            where: {
                ...whereConditions,
                price: priceCondition
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
                },
            },
            orderBy: order && order.toString().toLowerCase() === 'desc' ? { price: "desc" } : { price: "asc" },
            take: take,
            skip: skip,
        });

        const carsCount = await prisma.carModal.count({
            where: {
                ...whereConditions,
                price: priceCondition
            }
        });

        const serializedCars = carsdata?.map((car: any) => ({
            ...car,
            price: car.price.toString(), // Convert BigInt to string
            driven: car.driven.toString() // Convert BigInt to string
        }));
    
        return res.status(200).json({ serializedCars:serializedCars, totalcount: carsCount });

    } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).json({ error: "Internal Server Error bro" });
    }

}