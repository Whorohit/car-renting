import React from 'react'
import { RxCross2 } from 'react-icons/rx'
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Category from '../../public/category.json'
import Image from 'next/image';
type Props = {}

const FilterBoard: React.FC<Props> = ({ }
) => {
    return (
        <div className='min-h-screen w-screen bg-black bg-opacity-60  fixed z-[60] flex justify-center items-center '>
            <div className='w-[40%]  h-[45%] min-h-[30rem] min-w-[20rem]   rounded-md  bg-blue-50 '>

                <h1 className='flex  justify-between items-center  mx-auto shadow-lg  border-b font-sans border-b-gray-200  px-3  py-5 font-bold text-neutral-700 text-xl tracking-wide '>Filter <RxCross2 size={25} className=' bg-gray-50 rounded-full  cursor-pointer h-8   ' /> </h1>
                <div className='h-[20rem]  flex flex-col  justify-start items-start overflow-y-scroll px-8  my-4 no-scrollbar      scroll   '>
                    <div className='rounded-md py-4 text-xl text-neutral-700 bg-blue-100 w-full pl-4  '>
                        <h1 className=' flex justify-between items-center px-3 '> Body Type  <MdOutlineKeyboardArrowDown size={25} className='rotate-180' /></h1>
                        <div className='flex flex-wrap flex-row gap-4 px-2 items-center justify-start my-5 '>
                            {
                                Category?.map((item) => {
                                    return (
                                        <div className='h-[5rem] w-[8rem]  opacity-70 flex justify-center border-[1px] rounded-md border-gray-500 flex-col  items-center  text-neutral-600  p-2'>
                                            <Image src={item.brandimage} className='flex justify-center ' width={50} height={50} alt={item.brandname} />
                                            <h1 className=' text-sm '>{item.brandname}</h1>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='rounded-md py-4 text-xl text-neutral-700 bg-blue-100 w-full pl-4  '>
                        <h1 className=' flex justify-between items-center px-3 '> Brand  <MdOutlineKeyboardArrowDown size={25} className='rotate-180' /></h1>
                        <div className='flex flex-wrap flex-row gap-4 px-2 items-center justify-start my-5 '>
                            {
                                Category?.map((item) => {
                                    return (
                                        <div className='h-[5rem] w-[8rem]  opacity-70 flex justify-center border-[1px] rounded-md border-gray-500 flex-col  items-center  text-neutral-600  p-2'>
                                            <Image src={item.brandimage} className='flex justify-center ' width={50} height={50} alt={item.brandname} />
                                            <h1 className=' text-sm '>{item.brandname}</h1>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterBoard