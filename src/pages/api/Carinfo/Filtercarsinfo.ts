import { NextApiRequest, NextApiResponse } from "next";
import prisma from '../../../../libs/db'
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        console.log(444);
      
        return res.status(485).json({m:"ggggg"});


    }
    try {
    const { Brand, Body, pricerange, Transmission, Fuel, order ,pagesize } = req.body
    let makes = await prisma.make.findMany({
        where: {
            brandname: { in: Brand }
        },
        select: {
            id: true
        }
    })
    console.log(makes);
    let whereConditions: any = {};
    const makesId = makes.map((item: { id: any }) => item.id);
    whereConditions.brandId = { in: makesId };

    const orderBy = order && order.toLowerCase() === "desc" ? { price: "desc" } : { price: "asc" };
    if (Body && Body.length>0) {
        whereConditions.Body = { in: Body };
    }

    if (Transmission && Transmission.length>0) {
        whereConditions.transmission = { in: Transmission };
    }

    if (Fuel && Fuel.length>0 ) {
        whereConditions.fuel = { in: Fuel };
    }

    const carsdata = await prisma.carModal.findMany({
        where: {
            ...whereConditions,
            price: {

                gte: pricerange&& pricerange[0]?pricerange[0]:0,
                lte: pricerange&& pricerange[1]?pricerange[1]:2000000
            }




        },
        orderBy: order && order.toLowerCase() === "desc" ? { price: "desc" } : { price: "asc" }
    })
    const serializedCars = carsdata?.map((car:any )=> ({
        ...car,
        price: car.price.toString(), // Convert BigInt to string
        driven: car.driven.toString() // Convert BigInt to string
    }));
    console.log(carsdata);

    return res.status(200).json(serializedCars );

    } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }

}