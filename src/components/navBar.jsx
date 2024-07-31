import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBasketShopping, faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png'

export default function NavBar({ className, prop }) {
    return (
        <>
            <div className='w-full md:h-12 h-10 flex justify-center items-center bg-black'>
                <h1 className='text-clr text-xs md:text-md'>
                    Sign up and get 20% off your first order.
                    <a href="" className='border-b-2 border-clr'>Sign Up Now</a>
                </h1>
            </div>
            <nav className='w-full h-20  flex'>
                <div className='w-full h-full gap-2 items-center flex'>
                    <FontAwesomeIcon icon={faBars} className='text-4xl ml-2 md:hidden' />
                    <img src={logo} className='md:ml-4' alt="logo" />
                    <ul className='hidden md:flex md:w-full gap-8 h-full items-center justify-center'>
                        <select name="sele" id="sele" className='w-20'>
                            <option value="shop">shop</option>
                        </select>
                        <li><a href="">On Sale</a></li>
                        <li><a href="">New Arrivals</a></li>
                        <li><a href="">Brands</a></li>
                    </ul>
                </div>
                <div className='w-full h-full gap-2 p-3 items-center justify-end flex'>
                    <div className='hidden md:w-full md:flex md:bg-gray-200 md:items-center md:h-full rounded-2xl md:border-2'>
                        <FontAwesomeIcon icon={faSearch} className='text-3xl md:ml-4 md:text-gray-500' />
                        <input type="text" placeholder='Search For Products...' className='md:w-full md:h-full md:rounded-2xl md:bg-gray-200 md:pl-3 md:focus:outline-none' />
                    </div>
                    <FontAwesomeIcon icon={faSearch} className='text-3xl md:hidden' />
                    <FontAwesomeIcon icon={faBasketShopping} className='text-3xl'/>
                    <FontAwesomeIcon icon={faUserCircle} className='text-3xl'/>
                </div>
            </nav>
        </>
    );
}
