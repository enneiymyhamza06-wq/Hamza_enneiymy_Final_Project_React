import React from 'react'
import { imgg } from "../constants/imags";
import Autoplay from "embla-carousel-autoplay" 
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button" // Ila knti khdam b shadcn button

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



function Home() {

  const images = [imgg.carousel1, imgg.carousel2, imgg.carousel3];

   const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false }) 
  )
  return (
   
    <div >
 <section className="w-full relative">
      <Carousel
        plugins={[plugin.current]}
        className="w-full" // Hna derto w-full bach yji 3la 9ed chacha
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index} className="relative">
              <div className="w-full h-[400px] md:h-[600px] relative"> 
                
        
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-black/20"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white space-y-4 px-4">
                  <p className="text-sm md:text-lg font-light uppercase">
                    Women Collection 2018
                  </p>
                  <h2 className="text-4xl md:text-6xl font-bold">
                    NEW ARRIVALS
                  </h2>
                  <Button 
                    className="mt-4 bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-sm font-semibold transition-all">
                    SHOP NOW
                  </Button>
                </div>

              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>





<section className='container mx-auto pt-3'>
  <div className=' w-full h-200 flex gap-2'>
    <div className=' w-[33%]  h-[99%] flex flex-col gap-3'>
      <div className='w-[100%] h-[60%]'>
        <div className='flex items-center justify-center h-[100%]  w-[100%] relative'>
           <img src={imgg.banner_02} className='w-[80%]  h-[100%] object-fit-cover' alt="" />
                   <button className='bg-white w-40 h-13 cursor-pointer hover:text-white  hover:bg-red-500 font-lg absolute top-[80%] right-[36%]'>Dresses</button>

        </div>
       
      </div>
      <div className=' w-[100%] h-[40%]'>
          <div className='flex items-center justify-center h-[100%]  w-[100%] relative '>
           <img src={imgg.cards4} className='w-[80%]  h-[100%] object-fit-cover ' alt="" />
        <button className='bg-white w-40 h-13 cursor-pointer hover:text-white  hover:bg-red-500 font-lg absolute top-55'>Sunglasses</button>
        </div>
      </div>
    </div>

     <div className='  flex flex-col gap-3 w-[33%] w-50 h-[99%]'>
      <div className=' w-full h-[40%]'>
   <div className='flex items-center justify-center h-[100%] w-[100%] relative'>
           <img src={imgg.cards2} className='w-[80%]  h-[100%] object-fit-cover ' alt="" />
                   <button className='bg-white w-40 h-13 cursor-pointer hover:text-white  hover:bg-red-500 font-lg absolute  z-111 top-60 right-[34%]'>Watches</button>

        </div>
       
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

<section className='container mx-auto pt-20'>
  <div className='flex items-center justify-center'>
     <h1 className='font-bold text-3xl'>FEATURED PRODUCTS</h1>
  </div>

  <div className=' w-full h-120'>
    <div  className="w-full flex justify-center items-center">
 <Carousel
      opts={{
        align: "start",
         slidesToScroll: 4,
      }}
     className="w-[90%]"
    >
      <CarouselContent>

          <CarouselItem className="basis-1/2 lg:basis-1/4">
            <div className="p-1">
             
                <CardContent className="flex aspect-square items-center justify-center p-6 w-[100%]">
                  <img src={imgg.shopItem8} className='w-[100%] object-fit-cover ' alt="" />
                </CardContent>
                <div className='pl-5'>
                   <h1>Boxy3 T-Shirt with Roll Sleeve</h1>
                <p>$30.00 <span className='text-red-500'> $20.00</span></p>
                </div>
               
      
            </div>
          </CarouselItem>

          <CarouselItem className="basis-1/2 lg:basis-1/4">
            <div className="p-1">
             
                <CardContent className="flex aspect-square items-center justify-center p-6 w-[100%]">
                  <img src={imgg.shopItem7} className='w-[100%] object-fit-cover ' alt="" />
                </CardContent>
                <div className='pl-5'>
                   <h1>Boxy3 T-Shirt with Roll Sleeve</h1>
                <p>$30.00 <span className='text-red-500'> $20.00</span></p>
                </div>
               
      
            </div>
          </CarouselItem>

          <CarouselItem className="basis-1/2 lg:basis-1/4">
            <div className="p-1">
             
                <CardContent className="flex aspect-square items-center justify-center p-6 w-[100%]">
                  <img src={imgg.shopItem6} className='w-[100%] object-fit-cover ' alt="" />
                </CardContent>
                <div className='pl-5'>
                   <h1>Boxy3 T-Shirt with Roll Sleeve</h1>
                <p>$30.00 <span className='text-red-500'> $20.00</span></p>
                </div>
               
      
            </div>
          </CarouselItem>

          <CarouselItem className="basis-1/2 lg:basis-1/4">
            <div className="p-1">
             
                <CardContent className="flex aspect-square items-center justify-center p-6 w-[100%]">
                  <img src={imgg.shopItem5} className='w-[100%] object-fit-cover ' alt="" />
                </CardContent>
                <div className='pl-5'>
                   <h1>Boxy3 T-Shirt with Roll Sleeve</h1>
                <p>$30.00 <span className='text-red-500'> $20.00</span></p>
                </div>
               
      
            </div>
          </CarouselItem>

            <CarouselItem className="basis-1/2 lg:basis-1/4">
            <div className="p-1">
             
                <CardContent className="flex aspect-square items-center justify-center p-6 w-[100%]">
                  <img src={imgg.shopItem4} className='w-[100%] object-fit-cover ' alt="" />
                </CardContent>
                <div className='pl-5'>
                   <h1>Boxy3 T-Shirt with Roll Sleeve</h1>
                <p>$30.00 <span className='text-red-500'> $20.00</span></p>
                </div>
               
      
            </div>
          </CarouselItem>

           <CarouselItem className="basis-1/2 lg:basis-1/4">
            <div className="p-1">
             
                <CardContent className="flex aspect-square items-center justify-center p-6 w-[100%]">
                  <img src={imgg.shopItem3} className='w-[100%] object-fit-cover ' alt="" />
                </CardContent>
                <div className='pl-5'>
                   <h1>Boxy3 T-Shirt with Roll Sleeve</h1>
                <p>$30.00 <span className='text-red-500'> $20.00</span></p>
                </div>
               
      
            </div>
          </CarouselItem>

        <CarouselItem className="basis-1/2 lg:basis-1/4">
            <div className="p-1">
             
                <CardContent className="flex aspect-square items-center justify-center p-6 w-[100%]">
                  <img src={imgg.shopItem2} className='w-[100%] object-fit-cover ' alt="" />
                </CardContent>
                <div className='pl-5'>
                   <h1>Boxy3 T-Shirt with Roll Sleeve</h1>
                <p>$30.00 <span className='text-red-500'> $20.00</span></p>
                </div>
               
      
            </div>
          </CarouselItem>

         <CarouselItem className="basis-1/2 lg:basis-1/4">
            <div className="p-1">
             
                <CardContent className="flex aspect-square items-center justify-center p-6 w-[100%]">
                  <img src={imgg.item_3} className='w-[100%] object-fit-cover ' alt="" />
                </CardContent>
                <div className='pl-5'>
                   <h1>Boxy3 T-Shirt with Roll Sleeve</h1>
                <p>$30.00 <span className='text-red-500'> $20.00</span></p>
                </div>
               
      
            </div>
          </CarouselItem>

      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

</div>
  </div>

</section>

<section className='w-full bg-gray-300 '>
  <section className='  h-150 w-[80%] flex justify-center items-center mx-auto'> 
  <div className="flex flex-col md:flex-row w-full h-100  flex items-center justify-center ">
      
 
      <div className="relative w-22 md:w-1/2 h-[500px] flex items-center justify-center bg-gray-200 overflow-hidden ">
        <img 
          src={imgg.banner_08}
          alt="Lookbook Model" 
          className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="relative z-10 text-center text-white p-4">
          <h3 className="text-xl font-medium tracking-wide mb-2 drop-shadow-md">The Beauty</h3>
          <h2 className="text-5xl font-bold tracking-widest mb-6 drop-shadow-md">LOOKBOOK</h2>
          <button className="text-sm font-semibold tracking-[0.2em] uppercase border-b-2 border-white/60 pb-1 hover:border-white transition-colors">
            View Collection
          </button>
        </div>
      </div>

    
      <div className="w-full md:w-1/2 h-[500px] bg-white flex flex-col items-center justify-center p-8 relative">
        
  
        <div className="mb-6 w-64">
          <img 
            src={imgg.shopItem1}
            width={400}
            alt="Sunglasses" 
            className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>

   
        <h3 className="text-gray-600 text-sm mb-2">Boxy2 T-Shirt with Roll Sleeve</h3>
        <p className="text-gray-500 font-medium mb-8">$20.00</p>

    
        <div className="flex gap-4 text-center">
          <div className="border border-gray-200 p-3 min-w-[70px]">
            <span className="block text-lg font-bold text-gray-700">-2599</span>
            <span className="text-xs text-gray-400">days</span>
          </div>
          <div className="border border-gray-200 p-3 min-w-[70px]">
            <span className="block text-lg font-bold text-gray-700">-24</span>
            <span className="text-xs text-gray-400">hrs</span>
          </div>
          <div className="border border-gray-200 p-3 min-w-[70px]">
            <span className="block text-lg font-bold text-gray-700">-22</span>
            <span className="text-xs text-gray-400">mins</span>
          </div>
          <div className="border border-gray-200 p-3 min-w-[70px]">
            <span className="block text-lg font-bold text-gray-700">-49</span>
            <span className="text-xs text-gray-400">secs</span>
          </div>
        </div>

      </div>
    </div>
</section>
</section>

<section class="w-full bg-gray-100 py-16">
  <h2 class="text-4xl font-bold text-center mb-12">OUR BLOG</h2>

  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

  <div>
    <img src={imgg.blog_1} class="w-full h-72 object-cover" />
    <h3 class="text-xl font-semibold mt-4">
       Black Friday Guide: Best Sales & Discount Codes
      </h3>
      <p class="text-sm text-gray-500 mt-2">
        by fashe-theme Admin on Dec 28,2017
      </p>
      <p class="text-gray-600 mt-3">  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...
    </p>
  </div>

    <div>
      <img src={imgg.blog_2} class="w-full h-72 object-cover" />
      <h3 class="text-xl font-semibold mt-4">
      The White Sneakers Nearly Every Fashion Girls Own
      </h3>
      <p class="text-sm text-gray-500 mt-2">
        by fashe-theme Admin on Dec 28,2017
      </p>
      <p class="text-gray-600 mt-3">
      Duis ut velit gravida nibh bibendum commodo.
         Suspendisse pellentesque mattis augue id euismod. 
        Interdum et...
      </p>
    </div>

    <div>
      <img src={imgg.blog_3} class=" w-full h-72 object-cover" />
      <h3 class="text-xl font-semibold mt-4"> New York SS 2018 Street Style: By Annina Mislin
         </h3>                   
    
    <p class="text-sm text-gray-500 mt-2">
        by fashe-theme Admin on Dec 28,2017</p>
      
    <p class="text-gray-600  mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...
      </p>    </div>

  </div>
</section>

<section class="w-full bg-gray-100 py-12 text-center">
 <h2 class="text-3xl font-bold mb-12">@ FOLLOW US ON INSTAGRAM</h2>

  <div class="max-w-6xl  mx-auto flex   justify-between px-6">

   <div >
      <h3 class="text-lg font-semibold">Free Delivery Worldwide</h3>
      <p class="text-gray-500 text-sm mt-2">
        Mirum est 
        notare quam littera gothica
      </p>
    </div>

   <div className='border-l-2 pl-6'>
      <h3 class="text-lg font-semibold">30 Days Return</h3>
      <p class="text-gray-500 text-sm mt-2">
      Simply return it within 30 days for an exchange.
      </p>
    </div>

    <div className='border-l-2 pl-6'>
      <h3 class="text-lg font-semibold">Store Opening</h3>
    <p class="text-gray-500 text-sm mt-2">
        Shop open from Monday to Sunday
      </p>
    </div>

  </div>
</section>




    </div>
  )
}

export default Home