import { NextApiRequest, NextApiResponse } from "next";
import prisma from '../../../../libs/db'
export default   async function handler(req:NextApiRequest,res:NextApiResponse) {
    if(req.method!=="GET")
     return res.status(485).end();
    try {
        const{carinfo}=req.query
        if(!carinfo ||  typeof carinfo!=='string')
        {
              throw new Error("Invaild ID")
        }
        
        
        const car = await prisma?.carModal.findUnique({
            where: {
                id: carinfo?.toString()
            },
            include: {
                brand: true // Include brand information
            }
          
        });
 
        if (!car) {
            return res.status(404).json({ error: "Car not found" });
        }

        // Serialize price and driven by converting them to regular numbers
        const serializedCar = {
            ...car,
            price: Number(car.price),
            driven: Number(car.driven)
        };
        return res.status(200).json(serializedCar);


    } catch (error) {
         console.log(error);
          return res.status(500).end();
         
    }
}