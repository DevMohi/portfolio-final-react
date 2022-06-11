import { Link as LinkRouter } from "react-router-dom";
import {Link} from 'react-scroll'

import React from 'react';

const menuItems = <>


    <li><LinkRouter to="/">About</LinkRouter></li>
    <li><LinkRouter to="/">Blogs</LinkRouter></li>
    <li><LinkRouter to="/">Work</LinkRouter></li>
    <li><LinkRouter to="/blogs">Blogs</LinkRouter></li>
    <li><Link to="home" >Home</Link></li>

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
        </div>
    );
};

export default Navbar;