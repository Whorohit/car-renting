'use client'
import Image from 'next/image'

import React from 'react'




type Props = {}

const Hero = () => {
    return (
        <>
        <div className=" w-full flex  flex-col justify-between  gap-y-28 mx-auto mt-12  items-center  ">
            <div className=" w-[80%]  md:w-full  flex justify-center items-start relative">

             
             <Image src="/hero.png" alt="hero" quality={100} width={500} height={500}  className=" duration-300 transition-all animateOnce hidden md:block "
          
             
              />
             <Image src="/hero.png" alt="hero" quality={100} width={1000} height={1000}  className=" duration-300 transition-all animateOnce md:hidden h-full "
          
             
              />
            
             <div className=" absolute  h-[4rem] w-[4rem] md:h-[7rem] md:w-[7rem]  rounded-2xl  opacity-70 -z-30 left-0 bg-blue-300 scale-150      duration-300 transition-all box " />
             <div className=" absolute  h-[7rem] w-[7rem] md:h-[12rem] md:w-[12rem]  rounded-2xl  opacity-70 -z-30 top-28 bg-blue-300 scale-150      duration-300 transition-all box " />
             {/* <div className=" absolute h-[5rem] w-[5rem]  rounded-2xl  opacity-70 -z-30 right-0 bg-blue-300 scale-150      duration-300 transition-all box " /> */}
                
            </div>
            <div className=" w-full   px-6 relative flex flex-col mt-20 md:mt-0  justify-start ">
                <h1 className=" text-5xl  tracking-widest font-extrabold mb-10 ">
                    Find, book, rent  car—quick and super easy!
                </h1>

                <p className="font-thin text-3xl">
                    Streamline your car rental experience with our effortless booking
                    process.
                </p>
                <div className="left-28 absolute h-[7rem] w-[7rem] rounded-2xl opacity-70 -z-20 top-0 bg-blue-500  scale-150 rotate-45    duration-300 transition-all box  " />
                <div className="left-28 absolute h-[11rem] w-[11rem] rounded-2xl  opacity-70 -z-30 top-0 bg-blue-300 scale-150   rotate-45   duration-300 transition-all box  " />

            </div>

        </div>
        
        </>
    )
}

export default Hero