import useSWR from "swr";

import useSWRInfinite from "swr/infinite";
import axios from "axios";

 export const usefetchcars=(type:string,value:string)=>{

const fetcher=(url:string)=>axios.get(url).then((res)=>res?.data?.serializedCars)
const fetchecount=(url:string)=>axios.get(url).then((res)=>res?.data?.countCar)
const {data:totalcount,error:e,}= useSWR(`/api/fetchCar?${type}=${value}`,fetchecount)

 const getKey = (pageIndex: number, previousPageData: any) => {
  pageIndex = pageIndex + 1
  
  
  if (previousPageData && !previousPageData.length) return null // reached the end
  return `/api/fetchCar?${type}=${value}&pagenumber=${pageIndex}`                  // SWR key
}

const { data, error, mutate, size, setSize } = useSWRInfinite(getKey, fetcher,{
    revalidateOnMount: true
})


const paginateddata=data?.flat();




 
 
  return {
    data:paginateddata,mutate,error,size,setSize,totalcount
  }
 }