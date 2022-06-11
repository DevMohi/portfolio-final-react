import { Link as LinkRouter } from "react-router-dom";
import { Link } from 'react-scroll'
import {

    FaGithub,
    FaLinkedin,

} from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

import React from 'react';

const menuItems = <>


    <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
    <li><Link to="about" smooth={true} duration={500}>About</Link></li>
    <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
    <li><Link to="work" smooth={true} duration={500}>Work</Link></li>
    <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
    <li><LinkRouter to="/blogs">Blogs</LinkRouter></li>

</>

const Navbar = () => {
    return (
        <div class="navbar fixed bg-base-100 px-16">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl text-red-400">MU|PORTOLIO</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0 border border-red-400">
                    {menuItems}
                </ul>
            </div>
            <div class="navbar-end">
                <button className="bg-black text-white group rounded-3xl border-2 px-6 py-3 my-2 flex items-center hover:bg-red-400 hover:border-red-500">Resume</button>
            </div>

            {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 px-3'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://www.linkedin.com/in/mohammed-mohi-uddin-654412220/' target='_blank'
                        >
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] px-3'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://github.com/DevMohi' target='_blank'
                        >
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] px-3'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://drive.google.com/file/d/114NC8CTkSaxDa7TheaSlDjuRSpzQYhfX/view?usp=sharing' target='_blank'
                        >
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;