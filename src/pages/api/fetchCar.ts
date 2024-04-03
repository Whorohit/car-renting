import { NextApiRequest, NextApiResponse } from "next";
import prisma from '../../../libs/db'
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method !== 'GET')
        return res.status(485).end()
    try {
    const { brandId, Body, fuel, transmission, drivetrain, option } = req.query
    // if (typeof brandId !== 'string'||  typeof type !=="string" || typeof  fuel!=='string' ||typeof transmission!=='string' || typeof drivetrain !=='string' || typeof option  !=='string') {
    //     throw new Error('Invaild Id')

    // }
    if (!brandId && !Body && !fuel && !transmission && !drivetrain && !option) {
        throw new Error("At least one condition must be provided");
    }


    else {
        
        console.log(brandId ,'heello');
           
        const cars = await prisma.carModal.findMany({
            where: {
                brandId: brandId?.toString(),
                fuel: fuel?.toString(),
                transmission: transmission?.toString(),
                drivetrain: drivetrain?.toString(),
                Body: Body?.toString()

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
                  
            }

        })
        const serializedCars = cars?.map(car => ({
            ...car,
            price: car.price.toString(), // Convert BigInt to string
            driven: car.driven.toString() // Convert BigInt to string
        }));
        
        return res.status(200).json(serializedCars);
    }
    } catch (error) {
        console.log(error);
        return res.status(500).end()

    }
}