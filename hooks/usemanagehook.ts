import useSWR from "swr";
import fetcher from "../libs/fetcher";

 export const usemanageusercars=()=>{
 const{data,mutate,error}=useSWR('/api/Makeuser',fetcher,{
  // revalidateOnMount: false
 })
  return {
    data,mutate,error
  }
 }