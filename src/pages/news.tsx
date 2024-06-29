import Newscard from '@/components/News/Newscard'
import React, { useState } from 'react'
import { usegetnews } from '../../hooks/usegetnews'
import InfintSrcoll from '../components/InfintSrcoll'

const News: React.FC = () => {
  const { data: news=[], mutate, size, setSize } = usegetnews();
  const [hasMore, setHasMore] = useState(true);

  return (
    <div className='mt-36      relative  w-screen md:w-full  md:overflow-x-hidden '>
      <h1 className=' text-4xl  md:w-[90%] mx-auto px-5  md:text-2xl font-bold capitalize tracking-wider text-neutral-800'>We Provide the most Authentic and Valid News</h1>
      <h1 className=' md:w-[90%]  mx-auto text-2xl px-5 md:text-base font-normal capitalize text-blue-500'>
        Experience the latest in automotive news with our comprehensive coverage of car launches, reviews, and industry updates. Stay informed with timely articles on cutting-edge technology, trends, and innovations. From electric vehicles to luxury cars, our platform delivers concise and insightful updates to keep you ahead in the world of automobiles.
      </h1>
      <div className='md:hidden block'>
      <InfintSrcoll
        data={news}
         width='100%'
        dataLength={news?.length}
        next={() => setSize(size + 1)}
        hasmore={news?.length<=100}
        className=' w-1/5 flex flex-col justify-start items-center gap-5 '
      >
        {news?.map((item: Record<string, any>) => (
          <Newscard data={item} key={item.id} />
        ))}
      </InfintSrcoll>
      </div>
      <div className='hidden md:block'>
      <InfintSrcoll
        data={news}
        width='100%'
        dataLength={news?.length}
        next={() => setSize(size + 1)}
        hasmore={news?.length<=100}
        className=' w-1/5 flex flex-col justify-start items-center gap-5 '
      >
        {news?.map((item: Record<string, any>) => (
          <Newscard data={item} key={item.id} />
        ))}
      </InfintSrcoll>
      </div>
    </div>
  )
}

export default News
