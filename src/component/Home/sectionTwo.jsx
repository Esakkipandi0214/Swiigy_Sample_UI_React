import React from 'react'
import './sectionTwo.css'
import dish1 from '../../assets/pizzahut.jpeg'
import star from '../../assets/star.png'
import dish2 from '../../assets/chinesewook.jpeg'
import dish3 from '../../assets/barbequenation.jpeg'
import dish4 from '../../assets/barbeque.jpeg'
import dish5 from '../../assets/sandwidwich.jpeg'
const sectionTwo = () => {
    const list=[
        {id:1,dish:dish1,name:"PizzaHut",logo:"",time:"30-35 mins",type:"Pizzas",place:"Thoraipakkam"},
        {id:2,dish:dish2,name:"PizzaHut",logo:"",time:"30-35 mins",type:"Pizzas",place:"Thoraipakkam"},
        {id:3,dish:dish3,name:"PizzaHut",logo:"",time:"30-35 mins",type:"Pizzas",place:"Thoraipakkam"},
        {id:4,dish:dish4,name:"PizzaHut",logo:"",time:"30-35 mins",type:"Pizzas",place:"Thoraipakkam"},
        {id:5,dish:dish5,name:"PizzaHut",logo:"",time:"30-35 mins",type:"Pizzas",place:"Thoraipakkam"},
    ]
  return (
    <div className='sectionTwoContainer'>
        <h1 className='headerTwoContainer'>Top restaurent chains in Chennai</h1>
        <div className="level1">
            {list.map((lists,index)=><div key={index} className="level2">
                <div className="twoImg"><img src={lists.dish} alt="" width={250} height={200}/></div>
                <div className="texts"><span className='spanTextName'>{lists.name}</span></div>
                <div className="texts flex"><div><img src={star} alt="" width={20} height={20} className='starImg'/></div><div><span className='spanTextTime'>{lists.time}</span></div></div>
                <div className="texts"><span className='spanTextType text-slate-600 font-semibold '>{lists.type}</span></div>
                <div className="texts"><span className='spanTextPlace text-slate-600 font-semibold '>{lists.place}</span></div>
                
            </div>)}
        </div>
    </div>
  )
}

export default sectionTwo