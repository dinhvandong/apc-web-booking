import React, { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { SlArrowDown } from "react-icons/sl";
import { RiLogoutBoxLine, RiNotification2Line } from 'react-icons/ri';
import ListPackage from './ListPackage';
import { DatePicker, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { IoIosAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import classNames from 'classnames';

const PlanCruise = () => {
    const navigate = useNavigate();

    const [ adult, setAdult] = useState(0);
    const [children, setChildren] = useState(0);
    const [infant, setInfant] = useState(0);
    const [cruiseType, setCruiseType] = useState('Day Cruise');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [isMenuPassengerOpen, setIsMenuPassengerOpen] = useState(false);

    const [packageOption, setPackageOption] = useState(null);
    const [passengerOption, setPassengerOption] = useState(null);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleMenuPassenger = () => {
        setIsMenuPassengerOpen(!isMenuPassengerOpen);
    };
    const handleSearchCruise = () => {
        navigate("/select-your-cabin")

    }

    const [selectedDate, setSelectedDate] = useState(null);
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleOpenDatePicker = () => {
        setShowDatePicker(true);
    };
    const inputStyle = {
        border: 'none',
        boxShadow: 'none',
    };

    const inputInnerStyle = {
        border: 'none',
        outline: 'none',
    };
    const handleCloseDatePicker = () => {
        setShowDatePicker(false);
    };

    const passengers = ['Passenger 1', 'Passenger 2', 'Passenger 3', 'Passenger 4', 'Passenger 5'];

    const items = ['Package 1', 'Package 2', 'Package 3', 'Package 4', 'Package 5'];
    const handleItemSelected = (item) => {
        console.log('Selected item:', item);
        setPackageOption(item);
        // Perform further actions with the selected item
    };

    const handleChangeAdult = ()=>{

        setAdult(adult + 1);

    }
    const handleChangeChildren = ()=>{
        setChildren(children + 1)
    }
    const handleChangeInfant = ()=>{
        setInfant(infant + 1)
    }

    const handleDayCruise = ()=>{

        setCruiseType('Day Cruise');

    }

    const handleDinnerCruise = ()=>{
        setCruiseType('Dinner Cruise');

    }

    const handlePassengerSelected = (item) => {
        console.log('Selected item:', item);
        setPassengerOption(item);
        // Perform further actions with the selected item
    };
    // const handleShowDropDownList =()=>{
    //     setIsMenuOpen
    // }

    
    return (
        <div className='flex overflow-y-auto h-[1000px] flex-col justify-center mt-5 ml-5 mr-5 text-white'>
            <div className=' text-5xl h-[150px] font-bold'>
                <h1>
                    Plan Your HaLong Bay Cruise
                </h1>
            </div>

            <div className='mt-1'>

                <p>Cruise Dates</p>

                <div className='h-[50px] rounded bg-white flex flex-row justify-between items-center ' onClick={handleOpenDatePicker}>
                    <div className='flex text-[#B77855] w-full'>

                        <DatePicker className='w-full'

                            suffixIcon={<SlArrowDown className='text-[#B77855] mr-2' />
                            }
                            style={{ color: '#B77855', width: '100%', border: 'none', boxShadow: 'none' }}
                        />

                    </div>
                    {/* <SlArrowDown className='text-[#B77855] mr-4' /> */}
                </div>
                {/* <div className='relative'>
                    <div className='items-center w-full justify-center z-10 absolute h-auto bg-[#B77855] '>

                        {showDatePicker && (
                            <DatePicker
                                value={selectedDate}
                                onChange={handleDateChange}
                                onOk={handleCloseDatePicker}
                                onPanelChange={handleCloseDatePicker}
                                open
                            />
                        )}

                    </div>
                </div> */}



            </div>

            <div className='mt-5'>

                <p>Passengers</p>

                <div className='h-[50px] rounded bg-white flex flex-row justify-between items-center hover:cursor-pointer' onClick={toggleMenuPassenger}>

                    <div className='flex ml-5 text-[#B77855] w-[80%]'>
                        <p>{adult + " Adults - " + children + " children - " + infant + " infant"}</p>

                    </div>
                    <SlArrowDown className='text-[#B77855] mr-4' />
                </div>
                {isMenuPassengerOpen && (<div onMouseLeave={toggleMenuPassenger} className='relative'>
                    <div className='items-center w-full justify-center z-10 absolute h-auto bg-[#B77855] '>

                        {/* <ListPackage items={passengers} onItemSelected={handlePassengerSelected} /> */}

                        <div className='absolute z-10 flex flex-col items-center justify-center w-full h-auto p-5 mt-1 text-black bg-white rounded-bl rounded-br '>

                            <div className='text-xl font-bold bg-white'>
                                <p>Passengers</p>

                            </div>

                            <div className='flex justify-between w-full p-1 mt-5 bg-white hover:cursor-pointer'>

                                <div className='flex flex-col justify-start w-1/2'>

                                    <div className='font-bold'>
                                        <p>Adults</p>
                                    </div>
                                    <div>
                                        <p>After 12</p>
                                    </div>
                                </div>

                                <div className='flex flex-row text-[16px] justify-end w-1/2 rounded '>

                                    <div className='mr-5 font-bold'>
                                        <RiSubtractFill className='w-[20px] h-[20px] text-[#B77855]' />
                                    </div>
                                    <div className='mr-5 font-bold'>
                                        <p>{adult}</p>
                                    </div>
                                    <div className='font-bold'>
                                        <IoIosAdd onClick={handleChangeAdult} className='w-[20px] h-[20px] text-[#B77855]' />
                                    </div>
                                </div>
                            </div>

                            <div className='w-full h-2 bg-gray-200'>

                            </div>
                            <div className='flex justify-between w-full p-1 mt-5 bg-white hover:cursor-pointer'>

                                <div className='flex flex-col justify-start w-1/2'>

                                    <div className='font-bold'>
                                        <p>Children</p>
                                    </div>
                                    <div>
                                        <p>6-12 years</p>
                                    </div>
                                </div>

                                <div className='flex flex-row text-[16px] justify-end w-1/2 rounded '>

                                    <div className='mr-5 font-bold'>
                                        <RiSubtractFill className='w-[20px] h-[20px] text-[#B77855]' />
                                    </div>
                                    <div className='mr-5 font-bold'>
                                        <p>{children}</p>
                                    </div>
                                    <div className='font-bold'>
                                        <IoIosAdd onClick={handleChangeChildren} className='w-[20px] h-[20px] text-[#B77855]' />
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-2 bg-gray-200'>

                            </div>
                            <div className='flex justify-between w-full p-1 mt-5 bg-white hover:cursor-pointer'>

                                <div className='flex flex-col justify-start w-1/2'>

                                    <div className='font-bold'>
                                        <p>Infant</p>
                                    </div>
                                    <div>
                                        <p>0-6 years</p>
                                    </div>
                                </div>

                                <div className='flex flex-row text-[16px] justify-end w-1/2 rounded '>

                                    <div className='mr-5 font-bold'>
                                        <RiSubtractFill className='w-[20px] h-[20px] text-[#B77855]' />
                                    </div>
                                    <div className='mr-5 font-bold'>
                                        <p>{infant}</p>
                                    </div>
                                    <div className='font-bold'>
                                        <IoIosAdd onClick={handleChangeInfant} className='w-[20px] h-[20px] text-[#B77855]' />
                                    </div>
                                </div>
                            </div>


                            <div className='hover:cursor-pointer bg-[#B77855] text-white h-[60px] flex justify-center items-center font-bold rounded mt-5 w-full p-5'>
                                <p>Done</p>
                            </div>


                            {/* <ListPackage items={items} onItemSelected={handleItemSelected} /> */}




                        </div>

                    </div>
                </div>)}

            </div>
            <div className='mt-5'>

                <p>Cruise Package</p>

                <div className='h-[50px] rounded bg-white flex flex-row justify-between items-center hover:cursor-pointer' onClick={toggleMenu}>

                    <div className='flex ml-5 text-[#B77855] w-[80%]'>
                        <p>{cruiseType}</p>

                    </div>
                    <SlArrowDown className='text-[#B77855] mr-4' />
                </div>
                {isMenuOpen && (<div onMouseLeave={toggleMenu} className='relative'>
                    <div className='absolute z-10 flex flex-col items-center justify-center w-full h-auto p-5 mt-1 text-black bg-white rounded-bl rounded-br '>

                        <div className='text-xl font-bold'>
                            <p>Cruise Package</p>

                        </div>
                        <div  onClick={handleDayCruise} className={`hover:cursor-pointer flex mt-5  p-1 rounded  justify-between w-full ${cruiseType==='Day Cruise' ? 'text-white bg-[#2F4842]' : 'text-black bg-white'}`}>

                            <div className='flex flex-col justify-start w-1/2'>

                                <div className='font-bold'>
                                    <p>Day cruise</p>
                                </div>
                                <div>
                                    <p>From 10:00 to 17:00</p>
                                </div>
                            </div>

                            <div className='flex flex-col justify-start w-1/2 rounded '>

                                <div className='font-bold'>
                                    <p>Starting from</p>
                                </div>
                                <div>
                                    <p>1,389,150 VND</p>
                                </div>
                            </div>
                        </div>

                        <div  onClick={handleDinnerCruise} className={`hover:cursor-pointer flex mt-5  p-1 rounded  justify-between w-full ${cruiseType==='Dinner Cruise' ? 'text-white bg-[#2F4842]' : 'text-black bg-white'}`}>

                            <div className='flex flex-col justify-start w-1/2'>

                                <div className='font-bold'>
                                    <p>Dinner Cruise</p>
                                </div>
                                <div>
                                    <p>From 17:00 to 22:00</p>
                                </div>
                            </div>

                            <div className='flex flex-col justify-start w-1/2 '>

                                <div className='font-bold'>
                                    <p>Starting from</p>
                                </div>
                                <div>
                                    <p>1,389,150 VND</p>
                                </div>
                            </div>
                        </div>


                        <div className='hover:cursor-pointer bg-[#B77855] text-white h-[60px] flex justify-center items-center font-bold rounded mt-5 w-full p-5'>
                            <p>Next</p>
                        </div>


                        {/* <ListPackage items={items} onItemSelected={handleItemSelected} /> */}




                    </div>
                </div>)}

            </div>

            <div className='mt-5'>

                <p>Promotional Code</p>

                <div className='h-[50px] rounded bg-white flex flex-row justify-between items-center hover:cursor-pointer'>
                    <input className='w-full h-full m-2 text-black border border-transparent focus:outline-none' placeholder='Enter your promotion' />
                    {/* <div className='flex ml-5 text-[#B77855] w-[80%]'>
                        <p>{packageOption}</p>

                    </div>
                    <SlArrowDown className='text-[#B77855] mr-4' /> */}
                </div>
                {/* {isMenuOpen && (<div onMouseLeave={toggleMenu} className='relative'>
                    <div className='items-center w-full justify-center z-10 absolute h-auto bg-[#B77855] '>

                        <ListPackage items={items} onItemSelected={handleItemSelected} />


                    </div>
                </div>)} */}

            </div>

            <button className='h-[50px] rounded mt-5  bg-[#B77855]' onClick={handleSearchCruise}>
                Search
            </button>



            {/* <div className='mt-1  h-[96px]'>
                <h4> {detail}
                </h4>
            </div>
            <div className="flex justify-between w-full mt-4 md:justify-center">
                <button className=" w-[160px] flex items-center space-x-2 text-white p-2 rounded">
                   <img src={btnDayCruise}/>
                </button>
                <button className=" w-[160px] flex items-center space-x-2 text-white p-2 rounded">
                    <img src={btnOvernightCruise}/>
                </button>
            </div> */}


        </div>
    )
}

export default PlanCruise