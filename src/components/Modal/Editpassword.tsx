import React, { useCallback, useState } from 'react'
import Input from '../Formfield/Input'
import Modal from './Modal'
import { signIn } from 'next-auth/react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleEditPassowordModal, toggleLoginModal, toggleSignUpModal } from '@/store'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'


interface Props { }

const Editpassword: React.FC<Props> = ({ }) => {
    const [oldpassword, setOldPassword] = useState('')
    const [newpassword, setNewPassword] = useState('')
    const dispatch = useDispatch();
    const isEditModal = useSelector((state: any) => state.Editpassword.isOpen);
    const isLoginModal = useSelector((state: any) => state.login.isOpen);
    const onsubmit = useCallback(
        async () => {
            try {
                const updatepassword = await axios.patch('/api/Makeuser/Editpassword', {
                    oldpassword, newpassword
                })
                if (updatepassword.data.success) {
                    toast.success(updatepassword.data.message, {
                        duration: 4000,
                        position: 'top-center'
                    });
                    dispatch(toggleEditPassowordModal())
                }
                else {
                    toast.error(updatepassword.data.message, {
                        duration: 4000,
                        position: 'top-center'
                    });
                }

            } catch (error) {
                console.log(error);
                toast.error("SomeThing Went Wrong", {
                    duration: 4000,
                    position: 'top-center'
                });
            }


        },
        [oldpassword, newpassword],
    )
    const handleclose = useCallback(
        () => {
            console.log('heeo');

            dispatch(toggleEditPassowordModal())
        },
        [dispatch, toggleEditPassowordModal],
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
            <Input placeholder='1234567890'
                label='Old Password'
                name='oldpassword'
                classname='w-full px-2'
                classnamelabel='w-full px-2'
                onchange={(e) => { setOldPassword(e.target.value) }}
                value={oldpassword}
                type='password'
            />
            <Input placeholder='123445'
                label='New Password'
                name='newpassword'
                classname='w-full px-2'
                classnamelabel='w-full px-2'
                onchange={(e) => { setNewPassword(e.target.value) }}
                value={newpassword}
                type='password'
            />
        </div>
    )

    return (
        <div className=''>
            <>
                <Toaster />
                <Modal
                    title='Edit Password'
                    actionlabel='Edit'
                    onClose={handleclose}
                    isOpen={isEditModal}
                    onSubmit={onsubmit}
                    body={bodycontent}
                /></>
        </div>
    )
}

export default Editpassword