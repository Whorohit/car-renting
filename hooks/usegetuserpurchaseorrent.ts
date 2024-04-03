import useSWR from "swr";
import fetcher from "../libs/fetcher";

 export const usegetuserpurcahseorrent=(pagesize=10,rentorsell:string)=>{
 const{data,mutate,error}=useSWR(`/api/viewuserpurchaseorrent?rentorsell=${rentorsell}&pagesize=${pagesize}`,fetcher,{
  // revalidateOnMount: false
 })
  return {
    data,mutate,error
  }
 }