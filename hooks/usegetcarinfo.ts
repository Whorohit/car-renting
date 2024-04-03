import useSWR from "swr";
import fetcher from "../libs/fetcher";

 export const usegetcarinfo=(id:string)=>{
 const{data,mutate,error}=useSWR(`/api/Carinfo/${id}`,fetcher,{
  
 })
 console.log(data);
 
  return {
    data,mutate,error
  }
 }