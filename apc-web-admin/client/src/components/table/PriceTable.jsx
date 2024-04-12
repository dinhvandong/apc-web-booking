import React, { useEffect, useState } from 'react';
import { convertDateFormat, deleteUser, getPricesByRoomID, getRooms, getUsers } from '../../services/api'
import { Button, Space, Table, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import defaultImage from '../../assets/avata.png'
import './UserTable.css'; // Import your custom CSS file
//import './tableStyle.css';
const PriceTable = () => {
  const [priceList, setPriceList] = useState([]);
  const navigate = useNavigate();

  const handleEdit = (id) => {
    console.log('Edit clicked for ID:', id);
    navigate(`/admin/price/update/${id}`)
  };

  const handleDelete = async (id) => {
    console.log('Delete clicked for ID:', id);
    const response = await deleteUser(id);
    refreshData();
    console.log("delete:", response);
  };

  const refreshData = async () => {
    try {
      const priceList = await getPricesByRoomID();
      console.log("priceList", priceList);
      setPriceList(priceList);
    } catch (error) {
      // Handle error
      console.error('Error:', error);
    }
  }

  const getRowClassName = (record, index) => {
    return index %2===1 ? 'row-even' : 'row-odd';
  };

  useEffect(() => {
    const fetRooms = async () => {
      try {
        const priceList = await getPricesByRoomID();
        console.log("priceList", priceList);
        setPriceList(priceList);
      } catch (error) {
        // Handle error
        console.error('Error:', error);
      }
    };
    fetRooms();
  }, []);

  function handleAgeChange(value, id) {
    // Handle the age change here and update the dataSource or make an API call
    console.log(`New age for record ${id}: ${value}`);
  }
  const columns = [
    {
      title: 'Phần trăm',
      dataIndex: 'percentage',
      key: 'percentage',
      // width: '10%'
    },
    
    {
      title: 'Giá',
      dataIndex: 'priceUpdate',
      key: 'priceUpdate',

      render: (_, record) => (
        <Input
          value={record.priceUpdate}
          onChange={(e) => handleAgeChange(e.target.value, record.priceUpdate)}
        />
      ),
      // width: '20%'

    },
    {
      title: 'Hành động',
      key: 'actions',
      render: (text, record) => (
        <Space size="middle">
          <Button className="text-white bg-edit" type="primary" onClick={() => handleEdit(record.id)}>Cập nhật</Button>
          <Button className="mr-5 text-white bg-delete" type="danger" onClick={() => handleDelete(record.id)}>Xóa</Button>
        
        </Space>
      ),
    },
    // Add more columns as needed
  ];
  return (
    <div className="w-[100%]  flex justify-center items-center">
      <Table style={{ width: '100%', fontFamily: 'Courier New ' }} rowClassName={getRowClassName} dataSource={priceList} columns={columns} />
    </div>
  );
};

export default PriceTable;