import React, { useCallback, useState } from 'react'
import Input from '../Formfield/Input'
import Modal from './Modal'
import axios from 'axios'
import { signIn } from 'next-auth/react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { toggleLoginModal, toggleSignUpModal } from '@/store'


interface Props { }

const SignUp: React.FC<Props> = ({ }) => {
  const [password, setpassword] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const dispatch = useDispatch();
  const isLoginModal = useSelector((state: any) => state.sign.isOpen);

  const [isloading, setisloading] = useState(false)
  const onSubmit = useCallback(
    async () => {
      try {
      setisloading(true)
      await axios.post('/api/Signup', {
        name,
        email,
        password
      })
      .then(()=>{
      setTimeout(() => {
        const result = signIn('credentials', {
          email,
          password,
        });
      }, 6000);

      }
        
      )
      

      console.log('ehhhh');

      } catch (error) {
        console.log(error);
      }
      finally {
        setisloading(false)
      }
    },
    [email, password, name],

  )
  const handleclosesignup = useCallback(
    () => {
      console.log('heeo');

      dispatch(toggleSignUpModal())
    },
    [dispatch, toggleSignUpModal],
  )
  const handleclose = useCallback(
    () => {
      console.log('heeo');

      dispatch(toggleLoginModal())
    },
    [dispatch, toggleLoginModal],
  )
  const bodycontent = (
    <div className='flex flex-col gap-0'>

      <Input placeholder='John Smith'
        classname='w-full px-2'
        label='Name'
        classnamelabel='w-full px-2'
        onchange={(e) => { setName(e.target.value) }}
        value={name}
      />
      <Input placeholder='ram12@gmail.com'
        classname='w-full px-2'
        label='Email'
        classnamelabel='w-full px-2'
        onchange={(e) => { setEmail(e.target.value) }}
        value={email}
      />
      <Input placeholder='123acc'
        label='Password'
        classname='w-full px-2'
        classnamelabel='w-full px-2'
        onchange={(e) => { setpassword(e.target.value) }}
        value={password}
      />
    </div>
  )
  const footerContent = (
    <div className='text-neutral-400 text-center mt-4 '>
      <div className='text-neutral-400 text-center mt-4 '>
        <p className=''>Already have  an account? <span className='cursor-pointer hover:underline  text-blue-600' onClick={() => {
          handleclosesignup();
          handleclose();


        }}>Login</span></p>
      </div>
    </div>
  )
  return (
    <div className=''>
      <>
        <Modal
          onClose={handleclosesignup}
          title='SignUp'
          actionlabel='Sign In'
          isOpen={isLoginModal}
          onSubmit={onSubmit}
          body={bodycontent}
          footer={footerContent} /></>
    </div>
  )
}

export default SignUp