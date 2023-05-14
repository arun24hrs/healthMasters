import React from 'react'
import "./Navbar.styles.css"
import logo from "../Images/qf_logo.png"

const Navbar = () => {
  return (
    <div className='flex flex-row w-100% justify-between bg-pale-green h-17 px-5 content-between sticky top-0 z-10'>
        <img src={logo} width="80px"/>
        <div className='flex flex-row justify-between gap-16 items-center text-xl'>
            <a href='#' className="text-core-green hover:text-white duration-300">Home</a>
            <a href='#' className="text-core-green hover:text-white duration-300">Products</a>
            <a href='#' className="text-core-green hover:text-white duration-300">Workout Plans</a>
            <a href='#' className="text-core-green hover:text-white duration-300">About</a>
        </div>
        <div className='flex flex-row gap-5 justify-between content-between items-center'>
            <button className='py-1 px-5 text-white bg-green-clr rounded-md hover:text-black hover:bg-off-white duration-300'>Login</button>
            <button className='py-1 px-5 text-white bg-dark-green rounded-md color-white hover:bg-off-white hover:text-black duration-300'>Signup</button>
        </div>
    </div>
  )
}

export default Navbar