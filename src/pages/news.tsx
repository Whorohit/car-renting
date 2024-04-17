import Newscard from '@/components/News/Newscard'
import React, { useState } from 'react'
import { usegetnews } from '../../hooks/usegetnews'
import InfintSrcoll from '../components/InfintSrcoll'

const News: React.FC = () => {
  const { data: news=[], mutate, size, setSize } = usegetnews();
  const [hasMore, setHasMore] = useState(true);

  return (
    <div className='mt-12 p-10'>
      <h1 className='w-[80%] ml-10 text-start text-base md:text-2xl font-bold tracking-wide'>We Provide the most Authentic and Valid News</h1>
      <h1 className='w-[80%] ml-10 text-blue-400 text-base'>
        Experience the latest in automotive news with our comprehensive coverage of car launches, reviews, and industry updates. Stay informed with timely articles on cutting-edge technology, trends, and innovations. From electric vehicles to luxury cars, our platform delivers concise and insightful updates to keep you ahead in the world of automobiles.
      </h1>
      <InfintSrcoll
        data={news}
        dataLength={news?.length}
        next={() => setSize(size + 1)}
        hasmore={news?.length<=100}
      >
        {news?.map((item: Record<string, any>) => (
          <Newscard data={item} key={item.id} />
        ))}
      </InfintSrcoll>
    </div>
  )
}

export default News
