import React from 'react'
import Map from './Map' 

const Contact = () => {
    return (
        <div className='w-full md:w-[600px] flex flex-col mt-[100px] mb-[100px] bg-[#fff] items-center flex-1 w-full overflow-y-auto'>
            <Map />

            <div className='flex flex-col justify-start w-full px-5 mt-5'>
                <p className='text-[18px] text-black font-bold'>
                    Hanoi Office
                </p>
                <p>
                    Add: Ambassador Cruise, Room 1102, 11th Floor,
                </p>
                <p>
                    Hanoi Tower, 49 Hai Ba Trung Street, Hoan Kiem
                </p>
                <p>
                    District, Hanoi.
                </p>
                <p>
                    Hotline: (+84) 19003045
                </p>
                <p>
                    Email: info@ambassadorcruise.com
                </p>

            </div>

            <div className='flex flex-col justify-start w-full px-5 mt-5 text-black'>
                <p className='text-[18px] font-bold'>
                    Halong Office
                </p>
                <p>
                    Add: B135 – B138 Sunworld Old Town Commercial
                </p>
                <p>
                    Area, Ha Long City, Quang Ninh
                </p>
                <p>
                    Ground Co-ordinator Hotline
                </p>
                <p>
                    (+84) 19003045 – Ext 4
                </p>
                <p>
                    Email: info@ambassadorcruise.com
                </p>

            </div>
        </div>
    )
}

export default Contact