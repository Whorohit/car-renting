import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
type Props = {
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionlabel?: string
  isOpen?: boolean;
  onClose?: () => void;
  onSubmit?: () => void;
  disabled?: boolean;
}

const Modal: React.FC<Props> = ({ title, body, footer, actionlabel, isOpen, onClose, onSubmit }) => {
  if (!isOpen)
    return null;
  return (
    <div
      className="justify-center items-center 
          flex overflow-x-hidden  overflow-y-auto fixed  inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-70
        "

    >
      <div className='flex flex-col  w-3/4 h-auto py-4 bg-blue-100 shadow-lg md:w-1/2 rounded-lg m-8 border  border-neutral-100 gap-4'>
        <button
          className="
                  p-1 
                  ml-auto
                  mr-1
                  border-0 
                  text-neutral-600
                  hover:opacity-70
                  transition
                "

        onClick={onClose}>
          <AiOutlineClose size={20} />
        </button>
        <h1 className='text-center font-bold text-3xl text-neutral-700 font-sans tracking-widest  '>{title}</h1>
        <div className="relative px-5  flex-auto">
          {body}
        </div>
        <div className='w-full flex justify-center items-center p-3 '>
 <button className='w-full   bg-blue-400 rounded-md  text-neutral-700  py-2
                  hover:bg-blue-600
                  transition ' onClick={onSubmit}>{actionlabel}</button>
        </div>
        <div>
        {footer}
        </div>
      </div>
      
    </div>
  )
}

export default Modal