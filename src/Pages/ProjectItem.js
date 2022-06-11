import React from 'react'
import { Link as LinkRouter } from "react-router-dom";


const ProjectItem = ({ title, backgroundImg, projectUrl }) => {
    return (
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#e55191] to-[#600404]'>
            <img className='rounded-xl group-hover:opacity-20' height='1000px' src={backgroundImg} alt='/' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>

                <div className='flex'>
                    <LinkRouter className=' py-3 w-[150px]' to={projectUrl}>
                        <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'> Project Info</p>
                    </LinkRouter>
                </div>
            </div>

        </div>
    )
}

export default ProjectItem