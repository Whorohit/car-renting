import React, { useCallback, useState } from 'react'
import Input from '../Formfield/Input'
import Modal from './Modal'
import { signIn,signOut } from 'next-auth/react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleLoginModal, toggleSignUpModal } from '@/store'
import toast, { Toaster } from 'react-hot-toast';


interface Props { }

const Login: React.FC<Props> = ({ }) => {
  const [password, setPassword] = useState('')
  const dispatch = useDispatch();
  const [email, setEmail] = useState('')
  const isSignModal = useSelector((state: any) => state.sign.isOpen);
  const isLoginModal = useSelector((state: any) => state.login.isOpen);
  const onsubmit = useCallback(
    async () => {
      try {
        

        await signIn('credentials', { email, password })
      } catch (error) {
        console.log(error);

      }
      finally {
        dispatch(toggleLoginModal())
      }

    },
    [email, password],
  )
  const handleclose = useCallback(
    () => {
      console.log('heeo');

      dispatch(toggleLoginModal())
    },
    [dispatch, toggleLoginModal],
  )
  const handleclosesign = useCallback(
    () => {
      console.log('heeo');

      dispatch(toggleSignUpModal())
    },
    [dispatch, toggleSignUpModal],
  )


  const bodycontent = (
    <div className='flex flex-col gap-0'>
      <Input placeholder='ram122@gmail.com'
        label='Email'
        classname='w-full  text-2xl md:text-base   h-[3.5rem] md:h-12    px-2'
        classnamelabel='w-full font-normal     text-2xl md:text-sm px-2'
        onchange={(e) => { setEmail(e.target.value) }}
        value={email}
      />
      <Input placeholder='123445'
        label='Password' classname='w-full  text-2xl md:text-base   h-[3.5rem] md:h-12    px-2'
        classnamelabel='w-full font-normal     text-2xl md:text-sm px-2'
        onchange={(e) => { setPassword(e.target.value) }}
        value={password}
        type='password'
      />
    </div>
  )
  const footerContent = (
    <div className='text-neutral-400 text-center md:text-base text-xl  mt-4 mb-4 '>
      <p className='text-center'>Don't have  an account? <span className=' cursor-pointer hover:underline text-blue-600 ' onClick={() => {
        handleclose();
        handleclosesign();
      }}>Create an Account</span></p>
    </div>
  )
  return (
    <div className=''>
      <>
      <Toaster />
        <Modal

          title='Login'
          actionlabel='Sign In'
          onClose={handleclose}
          isOpen={isLoginModal}
          onSubmit={onsubmit}
          body={bodycontent}
          footer={footerContent} /></>
    </div>
  )
}

export default Login