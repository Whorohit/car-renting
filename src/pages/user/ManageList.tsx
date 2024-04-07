
import React from 'react'
import { brandname } from '../../../hooks/brandname';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';



import data from '../../../public/category.json'
import ListingCard from '@/components/ListingCard';
import Similarproduct from '@/components/Similarprduct';
import { usemanageusercars } from '../../../hooks/usemanagehook';
import Lottie from 'lottie-react'
import nocar from '../../data/nocar.json'

interface Props { }

const managelist = (props: Props) => {
    const router = useRouter();
    const { data: managecarslist } = usemanageusercars();
    const { Fuel } = router.query;
    const { data: Brand } = brandname()
    const dispatch = useDispatch();

    return (
        <div className='mt-16  mb-10  md:px-5 relative'>
            <h1 className='w-[80%] mx-auto text-2xl font-bold capitalize tracking-wider text-neutral-800'>Manage Your Listing</h1>


            <div className='flex flex-row flex-wrap      md:justify-normal w-full md:w-[90%] mx-auto mt-5 '>
                <div className='w-full justify-center items-center md:justify-start flex flex-col md:items-start md:basis-[80%] gap-2'>
                    {
                        managecarslist?.map((data: Record<string, any>) => {
                            return (
                                <ListingCard data={data} />
                            )
                        })
                    }
                    <div className='flex justify-center '>
                    {
                        (managecarslist?.length === 0 || managecarslist === null) ? (<div className='flex justify-center items-center'>
                            <Lottie animationData={nocar} loop={true} />
                        </div>) : null
                    }
                    </div>
                </div>
                <div className='   hidden md:flex flex-col gap-4 md:basis-[20%]'>
                    <Similarproduct title={' Brand'} data={Brand} lengthstart={5} lengthend={11} type='Brand' />
                    <Similarproduct title={'Category'} data={data} type='Body' />
                </div>
            </div>
        </div>
    )
}

export default managelist