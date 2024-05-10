
import React, { useContext, useEffect, useState } from 'react'
import HeaderSelectCabin from '../components/HeaderSelectCabin'
// import SelectCabin from '../components/SelectCabin'
import EventItem from '../components/EventItem'
import { useNavigate } from 'react-router-dom'
import ic_checkbox from '../assets/ic_checkbox.png';
import ic_charge from '../assets/ic_charge.png';
import ic_notpermit from '../assets/ic_notpermit.png';
import { AuthContext } from '../AuthProvider';
import RoomItem from '../components/RoomItem';
import HeaderAncillary from '../components/HeaderAncillary';
const AncillaryPage = () => {

    const navigate = useNavigate();
    const { bookingInfo } = useContext(AuthContext);
    const [finalPrice, setFinalPrice] = useState(0);
    const [price, setPrice] = useState(0);
    const [cruiseType, setCruiseType] = useState('Day Cruise');

    const gotoContactInfor = () => {

        navigate('/payment-confirm');

        // if (cruiseType === 'Day Cruise') {
        //     navigate('/contact');

        // }
        // else {
        //     navigate('/contact');
        // }
    }

    useEffect(() => {

        const adult = bookingInfo.adult;
        const children = bookingInfo.children;
        const infant = bookingInfo.infant;
        const price = bookingInfo.price;
        const count = adult + children * 0.75 + infant * 0.5;
        setFinalPrice(count * price);
        setPrice(price);

    }, []);

    const imageSrc = 'https://tse2.mm.bing.net/th?id=OIP.6NLV16bzAw5tAwKdmk8JmgHaE8&pid=Api&P=0&h=220';
    const title = 'Ambassador Deluxe Cabin';
    const description = 'Select your cabin on Ambassador Day Cruise';
    const items = ['Cabin is located on the main deck',
        'Enjoy your private space on board',
        'Relax in style white cruising',
        'Average room size: 30sqm.',
        'Private balcony',
        'En-suite bathroom with standing shower'];
    return (
        <div className='flex flex-col bg-[#FCFCFD] items-center justify-center w-full mb-[100px] h-auto'>
            <HeaderAncillary />
            <div className=' mt-[100px] flex flex-col mb-[100px] ml-5 mr-5'>
                <RoomItem imageSrc={imageSrc} title={title} description={description}
                    items={items} />

                <RoomItem imageSrc={imageSrc} title={title} description={description}
                    items={items} />

                <RoomItem imageSrc={imageSrc} title={title} description={description}
                    items={items} />
            </div>
            <nav className={`fixed bottom-0 left-0 right-0 z-10  w-full bg-white flex justify-around py-4`}>
                <div className='w-full md:w-[600px] m-5 h-[60px] flex flex-row'>
                    <div onClick={gotoContactInfor} className='flex items-center justify-center w-full h-full ml-4 mr-4 font-bold text-center text-white rounded hover:cursor-pointer bg-brown_color'>
                        <p>Payment</p>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default AncillaryPage