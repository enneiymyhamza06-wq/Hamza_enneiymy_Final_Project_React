import React from 'react'
import { imgg } from "../constants/imags";
import { IoSearch } from "react-icons/io5";
import {products} from '../constants/data'

function Shop() {
      const colors = ["black", "gray", "red"];

  return (
    <>
    <section className=' w-full h-60 relative'>
        <img src={imgg.banner} alt="" />
        <h1 className='text-white z-111 font-extrabold text-5xl absolute top-25 right-220'>PRODUCTS</h1>
    </section>
    <section className='bg-blue-400 container w-full h-250 mx-auto'>
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
    <div className='bg-amber-400 h-[99%] w-350 flex flex-col'>
        <div className='bg-red-500 w-full h-25 flex gap-3 justify-between p-5'>
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
 
<section className='bg-fuchsia-900'>
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16 p-2">
    
    {products.map((item) => ( // Sta3mel item direct
      <div key={item.id} className="cursor-pointer">
        
        {/* HNA FIN SLLA7NA: 
            1. 7iyedna 'flex' bach taswira takhod ra7tha
            2. 7iyedna 'Movie' span
            3. Beddelna source l 'item.image' 
        */}
        <div className="w-full h-97 bg-gray-800 rounded-2xl overflow-hidden">
             <img 
               src={item.image} 
               alt={item.title} 
               className="w-full h-full object-cover" // object-cover bach t3amar l-box
             />
        </div>

        <div>
          <h3 className="text-white text-sm font-medium mt-1">{item.title}</h3>
          <p className="text-gray-400 text-sm">${item.price}</p> {/* Zedt taman bach yban mzyan */}
        </div>

      </div>
    ))}
  </div>
</section>



        </div> 
        
        </div>
  
  
    </section>
    </>
  )
}

export default Shop