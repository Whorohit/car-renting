import useSWR from "swr";
import fetcher from "../libs/fetcher";

 export const usegetcarinfo=(id:string)=>{
 const{data,mutate,error}=useSWR(`/api/Carinfo/${id}`,fetcher,{
  
 }) 
  return {
    data,mutate,error
  }
 }