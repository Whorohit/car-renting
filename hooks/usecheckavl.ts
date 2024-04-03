import useSWR from "swr";
import fetcher from "../libs/fetcher";

 export const usecheckavl=()=>{
 const{data,mutate,error}=useSWR('/api/Carsoperations/CheckAvl',fetcher,{
  revalidateOnMount: false
 })
  return {
    data,mutate,error
  }
 }