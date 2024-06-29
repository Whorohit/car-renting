import React from 'react'

type Props = {
    message?: string;
    isshowPopup?: boolean;
    handleclosepop?: () => void
    performaction?: () => void
}

const Popup: React.FC<Props> = ({ message, isshowPopup, handleclosepop,performaction}) => {
    if (!isshowPopup)
        return null;
    return (
        <div className='fixed  bg-opacity-60 z-[100] flex justify-center items-center w-screen min-h-screen'>
            <div className=' w-[80%] md:w-[50%] mx-auto rounded-md h-1/3 min-h-[10rem]   p-4 bg-blue-50'>
                <h1 className='text-left text-black font-semibold text-base '>{message}</h1>
                <h1 className='text-left text-neutral-400 font-light text-base'>This action cannot be undo.</h1>
  <div className='flex   items-center justify-end gap-5 px-6 mt-3'>
      <button className='py-1  px-2 bg-neutral-100 rounded-md border hover:bg-neutral-300 text-neutral-800 border-neutral-200' onClick={handleclosepop}>Cancel</button>
      <button className='py-1  px-2 bg-blue-200 rounded-md border-2 hover:bg-blue-400 text-neutral-800' onClick={performaction}>Continue</button>
  </div>

            </div>

        </div>
    )
}

export default Popup