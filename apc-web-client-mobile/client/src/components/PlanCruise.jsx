import React, { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { SlArrowDown } from "react-icons/sl";
import { RiLogoutBoxLine, RiNotification2Line } from 'react-icons/ri';
import ListPackage from './ListPackage';
import { DatePicker, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

const PlanCruise = () => {
    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [packageOption, setPackageOption] = useState(null);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleSearchCruise = ()=>
    {
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
    const items = ['Package 1', 'Package 2', 'Package 3', 'Package 4', 'Package 5'];
    const handleItemSelected = (item) => {
        console.log('Selected item:', item);
        setPackageOption(item);
        // Perform further actions with the selected item
    };
    // const handleShowDropDownList =()=>{
    //     setIsMenuOpen
    // }
    return (
        <div className='justify-center flex flex-col mt-5 ml-5 mr-5 text-white'>
            <div className=' text-5xl h-[168px] font-bold'>
                <h1>
                    Plan Your HaLong Bay Cruise
                </h1>
            </div>

            <div className='mt-5'>

                <p>Cruise Dates</p>

                <div className='h-8 bg-white flex flex-row justify-between items-center ' onClick={handleOpenDatePicker}>
                    <div className='flex text-[#B77855] w-[100%]'>

                        <DatePicker

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

                <p>Cruise Package</p>

                <div className='h-8 bg-white flex flex-row justify-between items-center hover:cursor-pointer' onClick={toggleMenu}>

                    <div className='flex ml-5 text-[#B77855] w-[80%]'>
                        <p>{packageOption}</p>

                    </div>
                    <SlArrowDown className='text-[#B77855] mr-4' />
                </div>
                {isMenuOpen && (<div onMouseLeave={toggleMenu} className='relative'>
                    <div className='items-center w-full justify-center z-10 absolute h-auto bg-[#B77855] '>

                        <ListPackage items={items} onItemSelected={handleItemSelected} />


                    </div>
                </div>)}

            </div>

            <button className='h-8 mt-5 rounded-sm bg-[#B77855]' onClick={handleSearchCruise}>
                Search
            </button>



            {/* <div className='mt-1  h-[96px]'>
                <h4> {detail}
                </h4>
            </div>
            <div className="flex justify-between  md:justify-center  w-full mt-4">
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