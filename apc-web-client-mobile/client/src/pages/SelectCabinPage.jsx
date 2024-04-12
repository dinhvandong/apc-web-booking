import React from 'react'
import HeaderSelectCabin from '../components/HeaderSelectCabin'
import SelectCabin from '../components/SelectCabin'

const SelectCabinPage = () => {
  return (
    <div className='w-full h-auto flex flex-col'>
        <HeaderSelectCabin/>
        <div className='mt-[100px] md:mt-[200px] ml-5 mr-5 md:m-10 flex h-auto flex-row justify-between'>
            <div className='items-center md:pl-10 md:pr-10 md:pt-10 md:pb-10  pl-5 pr-5 pt-1 pb-1 rounded-md md:w-1/2 w-1/2 h-auto bg-[#2F4842] text-white text-[14px] font-bold'> <p className='text-center'>Flexible Rate </p> </div>
            <div className='items-center md:pl-10 md:pr-10 md:pt-10 md:pb-10  pl-5 pr-5 pt-1 pb-1 rounded-md md:w-1/2 w-1/2 h-auto ml-2  text-[#2F4842] bg-[#B2D0C6] text-[14px] font-bold'><p className='text-center'>Non-Refundable Rate </p></div>
        </div>
        <SelectCabin/>
        </div>
    )
}

export default SelectCabinPage