import { NextApiRequest, NextApiResponse } from "next";
import prisma from '../../../libs/db'
import serverAuth from "../../../libs/ServerAuth";
 export default   async function handler(req:NextApiRequest,res:NextApiResponse) {
    if(req.method!=="GET")
    {
     return       res.status(485).end();
 
    }
    try {
        const { rentorsell ,pagesize}=req.query
        if (!rentorsell || !pagesize) {
            return res.status(400).end(); // Bad Request
        }
      let userPurchaseorRent;
      const { currentUser } = await serverAuth(req, res);
     if(rentorsell==="Purchase")
     {
        userPurchaseorRent=await prisma.purchase.findMany(
            {
                where:{
                     userId:currentUser.id
                },
                take: Number(pagesize)
            }
        ) 
        
        return res.status(200).json(userPurchaseorRent);

     }
     if(rentorsell==="Rent")
     {
        userPurchaseorRent=await prisma.rent.findMany(
            {
                where:{
                     userId:currentUser.id
                },
                take: Number(pagesize)
            }
        ) 
       
        return res.status(200).json(userPurchaseorRent);

     }
        
    } catch (error) {
        
    }
    
}