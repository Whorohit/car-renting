import Image from 'next/image';
import React from 'react'
import { brandname } from '../../../hooks/brandname';
import { FaArrowRight } from 'react-icons/fa';
import { MdBookmark, MdOutlineKeyboardArrowRight } from 'react-icons/md'

import { BiSolidBadgeCheck } from "react-icons/bi";
import { useRouter } from 'next/navigation';
import { TbTruckDelivery } from "react-icons/tb";


type Props = {
    payment?: Record<string, any>
    data?: Record<string, any>
    disabled?: boolean;
}

const RentorPurchaseCard: React.FC<Props> = ({ data = {}, payment = {} }) => {
    const router = useRouter()
    function formatDate(isoString: string): string {
        const date = new Date(isoString);
        const day = date.getDate();
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const monthIndex = date.getMonth();
        const year = date.getFullYear();

        return `${day} ${monthNames[monthIndex]} ${year}`;
    }
    return (
        <div className='flex flex-row gap-0 
     border-neutral-300 border-2 p-2 w-[90%]  justify-between rounded-lg h-[rem]  tex ' onClick={() => {
                router.push(`/Carinfo/${data.id}`)
            }}>

            <Image src={data.coverimg} alt='car image' width={100} className='basis-1/3 p-4' quality={100} height={100} />

            <div className=' basis-2/3 '>
                <div className='flex justify-end items-center'>
                   {data.RentorSell=="Rent"&& <h1 className='flex justify-end items-center gap-1 border-[1px] px-2 font-light border-neutral-400 rounded-md'> {new Date(payment.enddatetime) > new Date() ? `${`In Use `}` : `Return`} <MdBookmark color={new Date(payment.enddatetime) > new Date() ? "blue" : "gray"} size={15} /> </h1>}
                   {data.RentorSell=="Sell"&& <h1 className='flex justify-end items-center gap-1 border-[1px] px-2 font-light border-neutral-400 rounded-md'> {new Date(payment.createdAt) > new Date() ? `${`Deilvery `}` : `Yet To Delivery`} <TbTruckDelivery color={new Date(payment.enddatetime) > new Date() ? "blue" : "gray"} size={15} /> </h1>}
                </div>
                <h1 className='font-normal mt-3 flex items-center gap-5   text-base md:text-lg  tracking-normal   w-full text-black '>{data?.brand?.brandname} {data.Modal}<MdOutlineKeyboardArrowRight className='inline' color='gray' /> </h1>
                <h1 className=' mt-2  text-sm md:text-base  text-neutral-600 '>
                    <span className='text-neutral-400'>{data.fuel} </span>
                    | <span className='text-neutral-400'>{data.drivetrain} </span>
                    | <span className='text-neutral-400'>{data.seating} Seater </span>
                </h1>
                <h1 className='text-black font-semibold  text-base  text-left mt-2 '>At {data.type === 'Sell' ? `Rs ${data.price} ` : `Rs ${data.price}  per day `}  </h1>
                {data.RentorSell == "Rent" && <h1 className='text-black font-semibold  text-base  text-left mt-2 '>From <span>{formatDate(payment.startdatetime)} to {formatDate(payment.enddatetime)} </span> </h1>}
                <h1 className='text-black font-semibold  text-base  text-left mt-2 '>On {formatDate(payment.createdAt)} </h1>

                <h1 className='text-blue-300   my-2 font-normal text-sm capitalize '>Purchase/Rent from  {data.Availablecity}   </h1>
                <div className='flex justify-center flex-col items-start py-2'>
                 {data.RentorSell==="Rent" &&  <h1 className='font-semibold    text-base' > Total Price:  <span className='font-normal '> Rs{payment.price
                    }</span></h1>}
                    <h1 className='font-semibold    text-base space-x-3' > OrderID:  <span className='font-normal '> {payment.razorpay_order_id}</span></h1>
                    <h1 className='font-semibold    text-base' > PaymentID  <span className='font-normal '> {payment.razorpay_payment_id
                    }</span></h1>
                </div>


            </div>
        </div>
    )
}

export default RentorPurchaseCard

