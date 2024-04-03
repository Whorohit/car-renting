import useSWR from "swr";
import fetcher from "../libs/fetcher";

 export const usefetchcars=(type:string,value:string)=>{
 const{data,mutate,error}=useSWR(`/api/fetchCar?${type}=${value}`,fetcher,{
  //  revalidateOnMount: false
 })
 
 
  return {
    data,mutate,error
  }
 }