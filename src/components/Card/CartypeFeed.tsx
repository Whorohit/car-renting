import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { memo } from 'react';

interface OptionFeedProps {
  value?: Record<string, any>;
  style?: string;
  type?: string;
  useId?: boolean;
}

const CartypeFeed: React.FC<OptionFeedProps> = ({ value = {}, style, type, useId = false }) => {
  const router = useRouter();

  return (
    <div className={`${style} mx-5 relative h-[16rem] md:h-[10rem] p-2 border-2 flex flex-col items-center justify-center border-blue-100 rounded-xl`} onClick={() => {
      router.push(`/${type}/${useId ? value.id : value.brandname}`);
    }}>
      <div className='w-full flex justify-center h-[80%] md:h-1/2'>
        <Image alt='logo' src={value.brandimage} width={2000} height={200} className='object-contain h-full' />
      </div>
      <h1 className='text-base md:text-xl'>
        {value.brandname}
      </h1>
    </div>
  );
}

export default memo(CartypeFeed);