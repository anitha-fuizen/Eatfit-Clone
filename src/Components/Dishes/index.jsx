import React from 'react'
import '../../Assets/Styles/Dishes.scss'
import { Link } from 'react-router-dom'


const Dishes = () => {
  return (
    <>
    <div className='dish-head'>
    

    <div className='dishes-main'>
    <Link to="/Indian">
     <div className='dishes' ><img src="https://ik.imagekit.io/curefoods/image/eatfit-category/CFI_THALI_1.png " className='img5'/></div>
    <p className='dishes-text'>indian thali</p></Link>
    </div>
    <div className='dishes-main'>
    <Link to="/Ricebowl">
     <div className='dishes' ><img src="https://ik.imagekit.io/curefoods/image/eatfit-category/CFI_RICEBOWL_1.png " className='img5'/></div>
     <p className='dishes-text'>Rice Bowl</p></Link>
    </div>
    <div className='dishes-main'>
    <Link to="/Kitchidi">
     <div className='dishes' ><img src=" https://ik.imagekit.io/curefoods/image/eatfit-category/CFI_KHICHDI_2.png" className='img5'/></div>
     <p className='dishes-text'>Kitchidi</p></Link>
    </div>
    <div className='dishes-main'>
    <Link to="/Biriyani">
     <div className='dishes' ><img src="https://ik.imagekit.io/curefoods/image/eatfit-category/CFI_BIRYANI_1.png " className='img5'/></div>
    <p className='dishes-text'>Biriyani&kebab</p></Link>
    </div>
    <div className='dishes-main'>
    <Link to="/Pizza">
     <div className='dishes' ><img src="https://ik.imagekit.io/curefoods/image/eatfit-category/CFI_PIZZA_2.png " className='img5'/></div>
     <p className='dishes-text'>Pizza</p></Link>
    </div>
    <div className='dishes-main'>
    <Link to="/Chinese">
     <div className='dishes' ><img src=" https://ik.imagekit.io/curefoods/image/eatfit-category/CFI_CHINESE_C2.png" className='img5'/></div>
    <p className='dishes-text'>chinese</p></Link>
    </div>
    <div className='dishes-main'>
    <Link to="/Upto">
     <div className='dishes' ><img src="https://ik.imagekit.io/curefoods/image/eatfit-category/VALUE_DEALS_2.png " className='img5'/></div>
     <p className='dishes-text'>Up to 60% off</p></Link>
    </div>
    <div className='dishes-main'>
    <Link to="/Gourmet">
     <div className='dishes' ><img src="https://ik.imagekit.io/curefoods/image/eatfit-category/CFI_GOURMET_2.png " className='img5'/></div>
      <p className='dishes-text'>Gourmet</p></Link>
    </div>
    <div className='dishes-main'>
    <Link to="/Kulcha">
     <div className='dishes' ><img src="https://ik.imagekit.io/curefoods/image/eatfit-category/CFI_KULCHA_BURGER_1.png " className='img5'/></div>
      <p className='dishes-text'>Kulcha burger</p></Link>
    </div>
    <div className='dishes-main'>
    <Link to="/Alacart">
     <div className='dishes' ><img src="https://ik.imagekit.io/curefoods/image/eatfit-category/CFI_A_LA_CARTE_2.png " className='img5'/></div>
      <p className='dishes-text'>Ala karte</p></Link>
    </div>
    <div className='dishes-main'>
    <Link to="/Allday">
     <div className='dishes' ><img src="https://ik.imagekit.io/curefoods/image/eatfit-category/CFI_ALL_DAY_BREAKFAST2.png " className='img5'/></div>
      <p className='dishes-text'>All day</p></Link>
    </div>
    <div className='dishes-main'>
    <Link to="/Beverages">
     <div className='dishes' ><img src="https://ik.imagekit.io/curefoods/image/eatfit-category/CFI_BEVERAGES_2.png " className='img5'/></div>
     <p className='dishes-text'> Beverage</p></Link>
    </div>
    <div className='dishes-main'>
    <Link to="/Desserts">
     <div className='dishes' ><img src="https://ik.imagekit.io/curefoods/image/eatfit-category/CFI_DESSERTS_2.png " className='img5'/></div>
     <p className='dishes-text'>Dessert</p></Link>
    </div>
   
   </div>
   

   </> 
  )
}

export default Dishes