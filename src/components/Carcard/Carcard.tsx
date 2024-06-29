import Image from 'next/image';
import React from 'react'
import { brandname } from '../../../hooks/brandname';
import { FaArrowRight } from 'react-icons/fa';
import { MdOutlineKeyboardArrowRight, MdSell } from 'react-icons/md'

import { BiSolidBadgeCheck } from "react-icons/bi";
import { useRouter } from 'next/navigation';



type Props = {
    data?: Record<string, any>
    disabled?: boolean;
}

const Carcard: React.FC<Props> = ({ data = {} }) => {
    const router = useRouter()


    return (
        <div className='flex  flex-col md:flex-row gap-0 
     border-neutral-300 border-2 p-2 w-[90%]  justify-between rounded-lg h-[rem]  tex ' onClick={() => {
                router.push(`/Carinfo/${data.id}`)
            }}>

            {<Image src={data.coverimg} alt='car image' width={100} className='md:block hidden  basis-full md:basis-1/3 p-4' quality={100} height={100} />}
            <div className='md:hidden text-center flex justify-center items-center basis-full md:basis-1/3 p-4 '>
                {<Image src={data.coverimg} alt='car image' width={700} className='' quality={100} height={100} />}
            </div>

            <div className=' basis-full md:basis-2/3 '>
                <div className='flex justify-end   font-thin  md:text-base text-xl  items-center gap-4'>

                    <h1 className='flex justify-end items-center gap-1 border-[1px] px-2 font-light border-neutral-400 rounded-md'> {data.verify ? `${`verifed  `}` : `not Verifed `} <BiSolidBadgeCheck color={data.verify ? "blue" : "gray"} size={15} /> </h1>
                    <h1 className='flex justify-end items-center gap-1 border-[1px] px-2 font-light border-neutral-400 rounded-md'> {data.RentorSell === "Rent" ? `${`Rent  `}` : `Sell `} <MdSell color={"blue"} size={15} /> </h1>
                </div>
                <h1 className='font-normal mt-3 flex items-center gap-5  text-2xl md:text-lg  tracking-normal   w-full text-black '>{data?.brand?.brandname} {data.Modal}<MdOutlineKeyboardArrowRight className='inline' color='gray' /> </h1>
                <h1 className=' mt-2  text-lg md:text-base  text-neutral-600 '>
                    <span className='text-neutral-400'>{data.fuel} </span>
                    | <span className='text-neutral-400'>{data.drivetrain} </span>
                    | <span className='text-neutral-400'>{data.seating} Seater </span>
                </h1>
                <h1 className='text-black font-semibold  text-xl md:text-lg  text-left mt-2 '>{data.type === 'Sell' ? `Rs ${data.price} ` : `Rs ${data.price} Hour per day `} <span className='text-neutral-400  text-base font-thin'>Negotable</span> </h1>
                <h1 className='text-neutral-400  font-light   text-lg md:text-sm'>Available in <span className='font-bold text-black '> {data.Availablecity}</span> </h1>
                <h1 className='text-blue-500  my-2 font-bold md:text-base capitalize text-lg  '>By {data?.user?.name}   </h1>


            </div>
        </div>
    )
}

export default Carcard

