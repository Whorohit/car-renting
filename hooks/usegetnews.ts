import axios from "axios";
import useSWR from "swr";
import useSWRInfinite from 'swr/infinite'
 import InfiniteScroll from 'react-infinite-scroll-component';

export const usegetnews = () => {
 
  const fetcher=(url:string)=>axios.get(url).then((res)=>res.data?.response?.docs)
  
  const getKey = (pageIndex: number, previousPageData: any) => {
    pageIndex = pageIndex + 1
    if (previousPageData && !previousPageData.length) return null // reached the end
    return `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Automobiles&page=${pageIndex}&api-key=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`                  // SWR key
  }
  const { data, error, mutate, size, setSize } = useSWRInfinite(getKey, fetcher,{
      revalidateOnMount: true
  })
  //  const{data,mutate,error}=useSWR(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Automobiles&page=${pagesize}&api-key=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`,fetcher,{
  //   // revalidateOnMount: false
  //  })
  const paginateddata=data?.flat();

 
  return {

    data:paginateddata, mutate, error,size,setSize
  }
}