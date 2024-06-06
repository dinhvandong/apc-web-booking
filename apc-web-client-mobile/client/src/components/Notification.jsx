import React from 'react'
import NotificationItem from './NotificationItem';

const Notification = () => {

    const data = [
        {
            id: 1,
            title: "Your Ambassador Cruise",
            content: "Can’t wait to welcome you on Ambassador Cruise! Your trip departs tomorrow!",
            date:'24/05'

        },
        {
            id: 2,
            title: "Complete Passenger Information",
            content: "Hurry up! Don't forget to complete your Passenger Information within today!",
            date:'20/05'

        },
        {
            id: 3,
            title: "Your Ambassador Cruise",
            content: "Finish packing for your trip on Ambassador Cruise? 3 days left to your trip!",
            date:'21/05'

        },
        {
            id: 4,
            title: "Complete Passenger Information",
            content: "Take your time to complete Passenger Information before your departure!",
            date:'22/05'

        },
        {
            id: 5,
            title: "Your Ambassador Cruise",
            content: "Get ready - Your Halong Bay excursion on Ambassador Cruise departs soon!",
            date:'26/05'

        },
        {
            id: 6,
            title: "Complete Passenger Information",
            content: "Looks like you haven't finished your Passenger Information? Complete now!",
            date:'22/05'

        },
        // Add more items as needed...
    ];

    return (
        <div className='flex flex-col mt-[100px] mb-[100px] bg-[#fff] items-center flex-1 w-full overflow-y-auto'>
            <div className="space-y-4 mt-5 w-full flex flex-col justify-center md:w-[600px]">
                {data.map((news, index) => (
                    <NotificationItem key={index} news={news} />
                ))}
            </div>


        </div>
    )
}

export default Notification