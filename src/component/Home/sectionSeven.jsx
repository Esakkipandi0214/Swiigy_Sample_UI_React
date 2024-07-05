import React from 'react'
import Google from '../../assets/google-play-badge.png'
import Apple from '../../assets/apple-store-badge.png'

const sectionSeven = () => {
  return (
    <div className=' h flex justify-evenly bg-slate-300 p-5'>
        <div className=' flex h-full justify-between items-center content-center'>
        <div className=' flex'><h1 className='text-black -translate-x-14 font-bold text-3xl'>For better experience,download <h1>the Swiggy app now</h1></h1></div>
        <div className='flex  items-center justify-around translate-x-7'><div className=' '><img src={Google} alt="" className=' w-53 h-20' /></div><div><img src={Apple} alt="" className='w-52 h-14'/></div></div>
        </div>
    </div>
  )
}

export default sectionSeven