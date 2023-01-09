import React from 'react'
import './../../Assets/Styles/Cart.scss'
import { FiFacebook} from "react-icons/fi";
import {BsGoogle } from "react-icons/bs";
import {CiMail } from "react-icons/ci";


const Cart = () => {
  return (
    <div className='cart'>
        <div><img src='https://djgt4pi2uqo7n.cloudfront.net/prod/assets/images/eatfit-logo-square.svg' className='cart-img'/></div>
         <input type={"number"} placeholder='Enter your number' className='cart-input'/><hr className='cart-hr'></hr> 
        <div className='cart-num'>
        +91
        <img src='https://djgt4pi2uqo7n.cloudfront.net/prod/assets/images/arrow-clp.svg'/>
        </div>
        <button className='cart-btn'>Continue</button>
        <div className='cart-text'>
        By Continuing you agree to the<a href="https://djgt4pi2uqo7n.cloudfront.net/static-pages/terms.html"><span className='cart-terms'>Terms of Services and Privacy policy</span></a>
        </div>
        <div className='cart-text2'>
          <span className='cart-conti'> Continue with</span><span className='cart-imgs'>< FiFacebook size={30}/><CiMail size={30}/><BsGoogle size={25}/></span>
        </div>
    </div>
  )
}

export default Cart