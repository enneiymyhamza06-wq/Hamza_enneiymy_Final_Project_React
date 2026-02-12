import React from 'react'
import { imgg } from "../constants/imags";

function Blog() {
  return (
    <>
        <section>
            <div className='bg-amber-500 w-full h-60 relative'>
                {/* <img src={i} alt="" /> */}
            </div>
            <h1 className='absolute top-60 right-230 text-5xl font-bold'>NEWS</h1>
        </section>
        <section>
              <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row gap-8">

        <div className="w-full md:w-[70%]">
          
          <div className="w-full h-[700px] mb-6 relative">
             <img 
               src={imgg.blog_1} 
               alt="Article Main" 
               className="w-full h-full object-cover "
             />
             <span className="absolute bottom-4 left-4 bg-black text-white px-3 py-1 text-sm">
               28 DEC, 2017
             </span>
          </div>
          <h1 className="text-3xl font-bold mb-3 text-gray-800">
            Black Friday Guide: Best Sales & Discount Codes
          </h1>
          <p className="text-gray-500 text-sm mb-4">
            by fashe-theme Admin | crafts, street style | 1 Comments
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...
          </p>
          <a href="" className="text-black font-semibold hover:text-red-500 transition-colors flex items-center gap-2">
            Continue Reading <span>→</span>
          </a>

        </div>
        <div className="w-full md:w-[30%]">
          
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

            {/* Item 2 (Dir copy paste bach tzid products) */}
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
    </div>
        </section>
        <section className=' w-full h-fit container mx-auto flex'>
              <div className=" max-w-4xl mx-auto flex flex-col ml-3 w-[70%]" >
    <div className="relative">
      <img
        src={imgg.blog_2}
      alt="blog"
        className="w-full h-[450px] object-cover"/>
      <span className="absolute bottom-4 left-4 bg-black text-white text-sm px-3 py-1">
          28 DEC, 2017
  </span>
      </div>
    <div className="py-6 px-2">
    <h2 className="text-2xl font-semibold mb-3">
      The White Sneakers Nearly Every Fashion Girls Own
   </h2>
    <p className="text-gray-500 text-sm mb-4">
      by fashe-theme Admin | crafts, street style | 0 Comments
 </p>
  <p className="text-gray-600 mb-4">
   Duis ut velit gravida nibh bibendum commodo. 
    Suspendisse pellentesque mattis augue id euismod. 
      Interdum et malesuada fames.
  </p>

<button className="flex items-center gap-2 text-black font-medium hover:gap-3 transition-all">
 Continue Reading →
 </button>

  </div>
  </div>
  <div className=' w-[45%] h-200'>
    <div className=" p-6 w-full max-w-sm">
    <h3 className="text-2xl font-semibold mb-4">
      Tags Cloud
   </h3>
   <div className="flex gap-3 flex-wrap">
    <span className="px-4 py-2 border rounded-full text-gray-600  hover:border-red-400 hover:text-red-400 transition">
     crafts
    </span>
   <span className="px-4 py-2 border rounded-full text-gray-600 hover:border-red-400 hover:text-red-500 transition">
    street style
    </span>
  </div>
   </div>
  </div>
     </section>
    </>
  )
}

export default Blog;