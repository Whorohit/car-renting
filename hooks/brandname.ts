import useSWR from "swr";
import fetcher from "../libs/fetcher";

 export const brandname=()=>{
 const{data,mutate,error}=useSWR('/api/brandname',fetcher,{
  // revalidateOnMount: false
 })
  return {
    data,mutate,error
  }
 }