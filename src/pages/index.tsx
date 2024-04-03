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
import { useState } from "react";
import { brandname, } from "../../hooks/brandname";
import axios from "axios";

export default function Home({ }) {
  const [type, settype] = useState('Body')
  const {data:brand} =   brandname(); 
  return (
    <div className="mt-20 ">
      <Hero />
      <form className="flex justify-between items-center m-12 p-1 w-3/4 md:w-1/3   rounded-2xl mx-auto  bg-blue-100">
        <Input placeholder="Car" style="w-1/2 py-1 px-1 rounded-none " />
        <button type="submit" className="p-1.5 opacity-70 bg-white rounded-full">
          <FaSearch size={20} color="blue" />
        </button>
      </form>
      <h1 className='mt-10 text-base  tracking-widest md:text-xl text-start  font-bold  w-[90%] mx-auto'>All Brand</h1>
      <CarTypeoption data={brand} ID={true}  view={true} type="Brand"/>
     <Filter data={['Body','Fuel','Transmission']} type={type} settype={settype}/>  
    {type==='Body'&&  <CarTypeoption data={item} view={false} type="Body"  />}
    {type==='Fuel'&&  <CarTypeoption data={Fuel} view={false} type="Fuel"/>}
    {type==='Transmission'&&  <CarTypeoption data={trans} view={false} type="Transmission"/>}
    </div>
  );
}
// export async function getServerSideProps() {
//    const  data= await fetch('http://localhost:3000/api/brandname')
//    const brand= await data.json();
  
//    // Parse the JSON response
//      return {
//       props: {
//         brand:brand
//       },
   
//   };
  
