import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='fixed w-full flex h-10 bg-gradient-to-r from-red-200 to-red-200 items-center justify-between  px-20 pr-44'>
            <h1 className=' flex text-center justify-center w-72 font-rale font-bold text-2xl text-red-600'>Find Blood Donor</h1>
            <ul className=' w-1/4 flex justify-evenly text-black font-ubuntu font-extrabold text-xl'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/search">Search</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;