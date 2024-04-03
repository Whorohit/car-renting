import React from 'react'

interface InputProps {
  placeholder?: string;
  disabled?: boolean;
  onchange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  value?: string|number;
  type?: string;
  classname?:string
  showlabel?: boolean
  name?: string;
  label?: string;
 classnamelabel?:string
}

const Input: React.FC<InputProps> = ({ placeholder, disabled = false, onchange, value, label,type='text', showlabel, name,classname,classnamelabel }) => {
  return (
   
      <div className=' '>
      <label htmlFor={name} className={`${classnamelabel?classnamelabel :"w-[22rem] md:w-[25rem]"} mx-auto text-black  block    my-2 font-semibold `}>{label}</label>
      <input
        placeholder={placeholder}
        name={name}
        onChange={onchange}
        value={value}
        type={type}
        className={`${classname?classname :"w-[22rem] md:w-[25rem]"} outline-none   block mx-auto  rounded-md bg-blue-50 border border-neutral-500 
       h-12 `}
      />
      </div>
   
  )
}

export default Input