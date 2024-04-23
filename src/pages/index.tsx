'use client'
import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Input from "@/components/input";
import { FaSearch } from "react-icons/fa";
import CarTypeoption from "../components/Card/CarTypeoption";
import data from '../../public/brand.json';
import Fuel from '../../public/Fuel.json';
import trans from '../../public/Transmission.json';
import item from '../../public/category.json'
import Filter from "@/components/filter";
import { useCallback, useState } from "react";
import { brandname, } from "../../hooks/brandname";

// import { AutoComplete } from 'antd';
import { AutoComplete } from 'rsuite';
import Autocompleted from "@/components/Autocompleted";
import { usegetunique } from "../../hooks/usegetuniquename";
import { useRouter } from "next/router";




export default function Home({} ) {
   const router=useRouter();
  const [type, settype] = useState('Body')
  const {data:brand} =   brandname(); 
  const data = [
    'Eugenia',
    'Bryan',
    'Linda',
    'Nancy',
    'Lloyd',
    'Alice',
    'Julia',
    'Albert',
    'Louisa',
    'Lester',
    'Lola',
    'Lydia',
    'Hal',
    'Hannah',
    'Harriet',
    'Hattie',
    'Hazel',
    'Hilda'
  ];
   const [value, setValue] = useState('')
 const {data:getunique}=usegetunique()
  const togglesearch=useCallback(
    () => {
        router.push(`/SearchCar/${value}`)
    },
    [router,value],
  )
  
  
  
  
  return (
    <div className="mt-20  pb-5">
      <Hero />
      <div className=" m-12  w-3/4 md:w-1/3   rounded-2xl mx-auto relative  bg-blue-100">
        {/* <Input placeholder="Car" style="w-1/2 py-1 px-1 rounded-none " />*/}
        <button type="submit" disabled={value.length===0} onClick={togglesearch} className="p-1.5 opacity-70 bg-transparent hover:scale-90   rounded-full absolute  top-0 right-0">
          <FaSearch size={20}  className=" text-blue-600 hover:text-blue-300" />
        </button> 
      
      <Autocompleted data={getunique} value={value} setValue={setValue}/>
      </div>
      <h1 className='mt-10 text-base  tracking-widest md:text-xl text-start  font-bold  w-[90%] mx-auto'>All Brand</h1>
      <CarTypeoption data={brand} ID={true}  view={true} type="Brand"/>
     <Filter data={['Body','Fuel','Transmission']} type={type} settype={settype}/>  
    {type==='Body'&&  <CarTypeoption data={item} view={false} type="Body"  />}
    {type==='Fuel'&&  <CarTypeoption data={Fuel} view={false} type="Fuel"/>}
    {type==='Transmission'&&  <CarTypeoption data={trans} view={false} type="Transmission"/>}
    </div >
  );
}
// export async function getServerSideProps() {
//    const  data= await fetch('http://localhost:3000/api/brandname')
//    const brand= await data.json();
  
//    // Parse the JSON response
//      return {
//       props: {
//         b:brand
//       },
   
//   }
// }

  
