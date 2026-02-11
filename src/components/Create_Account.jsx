import React from 'react'
 import { Link } from 'react-router-dom'
 import { FaUser } from "react-icons/fa";


function Create_Account() {
  return (
    <>

<div className="w-full">
  <div className="container mx-auto py-12">
    <div className="max-w-lg mx-auto px-4 gap-5 flex flex-col">
      <form className="px-6 w-full flex items-center flex-col">
        <h1 className='text-4xl mb-2'>Create Account</h1>
        <p className='text-gray-500 font-bold mb-6'>Your Personal Details</p>

        <div className="mb-4 w-full">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name"
          />
        </div>

        <div className="mb-4 w-full">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last Name"
          />
        </div>

        <div className="mb-4 w-full">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
          />
        </div>

        <div className="mb-4 w-full">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>

        <div className="flex justify-start items-center gap-2 w-full">
            <div className='bg-black text-white flex items-center p-1'>
                  <FaUser className='flex'/>
          <button
            className=" text-white py-3 px-8 rounded focus:outline-none focus:shadow-outline transition-colors cursor-pointer"
            type="submit">
                 
               CREATE
          </button>
            </div>
         
          <p className='text-gray-400 text-lg'>
            or <Link to="/" className='text-gray-600 hover:text-red-500'>Return to Store</Link>
          </p>
        </div>
      </form>
    </div>
  </div>
</div>

    </>
  )
}

export default Create_Account