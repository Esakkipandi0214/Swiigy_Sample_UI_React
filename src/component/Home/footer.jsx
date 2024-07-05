import React from 'react'
import swiggy from '../../assets/swiggyWhite.png'
import { Link } from 'react-router-dom'


const footer = () => {
  return (
    <div className=' h-400px bg-black items-center flex justify-center p-8'>
        <div className=' flex p-10 justify-around mx-44 w-full'>
        <div className='grid grid-rows-2 -translate-y-16'>
            <div className=' flex translate-y-2 -mx-6'><img src={swiggy} alt="" className=" bg-white mx-3 h-14" /><p className='text-white translate-y-3 text-2xl font-extrabold'>Swiggy</p></div>
            <div><h1 className=' -translate-y-18 -my-24'>© 2024 Bundl Technologies <p>Pvt. Ltd</p></h1></div>
        </div>
        <div className='-translate-y-10'>
            <h1 className=' text-white font-semibold text-lg'>Company</h1>
            <p className=' text-slate-300 text-base font-normal my-3'><Link to="/about" className=' '><h3 className=' list-none text-slate-300 text-base font-normal'>About</h3></Link></p>
            <p className='text-slate-300 text-base font-normal my-3'>Careers</p>
            <p className='text-slate-300 text-base font-normal my-3'>Team</p>
            <p className='text-slate-300 text-base font-normal my-3'>Swiggy One</p>
            <p className='text-slate-300 text-base font-normal my-3'>Swiggy Instamart</p>
            <p className='text-slate-300 text-base font-normal my-3'>Swiggy Genie</p>
        </div>
        <div className='-translate-y-10'>
            <div>
                <h1 className='text-white font-semibold text-lg'>Contact us</h1>
                <p className=' text-slate-300 text-base font-normal my-3 '>Help & Support</p>
                <p className='text-slate-300 text-base font-normal my-3'>Partner with us</p>
                <p className='text-slate-300 text-base font-normal my-3'>Ride with us</p>
            </div>
            <div>
                <h1 className='text-white font-semibold text-lg'>Legal</h1>
                <p className='text-slate-300 text-base font-normal my-3'>Terms & Conditions</p>
                <p className='text-slate-300 text-base font-normal my-3'>Cookie Policy</p>
                <p className='text-slate-300 text-base font-normal my-3'>Privacy Policy</p>
                <p className='text-slate-300 text-base font-normal my-3'>Investor Relations</p>
            </div>
            </div>
        <div className='-translate-y-10'>
            <h1 className='text-white font-semibold text-lg'>We delivers to:</h1>
            <p className='text-slate-300 text-base font-normal my-3'>Bangalore</p>
            <p className='text-slate-300 text-base font-normal my-3'>Gurgaon</p>
            <p className='text-slate-300 text-base font-normal my-3'>Hyderabad</p>
            <p className='text-slate-300 text-base font-normal my-3'>Delhi</p>
            <p className='text-slate-300 text-base font-normal my-3'>Mumbai</p>
            <p className='text-slate-300 text-base font-normal my-3'>Pune</p>
            <div className='border-slate-700 border-2 h-10 flex items-center rounded-xl '><button className=' mx-2 text-slate-300 text-base font-normal shadow-md rounded-lg h-14 bg-transparent text-center content-center font-sans'>589 Cities</button></div> 
        </div>
        </div>
    </div>
  )
}

export default footer