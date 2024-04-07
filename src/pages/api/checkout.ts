import { NextApiRequest, NextApiResponse } from "next";
import Razorpay from "razorpay";
const instance = new Razorpay({
  key_id: "rzp_test_uA8hntLYg0fmxW",
  key_secret: process.env.secert,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") { res.status(485).end() }
  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
  };
  const order = await instance.orders.create(options);

  res.status(200).json({
    success: true,
    order,
  });
}



