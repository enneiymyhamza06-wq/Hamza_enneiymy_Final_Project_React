import React from 'react'
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { GrShop } from "react-icons/gr";
import { FaTwitter, FaPinterestSquare, FaGooglePlusG } from "react-icons/fa";
import Email from './Email';
import { Link, useNavigate } from 'react-router-dom'


function Nav_bar() {
     const navigate = useNavigate();
    return (
        
        <>
            <nav className='w-full h-40 bg-[#ffffff] flex-column'>
                <div className='text-gray-400 w-full h-10 bg-[#f5f5f5] p-5 flex items-center justify-between'>
                    <div className='flex text-[20px] gap-2 '>
                        <FaFacebookF className='hover:text-red-500' />
                        <FaTwitter className='hover:text-red-500' />
                        <FaPinterestSquare className='hover:text-red-500' />
                        <FaGooglePlusG className='hover:text-red-500' />
                        <FaInstagram className='hover:text-red-500' />
                    </div>
                    <div className='flex'>
                        <p>Free shipping for standard order over $100</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p>fashe@example.com</p>

                        <select>
                            <option value="">USD</option>
                            <option value="">EUR</option>
                            <option value="">GPB</option>
                            <option value="">PKR</option>
                            <option value="">CAD</option>
                            <option value="">JPY</option>
                        </select>
                    </div>
                </div>
                <div className='flex w-full h-20  p-3 items-center justify-between'>

                     <div className=' flex items-center'>
                    <a href="" className='text-4xl font-extrabold'>Fashe <span className='text-red-500'>.</span></a>
                </div>

                <div className='flex gap-2 text-[19px] font-light gap-4 text-gray-500'>
                    <a href="/" className='hover:border-b-2 '>Home</a>
                    <a href="" className='hover:border-b-2 '>Shop</a>
                    <a href="" className='hover:border-b-2 '>Sale</a>
                    <a href="" className='hover:border-b-2 '>Features</a>
                    <a href="" className='hover:border-b-2 '>Blog</a>
                    <a href="" className='hover:border-b-2 '>About</a>
                    <a href="" className='hover:border-b-2 '>Contact</a>
                </div>
                <div className='w-45 h-25 text-4xl flex items-center gap-4 justify-center
                 text-gray-400'>
                    
                        <p className='border-r-2 pr-3' onClick={() => navigate('/email')}
                        ><FaRegUserCircle /></p>
                  
                    <p><GrShop /> </p>
                </div>
                </div>
               
            </nav>


        </>
    )
}

export default Nav_bar