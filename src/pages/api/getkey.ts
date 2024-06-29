import { corsMiddleware } from "@/lib/init-middleware";
import { NextApiRequest, NextApiResponse } from "next";

export default  async function handler(req:NextApiRequest,res:NextApiResponse) {
   await corsMiddleware(req, res); // Apply CORS middleware
     if(req.method!=="GET")
     {
        res.status(485).end();
     }
      try {
        res.status(200).json({ key: process.env.key })
      } catch (error) {
         console.log(error);
         res.status(500).end();
         
      }
}