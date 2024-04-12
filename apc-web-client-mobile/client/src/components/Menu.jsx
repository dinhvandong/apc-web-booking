import React from 'react'
import ListMenu from './ListMenu'

import iconMenu1 from '../assets/icon-menu1.png'
import iconMenu2 from '../assets/icon-menu2.png'
import iconMenu3 from '../assets/icon-menu3.png'
import iconMenu4 from '../assets/icon-menu4.png'
import iconMenu5 from '../assets/icon-menu5.png'
import iconMenu6 from '../assets/icon-menu6.png'
import iconMenu7 from '../assets/icon-menu7.png'
import iconMenu8 from '../assets/icon-menu8.png'
import iconMenu9 from '../assets/icon-menu9.png'
import iconMenu10 from '../assets/icon-menu10.png'
import iconMenu11 from '../assets/icon-menu11.png'

const Menu = () => {
    const jsonData = [
        {
            "title": {iconMenu1},
            "description": "Manage Booking"
        },
        {
            "title":  {iconMenu2},
            "description": "Promotion"
        },
        {
            "title":  {iconMenu3},
            "description": "Vouchers"
        },
        {
            "title":  {iconMenu4},
            "description": "Itinerary"
        },
        {
            "title":  {iconMenu5},
            "description": "T&C"
        },
        {
            "title":  {iconMenu6},
            "description": "News"
        },
        {
            "title":  {iconMenu7},
            "description": "Privacy "
        },
        {
            "title":  {iconMenu8},
            "description": "F&Q"
        },
        {
            "title":  {iconMenu9},
            "description": "Contact Us"
        },
        {
            "title":  {iconMenu10},
            "description": "Gallery"
        },
        {
            "title":  {iconMenu11},
            "description": "Setting"
        }
    ];

    return (
        <div className='flex flex-col m-5'>
            <p className='mt-5 text-4xl mb-5 font-bold text-white'>
                <h1> Menu</h1>
            </p>

            <ListMenu  />
        </div>
    )
};

export default Menu;