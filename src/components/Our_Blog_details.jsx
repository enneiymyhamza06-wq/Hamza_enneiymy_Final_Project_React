import React from 'react'
import {detailsOur} from '../constants/data'
import { useParams } from 'react-router-dom';
import { imgg } from "../constants/imags"
import { IoSearch } from "react-icons/io5";



function Our_Blog_details() {

  console.log(detailsOur);
  const id = useParams().id
  
  // console.log(useParams().id);
  return (
    <>
    {/* {detailsOur.map( (items,index) => */}

      <div className="flex flex-col md:flex-row gap-8 pt-40">
        <div className="w-full md:w-[70%]">      
          <div className="w-full h-[700px] mb-6 relative">
           <img 
          src={detailsOur[id].image}
           alt="Article Main" 
            className="w-full h-full object-cover " />
        </div>
 <h1 className="text-3xl font-bold mb-3 text-gray-800">
   {detailsOur[id].title}
   </h1>
        <p className="text-gray-500 text-sm mb-4">
            by fashe-theme Admin | crafts, street style | 1 Comments
        </p>
    <p className="text-gray-600 leading-relaxed mb-4">
         {detailsOur[id].text}
    </p>
      <a href="" className="text-black font-semibold  hover:text-red-500 transition-colors flex items-center gap-2">
                  Continue Reading <span>→</span>
                </a>
              </div>
            
               <div className="w-full md:w-[30%]">
                       
                       <div className='relative pb-3'>
                         <input type="text" placeholder='Search all articles...' className='border rounded-full w-72 py-3 px-3 text-[15px] outline-0 '/>
                         <IoSearch  className='absolute right-72 top-4 hover:text-red-500 cursor-pointer '/>
                       </div>
                       <h3 className="text-xl font-bold mb-6 text-gray-800">Featured Products</h3>
                   <div className="flex flex-col gap-6">  
                      <div className="flex gap-4">
                   <div className="w-20 h-24 flex-shrink-0">
                  <img src={imgg.shopItem8} className="w-full h-full object-cover" alt="Product" />
                 </div>
                   <div>
                <h4 className="text-gray-600 text-sm mb-1 hover:text-red-500 cursor-pointer">
                    Boxy7 T-Shirt with Roll Sleeve
              </h4>
               <p className="text-gray-400 text-sm">$20.00</p>
                  </div>
                  </div>
                  <div className="flex gap-4">
                 <div className="w-20 h-24 flex-shrink-0">
                    <img src={imgg.shopItem7} className="w-full h-full object-cover" alt="Product" />
                 </div>
                 <div>
                   <h4 className="text-gray-600 text-sm mb-1 hover:text-red-500 cursor-pointer">
                      Boxy6 T-Shirt with Roll Sleeve
                   </h4>
                 <p className="text-gray-400 text-sm">$20.00</p>
                     </div>
                      </div>
                      <div className="flex gap-4">
                       <div className="w-20 h-24 flex-shrink-0">
                       <img src={imgg.shopItem6} className="w-full h-full object-cover" alt="Product" />
                       </div>
                        <div>
             <h4 className="text-gray-600 text-sm mb-1 hover:text-red-500 cursor-pointer">
                           Boxy5 T-Shirt with Roll Sleeve
                           </h4>
                           <p className="text-gray-400 text-sm">$20.00</p>
                         </div>
                       </div>
             
                      <div className="flex gap-4">
                     <div className="w-20 h-24 flex-shrink-0">
                       <img src={imgg.shopItem5} className="w-full h-full object-cover" alt="Product" />
                       </div>
                         <div>
                   <h4 className="text-gray-600 text-sm mb-1 hover:text-red-500 cursor-pointer">              
             Boxy4 T-Shirt with Roll Sleeve
                       </h4>
                      <p className="text-gray-400 text-sm">$20.00</p>
                       </div>
                   </div>
                      <div className="flex gap-4">
                     <div className="w-20 h-24 flex-shrink-0">
                         <img src={imgg.shopItem4} className="w-full h-full object-cover" alt="Product" />
                         </div>
                         <div>
                         <h4 className="text-gray-600 text-sm mb-1 hover:text-red-500 cursor-pointer">     
             Boxy3 T-Shirt with Roll Sleeve
                       </h4>
                   <div className='flex flex-col gap-2'>
                       <p className="text-gray-400 text-sm">$30.00</p>
                  <p className="text-gray-400 text-sm">$20.00</p>
                   </div>
                      </div>
                     </div>
                   </div>
                 </div>
               </div>
     {/* )} */}
                
    </>
  )
}

export default Our_Blog_details