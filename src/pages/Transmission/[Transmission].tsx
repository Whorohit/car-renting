import CategoryFilter from '@/components/CategoryFilter';
import { useRouter } from 'next/router';
import React from 'react'
import { brandname } from '../../../hooks/brandname';
import { usefetchcars } from '../../../hooks/usefetchcar';
import Carcard from '@/components/Carcard/Carcard';
import Similarproduct from '@/components/Similarprduct';
import data from '../../../public/category.json'
import { useSelector } from 'react-redux';
import InfinteSrcoll from '@/components/InfintSrcoll';
type Props = {}

function Transmission({ }: Props) {
  const router = useRouter();
  const { Transmission } = router.query;
  const isFilterOpen = useSelector((state: any) => state.Filter.isOpen);
  const { data: cars = [], size, setSize, totalcount } = usefetchcars('transmission', `${Transmission}`);
  const { data: Brand } = brandname()
  console.log(cars);

  return (
    <div className='mt-4   md:p-10 relative'>
      <h1 className='w-[90%] mx-auto text-2xl font-bold capitalize tracking-wider text-neutral-800'>{Transmission}-Cars</h1>
      <h1 className='w-[90%]  mx-auto text-base font-normal capitalize  text-blue-500'>
        Are you planning Rent or buy a <span className='font-bold'>{Transmission}</span> car? Well, we know that  Brand ,bodystyle, Fuel,Transmission etc  is one of the most crucial things while buying a car and with so many options available out there, it gets really difficult to find a good car which suits your pocket. Hence, we have put together a complete list of best SUV cars.
      </h1>
      <CategoryFilter />
      <div className='flex flex-row flex-wrap      md:justify-normal w-full md:w-[80%] mx-auto mt-5 '>
        <div className='w-full  justify-start pt-12  flex flex-col items-start md:basis-[70%] gap-4'>
          {/* {
            cars?.map((car: Record<string, any>) => {
              return (
                <Carcard data={car} />
              )
            })
          } */}
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
        <div className='   hidden md:flex flex-col gap-4 md:basis-[25%]'>
          <Similarproduct title={' Brand'} data={Brand} lengthstart={5} lengthend={11} type='Brand' />
          <Similarproduct title={'Category'} data={data} type='Body' />
        </div>
      </div>
    </div>
  )
}

export default Transmission