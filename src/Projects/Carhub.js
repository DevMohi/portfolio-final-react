import React from 'react';
import image1 from '../assets/projects/carHub.PNG'
import image2 from '../assets/projects/carHub2.PNG'
import image3 from '../assets/projects/carHub3.PNG'
import { Link as LinkRouter } from "react-router-dom";
import { AiOutlineArrowLeft } from 'react-icons/ai'



const Carhub = () => {
    return (
        <div className=''>
            <h1 className='text-center text-5xl text-red-400 mt-2'>Project Details</h1>
            <div className=' mx-auto flex justify-center flex-col items-center  mt-8'>
                <div className='max-w-7xl mx-auto px-3 lg:px-0  lg:py-0 py-12 pt-24 lg:pt-0 '>
                    <div className='flex gap-6 lg:flex-row flex-col items-center shadow-2xl px-16 py-4'>
                        <div class="carousel lg:w-1/4 rounded-xl lg:flex-1 shadow-2xl">
                            <div id="slide1" class="carousel-item relative w-full">
                                <img src={image1} class="w-full" alt='' />
                                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide4" class="btn btn-circle">❮</a>
                                    <a href="#slide2" class="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide2" class="carousel-item relative w-full">
                                <img src={image2} class="w-full" alt='' />
                                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide1" class="btn btn-circle">❮</a>
                                    <a href="#slide3" class="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide3" class="carousel-item relative w-full">
                                <img src={image3} class="w-full" alt='' />
                                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide2" class="btn btn-circle">❮</a>
                                    <a href="#slide4" class="btn btn-circle">❯</a>
                                </div>
                            </div>
                        </div>
                        <div className='lg:flex-1'>
                            <h2 className='text-gray-600 pt-0 text-sm font-bold'>This is a full stack project based on car parts, here the users can purchase products and pay for them , after the payment is done, the user can see his transaction id along with the orders that are now pending for delivery, the user can add reviews, edit his profile, The user can cancel order if they dont want to pay. For the Admin, the admin can add new products and delete products ,admin can edit the admin profile, the admin can make others admin. The orders that are unpaid by the user can be cancelled by the admin. Finally the admin can give approval for shipment for the users paid orders and this will then show shipped in user too meaning the order is out for delivery</h2>
                            <h2 className='text-gray-600 mt-2 text-sm font-bold'>Technologies Used:MongoDB
                                React Firebase Hooks
                                React Query
                                Axios
                                Daisy UI
                                Tailwind
                                Express js
                                React form hooks
                                Google Firebase
                                React Router
                                React Toastify
                                React
                                Node JS
                                Heroku
                                Stripe </h2>
                            <div className='flex gap-3 my-3'>
                                <a className='text-red-400 hover:text-white cursor-pointer' href='https://carhub-assingment.web.app/ ' target="_blank" rel='noreferrer'>
                                    Live Website
                                </a>
                                <a className='text-red-400 hover:text-white cursor-pointer' href='https://github.com/DevMohi/Carhub-Client' target="_blank" rel='noreferrer'>
                                    Github Client
                                </a>
                                <a className='text-red-400 hover:text-white cursor-pointer' href='https://github.com/DevMohi/Carhub-Server' target="_blank" rel='noreferrer'>
                                    Github Server
                                </a>
                            </div>

                            <div className=''>
                                <LinkRouter to='/' className='btn btn-sm py-2 border-none hover:bg-red-400'><span><AiOutlineArrowLeft /></span> Home</LinkRouter>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carhub;