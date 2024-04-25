import React from 'react'
import HeaderSelectCabin from '../components/HeaderSelectCabin'
import SelectCabin from '../components/SelectCabin'
import EventItem from '../components/EventItem'
import { useNavigate } from 'react-router-dom'

const SelectCabinPage = () => {

    const navigate = useNavigate();

    const gotoContactInfor = ()=>{
        navigate('/contact');
    }
    return (
        <div className='flex flex-col items-center justify-center w-full mb-[100px] h-auto'>
            <HeaderSelectCabin />
            <div className='mt-[100px] flex  w-full md:w-[600px] items-center h-auto flex-row justify-between'>
                <div className=' hover:cursor-pointer items-center  p-4 rounded-md md:w-[300px] w-1/2 h-auto bg-[#2F4842] text-white text-[14px] font-bold'> <p className='text-center'>Flexible Rate </p> </div>
                <div className='hover:cursor-pointer items-center  p-4 rounded-md md:w-[300px] w-1/2 h-auto ml-2  text-[#2F4842] bg-[#B2D0C6] text-[14px] font-bold'><p className='text-center'>Non-Refundable Rate </p></div>
            </div>
            <div className='flex flex-col mb-[100px]'>
            <EventItem />
            <EventItem />
            <EventItem />
            <EventItem />
            <EventItem />
            <EventItem />
            </div>
            <nav className={`fixed bottom-0 left-0 right-0 z-10  w-full bg-white flex justify-around py-4`}>

                <div className='w-full md:w-[600px] m-5 h-[60px] flex flex-row'>
                    <div className='flex flex-col w-1/2 font-bold text-brown_color'>
                        <div>
                            <p>FLEXIBLE RATE</p>
                        </div>

                        <div>
                            <p>1,984,500 VND/person</p>
                        </div>

                    </div>


                    <div onClick={gotoContactInfor} className='flex items-center justify-center w-1/2 h-full font-bold text-center text-white rounded hover:cursor-pointer bg-brown_color'>

                        <p>Select</p>
                    </div>




                </div>


            </nav>
        </div>
    )
}

export default SelectCabinPage