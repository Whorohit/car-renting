// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from '../../../libs/db'
type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET')
    return res.status(485).end()
  try {
    const brand = await prisma?.make.findMany({})
    
    return res.status(200).json(brand);
  } catch (error) {
    console.log(error);
    return res.status(400).send("error")

  }


}
