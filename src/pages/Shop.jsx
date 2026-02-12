import React from 'react'
import { imgg } from "../constants/imags";


function Shop() {
  return (
    <>
    <section className='bg-amber-600 w-full h-60 relative'>
        <img src={imgg.banner} alt="" />
        <h1 className='text-white z-111 font-extrabold text-5xl absolute top-25 right-220'>PRODUCTS</h1>
    </section>
    </>
  )
}

export default Shop