import Select from '@/components/Formfield/Select'
import Input from '@/components/Formfield/Input'
import React, { useCallback, useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import ImageUpload from '@/components/Formfield/Imageupload';
import Category from '../../public/category.json'
import drivetraintype from '../../public/Fuel.json'
import transmissiontype from '../../public/Transmission.json'
import { brandname } from '../../hooks/brandname';
import { firebaseConfig, firebaseStorageUrl } from '../../libs/config';
import firebase, { initializeApp } from 'firebase/app';
import 'firebase/storage';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import axios from 'axios';

type Props = {}

const Post: React.FC<Props> = ({ }) => {
    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app, firebaseStorageUrl)
    const [basicstage, setbasicstage] = useState(false)
    const [desstage, setdesstage] = useState(false)
    const [Photostage, setPhotostage] = useState(false)
    const [enginestage, setenginestage] = useState(false)
    const { data: Brand } = brandname()
    console.log(Brand);
    
    const [type, settype] = useState('Rent')
    const [pricingstage, setpricingstage] = useState(false)
    const [carinfo, setcarinfo] = useState({
        Modal: "",
        brandname: "",
        engine: "",
        fuel: "",
        year: "",
        transmission: "",
        seating: 0,
        coverimg: "",
        frontimg: "",
        sideimg: "",
        backimg: "",
        driven: 0,
        drivetrain: "",
        mileage: "",
        price: 0,
        Body: "",
        Availablecity: "",
        des: "",
        Vehicleno: "",
        RentorSell: "",
        submodal: ""

    })
    const handleInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement  |HTMLTextAreaElement>) => {
            const { name, value } = e.target;
            setcarinfo((prevCarInfo) => ({
                ...prevCarInfo,
                [name]: value,
            }));

        },


        [carinfo]
    )
    const CreateUniqueFileName = (getFile: any) => {
        const time = Date.now();
        const randomvalue = Math.random().toString(36).substring(2, 12);
        console.log(`${getFile.name}-${time}-${randomvalue}`)
        return `${getFile.name}-${time}-${randomvalue}`
    }
    const helptouploadimage = async (file: any):Promise<string> => {
        const getFileName = CreateUniqueFileName(file)
        const StorageRef = ref(storage, `cars/${getFileName}`)
        const uploadimage = uploadBytesResumable(StorageRef, file)
        return new Promise((resolve, reject) => {
          uploadimage.on('state_changed', (snapshot) => {

          }, (error) => {
            console.log(error)
          }, () => {
            getDownloadURL(uploadimage.snapshot.ref).then((downloadURL) => resolve(downloadURL)).catch(error => reject(error))
          })
        })
        
    }
    const coverimageupload=async(file: any)=>{
        await helptouploadimage(file)
        .then((imageurl)=>{
            if (imageurl !== ' ') {
                console.log(imageurl)
                setcarinfo({
                  ...carinfo,
                  coverimg:imageurl
                })
              }
        })
        console.log(carinfo);
        
    }
    const frontimageupload=async(file: any)=>{
        const imageurl=await helptouploadimage(file)
        
            if (imageurl !== ' ') {
                console.log(imageurl)
                setcarinfo({
                  ...carinfo,
                  frontimg:imageurl
                })
              }
        
        console.log(carinfo);
        
    }
    const sideimageupload=async(file: any)=>{
        await helptouploadimage(file)
        .then((imageurl)=>{
            if (imageurl !== ' ') {
                setcarinfo({
                  ...carinfo,
                  sideimg:imageurl
                })
              }
        })
        console.log(carinfo);
        
    }
    const backimageupload=async(file: any)=>{
        const imageurl=await helptouploadimage(file)
        .then((imageurl)=>{
            if (imageurl !== ' ') {
                setcarinfo({
                  ...carinfo,
                  backimg:imageurl
                })
              }
        })
        console.log(imageurl)
        }
        console.log(carinfo);
        
    
const onsubmit=useCallback(
 async () => {
   try {
    const url='/api/Makeuser'
   const car= await axios.post(url, {
    Modal:carinfo.Modal,
    brandname: carinfo.brandname,
    engine: carinfo.engine,
    fuel:carinfo.fuel,
    year: carinfo.year,
    transmission: carinfo.transmission,
    seating: carinfo.seating,
    coverimg:carinfo.coverimg,
    frontimg: carinfo.frontimg,
    sideimg: carinfo.sideimg,
    backimg: carinfo.backimg,
    driven: carinfo.driven,
    drivetrain: carinfo.drivetrain,
    mileage: carinfo.mileage,
    price: carinfo.price,
    Body: carinfo.Body,
    Availablecity: carinfo.Availablecity,
    des: carinfo.des,
    Vehicleno: carinfo.Vehicleno,
    RentorSell: carinfo.RentorSell,
    submodal: carinfo.submodal
   } )
  
   setcarinfo({
    Modal: "",
    brandname: "",
    engine: "",
    fuel: "Petrol",
    year: "",
    transmission: "Automatic",
    seating: 0,
    coverimg: "",
    frontimg: "",
    sideimg: "",
    backimg: "",
    driven: 0,
    drivetrain: "Fwd",
    mileage: "",
    price: 0,
    Body: "Hatchback",
    Availablecity: "",
    des: "",
    Vehicleno: "",
    RentorSell: "Rent",
    submodal: ""
   })
   alert('hello')
   } catch (error) {
    console.log(error);
    
   }
  },
  [carinfo],
)




    if (basicstage)
        return (<div className='z-20  bg-white absolute   min-h-screen transition-all duration-300'>
            <h1 className='flex items-center justify-end  w-[95%] mx-auto mt-5 gap-x-4 '>
                <button className='bg-transparent font-bold  border-blue-200 hover:scale-90 hover:bg-blue-300 hover:text-black cursor-pointer  border-2 px-3  py-1 rounded-xl ' 
                 onClick={()=>{
                    setbasicstage(!basicstage)
                    setdesstage(!desstage)
                 }}> Next
                </button>
                <RxCross1 size={20} onClick={() => {
                    setbasicstage(!basicstage)
                }} />
            </h1>
            <h1 className='  mx-auto px-8 md:px-0 md:w-[70%] font-bold text-start text-xl md:text-3xl'>Basic Details</h1>
            <div className='flex flex-col md:flex-row   md:justify-between px-4  md:p-8 items-start '>

                <div className=' mx-auto md:basis-[70%]  md:px-6 '>
                    <div className='flex flex-col md:flex-row justify-center  gap-2 md:gap-6'>
                        <Input label='Modal' value={carinfo.Modal} type='text' name='Modal' onchange={handleInputChange} />
                        <Select label='Make' value={carinfo.brandname} name='brandname' optiondata={Brand} onchange={handleInputChange} enableoption={true} />
                    </div>
                    <div className='flex flex-col md:flex-row justify-center  gap-2 md:gap-6'>
                        <Input label='Year' value={carinfo.year} name='year' type='text' onchange={handleInputChange} />
                        <Input label='Sub-Modal' name='submodal' value={carinfo.submodal} type='text' onchange={handleInputChange} />
                    </div>
                    <div className='flex flex-col md:flex-row justify-center  gap-2 md:gap-6'>
                        <Select label='Body' optiondata={Category} name='Body' value={carinfo.Body} onchange={handleInputChange} />
                        <Input label='Vehicle No.' name='Vehicleno' value={carinfo.Vehicleno} onchange={handleInputChange} />


                    </div>
                    <div className='flex flex-col md:flex-row justify-center  gap-2 md:gap-6'>
                        <Select label='Rent/Sell' name='RentorSell' optiondata={[{ brandname: "Rent" }, { brandname: "Sell" }]} value={carinfo.RentorSell} onchange={handleInputChange} />
                        <Input label='Seating' type='number' name='seating' value={carinfo.seating} onchange={handleInputChange} />
                    </div>

                </div>
                <div className='md:basis-[30%] md:px-10'>
                    <h1 className='text-black  pb-3 mb-1 border-b border-neutral-500 font-bold text-xl'> Safety recall terms</h1>
                    <h1 className='text-neutral-500 p-2  text-sm md:text-base my-1 '>
                        To ensure safety for our renters and to comply with regulations, Carent requires vehicle owners to confirm that any safety recalls have been resolved and that related repairs have been completed before listing their vehicle on Carent. If you receive notice of a safety recall at any point after listing your vehicle on Carent, you will need to make your vehicle unavailable until the recall repairs have been completed. If your vehicle is in the possession of a renter when you receive a safety recall notice, you must notify Carent as soon as possible so that you can make the necessary repair. The National Highway Traffic Safety Administration site is an easy way to ensure your vehicle doesn’t have any open recalls which have not been repaired prior to listing your vehicle on Carent. Recalls
                    </h1>
                    <h1 className='text-black  pb-3 mb-1 border-b border-neutral-500 font-bold text-xl'> Need support?</h1>
                    <h1 className='text-neutral-500 p-2  text-sm md:text-base my-1 '>
                        Have questions or need assistance? We’re here to help.

                        Contact us
                        <a href="" className='block text-blue-500'>support@Carent.com</a>
                    </h1>
                </div>
            </div>

        </div>
        )
    if (desstage)
        return (<div className='z-20  bg-white absolute w-screen  min-h-screen transition-all duration-300'>
            <h1 className='flex items-center justify-end  w-[95%] mx-auto mt-5 gap-x-4 '>
                <button className='bg-transparent font-bold  border-blue-200 hover:scale-90 hover:bg-blue-300 hover:text-black cursor-pointer  border-2 px-3  py-1 rounded-xl '
                onClick={()=>{
                    setdesstage(!desstage)
                    setbasicstage(!basicstage)
               }}  > Pervious
                </button>
                <button className='bg-transparent font-bold  border-blue-200 hover:scale-90 hover:bg-blue-300 hover:text-black cursor-pointer  border-2 px-3  py-1 rounded-xl '
                onClick={()=>{
                    setdesstage(!desstage)
                    setPhotostage(!Photostage)
               }}   > Next
                </button>
                <RxCross1 size={20} onClick={() => {
                    setdesstage(!desstage)
                    
                }} />
            </h1>
            <h1 className='  mx-auto px-8 md:px-0 md:w-[70%] font-bold text-start text-xl md:text-3xl'>Vehicle Description
            </h1>
            <div className='flex flex-col md:flex-row  gap-y-5  md:justify-between px-4  md:p-8 items-start '>

                <div className=' mx-auto md:basis-[70%]  md:px-6 '>
                    <div>
                        <label htmlFor="des" className='block  text-xl w-[90%] md:w-[70%] mx-auto text-neutral-600  my-4 font-semibold'  >Vehicle story</label>
                        <textarea name="des" id="" cols={70} rows={10} placeholder='Tell you vehicle story' className=' outline-none block  w-[95%] md:w-[70%] mx-auto  rounded-md bg-blue-50 border-[1px] border-neutral-500' value={carinfo.des} onChange={handleInputChange}  ></textarea>
                    </div>

                </div>
                <div className='md:basis-[30%] md:px-10'>

                    <h1 className='text-black  pb-3 mb-1 border-b border-neutral-500 font-bold text-xl'> Need support?</h1>
                    <h1 className='text-neutral-500 p-2  text-sm md:text-base my-1 '>
                        Have questions or need assistance? We’re here to help.

                        Contact us
                        <a href="" className='block text-blue-500'>support@Carent.com</a>
                    </h1>
                </div>
            </div>

        </div>
        )
    if (enginestage) {
        return (
            <div className='z-20  bg-white absolute md:w-screen    min-h-screen transition-all duration-300'>
                <h1 className='flex items-center justify-end  w-[95%] mx-auto mt-5 gap-x-4 '>
                    <button className='bg-transparent font-bold  border-blue-200 hover:scale-90 hover:bg-blue-300 hover:text-black cursor-pointer  border-2 px-3  py-1 rounded-xl ' 
                     onClick={()=>{
                        setenginestage(!enginestage)
                        setPhotostage(!Photostage)
                   }}  > Pervious
                    </button>
                    <button className='bg-transparent font-bold  border-blue-200 hover:scale-90 hover:bg-blue-300 hover:text-black cursor-pointer  border-2 px-3  py-1 rounded-xl '
                    onClick={()=>{
                        setenginestage(!enginestage)
                        setpricingstage(!pricingstage)
                   }}  > Next
                    </button>
                    <RxCross1 size={20} onClick={() => {
                        setenginestage(!enginestage)
                    }} />
                </h1>
                <h1 className='  mx-auto px-8 md:px-0 md:w-[70%] font-bold text-start text-xl md:text-3xl'>Engine
                </h1>
                <div className='flex flex-col md:flex-row  gap-y-5  md:justify-between px-4  md:p-8 items-start '>

                    <div className=' mx-auto md:basis-[70%]  md:px-6 '>
                        <div className='flex flex-col md:flex-row justify-center  gap-2 md:gap-6'>
                            <Input label='Engine' onchange={handleInputChange} value={carinfo.engine}  name='engine'  />
                            <Select label='Transmission' optiondata={transmissiontype}  onchange={handleInputChange} value={carinfo.transmission} name='transmission'/>

                        </div>
                        <div className='flex flex-col md:flex-row justify-center  gap-2 md:gap-6'>
                            <Select label='Fuel' optiondata={drivetraintype} value={carinfo.fuel} onchange={handleInputChange} name='fuel'   />
                            <Input label='Mileage' onchange={handleInputChange} name='mileage'  value={carinfo.mileage}/>
                        </div>
                        <div className='flex flex-col md:flex-row justify-center  gap-2 md:gap-6'>
                            <Select label='DriveTrain' optiondata={[{ brandname: "Fwd" }, { brandname: "Rwd" }, { brandname: "Awd" }, { brandname: "4X4" }]} value={carinfo.drivetrain}  name='drivetrain'  onchange={handleInputChange}/>
                            <Input label='Driven' type='number' value={carinfo.driven} name='driven' onchange={handleInputChange} />
                        </div>

                    </div>
                    <div className='md:basis-[30%] md:px-10'>

                        <h1 className='text-black  pb-3 mb-1 border-b border-neutral-500 font-bold text-xl'> Need support?</h1>
                        <h1 className='text-neutral-500 p-2  text-sm md:text-base my-1 '>
                            Have questions or need assistance? We’re here to help.

                            Contact us
                            <a href="" className='block text-blue-500'>support@Carent.com</a>
                        </h1>
                    </div>
                </div>
            </div>
        )
    }
    if (Photostage) {
        return (
            <div className='z-20  bg-white absolute   md:w-screen   min-h-screen transition-all duration-300'>
                <h1 className='flex items-center justify-end  w-[95%] mx-auto mt-5 gap-x-4 '>
                    <button className='bg-transparent font-bold  border-blue-200 hover:scale-90 hover:bg-blue-300 hover:text-black cursor-pointer  border-2 px-3  py-1 rounded-xl '
                      onClick={()=>{
                        setPhotostage(!Photostage)
                        setdesstage(!desstage)
                   }}  > Pervious
                    </button>
                    <button className='bg-transparent font-bold  border-blue-200 hover:scale-90 hover:bg-blue-300 hover:text-black cursor-pointer  border-2 px-3  py-1 rounded-xl ' 
                      onClick={()=>{
                        setenginestage(!enginestage)
                        setPhotostage(!Photostage)
                   }}  > Next
                    </button>
                    <RxCross1 size={20} onClick={() => {
                        setPhotostage(!Photostage)
                    }} />
                </h1>
                <h1 className='  mx-auto px-8 md:px-0 md:w-[70%] font-bold text-start text-xl md:text-3xl'>Photos
                </h1>
                <div className='flex flex-col md:flex-row   gap-5  md:justify-between px-4  md:p-8 items-start '>

                    <div className=' flex justify-center flex-wrap gap-3  mx-auto md:basis-[70%]  md:px-6 '>
                        <ImageUpload onChange={coverimageupload} label='Cover- Image' value={carinfo.coverimg} />
                        <ImageUpload onChange={frontimageupload} label='Front- Image' value={carinfo.frontimg}  />
                        <ImageUpload onChange={sideimageupload} value={carinfo.sideimg} label='Side-Image'/>
                        <ImageUpload  onChange={backimageupload} value={carinfo.backimg} label='Back-Image' />

                    </div>
                    <div className='  md:basis-[30%] md:px-10'>

                        <h1 className='text-black  pb-3 mb-1 border-b border-neutral-500 font-bold text-xl'> Need support?</h1>
                        <h1 className='text-neutral-500 p-2  text-sm md:text-base my-1 '>
                            Have questions or need assistance? We’re here to help.

                            Contact us
                            <a href="" className='block text-blue-500'>support@Carent.com</a>
                        </h1>
                    </div>
                </div>
            </div>

        )
    }
    if (pricingstage) {
        return (
            <div className='z-20  bg-white absolute   md:w-screen   min-h-screen transition-all duration-300'>
                <h1 className='flex items-center justify-end  w-[95%] mx-auto mt-5 gap-x-4 '>
                    <button className='bg-transparent font-bold  border-blue-200 hover:scale-90 hover:bg-blue-300 hover:text-black cursor-pointer  border-2 px-3  py-1 rounded-xl ' onClick={()=>{
                         setpricingstage(!pricingstage) 
                         setenginestage(!enginestage)}}> Pervious
                    </button>
                    <button className='bg-transparent font-bold  border-blue-200 hover:scale-90 hover:bg-blue-300 hover:text-black cursor-pointer  border-2 px-3  py-1 rounded-xl ' onClick={onsubmit} > Submit
                    </button>
                    <RxCross1 size={20} onClick={() => {
                        setpricingstage(!pricingstage)
                    }} />
                </h1>
                <h1 className='  mx-auto px-8 md:px-0 md:w-[70%] font-bold text-start text-xl md:text-3xl'>Pricing and  Availability
                </h1>
                <div className='flex flex-col md:flex-row  gap-y-5  md:justify-between px-4  md:p-8 items-start '>

                    <div className=' mx-auto md:basis-[70%]  md:px-6 '>
                        <div className='flex justify-center mx-auto  items-center w-[30rem] '>
                            <Input label='Pricing' value={carinfo.price} name='price' onchange={handleInputChange} />
                        </div>
                        <div className='flex justify-center mx-auto items-center w-[30rem]'>
                            <Input label='Available City' value={carinfo.Availablecity}onchange={handleInputChange} name='Availablecity' />
                        </div>

                    </div>
                    <div className='md:basis-[30%] md:px-10'>

                        <h1 className='text-black  pb-3 mb-1 border-b border-neutral-500 font-bold text-xl'> Need support?</h1>
                        <h1 className='text-neutral-500 p-2  text-sm md:text-base my-1 '>
                            Have questions or need assistance? We’re here to help.

                            Contact us
                            <a href="" className='block text-blue-500'>support@Carent.com</a>
                        </h1>
                    </div>
                </div>
            </div>
        )
    }
    return (

        <div className='mt-8 relative px-4 md:p-8 flex flex-col  justify-between md:flex-row '>
            <div className='basis-[70%] '>
                <h1 className='text-2xl font-bold   tracking-wide   ml-5 md:ml-10     w-[90%] md:w-[70%]  text-neutral-800 border-b-2 pb-4 border-neutral-500'>Rent/Sell Your Car</h1>

                <div className='text-center  flex items-center justify-start px-5 md:text-2xl font-bold hover:bg-blue-50 ml-5 md:ml-10     w-[90%] md:w-[70%] h-20  border-b border-gray-400 '
                    onClick={() => {
                        setbasicstage(!basicstage)
                    }}>Basic Details</div>
                <div className='text-center  flex items-center justify-start px-5 md:text-2xl font-bold hover:bg-blue-50 ml-5 md:ml-10     w-[90%] md:w-[70%] h-20  border-b border-gray-400 '
                    onClick={() => {
                        setdesstage(!desstage)
                    }}>Description</div>
                <div className='text-center  flex items-center justify-start px-5 md:text-2xl font-bold hover:bg-blue-50 ml-5 md:ml-10     w-[90%] md:w-[70%] h-20  border-b border-gray-400 '
                    onClick={() => {
                        setPhotostage(!Photostage)
                    }}>Photos</div>
                <h1 className='text-2xl font-bold   tracking-wide mt-10   ml-5 md:ml-10 w-[90%]  md:w-[70%]  text-neutral-800 border-b-2 pb-4 border-neutral-500'>Additional Details</h1>
                <div className='text-center  flex items-center justify-start px-5 md:text-2xl font-bold hover:bg-blue-50 ml-5 md:ml-10     w-[90%] md:w-[70%] h-20  border-b border-gray-400 '
                    onClick={() => {
                        setenginestage(!enginestage)
                    }} >Engine & others</div>

                <div className='text-center  flex items-center justify-start px-5 md:text-2xl font-bold hover:bg-blue-50 ml-5 md:ml-10     w-[90%] md:w-[70%] h-20  border-b border-gray-400 '
                    onClick={() => {
                        setpricingstage(!pricingstage)
                    }}>Rent/sell Price
                    & Policy</div>




            </div>
            <div className='basis-[30%]
             p-10'>
                <h1 className='text-black  pb-3 mb-1 border-b border-neutral-500 font-bold text-xl'> Need support?</h1>
                Have questions or need assistance? We’re here to help.

                Contact us
                support@Carent.com
            </div>



        </div>
    )
}

export default Post