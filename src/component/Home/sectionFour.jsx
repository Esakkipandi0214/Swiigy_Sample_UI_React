import React from 'react'
import { useState } from 'react';

const sectionFour = () => {
    const [noOfElements, setNoOfElements] = useState(7)
    const cites = ["Banglore","Pune","Mumbai","Delhi","Hyderabad","Kolkata","Chennai","Chandigarp","Ahmedabad","Jaipur","Nagpur","Bubaneswhar"];
    const slice = cites.slice(0,noOfElements);
    const loadMore=()=>{
        setNoOfElements(cites.length);
        document.getElementById("btn").style.display = "none";
    }
  return (
    <div className=' h-62 p-9 mx-28'>
        <h1 className=' text-black font-sans font-semibold text-2xl'>Best Place to Eat Across Cities</h1>
        <div className=' grid grid-cols-4 gap-12 my-6'>
            {slice.map((city,index)=><div key={index} className=' bg-white text-black shadow-md rounded-lg h-14 border-slate-600 text-center content-center font-sans'><span>Best Restaurents in {city}</span></div>)}
            <button  id='btn' onClick={()=>loadMore()} className='bg-white text-black shadow-md rounded-lg h-14 border-slate-600 text-center content-center font-sans'>show More</button>
        </div>
    </div>
  )
}

export default sectionFour