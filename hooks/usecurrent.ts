import useSWR from "swr"
import fetcher from "../libs/fetcher"

export const useCurrentUser=()=>{
    const{data,isLoading,error,mutate}=useSWR('/api/current',fetcher,{
   revalidateOnMount: true
    })
   
    return{
        data,isLoading,error,mutate
    }
}