import React from 'react'
import headerImg from "../Images/header.jpg"


const Header = () => {
  return (
    <div>
        <div className=" h-screen bg-black">
            <img src={headerImg} className=' object-fill w-screen opacity-50'/>
            {/* <svg className='absolute top-3/4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,32L80,32C160,32,320,32,480,64C640,96,800,160,960,160C1120,160,1280,96,1360,64L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> */}
            <svg className='absolute top-3/4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,192L80,197.3C160,203,320,213,480,197.3C640,181,800,139,960,122.7C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        </div>
        <div className='absolute top-60 left-5 text-off-white'>
            <h2 className='text-5xl'>Doorway to a healthy <span className='text-pale-green'>lifestyle.</span></h2>
            <h2 className='text-xl text-left py-2'>The more you sweat, the beautiful you look.</h2>
            <h2 className='text-xl text-left'>This 2023, be the fittest version of you.</h2>
            <div className='flex flex-row gap-5 justify-left my-5'>
            <button className='py-1 px-5 text-black bg-off-white rounded-md hover:bg-pale-green duration-300'>Login</button>
            <button className='py-1 px-5 text-white bg-green-clr rounded-md color-white hover:bg-off-white hover:text-black duration-300'>Signup</button>
        </div>
        </div>
        
    </div>
  )
}

export default Header