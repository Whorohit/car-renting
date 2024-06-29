import { NextApiRequest, NextApiResponse } from "next";
import crypto from 'crypto'
import prisma from '../../../libs/db'
import { corsMiddleware } from "@/lib/init-middleware";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  try {
    await corsMiddleware(req, res); // Apply CORS middleware
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;
    const { price, userId, Mode, carModalId, startdate, enddate } = req.query as {
      price: string;
      userId: string;
      Mode: string;
      carModalId: string;
      startdate: string,
      enddate: string
    };
    console.log(Mode);

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", `${process.env.secert}`)
      .update(body.toString())
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;
    let Paymentdata;
    if (isAuthentic) {
      if (Mode.toString() === "Rent") {
        const [startDay, startMonth, startYear] = startdate.split('-').map(Number);
        const [endDay, endMonth, endYear] = enddate.split('-').map(Number);
        const startdatetime = new Date(startYear, startMonth - 1, startDay);
        const enddatetime = new Date(endYear, endMonth - 1, endDay);
        const rentData = {
          startdatetime,
          enddatetime,// Example value, replace with actual end datetime
          paymentmode: "online", // Example value, replace with actual payment mode
          createdAt: new Date(),
          price: BigInt(price),
          userId: userId.toString(),
          carModalId: carModalId.toString(),
          razorpay_order_id: razorpay_order_id.toString(),
          razorpay_payment_id: razorpay_payment_id.toString(),
          razorpay_signature: razorpay_signature.toString(),
        };


        Paymentdata = await prisma.rent.create({
          data: rentData,
        })
        console.log(Paymentdata);
       
      }
      if (Mode.toString() === "Sell") {
        const sellData = {
          
          price: BigInt(price),
          userId: userId.toString(),
          carModalId: carModalId.toString(),
          razorpay_order_id: razorpay_order_id.toString(),
          razorpay_payment_id: razorpay_payment_id.toString(),
          razorpay_signature: razorpay_signature.toString(),
        };

        Paymentdata = await prisma.purchase.create({
          data: sellData,
        });




        
      }

      res.redirect(
        `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
      );
    }
    else {
      res.status(400).json({
        success: false,
      });
    }
  } catch (error) {

  }
};