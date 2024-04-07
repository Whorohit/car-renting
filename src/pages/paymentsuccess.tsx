import { useRouter } from 'next/router';
import React from 'react'
import success from '../data/success.json'
import Lottie from 'lottie-react';
type Props = {}

const Paymentsuccess = (props: Props) => {
    const router = useRouter();
    const { reference } = router.query;
  
    // Now you can use the reference variable in your component
    console.log(reference);
  
  return (
    <div className='mt-12 p-10'>
       <div className=' flex justify-center items-center  flex-col md:flex-row gap-5'>
       <Lottie animationData={success} loop={true} />
       <h1 className='w-full mxauto font-bold text-xl text-center'>
        The payment is Successfully With ReferenceID  <span>{reference}</span></h1> 
       </div>

    
            
    </div>
  )
}

export default Paymentsuccess