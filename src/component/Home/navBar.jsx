import React from 'react'
 import './navBar.css'
 import swiggy from '../../assets/swiggy.png'
 import Bag from '../../assets/bag.png'
 import Search from '../../assets/search.png'
 import Offer from '../../assets/discount.png'
 import Help from '../../assets/donut-chart.png'
 import SignIn from '../../assets/people.png'
 import Cart from '../../assets/shopping-bag.png'

const navBar = () => {
  return (
    <div className= "navContainer">
        <div className="leftNav">
          <div className='navlogo'><img src={swiggy} alt="" id='swiggyLogo' /></div>
          <div className='leftText'><span>others</span></div>
        </div>
        <div className="rigthNav">
          <div className='rigthNavContainer'><div className='navIcon'><img src={Bag} alt="" /></div><span>swiggy<span className='spanTwo'>corporate</span></span></div>
          <div className='rigthNavContainer'><div className='navIcon'><img src={Search} alt="" /></div><span>Search</span></div>
          <div className='rigthNavContainer'><div className='navIcon'><img src={Offer} alt="" /></div><span>offers</span></div>
          <div className='rigthNavContainer'><div className='navIcon'><img src={Help} alt="" /></div><span>Help</span></div>
          <div className='rigthNavContainer'><div className='navIcon'><img src={SignIn} alt="" /></div><span>Sign<span className='spanTwo'>in</span></span></div>
          <div className='rigthNavContainer'><div className='navIcon'><img src={Cart} alt=""/></div><span>cart</span></div>
          </div>
    </div>
  )
}

export default navBar