
import { DatePickerDemo } from '@/components/Datepicker';
import Input from '@/components/Formfield/Input'
import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
import { FaIndianRupeeSign } from 'react-icons/fa6';
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineSell, MdOutlineVerified, MdSell, MdVerified } from 'react-icons/md';
import { useCurrentUser } from '../../../hooks/usecurrent';
import { CiCircleMinus } from 'react-icons/ci';
import Carcard from '@/components/Carcard';
import Similarproduct from '@/components/Similarprduct';
import category from '../../../public/category.json'
import { brandname } from '../../../hooks/brandname';
import { usecheckavl } from '../../../hooks/usecheckavl';
import axios from 'axios';
import { useRouter } from 'next/router';
import { usegetcarinfo } from '../../../hooks/usegetcarinfo';
import Popup from '@/components/Popup';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { togglePopup } from '@/store';

interface Props {
  data: Record<string, any>
  currentUser: Record<string, any>
}

const Carinfo: React.FC<Props> = ({ data, }) => {
  const dispatch = useDispatch();
  const ispopupModal = useSelector((state: any) => state.popup.isOpen);

  const router = useRouter();
  const { Carinfo } = router.query;




  const { data: currentUser } = useCurrentUser();

  console.log(currentUser);



  const [user, setuser] = useState(false)
  const { data: Brand } = brandname()
  const [isavailable, setisavailable] = useState(null)
  const [selectimg, setselectimg] = useState(data.coverimg)
  const [purchaseorrentdetails, setpurchaseorrentdetails] = useState(
    {
      startdate: new Date() || null,
      enddate: new Date() || null,
      id: data.id,
      RentorSell: data.RentorSell,
      totalday: 1
    }
  )
  const gettotalday = (start: Date, end: Date) => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const diffDays = Math.round(Math.abs((start.getTime() - end.getTime()) / oneDay));
    return diffDays;
  }

  const toogleselectimg = useCallback(
    (img: string) => {
      setselectimg(img)
    },
    [selectimg],
  )

  const setstartdate = (d: Date) => {
    if (d <= purchaseorrentdetails.enddate) {
      setpurchaseorrentdetails({
        ...purchaseorrentdetails,
        startdate: d,
        totalday: gettotalday(purchaseorrentdetails.startdate, d)
      })
    }

  }
  const setenddate = (d: Date) => {
    setpurchaseorrentdetails({
      ...purchaseorrentdetails,
      enddate: d,
      totalday: gettotalday(purchaseorrentdetails.startdate, d)
    })


  }

  const togglecheckavl = async () => {


    const response = await axios.post("/api/Carsoperations/CheckAvl", {
      carid: data.id, RentorSell: data.RentorSell, startdate: purchaseorrentdetails.startdate, enddate: purchaseorrentdetails.enddate
    })
    const { isavailable } = await response.data;

    setisavailable(isavailable)

  }
  const togglepopmodal = useCallback(
    () => {
      dispatch(togglePopup())
    },
    [dispatch, togglePopup],
  )



  return (
    <>
      <Popup message={`Are you absolutely sure to ${data.RentorSell} this?`} isshowPopup={ispopupModal} handleclosepop={togglepopmodal} />
      <div className='mt-12 p-5'>
        <div className=' w-[90%] mx-auto flex lg:flex-row flex-col  gap-4 min-h-[35rem]    '>
          <div className='flex gap-3 basis-[70%]'>
            <div className='h-fit w-[800px]   '>
              <Image src={selectimg} alt='nexon.jpg' className='rounded-md bg-transparent  h-[15rem]  md:h-[25rem]  '

                height={425} width={800} />
            </div>
            <div className='flex flex-col  gap-[1.6rem] md:gap-7'>
              <Image src={data.frontimg} alt='nexon.jpg' className={`rounded-md border-2   h-[2.5rem] md:h-[5rem]  ${data.frontimg == selectimg ? 'border-blue-300 opacity-100 ' : 'border-blue-100 opacity-50'} `} width={100} height={100} onClick={() => {
                toogleselectimg(data.frontimg)
              }} />
              <Image src={data.coverimg} alt='nexon.jpg' className={`rounded-md border-2  h-[2.5rem] md:h-[5rem]  ${data.coverimg == selectimg ? 'border-blue-300 opacity-100 ' : 'border-blue-100 opacity-50'} `} width={100} height={100}
                onClick={() => {
                  toogleselectimg(data.coverimg)
                }} />
              <Image src={data.backimg} alt='nexon.jpg' className={`rounded-md border-2       h-[2.5rem] md:h-[5rem]  ${data.backimg == selectimg ? 'border-blue-300 opacity-100 ' : 'border-blue-100 opacity-50'} `} width={100} height={100}
                onClick={() => {
                  toogleselectimg(data.backimg)
                }} />
              <Image src={data.sideimg} alt='nexon.jpg' className={`rounded-md border-2   h-[2.5rem] md:h-[5rem]  ${data.sideimg == selectimg ? 'border-blue-300 opacity-100 ' : 'border-blue-100 opacity-50'}`} width={100} height={100}
                onClick={() => {
                  toogleselectimg(data.sideimg)
                }} />

            </div>
          </div>
          {currentUser && currentUser?.id === data.userid ?
            (<div className='basis-[30%] rounded-md  border-2 border-gray-200 p-2'>
              <h1 className='my-2  w-[80%] mx-auto text-start font-semibold text-2xl tracking-wide  '>Booking Information </h1>
              <h1 className='py-2 px-1 text-neutral-600 bg-blue-200 text-center text-sm  rounded-md  my-5  w-[80%] mx-auto'>
                Duration to rent a car is  <span className='text-black'>1 month only</span>
              </h1>
              <div className='h-[1px] my-6  bg-neutral-200 mx-auto  w-[80%]' />
              <div className='relative'>
                <IoLocationOutline className='absolute bottom-2 left-8' />
                <Input label='Available City' classname='w-[90%] mx-auto h-9 my-0  pl-7 text-neutral-800 border-[2px] border-gray-100 bg-transparent  rounded-md outline-none  hover:bg-blue-50 focus:border-gray-200' classnamelabel='w-[90%] mx-auto  my-0  font-semibold outline-none    text-base  h-8 ' value={data.Availablecity
                } disabled={true} />
              </div>

              <div className='w-[90%] mx-auto'>
                <div className='flex justify-between my-4 '>
                  <h1 className='text-neutral-500 text-base font-semibold'>Base Price</h1>
                  <h1 className='text-black  text-base font-semibold'> <FaIndianRupeeSign className='inline' />{data.price} <sup className='text-neutral-400 text-sm'>per Hour</sup>  </h1>
                </div>
                {/* <div className='flex justify-between my-4 '>
             <h1 className='text-neutral-500 text-base font-semibold'> Price for 4 days</h1>
             <h1 className='text-black  text-base font-semibold mr-14'> <MdSell color='blue' className='inline' /><FaIndianRupeeSign className='inline' /> 200  </h1>
           </div> */}
              </div>
              <div className='w-[90%] mx-auto my-5'>
                <button className='bg-transparent font-bold  border-blue-200 hover:scale-90 hover:bg-blue-300 hover:text-black cursor-pointer  border-2 px-3   py-1 rounded-xl w-[90%] ml-5 mr-auto '>Edit Details</button>
              </div>
              <div className='w-[90%] mx-auto my-5'>
                <button className='bg-transparent font-bold  border-blue-200 hover:scale-90 hover:bg-blue-300 hover:text-black cursor-pointer  border-2 px-3   py-1 rounded-xl w-[90%] ml-5 mr-auto '>Mark as Not Availabile </button>
              </div>
            </div>)
            : (<div className='basis-[30%] rounded-md  border-2 border-gray-200 p-2'>
              <h1 className='my-2  w-[80%] mx-auto text-start font-semibold text-2xl tracking-wide  '>Booking Information </h1>
              <h1 className='py-2 px-1 text-neutral-600 bg-blue-200 text-center text-sm  rounded-md  my-5  w-[80%] mx-auto'>
                Duration to rent a car is  <span className='text-black'>1 month only</span>
              </h1>
              <div className='h-[1px] my-6  bg-neutral-200 mx-auto  w-[80%]' />
              <div className='relative'>
                <IoLocationOutline className='absolute bottom-2 left-8' />
                <Input label='Available City' classname='w-[90%] mx-auto h-9 my-0  pl-7 text-neutral-800 border-[.5px] border-gray-100 bg-transparent  rounded-md outline-none  hover:bg-blue-50 focus:border-gray-200' classnamelabel='w-[90%] mx-auto  my-0  font-semibold outline-none    text-base  h-8 ' value={data.Availablecity
                } disabled={true} type='text' />
              </div>


              {data.RentorSell === 'Rent' && <>
                <div className='my-4'>
                  <h1 className='w-[90%] mx-auto  my-0 text-black font-bold outline-none    text-base  h-8 '>PickUp Date</h1>
                  <DatePickerDemo value={purchaseorrentdetails.startdate} setdate={setstartdate} startdate={purchaseorrentdetails.startdate} />
                </div>
                <div className='my-4'>
                  <h1 className='w-[90%] mx-auto  my-0 text-black font-bold outline-none    text-base  h-8 '>Return Date</h1>
                  <DatePickerDemo value={purchaseorrentdetails.enddate} setdate={setenddate} startdate={purchaseorrentdetails.startdate} />
                </div></>}
              <div className='w-[90%] mx-auto'>
                <div className='flex justify-between my-4 '>
                  <h1 className='text-neutral-500 text-base font-semibold'>Base Price</h1>
                  <h1 className='text-black  text-base font-semibold'> <FaIndianRupeeSign className='inline' />{data.price} <sup className='text-neutral-400 text-sm'>per Hour</sup>  </h1>
                </div>
                {data.RentorSell == "Rent" && <div className='flex justify-between my-4 '>
                  <h1 className='text-neutral-500 text-base font-semibold'> Price for {purchaseorrentdetails.totalday} days</h1>
                  <h1 className='text-black  text-base font-semibold mr-14'> <MdSell color='blue' className='inline' /><FaIndianRupeeSign className='inline' /> {data.price * purchaseorrentdetails.totalday}</h1>
                </div>}
              </div>
              <div className='w-[90%] mx-auto'>
                <button className='bg-transparent font-bold my-2  border-blue-200 hover:scale-90 hover:bg-blue-300 hover:text-black cursor-pointer  border-2 px-3   py-1 rounded-xl w-[90%] ml-5 mr-auto ' onClick={togglecheckavl} >Check Availability</button>
                {isavailable === true && <button className='bg-transparent font-bold  border-blue-200 hover:scale-90 hover:bg-blue-300 hover:text-black cursor-pointer  border-2 px-3 my-2   py-1 rounded-xl w-[90%] ml-5 mr-auto ' onClick={togglepopmodal}  >Book Now</button>}
              </div>
            </div>)
          }

        </div>



        <div className=' w-[80% ] rounded-md  bg-neutral-50 shadow-md lg:w-[62%] lg:ml-20  mt-5 lg:-mt-32 p-2 '>
          <h1 className=' font-bold text-base  md:text-xl flex  justify-start items-center gap-3 w-[90%] mx-auto text-left  border-b-[1px] border-b-gray-200 py-3 '>{data?.brand.brandname}  {data.Modal} <span>{data.verifed ? <MdVerified size={20} color={` blue `} /> : <MdOutlineVerified color={'grey'} size={20} />}</span> <span className='text-gray-400 text-sm'>{data.verifed ? " verifed" : "Not verifed"} </span></h1>
          <div className='border-b-[1px] border-b-gray-200 w-[90%] mx-auto pb-5 '>

            <h1 className=' flex justify-between items-center  my-2  mx-auto  text-left  font-semibold text-base md:text-lg text-neutral-600  tracking-tight'>Overview <CiCircleMinus size={20} /></h1>
            <div className='flex-col flex justify-between p-2 gap-4  mx-auto'>

              <div className='flex justify-between gap-10  '>
                <h1 className='basis-1/2 flex justify-between gap-10 text-neutral-800 font-bold text-sm md:text-base capitalize ' >Engine <span className='font-semibold text-neutral-500 text-sm'>{data.engine}</span> </h1>
                <h1 className='basis-1/2 flex justify-between gap-10 text-neutral-800 font-bold text-sm md:text-base capitalize' >Year<span className='font-semibold text-neutral-500 text-sm'>{data.year}</span> </h1>
              </div>
              <div className='flex justify-between gap-10  '>
                <h1 className='basis-1/2 flex justify-between gap-10 text-neutral-800 font-bold text-sm md:text-base capitalize ' >Sub-Modal <span className='font-semibold text-neutral-500 text-sm'>{data.submodal}</span> </h1>
                <h1 className='basis-1/2 flex justify-between gap-10 text-neutral-800 font-bold text-sm md:text-base capitalize' >Mileage<span className='font-semibold text-neutral-500 text-sm'>{data.mileage}</span> </h1>
              </div>
              <div className='flex justify-between gap-10  '>
                <h1 className='basis-1/2 flex justify-between gap-10 text-neutral-800 font-bold text-sm md:text-base capitalize' >Drivetrain
                  <span className='font-semibold text-neutral-500 text-sm'>{data.drivetrain}</span> </h1>
                <h1 className='basis-1/2 flex justify-between gap-10 text-neutral-800 font-bold text-sm md:text-base capitalize ' >Driven <span className='font-semibold text-neutral-500 text-sm'>{data.driven} Kms</span> </h1>
              </div>
              <div className='flex justify-between gap-10  '>
                <h1 className='basis-1/2 flex justify-between gap-10 text-neutral-800 font-bold text-sm md:text-base capitalize' >Fuel <span className='font-semibold text-neutral-500 text-sm'>{data.fuel}</span> </h1>
                <h1 className='basis-1/2 flex justify-between gap-10 text-neutral-800 font-bold text-sm md:text-base capitalize ' >Transmission <span className='font-semibold text-neutral-500 text-sm'>{data.
                  transmission
                }</span> </h1>
              </div>
              <div className='flex justify-between gap-10  '>
                <h1 className='basis-1/2 flex justify-between gap-10 text-neutral-800 font-bold text-sm md:text-base capitalize' >vehicle  No.<span className='font-semibold text-neutral-500 text-sm'>{data.
                  Vehicleno}</span> </h1>
                <h1 className='basis-1/2 flex justify-between gap-10 text-neutral-800 font-bold text-sm md:text-base capitalize ' >Body <span className='font-semibold text-neutral-500 text-sm'>{data.Body}</span> </h1>
              </div>
            </div>
          </div>
          <div className=' '>
            <h1 className='w-[90%] flex justify-between items-center  my-2  mx-auto  text-left  font-semibold text-lg text-neutral-600  tracking-tight'>Description <CiCircleMinus size={20} /></h1>
            <div className='flex-col flex justify-between  w-[90%] mx-auto'>
              {/* <div className='flex justify-between gap-10 '>
              <h1 className='basis-1/2 flex justify-between gap-10 text-neutral-800 font-bold text-base ' >Engine <span className='font-semibold text-neutral-500 text-sm'>1.litre</span> </h1>
              <h1 className='basis-1/2 flex justify-between gap-10 '>Engine <span>1.litre</span> </h1>
            </div>
            <div className='flex justify-between gap-10  '>
              <h1 className='basis-1/2 flex justify-between gap-10 ' >Engine <span>1.litre</span> </h1>
              <h1 className='basis-1/2 flex justify-between gap-10 '>Engine <span>1.litre</span> </h1>
            </div>
            <div className='flex justify-between gap-10  '>
              <h1 className='basis-1/2 flex justify-between gap-10 ' >Engine <span>1.litre</span> </h1>
              <h1 className='basis-1/2 flex justify-between gap-10 '>Engine <span>1.litre</span> </h1>
            </div> */}
              {data.des}
            </div>
          </div>
        </div>
        <h1 className='mx-auto text-start w-[90%] font-bold text-black text-xl mt-4'>Others Cars</h1>
        <div className='flex flex-row '>
          <div className='flex flex-col  mx-auto lg:mx-0 lg:ml-20 items-center lg:items-start  justify-center lg:justify-start w-full  lg:w-[60%] gap-5  my-5'>
            <Carcard />
            <Carcard />
            <Carcard />
            <Carcard />
          </div>
          <div className='   hidden md:flex flex-col gap-4 md:basis-[25%]'>
            <Similarproduct title={' Brand'} data={Brand} lengthstart={5} lengthend={11} type='Brand' />
            <Similarproduct title={'Category'} data={category} type='Body' />
          </div>
        </div>

      </div>
    </>
  )
}

export default Carinfo
export async function getServerSideProps(context: any) {
  // Fetch current user data
  // const currentUserRes = await fetch('http://localhost:3000/api/current');
  // const currentUserData = await currentUserRes.json();

  // Fetch car data based on the query parameters
  const { Carinfo } = context.query;
  const carRes = await fetch(`http://localhost:3000/api/Carinfo/${Carinfo}`);
  const carData = await carRes.json();

  return {
    props: {
      // currentUser: currentUserData, // Return resolved currentUser data
      data: carData,
    },
  };
}