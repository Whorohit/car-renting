import useSWR from "swr"
import fetcher from "../libs/fetcher"

export const useCurrentUser=()=>{
    const{data,isLoading,error,mutate}=useSWR('/api/current',fetcher,{
 //  revalidateOnMount: false
    })
   
    return{
        data,isLoading,error,mutate
    }
}