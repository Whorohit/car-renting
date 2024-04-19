import useSWR from "swr";
import fetcher from "../libs/fetcher";

 export const usegetunique=()=>{
 const{data,mutate,error}=useSWR('/api/Carsoperations/uniquename',fetcher,{
  revalidateOnMount: false
 })
  return {
    data,mutate,error
  }
 }