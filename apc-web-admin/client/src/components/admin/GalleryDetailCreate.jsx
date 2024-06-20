import React, { useState } from 'react';
//import { EditorState, convertToRaw, convertFromRaw, ContentState } from 'draft-js';
//import { Editor } from 'react-draft-wysiwyg';
//import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import axios from 'axios';
import { createNews } from '../../services/api_news';
import CategoryNewsList from './CategoryNewsList';

import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import { API_URL_IMAGE, createGallery, uploadFile } from '../../services/api';
import { Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const GalleryDetailCreate = () => {
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();


  const gotoGalleryList =()=>{
    navigate("/admin/gallery");
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubTitleChange = (e) => {
    setSubTitle(e.target.value);

  }

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);

  }

  const categories = [
    { name: 'The Cruise' },
    { name: 'Cabin' },
    { name: 'Dining' },
    { name: 'Sundeck' },
    { name: 'Spa' },

    // Add more category objects as needed
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);


  const handleCategoryClick = (category) => {
    setSelectedCategory(category.name);
    setCategory(category.name);
    // Do something with the selected category in the parent component
    console.log('Selected category:', category);
  };
  const saveContent = async () => {
    //const contentState = editorState.getCurrentContent();
    //const rawContentState = convertToRaw(contentState);
    try {
      const gallery = {
        topic: title,
        shortDesc: subTitle,
        category: category,
        thumb: file.toString()
      }
      console.log("gallery:", gallery);
      const response = await createGallery(gallery);
      console.log('Content saved:', response.data);
    } catch (error) {
      console.error('Error saving content:', error);
    }

    gotoGalleryList();
  };

  const handleContentChange = (content) => {
    setContent(content);
  };

  const [file, setFile] = useState(null);

  const handleFileUpload = async (file) => {
    console.log(file);
    const response = await uploadFile(file);
    //const fileResponse = API_URL_IMAGE + response.data;
    setFile(response.data);
    console.log("upload-file", response.data);

    // setFormData(prevFormData => ({
    //     ...prevFormData,
    //     thumb: response.data
    // }));


};

  return (
    <div className='flex flex-col w-full h-auto'>
      <div className="w-full h-[50px] bg-base_color">
      </div>
      <div className='flex flex-col px-5 py-5 w-[50%] h-auto'>

      <div className='mt-5'>

        <label>Title</label>
        <input onChange={handleTitleChange} className='w-full p-2 py-3 border border-gray-600 ' />
      </div>

      <div className='mt-5'>

        <label>Sub Title</label>
        <input onChange={handleSubTitleChange} className='w-full p-2 py-3 border border-gray-600 ' />
      </div>


      <div className="mt-5">
        <label htmlFor="email" className="block mb-2 font-medium">
          Thumb Image: <span className="text-lg text-red-500">*</span>
        </label>
        <Upload
          id='thumb' name='thumb'
          beforeUpload={() => false} // Prevent automatic file upload
          onChange={(info) => handleFileUpload(info.file)}
          maxCount={1}
        >
          <Button icon={<UploadOutlined />}>Select File</Button>
        </Upload>
      </div>
      <div className="mt-2">
        <img src={API_URL_IMAGE + file} className='w-[100px] h-[100px]' />
      </div>
      {/* <div className='mt-5'>
        <label>Select Category</label>
        <div className="flex  md:text-[14px] text-[12px] w-full md:w-[600px] p-2 bg-white">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`px-4 py-2 rounded cursor-pointer ${selectedCategory === category.name ? 'bg-blue-500 text-white' : 'bg-white'
                }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category.name}
            </div>
          ))}
        </div>
      </div> */}
    
      <button
        className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        onClick={saveContent}>
        Save Content
      </button>
      </div>
    </div>
  )
}

export default GalleryDetailCreate