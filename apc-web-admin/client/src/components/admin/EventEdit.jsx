
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { API_URL_IMAGE, createEvent, createRoom, createUser, getEventById, updateEvent, uploadFile } from '../../services/api';
import { IoMdSearch } from 'react-icons/io';
import { Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import noImage from '../../assets/avatar-default-icon.png'
import UserTable from '../table/UserTable';
import { MdAdd } from 'react-icons/md';
import RoomTable from '../table/RoomTable';
import EventTable from '../table/EventTable';
import EventItemComponent from './EventItemComponent';

const EventEdit = (props) => {
    const { id } = props;
    const navigate = useNavigate();
    const eventTypes = ['Flexible Rate', 'Non-Refundable Rate'];
    const [formData, setFormData] = useState({
        name: '',
        subName: '',
        type: 'root',
        icon: '',
        eventPlanItemList: []

    });


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const [file, setFile] = useState(noImage);

    // const handleFileUpload = async (file) => {
    //     // Handle the file upload logic here
    //     console.log(file);

    //     const response = await uploadFile(file);
    //     const fileResponse = API_URL_IMAGE + response.data;
    //     setFile(fileResponse);
    //     console.log("upload-file", fileResponse);

    //     setFormData(prevFormData => ({
    //         ...prevFormData,
    //         icon: response.data
    //     }));


    // };






    //============================================================

    //==================EVENT PLAN ITEM =====================================

    // Cau hinh lien quan den event plan o duoi day
    // const [types, setTypes] = useState([]);

    const [items, setItems] = useState([]);

    const addItem = () => {

        setItems(prevItems => [...prevItems, {
            id: 0,
            type: 1, title: '', icon: null, active: true
        }]);
        // setTypes(prevTypes => [...prevTypes, 1]);
        // setImages(prevImages => [...prevImages, null]);
    };

    // const handleInputChange = (index, value) => {
    //     const updatedItems = [...items];
    //     updatedItems[index] = value;
    //     setItems(updatedItems);
    // };

    const handleInputEventTypeChange = (index, value) => {
        // const updatedTypes = [...types];
        // updatedTypes[index] = value;
        // setTypes(updatedTypes);
    };


    const handleFileUpload = async (file) => {
        // Handle the file upload logic here
        //console.log(file);
        const response = await uploadFile(file);
        //const fileResponse = API_URL_IMAGE + response.data;
        // Khi hien thi image thi su dung API_URL_IMAGE + ten file luu trong database
        setFile(API_URL_IMAGE + response.data);
        //console.log("upload-file", fileResponse);
        setFormData(prevFormData => ({
            ...prevFormData,
            icon: response.data
        }));
    };

    const handleImageUpload = async (index, file) => {

        const response = await uploadFile(file);
        //const fileResponse = API_URL_IMAGE + response.data;
        // Khi hien thi image thi su dung API_URL_IMAGE + ten file luu trong database
        // setFile(API_URL_IMAGE + response.data);
        setItems(prevItems => {
            const updatedItems = [...prevItems];
            updatedItems[index].icon = response.data;
            return updatedItems;
        });
    };

    const handleInputChange = (index, field, value) => {
        setItems(prevItems => {
            const updatedItems = [...prevItems];
            updatedItems[index][field] = value;
            return updatedItems;
        });
    };

    const handleItemRemove = index => {
        setItems(prevItems => {
            const updatedItems = [...prevItems];
            updatedItems.splice(index, 1);
            return updatedItems;
        });
    };


    useEffect(() => {
        const fetchEventById = async () => {
            try {
                const response = await getEventById(id);
                setFormData(response);
                setItems(response.eventPlanItemList);
                console.log("responseEvent:", response);
                setFile(API_URL_IMAGE + response.icon);
                //  setItems(response.roomItemList)
            } catch (error) {
            }
        };


        fetchEventById();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormData(async prevFormData => {
            const updatedFormData = {
                ...prevFormData,
                eventPlanItemList: items
            };

            console.log("formDataEvent00::", updatedFormData);
            const result = await updateEvent(formData);
            if (result.success === 200) {
                navigate('/admin/event');
            }
        });
    };
    return (
        <div className='flex flex-col w-full h-auto'>

            <div className="w-full h-[50px] bg-base_color">

            </div>
            {/* <p className='ml-10 text-sm'> <span className='text-gray-500'>Trang chủ /</span>&nbsp;Quản trị viên</p> */}
            <div className="flex justify-start mt-5 ml-5 md:justify-center sm:justify-center lg:justify-start">
                <p className="font-bold">Tạo mới sự kiện</p>
            </div>
            <div className='h-[1px] bg-base_color w-full'></div>
            <div className="flex w-full h-auto m-5 mx-auto">

                <div className='flex flex-col w-1/3 h-auto m-2'>
                    <form onSubmit={handleSubmit} className="w-full mx-auto mt-2 ml-5 mr-5">
                        <div className="mb-2">
                            <label htmlFor="name" className="block mb-2 font-medium">
                                Event type: <span className="text-lg text-red-500">*</span>
                            </label>


                            <select
                                name="type"
                                id="type"
                                value={formData.type}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-blue-500"
                            >
                                <option value="">Type of Event</option>
                                {eventTypes.map((type) => (
                                    <option key={type} value={type}>
                                        {type}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="email" className="block mb-2 font-medium">
                                Event Name: <span className="text-lg text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>


                        <div className="mb-2">
                            <label htmlFor="subName" className="block mb-2 font-medium">
                                Event Desc: <span className="text-lg text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="subName"
                                name="subName"
                                value={formData.subName}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>


                        <div className="mb-2">
                            <label htmlFor="email" className="block mb-2 font-medium">
                                Icon: <span className="text-lg text-red-500">*</span>
                            </label>
                            <Upload
                                id='icon' name='icon'
                                beforeUpload={() => false} // Prevent automatic file upload
                                onChange={(info) => handleFileUpload(info.file)}
                                maxCount={1}
                            >
                                <Button icon={<UploadOutlined />}>Select File</Button>
                            </Upload>
                        </div>
                        <div className="mb-2">
                            <img src={file} className='w-[100px] h-[100px]' />

                        </div>

                        <button
                            type="submit"
                            className="w-full px-4 py-2 mt-5 text-white rounded bg-base_color hover:bg-orange-600"
                        >
                            Tạo mới sự kiện
                        </button>
                    </form>
                </div>
                <div className='flex flex-col w-2/3 h-auto'>

                    <div className="flex w-[100%] ml-5 mr-2 flex-col justify-center">
                        <button className='className="w-[200px] px-4 py-1 mt-2 mb-5 text-white rounded bg-base_color hover:bg-orange-600"' onClick={addItem}>Thêm danh mục con</button>
                        {/* {items.map((item, index) => (
                            <div className='flex items-center justify-center' key={index}>
                                <input className='w-[100px] text-black border border-black'
                                    type="number"
                                    placeholder='Loại danh mục'
                                    value={item.type}
                                    onChange={handleTypeChange}
                                    // onChange={e => handleInputEventTypeChange(index, e.target.value)}
                                />
                                <input className='w-1/3 ml-2 text-black border border-black'
                                    type="text"
                                    placeholder='Tên danh mục'
                                    value={item.title}
                                    onChange={e => handleInputChange(index, e.target.value)}
                                />
                                <input
                                    className='w-1/5 ml-2 text-black border border-black'
                                    type="file"
                                    accept="image/*"
                                    onChange={e => handleImageUpload(index, e.target.files[0])}
                                />
                                <img src={API_URL_IMAGE + item.icon} className='ml-2 w-[50px] h-[50px]'/>
                                <button className="w-1/5 px-2 py-1 mt-2 mb-5 ml-2 text-white bg-red-500 rounded hover:bg-orange-600" onClick={() => handleRemove(item)}>Remove</button>
                            </div>
                        ))} */}

                        {items.map((item, index) => (
                            <EventItemComponent
                                key={index}
                                item={item}
                                index={index}
                                handleInputChange={handleInputChange}
                                handleImageUpload={handleImageUpload}
                                handleItemRemove={handleItemRemove}

                            />
                        ))}



                    </div>

                </div>

            </div>


        </div>

    );
}

export default EventEdit