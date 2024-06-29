import CategoryFilter from '@/components/CategoryFilter';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { usefetchcars } from '../../../hooks/usefetchcar';
import Carcard from '@/components/Carcard/Carcard';
import Similarproduct from '@/components/Similarprduct';
import { brandname } from '../../../hooks/brandname';
import { useInView } from "react-intersection-observer";
import data from '../../../public/category.json'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import fetcher from '../../../libs/fetcher';
import Spinner from '@/components/Spinner';
import InfinteSrcoll from '@/components/InfintSrcoll';
type Props = {}

const Body = (props: Props) => {
  const [page, setPage] = useState(1);
  const isFilterOpen = useSelector((state: any) => state.Filter.isOpen);
  const router = useRouter();
  const { Body } = router.query;
  const { data: cars = [], mutate, error, size, setSize, totalcount } = usefetchcars('Body', `${Body}`);
  const { ref, inView } = useInView();
  const { data: Brand } = brandname()
  const dispatch = useDispatch()


  console.log(cars?.length < totalcount, "ffff");



  return (
    <div className='mt-36      relative    '>
      <h1 className='   text-4xl  md:w-[90%] mx-auto px-5  md:text-2xl font-bold capitalize tracking-wider text-neutral-800'>
        {Body}-Cars
      </h1>
      <h6 className='  md:w-[90%]  mx-auto text-2xl px-5 md:text-base font-normal capitalize text-blue-500'>
        Are you planning to rent or buy a <span className='font-bold'>{Body}</span> car? Well, we know that Brand, bodystyle, Fuel, Transmission, etc. are some of the most crucial things while buying a car. With so many options available, it gets really difficult to find a good car that suits your pocket. Hence, we have put together a complete list of the best SUV cars.
      </h6>

      <CategoryFilter />
      <div className='flex flex-row flex-wrap min-h-screen md:justify-normal w-full md:w-[80%] mx-auto mt-5'>
        <div className='w-full  justify-start pt-12  flex flex-col items-start md:basis-[70%] gap-4'>
          {/* {
             cars?.map((car: Record<string, any>) => {
              return (
                <Carcard data={car} />
              )
             })
           } */}
         <div className='md:block hidden'>
         <InfinteSrcoll
            
            data={cars}
            dataLength={cars?.length}
            next={() => setSize(size + 1)}
            hasmore={cars?.length + 1 < totalcount}
          // className='w-[100%] flex flex-col justify-start items-center gap-5 '
          >
            {cars?.map((car: Record<string, any>) => (
              <Carcard data={car} />
            ))}
          </InfinteSrcoll>
          
         </div>
         <div className='md:hidden block'>
         <InfinteSrcoll
            
            data={cars}
            width='100%'
            dataLength={cars?.length}
            next={() => setSize(size + 1)}
            hasmore={cars?.length + 1 < totalcount}
          // className='w-[100%] flex flex-col justify-start items-center gap-5 '
          >
            {cars?.map((car: Record<string, any>) => (
              <Carcard data={car} />
            ))}
          </InfinteSrcoll>
          
         </div>



        </div>

        <div className='   hidden xl:flex flex-col gap-4 md:basis-[25%]'>
          <Similarproduct title={' Brand'} data={Brand} lengthstart={5} lengthend={11} type='Brand' />
          <Similarproduct title={'Category'} data={data} type='Body' />
        </div>
      </div>



    </div>
  )
}

export default Body