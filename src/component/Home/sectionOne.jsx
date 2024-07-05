import React from 'react'
import './sectionOne.css'
import dish1 from '../../assets/cusine.png'
import dish2 from '../../assets/cusine.png'
import dish3 from '../../assets/pngwing.png'
import dish4 from '../../assets/pngwingTwo.png'
import dish5 from '../../assets/pngwingThree.png'
import dish6 from '../../assets/pngwingFour.png'
import dish7 from '../../assets/pngwingFive.png'
import link from '../../assets/link.png'

const sectionOne = () => {
    const list = [dish1,dish2,dish3,dish4,dish5,dish6,dish7,dish1,dish2,dish3,dish4,dish5,dish6,dish7];
  return (
    <div className='sectionContainer'>
        <h1 className="headerContainer">What's on your mind?</h1>
        <div className="sectionListItems">{list.map((lists,index)=><div className='imgContainer' key={index}><img src={lists} alt="#" width={150} height={150} className='img'/><img src={link} alt="" className='link'/></div>)}</div>
    </div>
  )
}

export default sectionOne