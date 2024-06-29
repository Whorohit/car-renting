import { getNavbarItems, getuserinfodata } from '@/data/data';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FaRegEdit, FaArrowLeft } from 'react-icons/fa';
import { CiLogout } from 'react-icons/ci';
import { useCurrentUser } from '../../hooks/usecurrent';
import { toggleEditPassowordModal, toggleLoginModal, toggleuserinfo } from '@/store';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

interface Props {
  isOpen?: boolean;
}

const Userinfodata: React.FC<Props> = ({ isOpen }) => {
  const router = useRouter();
  const userinfo = getuserinfodata();
  const navbaritem = getNavbarItems();
  const { data: currentuser } = useCurrentUser();
  const isuserinfonavbar = useSelector((state: any) => state.userinfonavbar.isOpen);
  const dispatch = useDispatch();

  const getuserinfomodal = useCallback(() => {
    dispatch(toggleuserinfo());
  }, [dispatch]);

  const handleclose = useCallback(() => {
    dispatch(toggleEditPassowordModal());
  }, [dispatch]);

  const logout = useCallback(() => {
    signOut();
  }, []);

  const handlecloselogin = useCallback(() => {
    dispatch(toggleLoginModal());
  }, [dispatch]);

  if (isuserinfonavbar)
    return (
      <aside className='fixed inset-0 z-40 transition-transform transform md:hidden bg-black bg-opacity-50'>
        <div className='h-full px-3 py-4 overflow-y-auto bg-neutral-100 w-64 min-h-screen flex flex-col gap-4 tracking-wide text-neutral-600 font-bold text-lg'>
          <div className='flex justify-end items-center'>
            <FaArrowLeft onClick={getuserinfomodal} className='cursor-pointer' />
          </div>
          <h1 className='text-center font-normal capitalize mt-4'>
            {currentuser ? (
              currentuser.name
            ) : (
              <span onClick={handlecloselogin} className='cursor-pointer'>
                Login/Register
              </span>
            )}
          </h1>
          <h1 className='text-blue-500 font-extralight hover:underline flex justify-center gap-2 items-center cursor-pointer'>
            Edit Profile <FaRegEdit />
          </h1>
          <div className='h-2 border-b border-gray-300 w-[96%] mx-auto' />
          <div className='md:hidden'>
            {navbaritem?.map((data: any) => {
              const IconComponent = data.icons;
              return (
                <Link href={data.href} key={data.label} className='text-base py-2 tracking-wide font-normal flex justify-start gap-3'>
                  <IconComponent size={20} />
                  {data.label}
                </Link>
              );
            })}
          </div>
          {currentuser &&
            userinfo?.map((item) => {
              const IconComponent = item.icons;
              return (
                <h1
                  key={item.label}
                  className='text-base py-2 tracking-wide font-normal flex justify-start gap-3 cursor-pointer'
                  onClick={() => {
                    router.push(`/user/${item.href}`);
                  }}
                >
                  <IconComponent size={20} />
                  {item.label}
                </h1>
              );
            })}
          {currentuser && (
            <>
              <h1 className='text-base py-2 tracking-wide font-normal flex items-center justify-start gap-3 hover:underline cursor-pointer' onClick={handleclose}>
                <RiLockPasswordLine size={20} /> Change Password
              </h1>
              <h1 className='text-base py-2 tracking-wide font-normal flex items-center justify-start gap-3 cursor-pointer' onClick={logout}>
                <CiLogout size={20} /> LogOut
              </h1>
            </>
          )}
        </div>
      </aside>
    );
  return null;
};

export default Userinfodata;
