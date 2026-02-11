import React from 'react'
import { Carousel } from "flowbite-react";
import { imgg } from "../constants/imags";




function Home() {
  return (
    <>
{/* <div className="h-96 overflow-hidden">
  <Carousel slideInterval={3000}>
    <img
      src={imgg.carousel1}
      className="h-full w-full object-cover"
      alt=""
    />
    <img
      src={imgg.carousel2}
      className="h-full w-full object-cover"
      alt=""
    />
    <img
      src={imgg.carousel3}
      className="h-full w-full object-cover"
      alt=""
    />
  </Carousel>
</div> */}
<section className='container mx-auto pt-3'>
  <div className=' w-full h-200 flex gap-2'>
    <div className=' w-[33%]  h-[99%] flex flex-col gap-3'>
      <div className='w-[100%] h-[60%]'>
        <div className='flex items-center justify-center h-[100%]  w-[100%] relative'>
           <img src={imgg.banner_02} className='w-[80%]  h-[100%] object-fit-cover ' alt="" />
                   <button className='bg-white w-40 h-13 cursor-pointer hover:text-white  hover:bg-red-500 font-lg absolute top-[80%] right-[36%]'>Dresses</button>

        </div>
       
      </div>
      <div className=' w-[100%] h-[40%]'>
          <div className='flex items-center justify-center h-[100%]  w-[100%] '>
           <img src={imgg.cards4} className='w-[80%]  h-[100%] object-fit-cover relative ' alt="" />
                   <button className='bg-white w-40 h-13 cursor-pointer hover:text-white  hover:bg-red-500 font-lg absolute top-[84%]'>Sunglasses</button>
        </div>
      </div>
    </div>

     <div className='  flex flex-col gap-3 w-[33%] w-50 h-[99%]'>
      <div className=' w-full h-[40%]'>
   <div className='flex items-center justify-center h-[100%] w-[100%] relative'>
           <img src={imgg.cards2} className='w-[80%]  h-[100%] object-fit-cover' alt="" />
        </div>
        <button className='bg-white w-40 h-13 cursor-pointer hover:text-white  hover:bg-red-500 font-lg absolute top-[28%] right-[46%]'>Watches</button>
       
      </div>
      <div className=' w-full h-[60%]'>
           <div className='flex items-center justify-center h-[100%]  w-[100%] relative'>
           <img src={imgg.cards5} className='w-[80%]  h-[100%] object-fit-cover' alt="" />
        <button className='bg-white w-40 h-13 cursor-pointer hover:text-white  hover:bg-red-500 font-lg absolute top-[80%] right-[35%]'>Footerwear</button>
        </div>
       
      </div>
    </div>

     <div className='  flex flex-col gap-3 w-[33%] w-50 h-[99%]'>
        <div className='w-full h-[60%]'>
           <div className='flex items-center justify-center h-[100%] w-[100%] relative'>
           <img src={imgg.cards3} className='w-[80%]  h-[100%] object-fit-cover ' alt="" />
           <button className='bg-white w-40 h-13 cursor-pointer hover:text-white  hover:bg-red-500 font-lg absolute top-[80%] right-[33%]'>Bags</button>
        </div>
        </div>
      <div className=' w-full h-[40%]'>
           <div className='flex items-center justify-center h-[100%]  w-[100%] relative'>
           <img src={imgg.cards6} className='w-[80%]  h-[100%] object-fit-cover ' alt="" />
           <button className='bg-white w-40 h-13 cursor-pointer hover:text-white  hover:bg-red-500 font-lg absolute top-[70%] right-[33%]'>Accessories</button>

        </div>
      </div>
    </div>
  </div>
</section>
<section className='container mx-auto pt-3'>
  <div className='flex items-center justify-center'>
     <h1 className='font-bold text-3xl'>FEATURED PRODUCTS</h1>
  </div>
  <div className='bg-amber-900 w-full h-100'>

  </div>
</section>


    </>
  )
}

export default Home