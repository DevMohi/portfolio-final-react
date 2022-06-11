import React from 'react';
import css from '../assets/css.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import mongo from '../assets/mongo.png'
import node from '../assets/node.png'
import firebase from '../assets/firebase.png'
import express from '../assets/express.png'

const Skills = () => {
    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1248px] p-4 mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-4xl'>
                    Skills
                </p>
                <h2 className='py-4 text-red-400 text-4xl mb-2'>What I Can Do?</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-110 cursor-pointer ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <img
                                    src={html}
                                    width='64px'
                                    height='64px'
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300 cursor-point10 cursor-pointer'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <img
                                    src={css}
                                    width='64px'
                                    height='64px'
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-110 cursor-pointer ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <img
                                    src={javascript}
                                    width='64px'
                                    height='64px'
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>JAVACRIPT</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-110 cursor-pointer ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <img
                                    src={react}
                                    width='64px'
                                    height='64px'
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>REACT</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-110 cursor-pointer ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <img
                                    src={mongo}
                                    width='64px'
                                    height='64px'
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Mongo</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-110 cursor-pointer ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <img
                                    src={node}
                                    width='64px'
                                    height='64px'
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Node</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-110 cursor-pointer ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <img
                                    src={firebase}
                                    width='64px'
                                    height='64px'
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Firebase</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-110 cursor-pointer ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <img
                                    src={express}
                                    width='64px'
                                    height='64px'
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Express</h3>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Skills;