import useSWR from "swr";
import fetcher from "../libs/fetcher";
import useSWRInfinite from "swr/infinite";
import axios from "axios";

 export const useSerachCar=(Carname:string)=>{
    const fetcher=(url:string)=>axios.get(url).then((res)=>res?.data?.serializedCars)
    const fetchecount=(url:string)=>axios.get(url).then((res)=>res?.data?.countCar)
    const {data:totalcount,error:e,}= useSWR(`/api/Carsoperations/CarsbyName?CarsbyName${Carname}`,fetchecount)
    
     const getKey = (pageIndex: number, previousPageData: any) => {
      pageIndex = pageIndex + 1
      if (previousPageData && !previousPageData.length) return null // reached the end
      return `/api/Carsoperations/CarsbyName?CarsbyName=${Carname}&pagenumber=${pageIndex}`                  // SWR key
    }
    
    const { data, error, mutate, size, setSize } = useSWRInfinite(getKey, fetcher,{
    })
    const paginateddata=data?.flat();




 
   console.log(paginateddata);
   
  return {
    data:paginateddata,mutate,error,size,setSize,totalcount
  }
    
 }