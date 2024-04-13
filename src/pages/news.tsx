import Newscard from '@/components/News/Newscard'
import React from 'react'
import { usegetnews } from '../../hooks/usegetnews'

type Props = {}

const News: React.FC<Props> = () => {
  const { data: news } = usegetnews(1);
  console.log(news);


  return (
    <div className='mt-12 p-10'>
      <h1 className='  w-[80%] ml-10 text-start  text-base md:text-2xl font-bold tracking-wide ' >We Provide the  most Authentic and Vaild News</h1>
      <h1 className='w-[80%] ml-10 text-blue-400 text-base' >
        Experience the latest in automotive news with our comprehensive coverage of car launches, reviews, and industry updates. Stay informed with timely articles on cutting-edge technology, trends, and innovations. From electric vehicles to luxury cars, our platform delivers concise and insightful updates to keep you ahead in the world of automobiles. </h1>
      <div className='flex flex-col justify-center items-center gap-5 my-5'>
        {
          news?.response?.docs.map((item: Record<string, any>) => {
            return (<Newscard news={item} />)
          })

        }
      </div>
      <div className='flex justify-center'>
      <div className='flex   justify-center items-center gap-2 '>
        <h1 className=' py-2 px-2 rounded-md  border border-neutral-200'>Pervious</h1>
        <h1 className=' py-2 px-2 rounded-md  border border-neutral-200' >1</h1>
        <h1 className=' py-2 px-2 rounded-md  border border-neutral-200'>2</h1>
        <h1 className=' py-2 px-2 rounded-md  border border-neutral-200'>3</h1>
        <h1 className=' py-2 px-2 rounded-md  border border-neutral-200'>Next</h1>
      </div>
      </div>
    </div>
  )
}

export default News