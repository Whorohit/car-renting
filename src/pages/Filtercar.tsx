import CategoryFilter from '@/components/CategoryFilter'
import { toggleFilterModal } from '@/store'
import React, { useCallback } from 'react'
import { RxCross1 } from 'react-icons/rx'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

interface Props {

}

const Filtercars: React.FC<Props> = ({ }) => {
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

    </div>
  )
}

export default Filtercars