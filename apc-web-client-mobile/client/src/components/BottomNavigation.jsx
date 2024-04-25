import { FiHome, FiBookOpen, FiCalendar, FiUser, FiMenu } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";

import iconHomeDefault from '../assets/menu-home-icon-default.png';
import iconAccountDefault from '../assets/menu-account-icon-default.png';
import iconMyBookingDefault from '../assets/menu-my-booking-icon-default.png';
import iconPlanYourCruiseDefault from '../assets/menu-plan-your-cruise-icon-default.png';
import iconSettingDefault from '../assets/menu-setting-icon-default.png';


import iconHomeSelected from '../assets/menu-home-icon-selected.png';
import iconAccountSelected from '../assets/menu-account-icon-selected.png';
import iconMyBookingSelected from '../assets/menu-my-booking-icon-selected.png';
import iconPlanYourCruiseSelected from '../assets/menu-plan-your-cruise-icon-selected.png';
import iconSettingSelected from '../assets/menu-setting-icon-selected.png';
import { useEffect, useState } from 'react';
function BottomNavigation(props) {
  const { selected } = props;
  const [css1 , setCss1] = useState('font-light');
  const [css2 , setCss2] = useState('font-light');
  const [css3 , setCss3] = useState('font-light');
  const [css4 , setCss4] = useState('font-light');
  const [css5 , setCss5] = useState('font-light');
  const navigate = useNavigate();

  function gotoHome()
  {
    navigate("/home")
  }
  function gotoMenu()
  {
    navigate("/menu");
  }
  function gotoPlanCruise()
  {
    navigate("/plan-cruise/1");

  }
  const  gotoMyBooking =()=>
  {
    navigate('/my-booking');
  }

  function gotoAccount()
  {
    navigate("/sign-in");

  }

  useEffect(()=>{

    if(selected==='home'){
      setCss1('font-medium text-black-400')
      setCss2('font-medium text-gray-400')
      setCss3('font-medium text-gray-400')
      setCss4('font-medium text-gray-400')
      setCss5('font-medium text-gray-400')

    }else if(selected==='booking') {
      setCss1('font-medium text-gray-400')
      setCss2('font-medium text-black-400')
      setCss3('font-medium text-gray-400')
      setCss4('font-medium text-gray-400')
      setCss5('font-medium text-gray-400')
    }else if(selected==='plan'){
      setCss1('font-medium text-gray-400')
      setCss2('font-medium text-gray-400')
      setCss3('font-medium text-black-400')
      setCss4('font-medium text-gray-400')
      setCss5('font-medium text-gray-400')
    }else if(selected ==='account'){
      setCss1('font-medium text-gray-400')
      setCss2('font-medium text-gray-400')
      setCss3('font-medium text-gray-400')
      setCss4('font-medium text-black-400')
      setCss5('font-medium text-gray-400')
    }else if(selected === 'menu'){
      setCss1('font-medium text-gray-400')
      setCss2('font-medium text-gray-400')
      setCss3('font-medium text-gray-400')
      setCss4('font-medium text-gray-400')
      setCss5('font-medium text-black-400')
    }else if(selected == 'plan'){
      setCss1('font-medium text-gray-400')
      setCss2('font-medium text-gray-400')
      setCss3('font-medium text-black-400')
      setCss4('font-medium text-gray-400')
      setCss5('font-medium text-gray-400')
    }

  },[]);

  return (
    <nav className={`fixed bottom-0 left-0 right-0  bg-white shadow flex justify-around py-4`}>
    <button className={`flex flex-col items-center text-sm  ${css1} `} onClick={gotoHome}>
      <img className="h-[15px] w-[15px] " 
      src={selected==='home' ?iconHomeSelected: iconHomeDefault} />
      Home
    </button>
    <button onClick={gotoMyBooking} className={`flex flex-col items-center  text-sm  ${css2}`}>
      <img className="h-[15px] w-[15px] " src={selected ==='booking'?iconMyBookingSelected: iconMyBookingDefault} />
      My Booking
    </button>
    <button className={`flex flex-col items-center  text-sm  ${css3}`} onClick={gotoPlanCruise}>
      <img className="h-[15px] w-[15px]" src={selected==='plan'? iconPlanYourCruiseSelected: iconPlanYourCruiseDefault} />
      Plan Your Cruise
    </button>
    <button className={`flex flex-col items-center text-sm  ${css4}`} onClick={gotoAccount}>
      <img className="h-[15px] w-[15px] " src={selected==='account'?iconAccountSelected: iconAccountDefault} />
      Account
    </button>
    <button className={`flex flex-col items-center  text-sm  ${css5}`} onClick={gotoMenu}>
      <img className="h-[15px] w-[15px] " src={selected==='menu'?iconSettingSelected: iconSettingDefault} />
      Menu
    </button>
  </nav>

  );
};
export default BottomNavigation;