import Image from 'next/image'
import React from 'react'
import { BiSolidBadgeCheck } from 'react-icons/bi'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Link from 'next/link'

interface Props {
    data: Record<string, any>
}

const Newscard: React.FC<Props> = ({ data }) => {

    
    return (
        <div className='flex  flex-col md:flex-row gap-0 
     border-neutral-300 border-2 p-2 w-[90%]  justify-between rounded-lg   tex' >



            {/* <Image src={`https://www.nytimes.com/${data.multimedia[0]?.url}`} alt='car image' width={400} className='   lg:basis-1/3 p-4 rounded- lg' quality={100} height={300} /> */}
            {<Image src={`https://www.nytimes.com/${data.multimedia[0]?.url}`} alt='car image' width={100} className='md:block hidden   basis-full md:basis-1/3 p-4  h-[20rem]' quality={100} height={100} />}
            <div className='md:hidden text-center flex justify-center items-cente h-[20rem]  basis-full md:basis-1/3 p-4 '>
                {<Image src={`https://www.nytimes.com/${data.multimedia[0]?.url}`} alt='car image' width={700} className='h-[20rem]' quality={100} height={100} />}
            </div>
            <div className=' basis-2/3 '>
                <h1 className='font-semibold w-[80%] text-center ml-10 text-neutral-700 text-2xl  lg:text-lg  tracking-wider '>
                    {data.headline.main}
                </h1>
                <h1 className=' text-base text-blue-400 font-normal w-[80%]  ml-10' >
                    {data.lead_paragraph
                    }
                </h1>
                <div className='flex justify-start gap-x-4 items-center flex-wrap w-[80%]  ml-10'>
                    {
                        data?.keywords?.map((item: any) => {
                            return (
                                <h1 className='font-extralight text-neutral-400  text-xs  lg:text-sm '>#{item.value}</h1>
                            )
                        })

                    }

                </div>
                <h1 className='ml-10 w-[80%] font-light   text-sm lg:text-base text-black mb-5'> From -{data.source}</h1>
                <Link className='ml-10 bg-transparent font-bold  border-blue-200 hover:scale-90 hover:bg-blue-300 hover:text-black cursor-pointer  border-2 px-3  py-1 rounded-xl  ' href={data.web_url
                }>Read More</Link>

            </div>
        </div>
    )
}

export default Newscard