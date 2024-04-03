import React, { useCallback, useState } from 'react'
import CartypeFeed from './CartypeFeed';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
 } from "@/components/ui/carousel"
 

interface CartypeProps {
   
   data?: Record<string, any>[];
   view?: boolean;
   type?:string
   ID?:boolean

}

const CarTypeoption: React.FC<CartypeProps> = ({  data = [], view,type,ID=false }
) => {
   const [viewmore, setviewmore] = useState(false)
   const upateview = useCallback(
      () => {
         setviewmore(!viewmore)
      },
      [viewmore],
   )

   return (
      <div className=' w-[90%] mx-auto'>
      
         {/* <div className={`flex  justify-center  mx-auto gap-5  md:gap-2    flex-row flex-wrap mt-4 transition-all duration-300 ease-linear   `}>
            {viewmore && view ?
               data.map((items) => {
                  return (
                     <CartypeFeed value={items} style='' />

                  )
               }) :
               data.slice(0, 7).map((items: Record<string, any>) => {
                  return (
                     <CartypeFeed value={items} style='' />

                  )
               })
            }
            {view && <div className={` w-1/3  md:w-1/5 h-[7rem] p-2 border-2  flex flex-col  items-center justify-center border-blue-100 rounded-xl   `} onClick={upateview}>
               <h1 className='text-xl font-semibold  hover:scale-90'>
                  {(!viewmore ? "View All"
                     : "View Less")}
               </h1>

            </div>
            }
         </div> */}
         <Carousel
      opts={{
        align: "start",
      }}
      className="w-full  mt-5"
    >
      <CarouselContent>
        {data.map(( index) => (
          <CarouselItem key={index.brandname} className="object-contain  md:basis-1/3 lg:basis-1/4">
               <CartypeFeed value={index} style='' useId={ID} type={type} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
      </div>
   )
}

export default CarTypeoption