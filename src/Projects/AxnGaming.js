import React from 'react';
import image1 from '../assets/projects/axn.PNG'
import image2 from '../assets/projects/axn2.PNG'
import image3 from '../assets/projects/axn3.PNG'
import { Link as LinkRouter } from "react-router-dom";
import { AiOutlineArrowLeft } from 'react-icons/ai'



const AxnGaming = () => {
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
                            <h2 className='text-gray-600 pt-0 text-sm font-bold'>In This Project we worked with react router to avoid reloading and making it a single-page-application.
                                We used Custom hooks so that we dont have to repeat ourselves.
                                We use recharts to create charts.
                                We fetched data and showed into our reviews.
                                We used js to slice reviews into home page and then use the reviews again in reviews page and showing all of the reviews.Note this is only dekstop responsive.</h2>
                            <h2 className='text-gray-600 mt-2 text-sm font-bold'>
                                React, HTMl, CSS, Bootstrap
                            </h2>
                            <div className='flex gap-3 my-3'>
                                <a className='text-red-400 hover:underline cursor-pointer' href='https://axngaming.netlify.app/ ' target="_blank" rel='noreferrer'>
                                    Live Website
                                </a>
                                <a className='text-red-400 hover:underline   cursor-pointer' href='https://github.com/DevMohi/Axn-gaming' target="_blank" rel='noreferrer'>
                                    Github Client
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

export default AxnGaming;