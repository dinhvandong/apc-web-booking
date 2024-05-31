import React, { useState } from 'react';
import { EditorState, convertToRaw, convertFromRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import axios from 'axios';
import { createNews } from '../../services/api_news';
import CategoryNewsList from './CategoryNewsList';

const NewsCreate = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleEditorChange = (state) => {
    setEditorState(state);
  };

  const categories = [
    { name: 'The Cruise' },
    { name: 'Cabin' },
    { name: 'Dining' },
    { name: 'Sundeck' },
    { name: 'Spa' },

    // Add more category objects as needed
  ];
  const saveContent = async () => {
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);

    try {
      // Make a POST request to your REST API to save the content
      // const response = await axios.post('YOUR_API_ENDPOINT', {
      //   content: JSON.stringify(rawContentState),
      // });

      const news = {
        content: JSON.stringify(rawContentState),
      }

      const response = await createNews(news);
      console.log('Content saved:', response.data);
    } catch (error) {
      console.error('Error saving content:', error);
    }
  };

  return (
    <div>

      <div className='mt-5'>

        <label>Title</label>
        <input className='w-full py-3 border border-gray-600 ' />
      </div>

      <div>

        <label>Sub Title</label>
        <input className='w-full py-3 border border-gray-600 ' />
      </div>



      <div>
      <label>Select Category</label>

      <CategoryNewsList categories={categories} />



      </div>


      <h3 className="mt-4 text-lg font-bold">Content Draft</h3>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
      />
      <button
        className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        onClick={saveContent}
      >
        Save Content
      </button>
    </div>
  );
};

export default NewsCreate;