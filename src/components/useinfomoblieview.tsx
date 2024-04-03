import { getuserinfodata } from '@/data/data'
import { isPageStatic } from 'next/dist/build/utils';
import React, { useCallback } from 'react'
import { useSelector } from 'react-redux';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FaRegEdit, FaCar, FaArrowLeft } from 'react-icons/fa'
import { MdCarRental } from 'react-icons/md'
import { useCurrentUser } from '../../hooks/usecurrent';
import { CiLogout } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import { toggleuserinfo } from '@/store';
import { useDispatch } from 'react-redux';
interface Props {
    isOpen?: boolean
}
const Userinfodata: React.FC<Props> = ({ isOpen }) => {

    const userinfo = getuserinfodata();
    const { data: currentuser } = useCurrentUser()
    const isuserinfonavbar = useSelector((state: any) => state.userinfonavbar.isOpen);
    const dispatch = useDispatch();
    const getuserinfomodal = useCallback(
        () => {
            console.log('heeo');
            dispatch(toggleuserinfo());
        },
        [dispatch, toggleuserinfo],
    )


    if (isuserinfonavbar)
        return (

            <aside className='fixed top-0  left-0 z-50  h-[1000rem] transition-transform  md:hidden w-[1000rem] bg-black bg-opacity-50  '>
                <div className=' h-full px-3 py-4 overflow-y-auto bg-neutral-100  w-64  min-h-screen    flex gap-4  tracking-wide      text-neutral-600 font-bold text-lg flex-col  '>
                    <div className='flex justify-end items-center'> <FaArrowLeft onClick={getuserinfomodal} className='text-right ' /></div>
                    <h1 className='text-center font-normal capitalize  mt-4 '>{currentuser.name}</h1>
                    <h1 className='text-blue-500 font font-extralight  hover:underline flex  justify-center gap-2 items-center '>Edit Profile <FaRegEdit /></h1>
                    <div className='h-2 border-b  border-b-gray-300 w-[96%] mx-auto' />
                    {userinfo?.map((item) => {
                        const IconComponent = item.icons; // 
                        return (
                            <h1 className='text-base py-2 tracking-wide font-normal flex justify-start gap-3 '>
                                <IconComponent size={20} />
                                {item.label}</h1>
                        )
                    })}
                    <h1 className='text-base py-2 tracking-wide font-normal flex items-center justify-start gap-3 '><CiLogout size={20} /> LogOut
                    </h1>
                </div>
            </aside>

        )
    return null;
}

export default Userinfodata