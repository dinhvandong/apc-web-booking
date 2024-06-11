import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import bg_signin from '../assets/bg_signin.png'
import ic_warning from '../assets/ic_warning.png'

import { loginRequest } from '../services/api';
import iconWarning from '../assets/icon-warning.png';
import { addPassenger, getBookingByCode, getBookingByCodeAndLastName } from '../services/api_booking';
import { AuthContext } from '../AuthProvider';
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineUserGroup } from "react-icons/hi";
import { GoUpload } from "react-icons/go";
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import CustomerItem from './CustomerItem';
const MyBookingImportExcel = (props) => {

  const { bookingCode } = props;

  const { updateBookingSearch } = useContext(AuthContext);

  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  // const { login } = useContext(AuthContext);
  // const [userInfo, setUserInfo] = useState({});
  // const [isLogin, setIsLogin] = useState(false);

  //const [bookingCode, setBookingCode] = useState('');
  const [lastName, setLastName] = useState('');

  const handleBookingCodeChange = (e) => {
    // setBookingCode(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const gotoForgotPassword = () => {
    navigate('/forgot-password1');

  }

  const gotoInsertPassenger = () => {
    navigate(`/my-booking3/${bookingCode}`);
  }
  const gotoSignUp = () => {

    navigate('/sign-up');

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("bookingCode:", bookingCode);
    console.log("lastName:", lastName);

    const result = await getBookingByCodeAndLastName(bookingCode, lastName);
    if (result.success === 200) {
      updateBookingSearch(result.data)
      navigate('/booking-search/' + bookingCode);
    } else {
      window.alert('Cannot found BookingCode');

    }

    // const result = await loginRequest(email, password);
    // if(result.success===200){
    //   const token = result.data.message;
    //   const user = result.data
    //   //login(token, user);
    //   navigate('/profile-page');

    // }else {
    //   console.log("resultLogin:", result);
    // }
    // navigate('/admin');
    //setBookingCode('');
    setLastName('');
  };

  // const [selectedFile, setSelectedFile] = useState(null);

  // const handleFileUpload = (event) => {
  //   const file = event.target.files[0];
  //   setSelectedFile(file);
  // };

  const handleUploadButtonClick = async () => {

    console.log("Upload Data ....")

    const response = await addPassenger(bookingCode, jsonData);
    console.log("passenger_response:", response);
    if(response.success ===200){
      window.alert('Import passenger successful');
     
    }else {
      window.alert('Import passenger fail');
    }
   
  };

  // const convertCSVtoJSON = (file) => {
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     const csvData = reader.result;
  //     parseCSV(csvData);
  //   };
  //   reader.readAsText(file);
  // };

  // const parseCSV = (csvData) => {
  //   // CSV parsing logic
  //   // ...
  // };

  const [jsonData, setJsonData] = useState(null);

  const handleFileUpload = (file) => {
    console.log('handleFileUpload');
    const reader = new FileReader();
    reader.onload = () => {
      const csvData = reader.result;
      const parsedData = parseCSV(csvData);
      setJsonData(parsedData);
    };
    reader.readAsText(file);
  };

  const parseCSV = (csvData) => {
    console.log("step1");
    const csvRows = csvData.split('\n');
    const headers = csvRows[0].split(',');
    const jsonData = [];
    console.log("step2");

    for (let i = 1; i < csvRows.length; i++) {
      const row = csvRows[i].split(',');
      const obj = {};

      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = row[j];
      }

      jsonData.push(obj);
    }
    console.log("step3");

    return jsonData;
  };

  const beforeUpload = (file) => {
    const isCSV = file.type === 'text/csv';

    console.log("before step1");

    if (!isCSV) {
      console.log("before step2");

      message.error('Only CSV files are allowed!');
    }

    console.log("before step3:", isCSV);

    return isCSV;
  };

  const downloadCsvForm = () =>{

    window.open('https://drive.google.com/file/d/1k_dCoC0j9JB6-NR-IsDyT40fj4b9y6k5/view?usp=sharing', '_blank');

  }

  useEffect(() => {
    // const checkAuthentication = async () => {
    //   const authenticated = await isAuthenticated();
    //   if (authenticated) {
    //      navigate('/admin');
    //   } else {
    //   }
    // };
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    // checkAuthentication();
  }, []);
  return (
    <div className='flex flex-col mb-[100px] px-5 md:w-[600px] items-center w-full h-full'>
      {/* <div className='text-xl mt-[100px] text-center font-bold text-white'>
        <h1>
          My Booking
        </h1>
      </div> */}

      <div className='flex flex-col text-gray-600 justify-center mt-[100px]'>
        <p className='text-center'>Booking Code: {bookingCode}</p>

      </div>

      {!jsonData && (
        <div className='mt-5 font-bold text-black text-[22px]'>
          <p className='text-center'>Passenger Information</p>
        </div>)
      }


      {!jsonData && (
        <div>
          <p className='mt-2 text-center text-gray-600'>For more than 10 passengers, please download the form and re-upload after completing it.</p>
        </div>)
      }

      {
        jsonData && (
          <div className='flex flex-col items-center justify-center mt-5 '>

            <img src={ic_warning} className='w-[60px] h-[60px]' />

            <div className='mt-3 font-bold text-[20px] text-red-600'>
              <p>Warning</p>

            </div>
            <div className='mt-3 font-bold text-[14px] text-red-600'>
              <p>Existing passenger list will be replaced</p>

            </div>

          </div>
        )
      }




      <div className='flex flex-col w-full px-5 mt-3'>

        <div className='flex flex-col w-full mt-2'>
          {!jsonData && (<Upload className='flex items-center justify-center w-full px-4 py-2 rounded-md bg-brown_color'
            accept=".csv"
            beforeUpload={handleFileUpload}
            showUploadList={false}
          >
            <Button className='w-full font-bold text-white border-none' icon={<UploadOutlined />}>
              Upload Passenger Information
            </Button>
          </Upload>)
          }




          {/* {jsonData && (
            <div>
              <h3>Converted JSON:</h3>
              <pre>{JSON.stringify(jsonData, null, 2)}</pre>
            </div>
          )} */}
        </div>

        <div className='w-full mt-5'>
          {
            !jsonData && (<button onClick={downloadCsvForm} className='flex items-center justify-center w-full px-4 py-2 bg-white'>
              <p className='font-bold text-center text-brown_color'>
                {"Download Passenger Form"}
              </p>
            </button>)

          }


          <div className='flex flex-col w-full mt-5 mb-[100px]  text-[16px] text-black font-bold'>

            <div className='mb-[100px]'>
              {jsonData && (jsonData.map((customer, index) => (
                <CustomerItem key={customer.id}
                  index={index}
                  title={`${customer.title}`}
                  firstName={customer.firstName}
                  lastName={customer.lastName}
                  dateOfBirth={customer.dateOfBirth}
                  nation={customer.nation}
                  province={customer.province}
                  personIdType={customer.personIdType}
                  personIdNumber={customer.personIdNumber}
                  note={customer.note}
                />
              )))}
            </div>

            {jsonData && (<div className='font-normal text-gray-500'>
              I hereby <span className='font-bold text-black'>confirm the passenger list above</span> and
              continuing upload passenger information.
            </div>)
            }

            {jsonData && (

              <button onClick={handleUploadButtonClick} className='flex w-full px-4 py-2 mt-5 rounded-md bg-brown_color'>
                <GoUpload className='w-5 h-5 text-white' />
                <p className='w-full px-5 font-bold text-center text-white'>
                  {"Upload Passenger Information"}

                </p>
              </button>

              //   <Upload className='flex items-center justify-center w-full px-4 py-2 mt-5 rounded-md bg-brown_color'
              //   accept=".csv"
              //   beforeUpload={handleFileUpload}
              //   showUploadList={false}
              // >
              //   <Button className='w-full font-bold text-white border-none' icon={<UploadOutlined />}>
              //     Upload Passenger Information
              //   </Button>
              // </Upload>

            )}

          </div>

          {/* <label> {"Download Passenger Form"}</label> */}

        </div>
        {/* <input className='flex w-full px-4 py-2 text-white bg-brown_color' type="file" accept=".csv" onChange={handleFileUpload} />
        <button  onClick={handleUploadButtonClick} className='flex w-full px-4 py-2 mt-5 rounded-md bg-brown_color'>
          <GoUpload className='w-5 h-5 text-white' />
          <p className='px-5 font-bold text-white'>
            {"Upload Passenger Information"}

          </p>
        </button> */}
      </div>
    </div>
  )
}

export default MyBookingImportExcel