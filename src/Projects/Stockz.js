import React from 'react';
import image1 from '../assets/projects/stockz.PNG'
import image2 from '../assets/projects/stockz3.PNG'
import image3 from '../assets/projects/stockz2.PNG'
import { Link as LinkRouter } from "react-router-dom";
import { AiOutlineArrowLeft } from 'react-icons/ai'



const Stockz = () => {
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
                            <h2 className='text-gray-600 pt-0 text-sm font-bold'>This is a warehouse website based on bike stocks, the user can login, update,delete, create stocks. This is a full stack project, and here you can find all the latest bikes
                                The Website has login and logout , also the user can login with google authentication , this has been done through firebase.
                                You can Update and Manage Inventories
                                The Website allows user to restock the items, this is done through the through connection of a database
                                The Website doesnt have any reloading , thanks to react router Links.
                                You can do crud operations with the inventories.
                                You can add items and delete them
                                JWT token is added so basically it is secured, nobody from outside cannot access your data
                                Data has been fetched directly from database, so basically its real time.</h2>
                            <h2 className='text-gray-600 mt-2 text-sm font-bold'>MongoDB
                                React Firebase Hooks
                                Google Firebase
                                React Router
                                React Toastify
                                React
                                Node JS
                                heroku </h2>
                            <div className='flex gap-3 my-3'>
                                <a className='text-red-400 hover:underline cursor-pointer' href='https://warehouse-project-f3584.web.app/' target="_blank" rel='noreferrer'>
                                    Live Website
                                </a>
                                <a className='text-red-400 hover:underline   cursor-pointer' href='https://github.com/DevMohi/stockZ-client' target="_blank" rel='noreferrer'>
                                    Github Client
                                </a>
                                <a className='text-red-400 hover:underline   cursor-pointer' href='https://github.com/DevMohi/stockZ-server' target="_blank" rel='noreferrer'>
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

export default Stockz;