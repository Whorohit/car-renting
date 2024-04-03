
import Image from 'next/image'
import React from 'react'
import { BiSolidBadgeCheck } from 'react-icons/bi'
import { MdOutlineKeyboardArrowRight, MdSell } from 'react-icons/md'
import { MdOutlineModeEdit } from "react-icons/md";
import { MdDeleteSweep } from "react-icons/md";
interface Props {
    data: Record<string, any>
}

const ListingCard: React.FC<Props> = ({ data = {} }) => {
    return (
        <div className='flex flex-col md:flex-row gap-0 
     border-neutral-300 border-2 p-2 w-[90%]  justify-between rounded-lg h-[rem]  tex '>
           
          <div className='md:basis-1/3 p-5'>
          <Image src={data.coverimg} alt='car image' width={100} className='h-full w-full rounded-md shadow-md  border border-gray-200 ' quality={100} height={100} />
          </div>

            <div className=' basis-full md:basis-2/3 '>
            <div className='flex justify-end items-center'>
                 <h1 className='flex justify-end items-center gap-1 border-[1px] px-2 font-light border-neutral-400 rounded-md'> {data.RentorSell==='Sell'?`${`Sell `}`:`Rent `} <MdSell  color={data.RentorSell?"blue":"gray"} size={15} /> </h1>
                 </div>
                <h1 className=' mt-3 flex items-center gap-5    font-bold text-base md:text-xl text-neutral-700 tracking-normal   w-full'>{data.brand.brandname} {data.Modal}<MdOutlineKeyboardArrowRight className='inline' color='gray' /> </h1>
                <h1 className=' mt-2  text-sm md:text-base  text-neutral-600 '>
                    <span className='text-neutral-400'>{data.fuel} </span>
                    | <span className='text-neutral-400'>{data.drivetrain.length?data.drivetrain:"Fwd"} </span>
                    | <span className='text-neutral-400'>{data.seating} Seaters </span>
                </h1>
                <h1 className='text-black font-semibold  text-base md:text-lg text-left mt-2 '>{data.RentorSell && data.RentorsSell === 'Rent' ? `Rs ${data.price} `: `Rs ${data.price} Hour per day `} <span className='text-neutral-400  text-sm '>Negotable</span> </h1>

                <div>
                    {data.des.slice(120) + "..."}
                </div>
                <div className=' mt-3 flex  justify-end items-center gap-2'>
                    <button className='bg-transparent  font-bold border-blue-200  flex justify-center  items-center gap-2  hover:scale-90 hover:bg-blue-300 hover:text-black  px-3  border-2  py-1 rounded-xl  cursor-pointer' ><MdOutlineModeEdit />Edit</button>
                    <button className='bg-transparent  font-bold border-blue-200  flex justify-center  items-center gap-2  hover:scale-90 hover:bg-blue-300 hover:text-black  px-3  border-2  py-1 rounded-xl  cursor-pointer' ><MdDeleteSweep />Delete</button>
                </div>


            </div>
        </div>
    )
}

export default ListingCard