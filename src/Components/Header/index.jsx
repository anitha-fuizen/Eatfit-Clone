import React from 'react'
import '../../Assets/Styles/header.scss'

import{BsWhatsapp,BsFillHandbagFill}from'react-icons/bs'
import { IoLocationOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
  <>
   
    <div className='header1'>
    <div className='eat-fit'><img src='EF.png' alt='img'/></div>
      <div className='header-middle'>
        <Link to="/Order"><div className='order'>Order</div></Link>
        <Link to="/MealPlan"><div className='Mealplan'>Mealplan</div></Link>
        <Link to="/Search"><div className='Search'>Search</div></Link>
      </div>
      <div className='header-right'>
          <div><BsWhatsapp size="1.5em"/></div>
          <div className='navitem'><IoLocationOutline size="1.5em"/><span>Select location</span></div>
          <BsFillHandbagFill size="1.5em"/>
          <div className='navitem'><CiUser size="1.5em"/>Login</div>
       </div>
       </div>
    
   
    </>
    
  )
}

export default Header