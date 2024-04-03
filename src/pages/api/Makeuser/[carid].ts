import { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "../../../../libs/ServerAuth";

 export default   async function handler(req:NextApiRequest,res:NextApiResponse) {
    
if(req.method !== 'PUT' && req.method !== 'GET' && req.method!=='DELETE')
   return res.status(485).end();
 try {
    const { currentUser } = await serverAuth(req, res);
    const { carid } = req.query;
    if (!carid || typeof carid !== 'string') {
        throw new Error('Invaild Id')

    }
     if(req.method==="GET")
      {
       
        const car=await prisma?.carModal.findUnique({
            where:{
                id:carid,
                userid:currentUser.id
            }  
        })
         return res.status(200).json(car)
      }
      if (req.method==="PUT") {
        const{  Modal,
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
            RentorSell,}=req.body
        const car=await prisma?.carModal.update({
            where:{
                id:carid,
                userid:currentUser.id
            },
            data:{
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
            }
        })
        return res.status(200).json(car)
      }
    if (req.method==="DELETE") {
         const car = await prisma?.carModal.delete({
            where:{
                id:carid,
                userid:currentUser.id
            }
         })
        return res.status(200).json(car)
    }
    
 } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });

 }
}
