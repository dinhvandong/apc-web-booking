import React from 'react'
import { MdKeyboardArrowUp } from 'react-icons/md'

const CustomerItem = () => {
    return (
        <div className='flex flex-col w-full p-5 mt-5 border border-gray-300'>


            <div className='flex w-full mt-5 text-[16px] text-black font-bold'>

                <div className='flex items-center justify-start w-1/2'>

                    <p>1. Mr. Ding Dong</p>

                </div>
                <div className='flex items-center justify-end w-1/2 text-end'>
                    <MdKeyboardArrowUp className='w-6 h-6 text-brown_color' />


                </div>

            </div>

            <div className='flex w-full' >

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

                <div className='w-1/3'>
                    <p>Mr.</p>

                </div>
                <div className='w-1/3'>
                    <p>Dong</p>

                </div>

                <div className='w-1/3'>
                    <p>Dinh</p>

                </div>

            </div>


            <div className='flex flex-col w-full' >

                <label>Date of birth</label>
                <input className='w-full text-brown_color' />
            </div>

            <div className='flex w-full' >

                <div className='w-1/2'>
                    <label>Passport</label>
                    <input className='w-full text-brown_color' />

                </div>
                <div className='w-1/2'>
                    <label>Number</label>
                    <input className='w-full text-brown_color' />

                </div>
            </div>

            <div className='flex w-full' >

                <div className='w-1/2'>
                    <label>Nationality</label>
                    <input className='w-full text-brown_color' />

                </div>
                <div className='w-1/2'>
                    <label>Province</label>
                    <input className='w-full text-brown_color' />

                </div>
            </div>

            <div className='flex w-full text-brown_color' >

                <input className='w-full' placeholder='Special Dietary Request' />
            </div>



        </div>
    )
}

export default CustomerItem