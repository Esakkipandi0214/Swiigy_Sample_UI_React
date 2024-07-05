import React, { useEffect, useRef, useState } from 'react'
import InterSection from './intersection'
import InterscetionDiv from './intersectionDiv'


function sectionThree() {

    const targetRef = useRef(null);
    const [update, setUpdate] = useState(false);
    useEffect(() => {
      const timeOutId = setTimeout(() => {
        if(myElementIsVisible){
          setUpdate(!update);
        }else{
          clearTimeout(timeOutId);
        }
      }, 200);

      // clean TimeOut
      return ()=> clearTimeout(timeOutId);
    });
    const [myElementIsVisible, setMyElementIsVisible] = useState();
    console.log("MyElementIsVisible", myElementIsVisible);
    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        // Do something when the observed element enters or exits the viewport
        const entry = entries[0];
        setMyElementIsVisible(entry.isIntersecting);
        console.log(myElementIsVisible);
      });
  
      if (targetRef.current) {
        observer.observe(targetRef.current);
      }
  
      // Clean up the observer when the component unmounts
      return () => {
        observer.disconnect();
      };
    }, []); // Make sure this effect runs only once
  
  const searches = ["Filters","Sort By","Fast Delivery","Now on Swiggy","Ratings","Pure Veg","offers",];
  return (
    <div  className=' mx-48 h-62 p-11'>
      <div>
        <div><h1 className=' text-black font-semibold -translate-x-10 text-2xl '>Restaurents with online food delivery in chennai</h1></div>
      <div className=' my-3 -mx-9'><div className=" overflow-y-hidden grid grid-cols-7 justify-center gap-5 items-center">{searches.map((search,index)=><div key={index} className=' w-28 flex h-7 bg-white text-black shadow-sm rounded-3xl border-slate-800 justify-center border text-center content-center font-sans'><span className=' text-black'>{search}</span></div>)}</div></div>
      <div>
        <InterscetionDiv update = {update}/>
      </div>
      </div>
      <hr ref={targetRef}/>
    </div>
  )
}

export default sectionThree
