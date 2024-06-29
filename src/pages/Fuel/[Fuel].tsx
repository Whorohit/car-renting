import Carcard from '@/components/Carcard/Carcard';
import CategoryFilter from '@/components/CategoryFilter';
import Similarproduct from '@/components/Similarprduct';
import { useRouter } from 'next/router';
import React from 'react';
import { brandname } from '../../../hooks/brandname';
import data from '../../../public/category.json';

import { usefetchcars } from '../../../hooks/usefetchcar';
import InfinteSrcoll from '@/components/InfintSrcoll';

type Props = {
  initialData: any; // Define the type of initialData here
};

function Fuel({ }: Props) {
  const router = useRouter();
  const { Fuel } = router.query;
  const { data: cars = [], setSize, size, totalcount } = usefetchcars('fuel', `${Fuel}`);
  const { data: Brand } = brandname();
  console.log(cars);

  return (
    <div className='mt-36      relative '>
      <h1 className='text-4xl md:w-[90%] mx-auto px-5 md:text-2xl font-bold capitalize tracking-wider text-neutral-800'>
        {Fuel}-Cars
      </h1>
      <h1 className='w-full md:w-[90%] mx-auto text-2xl px-5 md:text-base font-normal capitalize text-blue-500'>
        Are you planning Rent or buy <span className='font-bold'>{Fuel}</span> car? Well, we know that Brand, body style, Fuel, Transmission, etc. is one of the most crucial things while buying a car and with so many options available out there, it gets really difficult to find a good car which suits your pocket. Hence, we have put together a complete list of best SUV cars.
      </h1>
      <CategoryFilter />
      <div className='flex flex-col md:flex-row flex-wrap md:justify-normal w-full md:w-[80%] mx-auto mt-5'>
        <div className='w-full justify-start pt-12 flex flex-col items-start md:basis-[70%] gap-4'>
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
        <div className='hidden xl:flex flex-col gap-4 md:basis-[25%]'>
          <Similarproduct title={' Brand'} data={Brand} lengthstart={5} lengthend={11} type='Brand' />
          <Similarproduct title={'Category'} data={data} type='Body' />
        </div>
      </div>
    </div>
  );
}

export default Fuel;
