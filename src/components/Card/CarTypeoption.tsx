import React, { memo, useCallback, useState } from 'react';
import CartypeFeed from './CartypeFeed';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface CartypeProps {
  data?: Record<string, any>[];
  view?: boolean;
  type?: string;
  ID?: boolean;
}

const CarTypeoption: React.FC<CartypeProps> = ({ data = [], view, type, ID = false }) => {
  const [viewMore, setViewMore] = useState(false);

  const updateView = useCallback(() => {
    setViewMore(!viewMore);
  }, [viewMore]);

  return (
    <div className='w-full mx-auto'>
      <Carousel opts={{ align: "start" }} className="md:p-0 md:w-[100%] mx-auto mt-5">
        <CarouselContent>
          {data.map((index) => (
            <CarouselItem key={index.brandname} className="object-contain w-full basis-full md:basis-1/3 lg:basis-1/4">
              <CartypeFeed value={index} style='' useId={ID} type={type} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className='md:block hidden'>
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}

export default memo(CarTypeoption);