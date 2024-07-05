import React, { useRef, useState } from 'react'
import star from '../../assets/star.png'
import dish1 from '../../assets/pizzahut.jpeg'
import dish2 from '../../assets/chinesewook.jpeg'
import dish3 from '../../assets/barbequenation.jpeg'
import dish4 from '../../assets/barbeque.jpeg'
import dish5 from '../../assets/sandwidwich.jpeg'

const intersectionDiv = (props) => {
    const list=[
        {id:1,dish:dish1,name:"PizzaHut",time:"30-35 mins",type:"Chinese, Asian, Tibetan, Desserts",place:"Thoraipakkam"},
        {id:2,dish:dish2,name:"PizzaHut",time:"30-35 mins",type:"Pizzas",place:"Thoraipakkam"},
        {id:3,dish:dish3,name:"PizzaHut",time:"30-35 mins",type:"Pizzas",place:"Thoraipakkam"},
        {id:4,dish:dish4,name:"PizzaHut",time:"30-35 mins",type:"Pizzas",place:"Thoraipakkam"},
        {id:5,dish:dish5,name:"PizzaHut",time:"30-35 mins",type:"Pizzas",place:"Thoraipakkam"},
        {id:6,dish:dish1,name:"PizzaHut",time:"30-35 mins",type:"Pizzas",place:"Thoraipakkam"},
        {id:7,dish:dish2,name:"PizzaHut",time:"30-35 mins",type:"Pizzas",place:"Thoraipakkam"},
        {id:8,dish:dish3,name:"PizzaHut",time:"30-35 mins",type:"Pizzas",place:"Thoraipakkam"},
        {id:9,dish:dish4,name:"PizzaHut",time:"30-35 mins",type:"Pizzas",place:"Thoraipakkam"},
        {id:10,dish:dish5,name:"PizzaHut",time:"30-35 mins",type:"Pizzas",place:"Thoraipakkam"},
        {id:11,dish:dish1,name:"PizzaHut",time:"30-35 mins",type:"Pizzas",place:"Thoraipakkam"},
        {id:12,dish:dish2,name:"PizzaHut",time:"30-35 mins",type:"Pizzas",place:"Thoraipakkam"},
        {id:13,dish:dish3,name:"PizzaHut",time:"30-35 mins",type:"Pizzas",place:"Thoraipakkam"},
        {id:14,dish:dish4,name:"PizzaHut",time:"30-35 mins",type:"Pizzas",place:"Thoraipakkam"},
        {id:15,dish:dish5,name:"PizzaHut",time:"30-35 mins",type:"Pizzas",place:"Thoraipakkam"}
    ]
    var noOfElements = list.length;
    const slice = list.slice(0,noOfElements);
    // mapmethod
    const slide = slice.map((lists,index)=><div key={index} className="card w-64 h-72 bg-none py-2">
    <figure><img src={lists.dish} alt="Shoes" className=' h-40 my-4 w-full rounded-xl' /></figure>
    <div className="card-body mx-2 n">
    <h2 className="card-title text-black -my-2 font-bold">{lists.name}<div className="badge badge-secondary"></div></h2>
    <div className='flex'><img src={star} alt="Shoes" className=' w-5 h-5 my-2' /><span className=' mx-2 my-1 text-black font-bold flex'>{lists.time}</span></div> 
    <p className='  text-slate-600 font-semibold '>{lists.type}</p>
    <p className=' text-slate-600 font-semibold '>{lists.place}</p>
  </div>
  </div>
)
// =====================================================================
  return (
    <>
    <div  className=' grid grid-cols-4 gap-12 my-6 -translate-x-10 '>{slide} {props.update == true && slide};</div>
    </>
  )
}

export default intersectionDiv
