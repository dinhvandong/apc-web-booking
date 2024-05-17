import React, { useEffect, useState } from 'react';
import { API_URL_IMAGE, convertDateFormat, deleteEvent, deleteUser, getEvents, getEventsItem, getEventsItemChild, getRooms, getUsers } from '../../services/api'
import { Button, Space, Table } from 'antd';
import { useNavigate } from 'react-router-dom';
// import defaultImage from '../../assets/icon.png';
// import defaultImage3 from '../../assets/checkbox.png';
import { IoReturnUpBackSharp } from "react-icons/io5";
import './UserTable.css'; // Import your custom CSS file
import { getBookings } from '../../services/api_booking';
//import './tableStyle.css';
const BookingTable = () => {
    const [bookings, setBookings] = useState([]);
    const [bookingItem, setBookingItem] = useState([]);
    const [bookingID, setBookingID] = useState();
    const navigate = useNavigate();

    const handleEdit = (id) => {
        console.log('Edit clicked for ID:', id);
        navigate(`/admin/event/update/${id}`)
    };

   

    const handleDelete = async (id) => {
        console.log('Delete clicked for ID:', id);
        const deleteEventModel = { id: id };
        const response = await deleteEvent(deleteEventModel);
        refreshData();
        console.log("delete:", response);
    };

    const refreshData = async () => {
        try {
            const bookingList = await getBookings();
            console.log("bookingList", bookingList);
            setBookings(bookingList);
        } catch (error) {
            // Handle error
            console.error('Error:', error);
        }
    }

    const getRowClassName = (record, index) => {
        return index % 2 === 1 ? 'row-even' : 'row-odd';
    };

    useEffect(() => {
        const fetBookings = async () => {
            try {
                const bookingList = await getBookings();
                console.log("bookingList", bookingList);
                setBookings(bookingList);
            } catch (error) {
                // Handle error
                console.error('Error:', error);
            }
        };
        fetBookings();
    }, []);
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Tên sự kiện',
            dataIndex: 'name',
            key: 'name',

        },
        {
            title: 'Mô tả ngắn',
            dataIndex: 'subName',
            key: 'subName',

        },

        {
            title: 'Loại',
            dataIndex: 'type',
            key: 'type',

        },
        {
            title: 'Ảnh đại diện',
            dataIndex: 'icon',
            key: 'icon',
            render: (icon, item) => <img
                src={API_URL_IMAGE + icon}
                alt="icon"
                className={`w-10 h-10`}

                style={{ width: `${parseInt(item.width)}px`, height: `${parseInt(item.height)}px` }}

            />,
        },
        {
            title: 'Hành động',
            key: 'actions',
            render: (text, record) => (
                <Space size="middle">
                    {/* <Button className="text-white bg-orange-600" type="primary" onClick={() => handleStep(record.id)}>Xem danh mục con</Button> */}
                    <Button className="text-white bg-edit" type="primary" onClick={() => handleEdit(record.id)}>Chỉnh sửa</Button>
                    <Button className="mr-5 text-white bg-delete" type="danger" onClick={() => handleDelete(record.id)}>Xóa</Button>
                </Space>
            ),
        },
        // Add more columns as needed
    ];


    return (
        <div className="w-[100%] flex-col flex justify-center items-center">
            <div className='w-[100%] flex-col flex'>
                <Table style={{ width: '100%', fontFamily: 'Courier New ' }} rowClassName={getRowClassName} dataSource={events} columns={columns} />
            </div>
        </div>
    );
};

export default BookingTable;