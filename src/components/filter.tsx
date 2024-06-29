import React, { memo, useCallback } from 'react'

interface Props {
    data: string[];
    type: string;
    settype:React.Dispatch<React.SetStateAction<string>>;

}

const Filter: React.FC<Props> = ({ data = [], type,settype

}) => {
    const changetype=useCallback(
      (e:string) => {
        console.log(e);
        
      settype(e)
      },
      [type,settype],
    )
    
    return (
        <div className='flex justify-start  gap-5 md:gap-12  text-2xl md:text-xl  w-[80%]  mt-5  mx-auto   border-t pt-2  '>
            {data.map((item) => {
                return (
                    <div>
                        <h1 className={`p-2  transition-colors ease-linear duration-300 ${type===item?"text-blue-600 border-b-2 border-blue-600":"text-neutral-600"} `} onClick={()=>{changetype(item)}}>{item}</h1>
                        
                    </div>
                )
            })}
        </div>
    )
}

export default memo( Filter)