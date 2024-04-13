import React, { useCallback } from 'react'
import { IoCheckmarkOutline } from "react-icons/io5";
import { LuFuel } from "react-icons/lu";
import { FaCar } from "react-icons/fa";
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { toggleFilterModal } from '@/store';

interface Props {
 
}

const CategoryFilter:React.FC<Props> = ({}) => {
    const dispatch=useDispatch()
     const items=[{ icons:"Oil",title:"Fuel Type"},{icons:"Brand",title:'Brand'},{icons:"Transmission",title:'Transmission Type'},{ icons:"sort",title:'Popularity'}]
      const toggleboard=useCallback(
        () => {
           dispatch(toggleFilterModal())
        },
        [dispatch,toggleFilterModal],
      )
      
  return (
    <>
    <div className='md:flex hidden flex-row w-[80%] mx-auto justify-start  items-center    gap-4 mt-6   '>
       {items.map((item)=>(
          <button  onClick={toggleboard} className=' md:text-base md:border-2 md:p-2 hover:scale-90 transition-all duration-100  md:border-neutral-400 md:rounded-md  text-neutral-700 ' key={item.title}>
          
           {item.title}</button>
       ))}
    </div>
    <div className='md:hidden flex  bg-blue-500  fixed left-0  flex-col   justify-start  items-start pl-2 pr-3 rounded-tr-md rounded-br-md  mt-6   '> 
       {items.map((item)=>(
          <div className='py-4 hover:scale-95 '>
             <Image  alt='filter' width={20} height={20} src={`/${item.icons}.png`} key={item.title}/>
          </div>
       ))}
    </div>
     
    </>
  )
}

export default CategoryFilter