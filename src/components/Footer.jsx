import React from 'react'
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { FaTwitter, FaPinterestSquare, FaGooglePlusG } from "react-icons/fa";


function Footer() {
  return (
   <footer className='w-full h-110 bg-[#f0f0f0] p-5'>
    <section className='flex'>
      <div className='w-150 h-75 items-center flex-col '>
        <div className='flex flex-col gap-3'>
              <div className=''>
            <h1 className='font-bold text-lg'>GET IN TOUCH</h1> 
        </div>
       <div>
          <p>Any questions? Let us know in store at 8th floor, 379 Hudson St,
             New York, NY 10018 or call us on (+1) 96 716 6879</p>
       </div>
        <div className='flex text-[20px] gap-2 '>
                                    <FaFacebookF className='hover:text-red-500' />
                                    <FaTwitter className='hover:text-red-500' />
                                    <FaPinterestSquare className='hover:text-red-500' />
                                    <FaGooglePlusG className='hover:text-red-500' />
                                    <FaInstagram className='hover:text-red-500' />
                                </div>
        </div>
      
      
               
    </div>
    <div className='flex  w-210 items-center justify-center pl-4'>
           <div className=' w-100 h-75 flex flex-col gap-5'>
    <h1 className='font-bold text-lg'>CATEGORIES</h1>
    <div className='flex flex-col'>
   <a href="" className='hover:text-orange-300'>Men</a>
   <a href="" className='hover:text-orange-300'>Women</a>
   <a href="" className='hover:text-orange-300'>Dresses</a>
   <a href="" className='hover:text-orange-300'>Sunglasses</a>
    </div>

    </div>  
    <div className=' w-100 h-75 flex flex-col gap-5'>
    <h1 className='font-bold text-lg'>LINKS</h1>
    <div className='flex flex-col'>
   <a href="" className='hover:text-orange-300'>Search</a>
   <a href="" className='hover:text-orange-300'>About Us</a>
   <a href="" className='hover:text-orange-300'>Contact Us</a>
   <a href="" className='hover:text-orange-300'>Returns</a>
    </div>

    </div> 

       <div className=' w-100 h-75 flex flex-col gap-5'>
    <h1 className='font-bold text-lg'>HELP</h1>
    <div className='flex flex-col'>
   <a href="" className='hover:text-orange-300'>Track Order</a>
   <a href="" className='hover:text-orange-300'>Returns</a>
   <a href="" className='hover:text-orange-300'>Shipping</a>
   <a href="" className='hover:text-orange-300'>FAQs</a>
    </div>

    </div>  
    </div>


        <div className=' w-100 h-75 '>
    <h1 className='font-bold text-lg'>NEWSLETTER</h1>
    <div className='flex flex-col gap-2'>
         <div className='flex flex-col'>
  <input type="text" placeholder='Email Address' className='border-b-2 w-75 outline-0'/>
    </div>
    <div>
        <button className='bg-black py-2 px-2 rounded text-white gap-2 '>Subscribe</button>
    </div> 
    </div>
  

    </div>  

    </section>
    
<div className='flex items-center justify-center'>
    <p>Copyright © 2022 <span className='hover:text-red-500'>Shopify Theme Developed by MassTechnologist</span>  All rights reserved.</p>

</div>
   </footer>
  )
}

export default Footer