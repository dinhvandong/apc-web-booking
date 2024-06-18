import React, { useContext, useState } from 'react'
import bg5 from '../assets/bg.png'
import PlanCruise from '../components/PlanCruise'
import BottomNavigation from '../components/BottomNavigation'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'


import flag_english from '../assets/icon_english.png';
import flag_vietnam from '../assets/icon_vietnam.png';
import flag_korean from '../assets/icon_korean.png';
import flag_chines from '../assets/icon_chines.png';
import { FaCheck } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import { AuthContext } from '../AuthProvider';

const PlanCruisePage = () => {

  const { id } = useParams();

  // const [selectedIndex, setSelectedIndex] = useState(1);
  const { getLang, setLang } = useContext(AuthContext);

  const language = getLang();

  const [visible, setVisible] = useState(false);

  const handleChangeLanguage = () => {
    setVisible(true);
  }

  const handleConfirmChange = () => {
    setVisible(false);
  }
  const handleSetIndex = (value) => {
    //setSelectedIndex(value)
    setLang(value)

  }

  return (
    <div
      className={`min-h-screen bg-cover bg-center px-5 flex flex-col  items-center transition-opacity duration-500`}
      style={{ backgroundImage: `url(${bg5})` }}
    >
      <Header onClick={handleChangeLanguage} />
      <PlanCruise id={id} />

      {visible == true ? (<div className='absolute flex flex-col items-center justify-center w-full h-full bg-black opacity-50'>
      </div>) : <div></div>}


      {
        visible == true && (<div className='absolute flex flex-col items-center justify-center w-full h-full '>

          <div className='w-[400px] px-5 py-3 bg-white rounded-lg'>

            <div className='font-bold text-black mt-6 text-[20px]'>
              Language
            </div>
            <div onClick={() => handleSetIndex("English")} className='flex w-full mt-7 hover:cursor-pointer'>

              <img src={flag_english} />
              <p className='w-full ml-5'>English</p>
              {language == "English" && (<IoCheckmark className='w-6 h-6 text-black' />)}

            </div>
            <div onClick={() => handleSetIndex("Vietnamese")} className='flex w-full mt-7 hover:cursor-pointer'>

              <img src={flag_vietnam} />
              <p className='w-full ml-5'>Vietnamese</p>
              {language == 'Vietnamese' && (<IoCheckmark className='w-6 h-6 text-black' />)}

            </div>
            <div onClick={() => handleSetIndex("Korean")} className='flex w-full mt-7 hover:cursor-pointer'>

              <img src={flag_korean} />
              <p className='w-full ml-5'>Korean</p>
              {language == "Korean" && (<IoCheckmark className='w-6 h-6 text-black' />)}

            </div>

            <div onClick={() => handleSetIndex("Chinese")} className='flex w-full mb-5 mt-7 hover:cursor-pointer'>

              <img src={flag_chines} />
              <p className='w-full ml-5'>Chines</p>
              {language == "Chinese" && (<IoCheckmark className='w-6 h-6 text-black' />)}

            </div>

            <div onClick={handleConfirmChange} className='flex items-center justify-center w-full px-5 py-3 mb-5 font-bold text-white rounded-md bg-brown_color mt-7 hover:cursor-pointer'>
              <p className='text-center'>Confirm Change Language</p>
            </div>
          </div>
        </div>)
      }

      <BottomNavigation selected={"plan"} />
    </div>
  )
}

export default PlanCruisePage