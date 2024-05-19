
import React, { useContext, useEffect, useState } from 'react';
import HeaderSelectCabin from '../components/HeaderSelectCabin';
// import SelectCabin from '../components/SelectCabin'
import EventItem from '../components/EventItem';
import { useNavigate } from 'react-router-dom';
import ic_checkbox from '../assets/ic_checkbox.png';
import ic_charge from '../assets/ic_charge.png';
import ic_notpermit from '../assets/ic_notpermit.png';
import { AuthContext } from '../AuthProvider';
import RoomItem from '../components/RoomItem';
import HeaderAncillary from '../components/HeaderAncillary';
import { API_URL_IMAGE, getRooms } from '../services/api';
const AncillaryPage = () => {

    const navigate = useNavigate();
    const { bookingInfo } = useContext(AuthContext);
    const { getAllServices } = useContext(AuthContext);
    const { addService } = useContext(AuthContext);
    const [finalPrice, setFinalPrice] = useState(0);
    const [price, setPrice] = useState(0);
    const [cruiseType, setCruiseType] = useState('Day Cruise');
    const [roomList, setRoomList] = useState([]);
    const [items, setItems] = useState([]);

    const adult = bookingInfo.adult;
    const children = bookingInfo.children;
    const infant = bookingInfo.infant;
    const count = adult + children * 0.75 + infant * 0.5;

    useEffect(() => {
        const price = bookingInfo.price;
        setFinalPrice(count * price);
        setPrice(price);
        const fetchData = async () => {
            try {

                const roomList = await getRooms();
                setRoomList(roomList);

                for (let i = 0; i < roomList.length; i++) {
                    //renderedItems.push(<li key={i}>{items[i]}</li>);
                    const item = roomList[i];
                    console.log("iemxx:", item);
                   // addService(item.roomType, item.priceBase, 0);
                    //  const newItem = { service: item.roomType, price:item.priceBase, count:0 };

                    //  setItems(prevItems => [...prevItems, newItem]);

                }

                // addService("Deluxe", 1500, 0);
                // addService("Superior", 1500, 0);

                //


                // for (const item of roomList) {
                //     addService(item.roomType, item.priceBase, 0);
                // }

                console.log("result:", getAllServices());

                //setArrayService(items);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }, []);

    // const imageSrc = 'https://tse2.mm.bing.net/th?id=OIP.6NLV16bzAw5tAwKdmk8JmgHaE8&pid=Api&P=0&h=220';
    // const title = 'Ambassador Deluxe Cabin';
    // const description = 'Select your cabin on Ambassador Day Cruise';
    // const items = ['Cabin is located on the main deck',
    //     'Enjoy your private space on board',
    //     'Relax in style white cruising',
    //     'Average room size: 30sqm.',
    //     'Private balcony',
    //     'En-suite bathroom with standing shower'];

    const gotoPaymentConfirm = () => {

        const items = getAllServices();
        console.log("ITEMXXX:", items);
        navigate('/payment-confirm');
        //history.replace('/');

    }

    const handleChildClickAdd = (param) => {
        console.log('Button clicked in child component with parameter:', param);
        // Perform any desired actions in the parent component
    };

    const handleChildClickSub = (param) => {
        console.log('Button clicked in child component with parameter:', param);
        // Perform any desired actions in the parent component
    };

    return (
        <div className='flex flex-col bg-[#FCFCFD] items-center justify-center w-full mb-[100px] h-auto'>
            <HeaderAncillary />
            <div className=' mt-[100px] flex flex-col mb-[100px] ml-5 mr-5'>
                {/* <RoomItem imageSrc={imageSrc} title={title} description={description}
                    items={items} />

                <RoomItem imageSrc={imageSrc} title={title} description={description}
                    items={items} />

                <RoomItem imageSrc={imageSrc} title={title} description={description}
                    items={items} /> */}

                {roomList.map((room, index) => (
                    <RoomItem
                        key={index}
                        imageSrc={API_URL_IMAGE + room.thumb}
                        title={room.roomType}
                        description={room.description}
                        price={room.priceBase}
                        items={room.roomItemList}
                    // onClickAdd = {handleChildClickAdd}
                    // onClickSub = {handleChildClickSub} 
                    />
                ))}
            </div>
            <nav className={`fixed bottom-0 left-0 right-0 z-10  w-full bg-white flex justify-around py-4`}>
                <div onClick={gotoPaymentConfirm} className='w-full md:w-[600px] m-5 h-[60px] flex flex-row'>
                    <div className='flex items-center justify-center w-full h-full ml-4 mr-4 font-bold text-center text-white rounded hover:cursor-pointer bg-brown_color'>
                        <p>Payment</p>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default AncillaryPage