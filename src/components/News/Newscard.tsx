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
    news: Record<string, any>
}

const Newscard: React.FC<Props> = ({ news }) => {

    
    return (
        <div className='flex   flex-col  md:flex-row  gap-0 
    border-neutral-300 border-2 p-2 w-[70%]  justify-between rounded-lg  md:min-h-[27rem] md:max-h-[27rem]  tex ' >



            <Image src={`https://www.nytimes.com/${news.multimedia[0].url}`} alt='car image' width={400} className='  md:basis-1/3 p-4 rounded-md' quality={100} height={300} />
            <div className=' basis-2/3 '>
                <h1 className='font-semibold w-[80%] ml-10 text-neutral-700 text-lg  tracking-wider '>
                    {news.headline.main}
                </h1>
                <h1 className='text-base text-blue-400 font-normal w-[80%]  ml-10' >
                    {news.lead_paragraph
                    }
                </h1>
                <div className='flex justify-start gap-x-4 items-center flex-wrap w-[80%]  ml-10'>
                    {
                        news?.keywords?.map((item: any) => {
                            return (
                                <h1 className='font-extralight text-neutral-400 text-sm '>#{item.value}</h1>
                            )
                        })

                    }

                </div>
                <h1 className='ml-10 w-[80%] font-bold text-base text-black mb-5'> From -{news.source}</h1>
                <Link className='ml-10 bg-transparent font-bold  border-blue-200 hover:scale-90 hover:bg-blue-300 hover:text-black cursor-pointer  border-2 px-3  py-1 rounded-xl  ' href={news.web_url
                }>Read More</Link>

            </div>
        </div>
    )
}

export default Newscard