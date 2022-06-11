import React from 'react';
import { Link } from 'react-router-dom';


const Blogs = () => {
    return (
        <div className='  mx-auto h-screen flex justify-center flex-col items-center'>
            <h2 className='text-3xl font-primary text-red-400'>Blogs</h2>
            <h2 className='text-6xl font-primary text-red-400'>Coming Soon..</h2>
            <Link to='/'
                className='px-3 py-1 text-black rounded-md mt-5 bg-red-400 hover:bg-secondary-hover transition-all hover:font-semibold hover:text-white'
            >
                Home
            </Link>
        </div>
    );
};

export default Blogs;