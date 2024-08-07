import React, { useContext, useEffect, useState } from 'react'
import HeaderSelectCabin from '../components/HeaderSelectCabin'
// import SelectCabin from '../components/SelectCabin'
import EventItem from '../components/EventItem'
import { useNavigate } from 'react-router-dom'
import ic_checkbox from '../assets/checkbox.png';
import ic_charge from '../assets/dollar.png';
import ic_notpermit from '../assets/cancel.png';
import { AuthContext } from '../AuthProvider';
import axios from 'axios';
import { convertToCurrencyFormat } from '../utils/utils';
const SelectCabinNonRefundPage = () => {

    const navigate = useNavigate();
    const { updateBookingInfo } = useContext(AuthContext);
    const { bookingInfo } = useContext(AuthContext);
    console.log("CruiseTypexxxyyy:", bookingInfo.cruiseType);

    const [finalPrice, setFinalPrice] = useState(0);
    const [price, setPrice] = useState(0);
    const [cruiseType, setCruiseType] = useState('Day Cruise');
    const { priceDate } = useContext(AuthContext);

    const gotoContactInfor = () => {
        // if(cruiseType === 'Day Cruise')
        // {
        //     navigate('/ancillary');
        // }
        // else 
        // {
        //     navigate('/contact');
        // }
        updateBookingInfo({ flexibleOrNonRefund: false, price: finalPrice, priceBase: price });
        // updateBookingInfo({  price: finalPrice });

        navigate('/contact');

    }

    useEffect(() => {

        const adult = bookingInfo.adult;
        const children = bookingInfo.children;
        const infant = bookingInfo.infant;

        if (bookingInfo.cruiseType === 'Day Cruise') {

            const price = priceDate.priceDayNonRefund;

            setPrice(priceDate.priceDayNonRefund);
            const count = adult + children * 0.75 + infant * 0.5;

            setFinalPrice(count * price);
            setCruiseType(bookingInfo.cruiseType);

        } else if (bookingInfo.cruiseType === 'Dinner Cruise') {
            const price = priceDate.priceDinnerNonRefund;
            const count = adult + children * 0.75 + infant * 0.5;
            setPrice(priceDate.priceDinnerNonRefund);
            setFinalPrice(count * price);
            setCruiseType(bookingInfo.cruiseType);
        }


    }, []);

    const gotoPlanFlexible = () => {
        navigate('/select-your-cabin/flexible');

    }

    const gotoPlanNonRefund = () => {
        navigate('/select-your-cabin/non-refundable');

    }

    const [data, setData] = useState([]);

    useEffect(() => {

        if (bookingInfo.cruiseType === 'Day Cruise') {

            axios.get('http://163.44.206.118:8080/api/event-plan/findAllByType?type=Non-Refundable Rate')
                .then(response => {
                    setData(response.data.data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        } else {

            axios.get('http://163.44.206.118:8080/api/event-plan/findAllByType?type=Non-Refundable Rate Dinner')
                .then(response => {
                    setData(response.data.data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }

    }, []);
    return (
        <div className='flex flex-col items-center justify-center px-5 w-full mb-[100px] h-auto'>
            <HeaderSelectCabin />
            <div className='mt-[100px] flex  w-full md:w-[600px] items-center h-auto flex-row justify-between'>
                <div onClick={gotoPlanFlexible} className='hover:cursor-pointer items-center  p-4 rounded-md md:w-[300px] w-1/2 h-auto ml-2  text-[#2F4842] bg-[#B2D0C6] text-[14px] font-bold'><p className='text-center'>Flexible Rate </p></div>


                <div onClick={gotoPlanNonRefund} className=' hover:cursor-pointer items-center  p-4 rounded-md md:w-[300px] w-1/2 h-auto bg-[#2F4842] text-white text-[14px] font-bold ml-2'> <p className='text-center'> Non-Refundable Rate</p> </div>
            </div>
            <div className='font-bold mt-5 text-base_color flex w-full md:w-[600px]'>

                <p>Cruise conditions</p>

            </div>

            <div className='mt-[20px]  text-base_color flex w-full md:w-[600px]'>

                <div className='text-base_color w-1/3  flex items-center md:w-[200px]'>
                    <img className='w-5 h-5 ml-5' src={ic_checkbox} />
                    <p className='ml-2'>Free/Allowed</p>

                </div>
                <div className='text-brown_color w-1/3 flex items-center  md:w-[200px]'>
                    <img className='w-5 h-5' src={ic_charge} />
                    <p className='ml-2'>Charge</p>

                </div>
                <div className='text-red-600 w-1/3 flex items-center  md:w-[200px]'>
                    <img className='w-5 h-5 ' src={ic_notpermit} />
                    <p className='ml-2'>Not permitted</p>

                </div>


            </div>



            <div className='flex flex-col mt-5 mb-[100px]'>

                {data.map(item => (
                    <EventItem key={item.id} data={item} />
                ))}

            </div>
            <nav className={`fixed bottom-0 left-0 right-0 z-10  w-full bg-white flex justify-around py-4`}>

                <div className='w-full md:w-[600px] m-5 h-[60px] flex flex-row'>
                    <div className='flex flex-col w-1/2 font-bold text-brown_color'>
                        <div>
                            <p>NON-REFUNDABLE RATE</p>
                        </div>

                        <div>
                            <p>{convertToCurrencyFormat(price)} VND/person</p>
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

export default SelectCabinNonRefundPage