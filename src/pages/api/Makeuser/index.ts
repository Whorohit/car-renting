import { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "../../../../libs/ServerAuth";
import prisma from '../../../../libs/db'
import { number } from "prop-types";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET' && req.method !== 'POST') {
        res.status(485).end()

    }
    try {

        if (req.method === "POST") {
            const { currentUser } = await serverAuth(req, res);
            const {
                Modal,
                brandname,
                engine,
                fuel,
                year,
                submodal,
                transmission,
                seating,
                coverimg,
                frontimg,
                sideimg,
                backimg,
                driven,
                drivetrain,
                mileage,
                price,
                Body,
                Availablecity,
                des,
                Vehicleno,
                RentorSell,
            } = req.body;
            console.log(currentUser.id);

          



            const car = await prisma.carModal.create({
                data: {
                    Modal,
                    brandId:brandname,
                    engine,
                    fuel,
                    year,
                    submodal,
                    transmission,
                 seating:parseInt(seating),
                    coverimg,
                    frontimg,
                    sideimg,
                    backimg,
                   driven:BigInt(driven),
                    drivetrain,
                    mileage,
                   price:BigInt(price),
                    Body,
                    Availablecity,
                    des,
                    Vehicleno,
                    RentorSell,
                    userid: currentUser.id,
                    rating :(Math.floor(Math.random() * (10 - 1 )) +1).toString()
                },
               
            })
            const carData = {
                ...car,
                driven: driven.toString(),
                price: price.toString()
            };
            return res.status(200).json(carData);

        }
        if (req.method==="GET") {
            const { rentorsell ,pagesize}=req.query
            const { currentUser } = await serverAuth(req, res);
            const pageSize = isNaN(Number(pagesize)) ? 10 : Number(pagesize);
            const userspostcar=await prisma.carModal.findMany(
                {
                    where: {
                        userid: currentUser.id,
                        ...(req.query.rentorsell && typeof req.query.rentorsell === 'string' && { RentorSell: req.query.rentorsell })

                    },
                    include: {
                        brand: {
                          select: {
                            brandname: true
                          }
                        }
                      },
                    take: pageSize 
                }
            )
            const serializedCars = userspostcar.map((car:any) => ({
                ...car,
                driven: car.driven.toString(),
                price: car.price.toString(), 
            }));
    
            return res.status(200).json(serializedCars);
          
            
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error" });

    }
}