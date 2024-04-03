import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import prisma from '../libs/db'
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
 const serverAuth=async(req:NextApiRequest,res:NextApiResponse)=>{
    

    const session= await getServerSession(req, res, authOptions);
    console.log(session?.user?.email);
    console.log(session);
    if (!session?.user?.email) {
        throw new Error('Not signed in');
      } 
    const  currentUser=await prisma.user.findUnique({
        where:{
            email:session.user.email
        },
        select: {
            createdAt:true,
            email:true,
            id:true,
            name:true,
            password:false
        } 
         
            
    })

    if(!currentUser)
    {
        throw new Error("not Sign")
    }
    return { currentUser };
 }

 export default serverAuth