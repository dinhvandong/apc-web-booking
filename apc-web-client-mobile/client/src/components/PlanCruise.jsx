import React, { useContext, useEffect, useState } from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { SlArrowDown } from "react-icons/sl";
import { RiLogoutBoxLine, RiNotification2Line } from 'react-icons/ri';
import ListPackage from './ListPackage';
import { DatePicker, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { IoIosAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import classNames from 'classnames';
import MonthPicker from './MonthPicker';
import { MdOutlineKeyboardArrowLeft, MdSouth } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { getPriceByDate, getPriceFromDateToDate, getPriceFromMonth } from './../services/api_priceday';
import { AuthContext } from '../AuthProvider';

const PlanCruise = (props) => {
    const navigate = useNavigate();
    const { id } = props;

    const { updateBookingInfo } = useContext(AuthContext);

    const [adult, setAdult] = useState(1);
    const [children, setChildren] = useState(0);
    const [infant, setInfant] = useState(0);
    const [cruiseType, setCruiseType] = useState('Day Cruise');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [showDate, setShowDate] = useState(false);
    const [isMenuPassengerOpen, setIsMenuPassengerOpen] = useState(false);

    const [packageOption, setPackageOption] = useState(null);
    const [passengerOption, setPassengerOption] = useState(null);
    const [priceDayCruise, priceDinnerCruise] = useState(0);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [dateResultString, setDateResultString] = useState('');
    const toggleDate = () => {
        //  console.log("Curise Type:", cruiseType);
        setShowDate(!showDate);
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.toLocaleString('en-US', { weekday: 'short' });
        const month = date.toLocaleString('en-US', { month: '2-digit' });
        const dayNumber = date.getDate();
        console.log("dayNumner:", dayNumber);
        const monthText = date.toLocaleString('en-US', { month: 'short' });

        return `${day}, ${dayNumber} ${monthText}`;
    };

    const getFormattedDate = () => {
        const currentDate = new Date();
        const day = currentDate.getDate().toString().padStart(2, '0');
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const year = currentDate.getFullYear().toString();

        return `${month}/${parseInt(day)}/${year}`;
    };

    const toggleMenuPassenger = () => {
        setIsMenuPassengerOpen(!isMenuPassengerOpen);
    };
    const handleSearchCruise = () => {
        navigate("/select-your-cabin/flexible")

    }

    const handleDateChange = (date) => {
        // setSelectedDate(date);
    };

    const passengers = ['Passenger 1', 'Passenger 2', 'Passenger 3', 'Passenger 4', 'Passenger 5'];

    const items = ['Package 1', 'Package 2', 'Package 3', 'Package 4', 'Package 5'];
    const handleItemSelected = (item) => {
        console.log('Selected item:', item);
        setPackageOption(item);
        // Perform further actions with the selected item
    };

    const handleChangeAdult = () => {
        setAdult(adult + 1);

    }

    const handleChangeAdultSub = () => {
        if (adult > 0) {
            setAdult(adult - 1);

        }

    }
    const handleChangeChildren = () => {
        setChildren(children + 1)
    }

    const handleChangeChildrenSub = () => {
        if (children > 0) {
            setChildren(children - 1)

        }
    }


    const handleChangeInfant = () => {
        setInfant(infant + 1)
    }

    const handleChangeInfantSub = () => {
        if (infant > 0) {
            setInfant(infant - 1)

        }
    }

    const handleDayCruise = () => {
        console.log("Day Cruise");
        setCruiseType('Day Cruise');
    }

    const handleDinnerCruise = () => {
        console.log("Dinner Cruise");

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

    //====================DATE PICKER HERE ==========================================
    const [selectedMonth, setSelectedMonth] = useState(1);
    const [selectedYear, setSelectedYear] = useState(2024);
    const [selectedDay, setSelectedDay] = useState(-1);
    const [headerTime, setHeaderTime] = useState('Jun 2023');
    const [priceByDate, setPriceByDate] = useState(null);

    const { updatePriceDate } = useContext(AuthContext);

    const [dateTimeSelect, setDateTimeSelect] = useState(
        formatDateYYYYMMDD(
            new Date().getDay(),
            new Date().getMonth + 1,
            new Date().getFullYear()));
    const getMonthText = (month) => {
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        return monthNames[month - 1];
    };

    function convertMonthAndYearToYYYYMM(month, year) {
        const monthString = month.toString().padStart(2, '0');  // Ensure 2-digit month with leading zero
        const yearString = year.toString();
        return yearString + monthString;
    }
    const getDataByMonth = async (currentMonth) => {
        const result = await getPriceFromMonth(currentMonth);
        console.log("Result:", result);
        setArrayPriceTime(result);
    };
    const changeTime = () => {
        const monthText = (getMonthText(selectedMonth)).toString() + ' ' + selectedYear;
        setHeaderTime(monthText);
        const monthString = convertMonthAndYearToYYYYMM(selectedMonth, selectedYear);
        setCurrentMonth(monthString);
        console.log("getDataByMonth:", monthString);
        getDataByMonth(monthString);

        handleEmptyCell();
    }
    const [currentMonth, setCurrentMonth] = useState('202401');
    const handleMonthChange = (event) => {
        console.log("Month:", event.target.value);
        setSelectedMonth(event.target.value);
    };

    const handleNexTime = () => {
        if (selectedMonth >= 12) {
            setSelectedMonth(1);
            setSelectedYear(selectedYear + 1);
        } else {
            setSelectedMonth(selectedMonth + 1);
        }
        console.log("XXXX-Date2:", formatDateYYYYMMDD(selectedDay, selectedMonth, selectedYear));

        changeTime();
    }

    const handlePreviousTime = () => {
        if (selectedMonth > 1) {
            setSelectedMonth(selectedMonth - 1);
        } else {
            setSelectedYear(selectedYear - 1);
        }
        changeTime();
    }

    const handleYearChange = (event) => {
        console.log("Year:", event.target.value);
        setSelectedYear(event.target.value);
    };


    function formatDateYYYYMMDD(dayValue, monthValue, yearValue) {
        // Create a new Date object using the provided values
        const date = new Date(yearValue, monthValue - 1, dayValue);
        // Extract the individual date components
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        // Format the date in "YYYY/MM/DD" format
        const formattedDate = `${year}${month}${day}`;

        return formattedDate;
    }

    const convertDateFormat = (dateString) => {
        const stringDate = dateString.toString();
        if (dateString.length <= 0) return "";
        // Extract year, month, and day from the input dateString
        const year = stringDate.substring(0, 4);
        const month = stringDate.substring(4, 6);
        const day = stringDate.substring(6, 8);


        // Construct the new date string in dd/MM/yyyy format
        const newDateString = `${day}/${month}/${year}`;

        return newDateString;
    };

    const handleSelectDay = (dateTimeString) => {
        setDateResultString((dateTimeString));
        setDateTimeSelect(dateTimeString);
        fetchDataPriceByDate(dateTimeString);
    }
    const handleDayChange = (day) => {
        // Handle the selected day here
        console.log("day:", day);
        setSelectedDay(day);

        console.log("selectedDay:", selectedDay);
        console.log("selectedMonth:", selectedMonth);
        console.log("selectedYear:", selectedYear);
        setSelectedDay(day);
        const dateTimeString = `${selectedMonth}/${selectedDay}/${selectedYear}`;
        setDateResultString(dateTimeString);
        // call api 
    };

    const getDaysInMonth = (month, year) => {
        return new Date(year, month, 0).getDate();
    };

    const handleClear = () => {
        setSelectedDay(-1);
        setDateTimeSelect("");
    }

    const getPrice = async (day, type) => {
        const date = day;
        const month = selectedMonth;
        const year = selectedYear;

        const dateString = formatDateYYYYMMDD(date, month, year);
        const result = await getPriceByDate(dateString);
        if (type == 'night') return result.priceDinner;
        else return result.priceDay;
    }

    const daysInMonth = getDaysInMonth(selectedMonth, selectedYear);
    const daysArray = Array.from({ length: daysInMonth }, (_, index) => index + 1);

    const [arrayPriceTime, setArrayPriceTime] = useState([]);
    const [isFirst, setIsFirst] = useState(true);

    function getCurrentDate() {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const day = currentDate.getDate().toString().padStart(2, '0');
        return `${year}${month}${day}`;
    }
    // useEffect(async () => {

    // }, []);

    const fetchDataPriceByDate = async (dateString) => {
        try {
            const response = await getPriceByDate(dateString);
            // const jsonData = await response.json();
            // console.log("SetPriceByDate:", response);
            setPriceByDate(response);
            updatePriceDate(response);
        } catch (error) {
            console.log('Error:', error);
        }
    };
    useEffect(() => {

        if (id === 1) 
        {
            setCruiseType('Day Cruise');
        } else 
        {
            setCruiseType('Dinner Cruise');
        }
        
        const getData = async (currentMonth) => {
            const result = await getPriceFromMonth(currentMonth);
            console.log("Result:", result);
            setArrayPriceTime(result);
        };
        if (isFirst) {
            const year = new Date().getFullYear();
            const month = new Date().getMonth() + 1;
            const day = new Date().getDate();
            setSelectedDay(day);
            setSelectedMonth(month);
            setSelectedYear(year);
            const dateTimeString = formatDateYYYYMMDD(day, month, year);
            const yearString = dateTimeString.substr(0, 4);
            const monthString = dateTimeString.substr(4, 2);
            const currentMonth = yearString + monthString;
            setCurrentMonth(currentMonth);
            const monthText = (getMonthText(month)).toString() + ' ' + year.toString()
            setHeaderTime(monthText)
            getData(currentMonth);
            // NEXT LOGIC 
            const currentDate = getCurrentDate();
            setDateResultString(currentDate);
            setSelectedDay(getCurrentDate);
            fetchDataPriceByDate(getCurrentDate());
            setIsFirst(false);
        }

    }, [currentMonth]);

    function extractDayFromDate(dateString) {
        const [year, month, day] = dateString.split("/");
        return day;
    }


    const handleUpdateBookingInfo = () => {
        console.log("dateResultString:", dateResultString);
       

        const newBookingInfo = {
            bookingDate: parseInt(dateResultString),
            customerName: '',
            adult: adult,
            children: children,
            infant: infant,
            price: (cruiseType === 'Day Cruise') ? priceByDate.priceDay : priceByDate.priceDinner,
            cruiseType: cruiseType,
            flexibleOrNonRefund: true
        };
        console.log("bookingInfo:", adult);
        updateBookingInfo(newBookingInfo)
        // updateBookingInfo({ adult: adult });
        // updateBookingInfo({ children: children });
        // updateBookingInfo({ infant: infant });
        // updateBookingInfo({ adult: adult });
        // updateBookingInfo({
        //     price: (cruiseType === 'Day Cruise') ? priceByDate.priceDay : priceByDate.priceDinner,
        // })
        // updateBookingInfo({ cruiseType: cruiseType });
        // updateBookingInfo({ flexibleOrNonRefund: true });

    };

    const nextAction = () => {
        handleUpdateBookingInfo();
        toggleDate();
        navigate("/select-your-cabin/flexible")

    }
    const [emptyCells, setEmptyCells] = useState([]);

    function getDayOfWeek(year, month, day) {
        const date = new Date(year, month - 1, day);
        const options = { weekday: 'long' }; // or 'short' for short names

        return new Intl.DateTimeFormat('en-US', options).format(date);
    }
    const handleEmptyCell = () => {



        const firstDay = new Date(selectedYear, selectedMonth, 1).getDay();

        const firstDayOfWeek = getDayOfWeek(selectedYear, selectedMonth, 1);

        console.log("selectedYear:", selectedYear);
        console.log("selectedMonth:", selectedMonth);
        console.log("firstDayOfWeek:", firstDayOfWeek);

        //const emptyCells = Array(firstDay === 0 ? 6 : firstDay - 1).fill(null);
        // <div className="font-bold text-center">Sun</div>
        // <div className="font-bold text-center">Mon</div>
        // <div className="font-bold text-center">Tue</div>
        // <div className="font-bold text-center">Wed</div>
        // <div className="font-bold text-center">Thu</div>
        // <div className="font-bold text-center">Fri</div>
        // <div className="font-bold text-center">Sat</div>

        //console.log("emptyCells:", emptyCells );
        if (firstDayOfWeek.includes('Sun')) {
            const emptyCells = Array(0).fill(null)
            setEmptyCells(emptyCells);
        } else if (firstDayOfWeek.includes('Mon')) {
            const emptyCells = Array(1).fill(null)
            setEmptyCells(emptyCells);
        } else if (firstDayOfWeek.includes('Tue')) {
            const emptyCells = Array(2).fill(null)
            setEmptyCells(emptyCells);
        } else if (firstDayOfWeek.includes('Wed')) {
            const emptyCells = Array(3).fill(null)
            setEmptyCells(emptyCells);
        } else if (firstDayOfWeek.includes('Thu')) {
            const emptyCells = Array(4).fill(null)
            setEmptyCells(emptyCells);
        } else if (firstDayOfWeek.includes('Fri')) {
            const emptyCells = Array(5).fill(null)
            setEmptyCells(emptyCells);
        } else if (firstDayOfWeek.includes('Sat')) {
            const emptyCells = Array(6).fill(null)
            setEmptyCells(emptyCells);
        }
        console.log("emptyCells:", emptyCells);


    }

    useEffect(() => {
        handleEmptyCell();
    }, [])

    return (
        <div className='flex-col  flex h-[1200px] w-full md:w-[600px] mt-5 ml-5 mr-5  overflow-y-auto text-white'>
            <div className=' text-5xl h-[150px] font-bold'>
                <h1>
                    Plan Your HaLong Bay Cruise
                </h1>
            </div>

            <div className='mt-1'>

                <p>Cruise Dates</p>

                <div className='h-[50px] rounded bg-white flex flex-row justify-between items-center ' onClick={toggleDate}>
                    <div className='flex ml-5 text-[#B77855] w-full'>

                        {convertDateFormat(dateResultString)
                        /* {selectedDay > 0 ? (selectedDay + '/' + selectedMonth + '/' + selectedYear) : ''} */}
                    </div>
                    <SlArrowDown className='text-[#B77855] mr-4' />
                </div>
                <div className='relative w-full'>
                    <div className='absolute z-10 items-center justify-center w-full h-auto '>

                        {showDate && (

                            <div className='w-full h-auto text-black bg-white rounded-bl-xl rounded-br-xl'>
                                <div className="flex w-full mb-4 font-bold">
                                    <div className="w-1/2 ml-5 text-black">
                                        <p>Select date</p>

                                    </div>

                                    <div onClick={handleClear} className="flex justify-end w-1/2 mr-5 cursor-pointer hover: text-brown_color">

                                        <p>
                                            Clear
                                        </p>

                                    </div>
                                </div>

                                <div className='flex items-center justify-center w-full mt-5 font-bold'>

                                    <MdOutlineKeyboardArrowLeft className='w-6 h-6' onClick={handlePreviousTime} />
                                    <div className='ml-4 mr-4 text-xl'>{headerTime}</div>
                                    <MdOutlineKeyboardArrowRight className='w-6 h-6' onClick={handleNexTime} />

                                </div>
                                <div className="grid grid-cols-7 gap-2 mt-5 text-black">
                                    <div className="font-bold text-center">Sun</div>
                                    <div className="font-bold text-center">Mon</div>
                                    <div className="font-bold text-center">Tue</div>
                                    <div className="font-bold text-center">Wed</div>
                                    <div className="font-bold text-center">Thu</div>
                                    <div className="font-bold text-center">Fri</div>
                                    <div className="font-bold text-center">Sat</div>
                                    {emptyCells.map((_, index) => (
                                        <div key={`empty-${index}`} />
                                    ))}

                                    {
                                        arrayPriceTime.map((day) => (
                                            <div
                                                key={day.id} onClick={() => day.active && handleSelectDay(day.dateTime) && handleDayChange(extractDayFromDate(day.dateTimeString))}

                                                className={`flex flex-col p-2 ${day.active == true ? 'bg-white' : ' bg-gray-400'} text-center border  border-gray-300 hover:cursor-pointer  `}
                                            >
                                                <div className={`text-[20px] font-medium ${dateTimeSelect == ((day.dateTime)) ? 'bg-brown_color rounded-full px-4 py-4 text-white' : 'text-black px-4 py-4'}`}>
                                                    <p>{extractDayFromDate(day.dateTimeString)}</p>
                                                </div>
                                                <div className={`${dateTimeSelect == ((day.dateTime)) ? 'text-brown_color font-bold' : 'text-black font-normal'} text-[12px] font-thin`}>
                                                    <p>{day.priceDay}K</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>

                                <div onClick={toggleDate} className="hover:cursor-pointer flex w-full justify-center items-center text-center py-5 mt-[50px] mb-[50px] font-bold text-white bg-brown_color text-xl">
                                    <p>Done</p>
                                </div>
                            </div>
                            // <div className='w-full h-[200px] bg-brown_color'>
                            // </div>
                        )}

                    </div>
                </div>

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
                    <div className='flex items-center w-full justify-center z-10 absolute h-auto bg-[#B77855] '>

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
                                        <RiSubtractFill onClick={handleChangeAdultSub} className='w-[20px] h-[20px] text-[#B77855]' />
                                    </div>
                                    <div className='mr-5 font-bold'>
                                        <p>{adult}</p>
                                    </div>
                                    <div className='font-bold'>
                                        <IoIosAdd onClick={handleChangeAdult} className='w-[20px] h-[20px] text-[#B77855]' />
                                    </div>
                                </div>
                            </div>

                            <div className='w-full bg-gray-200 h-1/2'>

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
                                        <RiSubtractFill onClick={handleChangeChildrenSub} className='w-[20px] h-[20px] text-[#B77855]' />
                                    </div>
                                    <div className='mr-5 font-bold'>
                                        <p>{children}</p>
                                    </div>
                                    <div className='font-bold'>
                                        <IoIosAdd onClick={handleChangeChildren} className='w-[20px] h-[20px] text-[#B77855]' />
                                    </div>
                                </div>
                            </div>
                            <div className='w-full bg-gray-200 h-1/2'>
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
                                        <RiSubtractFill onClick={handleChangeInfantSub} className='w-[20px] h-[20px] text-[#B77855]' />
                                    </div>
                                    <div className='mr-5 font-bold'>
                                        <p>{infant}</p>
                                    </div>
                                    <div className='font-bold'>
                                        <IoIosAdd onClick={handleChangeInfant} className='w-[20px] h-[20px] text-[#B77855]' />
                                    </div>
                                </div>
                            </div>
                            <div onClick={toggleMenuPassenger} className='hover:cursor-pointer bg-[#B77855] text-white h-[60px] flex justify-center items-center font-bold rounded  w-full'>
                                <p className="ml-6 text-center">Done</p>
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
                {isMenuOpen && (<div onMouseLeave={toggleMenu} className='relative w-full'>
                    <div className='absolute z-10 flex flex-col items-center justify-center w-full h-auto p-5 text-black bg-white rounded-bl rounded-br mt-1/2 '>
                        <div className='text-xl font-bold'>
                            <p>Cruise Package</p>
                        </div>
                        <div onClick={handleDayCruise} className={`hover:cursor-pointer flex mt-5  p-1 rounded  justify-between w-full ${cruiseType === 'Day Cruise' ? 'text-white bg-[#2F4842]' : 'text-black bg-white'}`}>
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
                                    <p>{priceByDate.priceDay} k VND</p>
                                </div>
                            </div>
                        </div>

                        <div onClick={handleDinnerCruise} className={`hover:cursor-pointer flex mt-5  p-1 rounded  justify-between w-full ${cruiseType === 'Dinner Cruise' ? 'text-white bg-[#2F4842]' : 'text-black bg-white'}`}>

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
                                    <p>{priceByDate.priceDinner} k VND</p>
                                </div>
                            </div>
                        </div>


                        <div onClick={toggleMenu} className='hover:cursor-pointer bg-[#B77855] text-white h-[60px] flex justify-center items-center font-bold rounded mt-5 w-full p-5'>
                            <p>Next</p>
                        </div>
                    </div>
                </div>)}

            </div>

            <div className='mt-5'>

                <p>Promotional Code</p>

                <div className='h-[50px] rounded bg-white flex flex-row justify-between items-center hover:cursor-pointer'>
                    <input className='w-full h-full m-2 text-black border border-transparent focus:outline-none' placeholder='Enter your promotion' />

                </div>
            </div>
            <button className='h-[50px] w-full rounded mt-5  bg-[#B77855]' onClick={nextAction}>
                Search
            </button>
        </div>
    )
}

export default PlanCruise