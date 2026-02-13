import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Email_bohdo() { 
     const navigate = useNavigate();
  return (
   
   <>
    <div className="pt-30">
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
                  placeholder="Enter your name"/>
              </div>
              <div className="flex justify-start items-center gap-2">
                <button
                  className="bg-black hover:bg-blue-700 text-white py-3 px-8 rounded focus:outline-none focus:shadow-outline transition-colors cursor-pointer"
                  type="button"
                  >
                  SUBMIT
                </button>
                <p className='text-gray-400 text-lg'
                onClick={()=> navigate('/Email')}
                >or <span className='text-gray-600 hover:text-red-500'>Cansel</span> </p>
              </div>
            </form>
          </div>
        </div>
      </div>
   </>
  )
}

export default Email_bohdo