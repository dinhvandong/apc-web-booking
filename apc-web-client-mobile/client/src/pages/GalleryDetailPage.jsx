import React from 'react'
import BottomNavigation from '../components/BottomNavigation'
import GalleryDetail from '../components/GalleryDetail'

const GalleryDetailPage = () => {

    const arrayImages = [
'https://media-cdn.tripadvisor.com/media/vr-splice-j/03/64/b1/cf.jpg',
'https://i.pinimg.com/originals/84/ae/d6/84aed67948a101b30549b6dc7c691b93.jpg',
'https://media.inmobalia.com/imgV1/B98Le8~d7M9k3DegigWkzHXQlgzMFGqGJJp6ZRUcpX033lqadFBp2i4GGW4X3JDm~11J_coE7XMgSyFWgioo4vCKf4wULEsOpqe6P8eSou~XT6zd3b33x6yIRl7rSpe8Vs_HR5NTOQQ4L9HuZEU65WO6zXDPCUc4BJvKMQ~8IZ291YSg3wNRDcp2TPEUBd8ae3_B1rqEzYnlC6fGCj3Ncqg53mzWDxdJBIhmcB_r5lg-.jpg',
'https://tse3.mm.bing.net/th?id=OIP.2tllERXrHDmW7VqoGfschwHaEp&pid=Api&P=0&h=220',
'https://mir-s3-cdn-cf.behance.net/project_modules/1400/978ee884393661.5d5bc441b965b.jpg'

    ]
    return (
        <div
            className={`h-screen bg-cover bg-center flex flex-col md:bg-white bg-black items-center transition-opacity duration-500`}>
            <GalleryDetail arrayImages={arrayImages} />
            <BottomNavigation selected={"home"} />
        </div>)
}

export default GalleryDetailPage