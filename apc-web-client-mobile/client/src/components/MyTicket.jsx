import React from 'react'

const MyTicket = () => {
    return (
        <div className='flex flex-col w-full '>

            <div className='text-4xl font-bold ml-5 mr-5 text-white'>
                Vé của tôi
            </div>

            <div className='ml-5 mr-5 mt-5' >
                <p className='text-white'>Mã đặt vé</p>
                <input className='rounded-md h-[40px] w-full bg-white' />
            </div>
            <div className='ml-5 mr-5'>
                <p className='text-white'>Họ*</p>
                <input className='rounded-md h-[40px] w-full bg-white' />

            </div>
            <div className='ml-5 mr-5'>
                <p>Vui lòng nhập mã đặt chỗ và họ của bạn để khôi phục đặt vé</p>
            </div>
            <div className='ml-5 mr-5'>

                <button className='font-bold w-full flex rounded-md justify-center items-center  h-[40px] bg-red-800'>
                    Tra cứu
                </button>
            </div>


        </div>)
}

export default MyTicket