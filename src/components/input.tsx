'use client'
import React from 'react'

interface InputProps{
placeholder?:string;
style?:string;
value?:string;
type?:string;
disabled?:boolean;
autocomplete?:string
onchange?:(event:React.ChangeEvent<HTMLInputElement>)=>void
}

const Input:React.FC<InputProps> = ({disabled,onchange,value,type,placeholder,style,autocomplete}) => {
  return (
    <input disabled={disabled}
    onChange={onchange}
    value={value}
    type={type}
    autoComplete={autocomplete}
    placeholder={placeholder}
    className={` ${style} 
  
    
    text-base 
  
    bg-transparent
   
    outline-none
    transition
    
` } />
  )
}

export default Input