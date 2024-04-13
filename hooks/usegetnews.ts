import useSWR from "swr";
import fetcher from "../libs/fetcher";

 export const usegetnews=(pagesize:number)=>{
  
  
 const{data,mutate,error}=useSWR(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Automobiles&page=${pagesize}&api-key=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`,fetcher,{
  // revalidateOnMount: false
 })
   
   
   
  return {
    data,mutate,error
  }
 }