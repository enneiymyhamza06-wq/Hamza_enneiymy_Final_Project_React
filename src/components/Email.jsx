import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Email() {
  const navigate = useNavigate();
  return (
   <>
   <section className='flex items-center justify-center container'>

       <div className='border p-4 rounded-2xl w-150 h-100 flex flex-col '>
        <div className='flex flex-col mt-15 gap-4'>
             <h1 className='text-4xl'>New Customer</h1>
    <p className='font-bold text-gray-500'>Register Account</p>   
        </div>
<div className='flex flex-col gap-5'>
        <span className='text-gray-400'>By creating an account you will be able to shop faster, be up to date
    on an order's status, and keep track of the orders you have previously made.</span>
      <button
                  className="bg-black hover:bg-blue-700 text-white w-30 h-15 rounded focus:outline-none focus:shadow-outline transition-colors cursor-pointer"
                  type="button"
                  onClick={() => navigate('/Create_Account')}
                  >
                  CONTINUE
                </button>
   </div>
</div>

      <div className="">
        <div className="container mx-auto py-12">
          <div className="max-w-lg mx-auto px-4">
            <form  className="border rounded-lg px-6 py-8 shadow-md w-200 h-100">
                <h1 className='text-4xl'>Returning Customer</h1>
<p className='text-gray-500 font-bold'>I am a returning customer</p>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="Email">
                 Email
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
               
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="Password">
                  Password
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"/>
              </div>
            <div>
                <a href="" className='hover:text-red-600'>Forgot your password?</a>
            </div>
              <div className="flex justify-start items-center gap-2">
                <button
                  className="bg-black hover:bg-blue-700 text-white py-3 px-8 rounded focus:outline-none focus:shadow-outline transition-colors cursor-pointer"
                  type="button"
                  >
                  SIGN IN
                </button>
                <a href="" className='text-gray-400 text-lg'>or <span className='text-gray-600 hover:text-red-500'>Return to Store</span> </a>
              </div>
            </form>
          </div>
        </div>
      </div>
   </section>

   </>
  )
}

export default Email