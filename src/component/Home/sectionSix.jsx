import React from 'react'

const sectionSix = () => {
    const cites = ["Explore Restaurents Near Me","Explore Top Rated Restaurents Near Me"];
  return (
    <div className=' h-64 mx-28 '>
        <h1 className=' text-black font-sans  font-semibold text-2xl'>Best Place to Eat Across Cities</h1>
        <div className=' grid grid-cols-2 gap-1 my-6 justify-around  p-3'>
            {cites.map((city,index)=><div key={index} className=' bg-white text-black ml-9 p-3 shadow-md rounded-lg h-14 border-slate-600 text-center w-400px content-center font-sans'><span>{city}</span></div>)}
        </div>
    </div>
  )
}

export default sectionSix