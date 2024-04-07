import React from 'react'
import { brandname } from '../../../hooks/brandname'
import data from '../../../public/category.json'
import Similarproduct from '@/components/Similarprduct'
import { usegetuserpurcahseorrent } from '../../../hooks/usegetuserpurchaseorrent'
import Carcard from '@/components/Carcard/Carcard'
import Lottie from 'lottie-react'
import nocar from '../../data/nocar.json'
import { useCurrentUser } from '../../../hooks/usecurrent'
import RentorPurchaseCard from '@/components/Carcard/RentorPurchaseCard'
type Props = {}

function Viewrented({ }: Props) {
  const { data: Brand } = brandname()

  const { data: Rent } = usegetuserpurcahseorrent(10, "Rent")
  const { data: currentUser } = useCurrentUser();
  
  return (
    <div className='mt-12 p-5'>
      <h1 className='w-[90%]  mx-auto  text-base md:text-2xl font-bold capitalize  text-black'>View Your All Rented Car</h1>
      <div className='flex flex-row flex-wrap      md:justify-normal w-full md:w-[80%] mx-auto mt-5 '>
        <div className='w-full  justify-start pt-12  flex flex-col items-start md:basis-[70%] gap-4'>
          {
            Rent?.map((car: Record<string, any>) => {
              return (
                <RentorPurchaseCard data={car.CarModal}  payment={car}/>
              )
            })


          }
          {
            (Rent?.length === 0 || Rent === null) ? (<div className='flex justify-center items-center'>
              <Lottie animationData={nocar} loop={true} />
            </div>) : null
          }
        </div>
        <div className='   hidden md:flex flex-col gap-4 md:basis-[25%]'>
          <Similarproduct title={' Brand'} data={Brand} lengthstart={5} lengthend={11} type='Brand' />
          <Similarproduct title={'Category'} data={data} type='Body' />
        </div>
      </div>
    </div>
  )
}

export default Viewrented