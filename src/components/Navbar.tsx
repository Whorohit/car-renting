import React, { useCallback, useState } from 'react'
import Link from "next/link"
import { useParams, usePathname } from "next/navigation";
import { getNavbarItems } from '../data/data';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { toggleLoginModal, toggleSignUpModal, toggleuserinfo } from '../store/index';
import { FaRegUserCircle } from "react-icons/fa";
import { useCurrentUser } from '../../hooks/usecurrent';
import Userinfodata from './userinfodata';
import Categoryhover from './Categoryhover';
import trans from '../../public/Transmission.json';
import item from '../../public/category.json'
interface NavbarProps {
  islogin?: boolean,

}



const Navbar: React.FC<NavbarProps> = ({ islogin }) => {
  const dispatch = useDispatch();

  const isLoginModal = useSelector((state: any) => state.login.isOpen);
  const isSignUpModal = useSelector((state: any) => state.sign.isOpen);
  const isuserinfonavbar = useSelector((state: any) => state.userinfonavbar.isOpen);
  const [categoryhover, setcategoryhover] = useState(false)

  const { data: currentuser } = useCurrentUser();

  const handleclose = useCallback(
    () => {
      console.log('heeo');

      dispatch(toggleLoginModal())
    },
    [dispatch, toggleLoginModal],
  )
  const handleclosesignup = useCallback(
    () => {
      console.log('heeo');

      dispatch(toggleSignUpModal())
    },
    [dispatch, toggleSignUpModal],
  )
  const pathname = usePathname();
  const navbaritem = getNavbarItems()
  const getuserinfomodal = useCallback(
    () => {
      console.log('heeo');
      dispatch(toggleuserinfo());
    },
    [dispatch, toggleuserinfo],
  )
  const togglecategoryhover = useCallback(
    () => {
      setcategoryhover(!categoryhover)
    },
    [categoryhover],
  )


  return (
    <div className='  rounded-lg bg-neutral-100 opacity-80    top-0  fixed  z-10 flex gap-4  justify-between py-2   h-12 items-center   px-4 w-full   mx-auto      '>
      <Link className=' text-sm md:text-xl font-bold tracking-normal md:tracking-wider   ' href={'/'}>C A R E N T </Link>
      <div className='md:flex gap-10 hidden tracking-wide  text-neutral-800 font-bold text-lg transition-all duration-300  '>
        {
          navbaritem?.map((data) => {
            return (
              <Link href={data.href}
                onMouseEnter={() => {
                  if (data.label === 'Category') {
                    togglecategoryhover()
                  }
                }}
                onMouseLeave={
                  () => {
                    if (data.label === 'Category') {
                      togglecategoryhover()
                    }
                  }
                }>
                {data.label}
                {data.label === 'Category' && categoryhover && <Categoryhover title='Body' data={item} data2={trans} />}
              </Link>
            )
          })
        }

      </div>

      <div className='flex relative gap-8  min-w-[4rem] font-mono font-semibold  text-sm md:text-lg text-blue-800  items-center justify-start '>
        {!currentuser ? (<><button className='bg-transparent font-bold  border-blue-200 hover:scale-90 hover:bg-blue-300 hover:text-black cursor-pointer  border-2 px-3  py-1 rounded-xl ' onClick={handleclosesignup}>Register</button>
          <button className='bg-transparent  font-bold border-blue-200  hover:scale-90 hover:bg-blue-300 hover:text-black  px-3  border-2  py-1 rounded-xl  cursor-pointer' onClick={handleclose}>Login</button></>)
          : (<FaRegUserCircle size={25} className='text-neutral-600   font-thin' onClick={getuserinfomodal} />)}
      </div>
      <Userinfodata isOpen={isuserinfonavbar} />
    </div>
  )
}




export default Navbar