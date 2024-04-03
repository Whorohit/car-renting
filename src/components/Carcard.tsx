import Image from 'next/image';
import React from 'react'
import { brandname } from '../../hooks/brandname';
import { FaArrowRight } from 'react-icons/fa';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

import { BiSolidBadgeCheck } from "react-icons/bi";
import { useRouter } from 'next/navigation';



type Props = {
    data?: Record<string, any>
    disabled?: boolean;
}

const Carcard: React.FC<Props> = ({ data = {} }) => {
    const router = useRouter()

    return (
        <div className='flex flex-row gap-0 
     border-neutral-300 border-2 p-2 w-[90%]  justify-between rounded-lg h-[rem]  tex ' onClick={() => {
                router.push(`/Carinfo/${data.id}`)
            }}>

            <Image src={data.coverimg} alt='car image' width={100} className='basis-1/3 p-4' quality={100} height={100} />

            <div className=' basis-2/3 '>
                <div className='flex justify-end items-center'>
                    <h1 className='flex justify-end items-center gap-1 border-[1px] px-2 font-light border-neutral-400 rounded-md'> {data.verify ? `${`verifed  `}` : `not Verifed `} <BiSolidBadgeCheck color={data.verify ? "blue" : "gray"} size={15} /> </h1>
                </div>
                <h1 className='font-normal mt-3 flex items-center gap-5   text-base md:text-lg  tracking-normal   w-full text-black '>{data?.brand?.brandname} {data.Modal}<MdOutlineKeyboardArrowRight className='inline' color='gray' /> </h1>
                <h1 className=' mt-2  text-sm md:text-base  text-neutral-600 '>
                    <span className='text-neutral-400'>{data.fuel} </span>
                    | <span className='text-neutral-400'>{data.drivetrain} </span>
                    | <span className='text-neutral-400'>{data.seating} Seater </span>
                </h1>
                <h1 className='text-black font-semibold  text-base md:text-lg text-left mt-2 '>{data.type === 'Sell' ? `Rs ${data.price} ` : `Rs ${data.price} Hour per day `} <span className='text-neutral-400  text-sm '>Negotable</span> </h1>
                <h1 className='text-neutral-400  font-light  text-sm'>Aviaable in <span className='font-bold text-black '> {data.Availablecity}</span> </h1>
                <h1 className='text-blue-500  my-2 font-bold text-base capitalize '>By {data?.user?.name}   </h1>


            </div>
        </div>
    )
}

export default Carcard

