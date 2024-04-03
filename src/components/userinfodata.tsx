import { getuserinfodata } from '@/data/data'
import { isPageStatic } from 'next/dist/build/utils';
import React from 'react'
import { useSelector } from 'react-redux';
import { RiLockPasswordLine } from 'react-icons/ri';
import {FaRegEdit,FaCar} from 'react-icons/fa'
import {MdCarRental} from 'react-icons/md'
import { useCurrentUser } from '../../hooks/usecurrent';
import { CiLogout } from "react-icons/ci";
import { useRouter } from 'next/router';
interface Props  {
isOpen:boolean
}
const Userinfodata:React.FC<Props>=({isOpen})=> {

     const userinfo=getuserinfodata();
     const {data:currentuser}=useCurrentUser()
     const isuserinfonavbar = useSelector((state: any) => state.userinfonavbar.isOpen);
     const router=useRouter();
     
    
   if(isOpen && currentuser)
     return (
        
     <div className='hidden  bg-neutral-100   px-10 py-2  shadow-md md:flex gap-4  tracking-wide  absolute  top-16 right-0  text-neutral-600 font-bold text-lg flex-col  '>
       <h1 className='text-center font-normal capitalize  '>{currentuser.name}</h1>
        <h1 className='text-blue-500 font font-extralight  hover:underline flex  justify-center gap-2 items-center '>Edit Profile <FaRegEdit /></h1>
         <div className='h-2 border-b  border-b-gray-300 w-[96%] mx-auto'/>
         {userinfo?.map((item)=>{
            const IconComponent = item.icons; // 
            return(
                <h1 className='text-base py-2 tracking-wide font-normal flex justify-start gap-3  hover:underline ' onClick={()=>{
                  router.push(`/user/${item.href}`)
                }}>
                  <IconComponent size={20}/>   
                  {item.label}</h1>
            )
         })}
          <h1 className='text-base py-2 tracking-wide font-normal flex items-center justify-start gap-3 hover:underline '><CiLogout size={20}/> LogOut
           </h1>
    </div>
    
  )
  return null;
 }

export default Userinfodata