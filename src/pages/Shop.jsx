import React from 'react'
import { imgg } from "../constants/imags";
import { IoSearch } from "react-icons/io5";
import {products} from '../constants/data'
import Footer  from '../components/Footer';
import Products from '../components/Prodact'

function Shop() {
      const colors = ["black", "gray", "red"];

  return (
    <>
    <section className=' w-full h-60 relative'>
        <img src={imgg.banner} alt="" />
        <h1 className='text-white z-111 font-extrabold text-5xl absolute top-25 right-220'>PRODUCTS</h1>
    </section>
    <section className='container w-full h-250 mx-auto'>
        <div className='flex w-full h-full '>
             <div className=' h-[99%] w-100 gap-15 p-5 flex flex-col'>
                <div className='flex flex-col'>
                    <h1 className='font-bold text-lg'>Categories</h1>
<span className='text-gray-500 hover:text-orange-300'>Best Seller (8 items)</span>
<span className='text-gray-500 hover:text-orange-300'>Featured (8 items)</span>
<span className='text-gray-500 hover:text-orange-300'>Men (8 items)</span>
<span className='text-gray-500 hover:text-orange-300'>Women (8 items)</span>
                </div>
                   <div className="flex flex-col gap-3 p-4">
            <h1 className='font-bold text-2xl'>color</h1>

      {colors.map((color) => (
        <label key={color} className="flex items-center cursor-pointer gap-3">
                <input type="checkbox"/>
          <span className="text-gray-600 text-lg hover:text-black">
            {color}
          </span>
        </label>
      ))}
         </div>
               <div className='flex flex-col'>
            <h1 className='font-bold text-lg'>Categories</h1>
   <label className="flex items-center cursor-pointer gap-3 text-gray-600">
           <input type="checkbox"/>
                 0-20
        </label>
        <label className="flex items-center cursor-pointer gap-3 text-gray-600">
            <input type="checkbox"/>
                  20-40
        </label>
            </div>
            <div className='flex flex-col'>
            <h1 className='font-bold text-lg'>Categories</h1>
 <label className="flex items-center cursor-pointer gap-3 text-gray-600">
            <input type="checkbox"/>
                  L
        </label>
         <label className="flex items-center cursor-pointer gap-3 text-gray-600">
                <input type="checkbox"/>
               M
      </label>
         <label className="flex items-center cursor-pointer gap-3 text-gray-600">
                <input type="checkbox"/>
                  S
        </label>
         <label className="flex items-center cursor-pointer gap-3 text-gray-600">
                <input type="checkbox"/>
                  XL
        </label>
            </div>
             <div className='flex flex-col relative'>
             <h1 className='font-bold text-lg'>Categories</h1>
<input type="text" placeholder='Search...' className='text-gray-500 border w-80 py-2 px-2 outline-0 '/>
 <IoSearch className='absolute cursor-pointer  top-10 right-2'/>
                </div>
               
             </div>
    <div className=' h-[99%] w-350 flex flex-col'>
        <div className='b w-full h-25 flex gap-3 justify-between p-5'>
            <div className='flex gap-5'>
                  <select className='border-gray-400 border w-60 h-10'>
                    <option value="">Featured</option>
                    <option value="">Best Selling</option>
                    <option value="">Alphabetically, A-Z</option>
                    <option value="">Alphabetically, Z-A</option>
                    <option value="">Price, low to high</option>
                    <option value="">Price, high to low</option>
                    <option value="">Date, old to new</option>
    </select>
                  <select className='border-gray-400 border w-60 h-10'>
                    <option value="">10</option>
                    <option value="">20</option>
                    <option value="">30</option>
                    <option value="">ALL</option>
                </select>
            </div>
                   <div className='text-gray-500'> 
<p>Showing 1 to 6 of 8 items</p>
        </div>
        
        </div>
 <section>
  <Products />
 </section>


        </div> 
        
        </div>
  
  
    </section>
  
    </>
  )
}

export default Shop