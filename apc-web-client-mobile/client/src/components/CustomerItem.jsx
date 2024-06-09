import React from 'react'
import { MdKeyboardArrowUp } from 'react-icons/md'

const CustomerItem = ({ title, firstName, lastName, dateOfBirth, personIdType, personIdNumber, nation, province, note }) => {
    return (
        <div className='flex flex-col w-full p-5 mt-5 border border-gray-300'>
            <div className='flex w-full mt-2 text-[16px] text-black'>
                <div className='flex items-center justify-start w-1/2'>
                    <p>{title}. {lastName} {firstName}</p>
                </div>
                <div className='flex items-center justify-end w-1/2 text-end'>
                    <MdKeyboardArrowUp className='w-6 h-6 text-brown_color' />
                </div>
            </div>

            <div className='flex w-full mt-3' >

                <div className='w-1/3'>
                    <p>Title</p>

                </div>
                <div className='w-1/3'>
                    <p>First Name</p>

                </div>

                <div className='w-1/3'>
                    <p>Last Name</p>

                </div>

            </div>

            <div className='flex w-full' >

                <div className='w-1/3 text-brown_color'>
                    <p>{title}.</p>

                </div>
                <div className='w-1/3 text-brown_color'>
                    <p>{firstName}</p>

                </div>

                <div className='w-1/3 text-brown_color'>
                    <p>{lastName}</p>

                </div>

            </div>


            <div className='flex flex-col w-full' >

                <label>Date of birth</label>
                <p className='w-full text-brown_color'>
                    {dateOfBirth}
                </p>
            </div>

            <div className='flex w-full' >

                <div className='w-1/2'>
                    <label>ID/Passport</label>
                    <p className='w-full text-brown_color'>
                        {personIdType}
                    </p>

                </div>
                <div className='w-1/2'>
                    <label>Number</label>
                    <p className='w-full text-brown_color'>
                        {personIdNumber}
                    </p>

                </div>
            </div>

            <div className='flex w-full' >

                <div className='w-1/2'>
                    <label>Nationality</label>
                    <p className='w-full text-brown_color'>
                        {nation}
                    </p>

                </div>
                <div className='w-1/2'>
                    <label>Province</label>
                    <p className='w-full text-brown_color'>
                        {province}
                    </p>

                </div>
            </div>

            <div className='flex w-full mt-3 text-brown_color' >

                <input value={note} className='w-full px-5 py-2 border' placeholder='Special Dietary Request' />
            </div>



        </div>
    )
}

export default CustomerItem