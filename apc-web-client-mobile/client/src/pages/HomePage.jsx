import React, { useContext, useEffect, useState } from 'react'
import BottomNavigation from '../components/BottomNavigation'
import Header from '../components/Header'
import backgroundImage from '../assets/background1.png';
import Home from '../components/Home';
import bg1 from '../assets/background1.png'
import bg2 from '../assets/background2.png'
import bg3 from '../assets/background3.png'
import bg4 from '../assets/background4.png'
import bg5 from '../assets/background5.png'

import flag_english from '../assets/icon_english.png';
import flag_vietnam from '../assets/icon_vietnam.png';
import flag_korean from '../assets/icon_korean.png';
import flag_chines from '../assets/icon_chines.png';
import { FaCheck } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import { AuthContext } from '../AuthProvider';
import { useTranslation } from 'react-i18next';


const HomePage = () => {
  const [loaded, setLoaded] = useState(false);
  const [topic, setTopic] = useState('Unveil the Breathtaking Splendor');
  const [detail, setDetail] = useState("Bask in the awe-inspiring beauty of Halong Bay from the Ambassador Cruise's twin sundecks, offering stunning panoramic views that will leave you in awe.");
  const images = [
    bg1,
    bg2,
    bg3,
    bg4,
    bg5
  ];

  

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const [visible, setVisible] = useState(false);

  // const handleChangeLanguage =()=>{
  //   setVisible(true);
  // }

  // const handleConfirmChange = ()=>{
  //   setVisible(false);
  // }
  // const handleSetIndex = (value) => {
  //   setSelectedIndex(value)
  // }

  const { getLang, setLang } = useContext(AuthContext);

  const language = getLang();

  const handleChangeLanguage = () => {
    setVisible(true);
  }

  const handleConfirmChange = () => {
    setVisible(false);
  }
  const handleSetIndex = (value) => {
    //setSelectedIndex(value)
    setLang(value)
    if (value == 'English') {
      handleChangeLanguageX('en');

    } else if (value == "Vietnamese") {
      handleChangeLanguageX('vi')

    }else if (value == "Chinese") {
      handleChangeLanguageX('zh')

    }else if (value == "Korean") {
      handleChangeLanguageX('ko')

    }else {
      handleChangeLanguageX('en');

    }
    //handleChangeLanguageX()
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      // setTopic(topicArray[currentImageIndex]);
      // setDetail(detailArray[currentImageIndex]);
      setLoaded(false);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);



  const { t, i18n } = useTranslation();

  const handleChangeLanguageX = (language) => {
    i18n.changeLanguage(language);
  };

  const topicArray = [
    t('topic1'),
    t('topic2'),
    t('topic3'),
    t('topic4'),
    t('topic5')
  ]
  const detailArray = [
    t('topicDetail1'),
    t('topicDetail2'),
    t('topicDetail3'),
    t('topicDetail4'),
    t('topicDetail5')  ]
  return (
    <div
      className={`h-screen bg-cover bg-center flex flex-col px-5 items-center transition-opacity duration-500`}
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <Header onClick={handleChangeLanguage} />
      <Home topic={topicArray[currentImageIndex]} detail={detailArray[currentImageIndex]} />
      <BottomNavigation selected={"home"} />

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
              <p className='w-full ml-5'>Chinese</p>
              {language == "Chinese" && (<IoCheckmark className='w-6 h-6 text-black' />)}

            </div>

            <div onClick={handleConfirmChange} className='flex items-center justify-center w-full px-5 py-3 mb-5 font-bold text-white rounded-md bg-brown_color mt-7 hover:cursor-pointer'>
              <p className='text-center'>Confirm Change Language</p>
            </div>
          </div>
        </div>)
      }

    </div>

  )
}

export default HomePage