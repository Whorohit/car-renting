import React, { useCallback, useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Category from '../../public/category.json'
import Image from 'next/image';
import { brandname } from '../../hooks/brandname';
import Transmission from '../../public/Transmission.json'
import Fuel from '../../public/Fuel.json'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Input from './Formfield/Input';
import { useSelector } from 'react-redux';
import { toggleFilterModal, updateFilterBrand, updateFilterCategory, updateFilterFuel, updateFilterTransmission, updateBudgetFilter, ClearFilter } from '../store/index';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { PiCheckFatLight, PiCheckFatThin } from "react-icons/pi";
import { useFilterCar } from '../../hooks/useFilter';
type Props = {}

const FilterBoard: React.FC<Props> = ({ }) => {

    const { isOpen: isFilterOpen,
        Brand: Brandlist,
        Category: Categorylist,
        Fuel: Fuellist,
        Budget: BudgetList,
        Transmission: Transmissionlist,
        sort: sortorder } = useSelector((state: any) => state.Filter);
    const router = useRouter();
    const dispatch = useDispatch()
    const [state, setState] = useState({
        showCategory: false,
        showBrand: false,
        showTransmission: false,
        showFuel: false,
        showBudget: false,
        showPop: false
    });
    console.log(BudgetList)
    const { data: Brand } = brandname()
    const toggleState = useCallback(
        (key: keyof typeof state) => {
            setState(prevState => ({
                ...prevState,
                [key]: !prevState[key]
            }));
        },


        [setState]

    );
    const marks = {
        0: '0',

        100000: '1l',
        500000: '5l',
        1000000: '10l',
        2000000: '20l'
    };
    const [sliderValue, setSliderValue] = useState(BudgetList);

    const handleSliderChange = (value: any) => {
        setSliderValue(value);
        dispatch(updateBudgetFilter(sliderValue))

    };


    const changemin = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const newMinValue = parseInt(e.target.value, 10); // Parse the value to an integer
            setSliderValue((prevValue: any) => [newMinValue, prevValue[1]]);
            dispatch(updateBudgetFilter([newMinValue, sliderValue[1]]))

        },

        [setSliderValue]
    );
    const changemax = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const newMinValue = parseInt(e.target.value, 10); // Parse the value to an integer
            setSliderValue((prevValue: any) => [prevValue[0], newMinValue,]);
            dispatch(updateBudgetFilter([sliderValue[0], newMinValue]))

        },
        [setSliderValue]
    );
    const toggleboard = useCallback(
        () => {
            dispatch(toggleFilterModal())
        },
        [dispatch, toggleFilterModal],
    )

    if (!isFilterOpen) {
        return (
            null
        )
    }
    const handleBrandSelection = (brandItem: string) => {
        dispatch(updateFilterBrand(brandItem))
    };
    const handleBodySelection = (brandItem: string) => {
        dispatch(updateFilterCategory(brandItem))
    };
    const handleTranmissionSelection = (brandItem: string) => {
        dispatch(updateFilterTransmission(brandItem))
    };
    const handleFuelSelection = (brandItem: string) => {
        dispatch(updateFilterFuel(brandItem))
    };

    return (

        <div className='inset-0 w-full m-0 bg-black bg-opacity-60   top-0 fixed z-[60] flex justify-center items-center '>
            <div className='w-[80%]  h-fit min-h-[30rem] min-w-[20rem]   rounded-md  bg-blue-50 '>

                <h1 className='flex  justify-between items-center  mx-auto shadow-lg  border-b font-sans border-b-gray-200  px-3  py-5 md:font-bold text-neutral-700 text-4xl font-normal  tracking-wide '>Filter <RxCross2 size={25} onClick={toggleboard} className=' bg-transparent rounded-full  cursor-pointer h-8   ' /> </h1>
                <div className='h-[20rem]  flex flex-col  justify-start items-start overflow-y-scroll px-8 gap-5  my-4 no-scrollbar      scroll   '>
                    <div className='rounded-md py-4 text-xl text-neutral-700 bg-blue-100 w-full pl-4'>
                        <h1 className='flex text-2xl justify-between items-center px-3'>
                            Budget <MdOutlineKeyboardArrowDown size={25} className={`transform transition-transform duration-300 ${state.showBudget ? 'rotate-180' : ''}`} onClick={() => toggleState('showBudget')} />
                        </h1>
                        <h1 className={`text-2xl text-blue-600 text-start mx-auto w-[95%] my-4 overflow-hidden transition-max-height duration-300     ${!state.showBudget ? "max-h-[3rem]" : "max-h-0"}`}>{sliderValue[0] / 1000}k-{sliderValue[1] / 1000}k </h1>
                        <div className={`overflow-hidden text-xl transition-max-height duration-300 ${state.showBudget ? ' min-h-[7rem]  max-h-[25rem]' : 'max-h-0'}`}>
                            <div className='flex justify-center items-center px-5 my-6'>
                                <Slider
                                  className='text-xl'
                                    range
                                    min={0}
                                    allowCross={false}
                                    max={2000000}
                                    marks={marks}
                                    onChange={handleSliderChange}

                                    value={sliderValue}
                                />
                            </div>
                            <div className='flex justify-between text-base my-4 pt-7 px-5 items-end '>
                                <Input label='Min' classname='w-[8rem] h-[3rem]  md:h-[2.5rem] rounded-md  py-0 my-0' value={sliderValue[0]} classnamelabel='w-[6rem] h-[1rem] rounded-md  py-0 my-0' type='number' onchange={(e) => (changemin(e))} />
                                <Input label='Max' value={sliderValue[1]} classname='w-[8rem] md:h-[3rem] h-[2.5rem] rounded-md  py-0 my-0' classnamelabel='w-[6rem] h-[1rem] rounded-md  py-0 my-0' type='number' onchange={(e) => (changemax(e))} />
                            </div>
                        </div>
                    </div>
                    <div className='rounded-md py-4 text-xl text-neutral-700 bg-blue-100 w-full pl-4'>
                        <h1 className='flex justify-between items-center px-3'>
                            Body Type <MdOutlineKeyboardArrowDown size={25} className={`transform transition-transform duration-300 ${state.showCategory ? 'rotate-180' : ''}`} onClick={() => toggleState('showCategory')} />
                        </h1>
                        <div className={`overflow-hidden transition-max-height duration-300 ${state.showCategory ? 'max-h-[50rem]' : 'max-h-0'}`}>
                            <div className='flex flex-wrap flex-row gap-4 px-2 items-center justify-center my-5'>
                                {Category?.map((item) => (
                                    <div onClick={() => {
                                        handleBodySelection(item.brandname)
                                    }} className={` h-[10rem] md:h-[6rem] w-[10rem]  md:w-[8rem] opacity-70 flex justify-center  relative rounded-md  ${Categorylist.includes(item.brandname) ? " border-[1.7px] border-sky-600" : " border-gray-500 border-[1px]"}  flex-col items-center text-neutral-600 p-3 `} >
                                        {Categorylist.includes(item.brandname) && <PiCheckFatLight className='absolute top-0 right-0  text-sky-600   rounded-full font-bold ' />}
                                        <Image src={item.brandimage} className='flex justify-center ' width={120} height={120} alt={item.brandname} />
                                        <h1 className={`text-xs md:text-sm mt-1 ${Categorylist.includes(item.brandname) ? "font-semibold text-sky-500" : ""}  `}>{item.brandname}</h1>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='rounded-md py-4 text-xl text-neutral-700 bg-blue-100 w-full pl-4'>
                        <h1 className='flex justify-between items-center px-3 text-2xl'>
                            Brand <MdOutlineKeyboardArrowDown size={25} className={`transform transition-transform duration-300 ${state.showBrand ? 'rotate-180' : ''}`} onClick={() => toggleState('showBrand')} />
                        </h1>
                        <div className={`overflow-hidden transition-max-height duration-300 ${state.showBrand ? 'min-h-[40rem]' : 'max-h-0'}`}>
                            <div className='flex flex-wrap flex-row gap-4 px-2 items-center justify-center my-5' >
                                {Brand?.map((item: Record<string, any>) => (
                                    <div key={item.brandname} onClick={() => {
                                        handleBrandSelection(item.brandname)
                                    }} className={`h-[10rem] w-[10rem]  md:w-[8rem] opacity-70 flex justify-center  relative rounded-md  ${Brandlist.includes(item.brandname) ? " border-[1.7px] border-sky-600" : " border-gray-500 border-[1px]"}  flex-col items-center text-neutral-600 p-3 `}>
                                        {Brandlist.includes(item.brandname) && <PiCheckFatLight className='absolute top-0 right-0  text-sky-600   rounded-full font-bold ' />}
                                        <Image src={item.brandimage} className='flex justify-center rounded-md' width={100} height={120} alt={item.brandname} />
                                        <h1 className={`text-xs md:text-sm ${Brandlist.includes(item.brandname) ? "font-semibold text-sky-500" : ""}  `}>{item.brandname}</h1>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='rounded-md py-4 text-xl text-neutral-700 bg-blue-100 w-full pl-4'>
                        <h1 className='flex justify-between items-center px-3'>
                            Transmission <MdOutlineKeyboardArrowDown size={25} className={`transform transition-transform duration-300 ${state.showTransmission ? 'rotate-180' : ''}`} onClick={() => toggleState('showTransmission')} />
                        </h1>
                        <div className={`overflow-hidden transition-max-height duration-700 ${state.showTransmission ? 'max-h-[15rem]' : 'max-h-0'}`}>
                            <div className='flex flex-wrap flex-row  gap-5 md:gap-4 px-2 items-center justify-start my-5'>
                                {Transmission?.map((item: Record<string, any>) => (
                                    <div key={item.brandname} className={`h-[10rem] w-[10rem]  md:w-[8rem] opacity-70 flex justify-center  relative rounded-md  ${Transmissionlist.includes(item.brandname) ? " border-[1.7px] border-sky-600" : " border-gray-500 border-[1px]"}  flex-col items-center text-neutral-600 p-3 `} onClick={() => {
                                        handleTranmissionSelection(item.brandname)
                                    }}>
                                        {Transmissionlist.includes(item.brandname) && <PiCheckFatLight className='absolute top-0 right-0  text-sky-600   rounded-full font-bold ' />}
                                        <Image src={item.brandimage} className='flex justify-center rounded-md' width={50} height={50} alt={item.brandname} />
                                        <h1 className={`text-xs md:text-sm ${Transmissionlist.includes(item.brandname) ? "font-semibold text-sky-500" : ""}  `}>{item.brandname}</h1>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='rounded-md py-4 text-xl text-neutral-700 bg-blue-100 w-full pl-4'>
                        <h1 className='flex justify-between items-center px-3'>
                            Fuel <MdOutlineKeyboardArrowDown size={25} className={`transform transition-transform duration-300 ${state.showFuel ? 'rotate-180' : ''}`} onClick={() => toggleState('showFuel')} />
                        </h1>
                        <div className={`overflow-hidden transition-max-height duration-300 ${state.showFuel ? 'max-h-[30rem]' : 'max-h-0'}`}>
                            <div className='flex flex-wrap flex-row gap-4 px-2 items-center justify-center my-5'>
                                {Fuel?.map((item: Record<string, any>) => (
                                    <div key={item.brandname} className={`h-[10rem] w-[10rem]  md:w-[8rem] opacity-70 flex justify-center  relative rounded-md  ${Fuellist.includes(item.brandname) ? " border-[1.7px] border-sky-600" : " border-gray-500 border-[1px]"}  flex-col items-center text-neutral-600 p-3 `} onClick={() => {
                                        handleFuelSelection(item.brandname)
                                    }} >
                                        {Fuellist.includes(item.brandname) && <PiCheckFatLight className='absolute top-0 right-0  text-sky-600   rounded-full font-bold ' />}
                                        <Image src={item.brandimage} className='flex justify-center rounded-md' width={100} height={100} alt={item.brandname} />
                                        <h1 className={`text-xs md:text-sm ${Transmissionlist.includes(item.brandname) ? "font-semibold text-sky-500" : ""}  `}>{item.brandname}</h1>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='rounded-md py-4 text-xl text-neutral-700 bg-blue-100 w-full pl-4'>
                        <h1 className='flex justify-between items-center px-3'>
                            Popularity <MdOutlineKeyboardArrowDown size={25} className={`transform transition-transform duration-300 ${state.showPop ? 'rotate-180' : ''}`} onClick={() => toggleState('showPop')} />
                        </h1>
                        <div className={`overflow-hidden transition-max-height duration-300 ${state.showPop ? 'max-h-[20rem]' : 'max-h-0'}`}>
                            <div className='flex flex-wrap flex-row gap-4 px-2 items-center justify-start my-5'>
                                {['Low to High', "High to Low"]?.map((item) => (
                                    <div key={item} className='h-[7rem] w-[7rem]  md:w-[8rem] opacity-70 flex justify-center border-[1px] rounded-md border-gray-500 flex-col items-center text-neutral-600 p-3'>

                                        <h1 className='text-2xl'>{item}</h1>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex justify-end items-center  gap-4 p-4'>
                    <button className='py-1  px-2 bg-neutral-100 rounded-md border hover:bg-neutral-300 text-neutral-800 border-neutral-200' onClick={() => {
                        dispatch(ClearFilter())
                        setSliderValue([0, 2000000])
                        toggleboard()
                    }}
                    >Clear</button>
                    <button className='py-1  px-2 bg-blue-200 rounded-md border-2 hover:bg-blue-400 text-neutral-800' onClick={() => {

                        if (!router.pathname.includes("/Filtercar")) {
                            router.push('/Filtercar')
                        }
                        toggleboard()

                    }} >Continue</button>
                </div>
            </div>
        </div>
    )
}

export default FilterBoard