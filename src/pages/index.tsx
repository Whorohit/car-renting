import { useRouter } from "next/router";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { useCallback, useState } from "react";
import Hero from "@/components/Hero";
import Input from "@/components/input";
import Filter from "@/components/filter";
import Autocompleted from "@/components/Autocompleted";
import { brandname } from "../../hooks/brandname";
import { usegetunique } from "../../hooks/usegetuniquename";
import CarTypeoption from "@/components/Card/CarTypeoption";
import data from '../../public/brand.json';
import Fuel from '../../public/Fuel.json';
import trans from '../../public/Transmission.json';
import item from '../../public/category.json';

export default function Home() {
  const router = useRouter();
  const [type, setType] = useState('Body');
  const { data: brand } = brandname();
  const { data: getunique } = usegetunique();
  const [value, setValue] = useState('');

  const toggleSearch = useCallback(() => {
    router.push(`/SearchCar/${value}`);
  }, [router, value]);

  return (
    <div className="mt-36  w-screen md:w-[95%] pb-5">
      <Hero />
      <div className="my-12 mx-5 w-full md:w-1/3 md:mx-auto rounded-2xl  relative">
        <button
          type="submit"
          disabled={value.length === 0}
          onClick={toggleSearch}
          className="p-1.5 opacity-70 bg-transparent hover:scale-90 rounded-full absolute top-0 right-0"
        >
          <FaSearch size={20} className="text-blue-600 hover:text-blue-300" />
        </button>
        <Autocompleted data={getunique} value={value} setValue={setValue} />
      </div>
      <h1 className='mt-10 text-3xl tracking-widest md:text-xl text-start font-bold w-[90%] mx-auto'>All Brand</h1>
      <CarTypeoption data={brand} ID={true} view={true} type="Brand" />
      <Filter data={['Body', 'Fuel', 'Transmission']} type={type} settype={setType} />
      {type === 'Body' && <CarTypeoption data={item} view={false} type="Body" />}
      {type === 'Fuel' && <CarTypeoption data={Fuel} view={false} type="Fuel" />}
      {type === 'Transmission' && <CarTypeoption data={trans} view={false} type="Transmission" />}
    </div>
  );
}
