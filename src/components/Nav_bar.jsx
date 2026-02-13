import React from 'react'
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { GrShop } from "react-icons/gr";
import { FaTwitter, FaPinterestSquare, FaGooglePlusG } from "react-icons/fa";
import Email from './Email';
import { Link, useNavigate } from 'react-router-dom'


function Nav_bar() {
     const navigate = useNavigate();
    return (
        
        <>
          <div>
      <nav className="w-full fixed top-0 left-0 z-50 bg-white flex flex-col shadow">
        <div className="text-gray-400 w-full h-10 bg-[#f5f5f5] px-5 flex items-center justify-between">
        <div className="flex text-[20px] gap-2">
    <FaFacebookF className="hover:text-red-500" />
   <FaTwitter className="hover:text-red-500" />
   <FaPinterestSquare className="hover:text-red-500" />
   <FaGooglePlusG className="hover:text-red-500" />
   <FaInstagram className="hover:text-red-500" />
          </div>

          <p>Free shipping for standard order over $100</p>

          <div className="flex items-center gap-2">
            <p>fashe@example.com</p>
            <select className="border border-gray-300 text-sm px-1 py-0.5">
              <option>USD</option>
              <option>EUR</option>
              <option>EUR</option>
            </select>
          </div>
        </div>

        <div className="flex w-full px-5 py-3 items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-4xl font-extrabold">
              Fashe <span className="text-red-500">.</span>
            </a>
          </div>

          <div className="flex gap-4 text-[19px] font-light text-gray-500">
            <a href="/" className="hover:border-b-2">Home</a>
            <a href="/Shop" className="hover:border-b-2">Shop</a>
            <a href="/Sale" className="hover:border-b-2">Sale</a>
            <a href="/Features" className="hover:border-b-2">Features</a>
            <a href="/Blog" className="hover:border-b-2">Blog</a>
            <a href="/About" className="hover:border-b-2">About</a>
            <a href="/Contact" className="hover:border-b-2">Contact</a>
          </div>
          <div className="text-4xl flex items-center gap-4 text-gray-400">
            <p
              className="border-r-2 pr-3 cursor-pointer"
              onClick={() => navigate("/email")}>
              <FaRegUserCircle />
            </p>
            <p>
              <GrShop />
            </p>
          </div>
        </div>
      </nav>
    </div>


        </>
    )
}

export default Nav_bar