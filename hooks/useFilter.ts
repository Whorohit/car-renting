import useSWR from "swr";
import fetcher from "../libs/fetcher";
import useSWRInfinite from "swr/infinite";
import axios from "axios";

export const useFilterCar = ({Brand = [], Body = [], pricerange = [], Transmission = [], Fuel = [], order =""}) => {
  const fetcher = (url: string) => axios.post(url, {
    Brand, Body, pricerange, Transmission, Fuel, order
  }).then((res) => res?.data?.serializedCars)
 
 
  const fetchecount = (url: string) => axios.post(url, {
    Brand, Body, pricerange, Transmission, Fuel, order
  }).then((res) => res?.data?.totalcount)
  const { data: totalcount, error: e, } = useSWR(`/api/Carinfo/Filtercarsinfo`, fetchecount,{
    // revalidateOnMount:false
  })

  const getKey = (pageIndex: number, previousPageData: any) => {
    pageIndex = pageIndex + 1
    if (previousPageData && !previousPageData.length) return null // reached the end
    return `/api/Carinfo/Filtercarsinfo?&pagenumber=${pageIndex}`                  // SWR key
  }

  const { data, error, mutate, size, setSize } = useSWRInfinite(getKey, fetcher, {
    // revalidateOnMount:false
  })
  const paginateddata = data?.flat();





  



  return {
    data: paginateddata, mutate, error, size, setSize, totalcount
  }

}