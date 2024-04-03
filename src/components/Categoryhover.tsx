import Link from 'next/link';
import React from 'react'

interface Props {
    data?: Record<string, any>[];
    data2?: Record<string, any>[];
    title?: string
}

const Categoryhover: React.FC<Props> = ({ data = [], title,data2=[] }) => {
    return (
        <div className='absolute  bg-gray-5 min-w-[15rem] max-w-[60rem] transition-all duration-400 py-2  bg-white bg-opacity-80 px-2  mx-auto  min-h-5 bg'>
            <div className='flex flex-row gap-0 flex-wrap max-w-[45rem] '>

                {
                    data.map((item: Record<string, any>) => {
                        return (
                            <Link href={`/Body/${item.brandname}`} className=' transition-all duration-200 pl-2  font-light pr-20 rounded-sm pt-4 pb-3 text-sm hover:bg-gray-400 text-left '>
                                {item.brandname}
                            </Link>
                        )
                    })
                }
                {
                    data2.map((item: Record<string, any>) => {
                        return (
                            <Link href={`/Transmission/${item.brandname}`} className=' transition-all duration-200 pl-2  font-light pr-20 rounded-sm pt-4 pb-3 text-sm hover:bg-gray-400 text-left '>
                                {item.brandname}
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Categoryhover