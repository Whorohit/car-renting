import CategoryFilter from '@/components/CategoryFilter'
import Similarproduct from '@/components/Similarprduct'
import { toggleFilterModal } from '@/store'
import React, { useCallback, useEffect } from 'react'
import { RxCross1 } from 'react-icons/rx'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { brandname } from '../../hooks/brandname'
import data from '../../public/category.json'
import { useFilterCar } from '../../hooks/useFilter'
import InfinteSrcoll from '@/components/InfintSrcoll'
import Carcard from '@/components/Carcard/Carcard'
interface Props {

}

const Filtercars: React.FC<Props> = ({ }) => {
  const { data: BBrand } = brandname()
  const dispatch = useDispatch()
  const { Brand,
    Category,
    Fuel,
    Budget, Transmission,
    sort } = useSelector((state: any) => state.Filter)


  const toggleboard = useCallback(
    () => {
      dispatch(toggleFilterModal())
     
    },
    [dispatch, toggleFilterModal],
  )
 
  const {data:cars=[],totalcount,size,setSize,mutate}=useFilterCar({ Brand:Brand, Body:Category, pricerange:Budget, Transmission:Transmission, Fuel:Fuel, order:sort});
  useEffect(() => {
mutate()
    setSize(1); // Trigger refetch when filter values change
  }, [Brand, Category, Fuel, Budget, Transmission, sort, setSize]);
  
  return (

    <div className='my-12  p-8 lg:p-16'>
      <h1 className=' w-full lg:w-[80%] mx-auto text-base   lg:text-2xl font-bold capitalize tracking-wider text-neutral-800'>Filter By</h1>
      <CategoryFilter />

      <div className=' w-full lg:w-[60%] flex-wrap flex flex-row   justify-normal  lg:justify-start  gap-1  lg:gap-2  lg:ml-[9.5rem] text-lg  text-neutral-800 my-4'>
        {Brand?.map((item: string) => {
          return (<button className='bg-neutral-200 px-2 py-1   text-sm font-light  lg:text-base rounded-md lg  flex gap-2 justify-center items-center hover:scale-90 ' onClick={toggleboard}>{item}<RxCross1 className=' ' /></button>)
        })}
        {Category?.map((item: string) => {
          return (<button className='bg-neutral-200 px-2 py-1   text-sm font-light  lg:text-base rounded-md lg  flex gap-2 justify-center items-center  hover:scale-90 ' onClick={toggleboard} >{item} <RxCross1 className=' ' /></button>)
        })}
        {Fuel?.map((item: string) => {
          return (<button className='bg-neutral-200 px-2 py-1   text-sm font-light  lg:text-base rounded-md lg  flex gap-2 justify-center items-center  hover:scale-90 ' onClick={toggleboard} >{item}<RxCross1 className=' ' /></button>)
        })}
        {Transmission?.map((item: string) => {
          return (<button className='bg-neutral-200 px-2 py-1   text-sm font-light  lg:text-base rounded-md lg  flex gap-2 justify-center items-center  hover:scale-90 ' onClick={toggleboard} >{item}<RxCross1 className=' ' /></button>)
        })}

      </div>
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
          <Similarproduct title={' Brand'} data={BBrand} lengthstart={5} lengthend={11} type='Brand' />
          <Similarproduct title={'Category'} data={data} type='Body' />
        </div>
      </div>
      

    </div>
  )
}

export default Filtercars