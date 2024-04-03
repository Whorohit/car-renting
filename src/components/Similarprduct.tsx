import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react'

interface SimilarproductProps{
    data:Record<string,any>[];
    title:string
     lengthstart?:number;
     lengthend?:number;
    type:string;

}

const Similarproduct:React.FC<SimilarproductProps> = ({data=[],title,lengthend=data.length-1,lengthstart=0,type}) => {
   const router=useRouter();
      const  onclick=useCallback(
        (i:string) => {
            router.push(`/${type}/${i}`)
        },
        [router,type],
      )
      
  return (

   <>
    <h1 className='text-center text-neutral-700 font-semibold text-lg '>{title}</h1>
    <div className='flex flex-row  gap-1  items-center justify-center flex-wrap w-[90%] mx-auto'>
        {
            data.slice(lengthstart,lengthend).map((item)=>{
                 return(
                    <div className='border flex-col border-neutral-500 h-[8rem] w-[7rem] flex justify-center items-center'  onClick={()=>{onclick(item.brandname)}}> 
                         <Image src={item.brandimage} alt='car image' width={80} className='' quality={100} height={80} />
                        <h1 className='text-sm text-neutral-400'>{item.brandname}</h1>
                    </div>
                 )
            })
        }
    </div>
    </>
  )
}

export default Similarproduct