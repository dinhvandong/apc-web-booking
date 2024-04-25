import React from 'react'
import ListCabinComponent from './ListCabinComponent'

const SelectCabin = () => {

    const listCabin =
        [
            {
                "id": 1,
                "text1": "Ambassador Deluxe",
                "text2": "30m2 · Twin/Double Bed ",
                "text3": "From 2,500,000 VND",
                "image": "https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/38/23/08.jpg"
            },
            {
                "id": 2,
                "text1": "Ambassador Deluxe",
                "text2": "30m2 · Twin/Double Bed ",
                "text3": "From 2,500,000 VND",
                "image": "https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/38/23/08.jpg"
            },
            {
                "id": 3,
                "text1": "Ambassador Deluxe",
                "text2": "30m2 · Twin/Double Bed ",
                "text3": "From 2,500,000 VND", 
                "image": "https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/38/23/08.jpg"
            },
            {
                "id": 4,
                "text1": "Ambassador Deluxe",
                "text2": "30m2 · Twin/Double Bed ",
                "text3": "From 2,500,000 VND", 
                "image": "https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/38/23/08.jpg"
            },
            {
                "id": 5,
                "text1": "Ambassador Deluxe",
                "text2": "30m2 · Twin/Double Bed ",
                "text3": "From 2,500,000 VND",
                 "image": "https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/38/23/08.jpg"
            }
        ]
    return (
        <div className='flex w-full md:w-[600px] mt-10'>
            <ListCabinComponent data={listCabin} />
        </div>
    )
}

export default SelectCabin