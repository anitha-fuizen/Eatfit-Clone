import React from 'react'
import '../../Assets/Styles/Search.scss';
import '../../Assets/Styles/Dishes.scss'
import{BsWhatsapp,BsFillHandbagFill}from'react-icons/bs'
import { IoLocationOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import Searchlocation from '../Searchlocation';


const Search = () => {
  return (
    <>
    <div className='scrollhide'>
     <div className='header2'>
     
      <div className='header5'> 
     <Searchlocation/>
     </div>
      
    
       </div><br></br> 
       <div className='header4'>
        <input type={"search"} className="search-input" placeholder='Search for dishes'/><FiSearch className='search-bar' size={35}/><br></br>
        <div>
            <h2 className='popular'>Popular cuisines</h2>
         </div>   
            
    <div className='dish-head'>
     <div className='dishes-main'>
    <div className='dishes' ><img src="https://ik.imagekit.io/curefoods/image/eatfit-category/CFI_THALI_1.png " className='img5'/></div>
    <p className='dishes-text'>indian thali</p>
    </div>
    <div className='dishes-main'>
    <div className='dishes' ><img src="https://ik.imagekit.io/curefoods/image/eatfit-category/CFI_RICEBOWL_1.png " className='img5'/></div>
     <p className='dishes-text'>Rice Bowl</p>
    </div>
    <div className='dishes-main'>
    <div className='dishes' ><img src=" https://ik.imagekit.io/curefoods/image/eatfit-category/CFI_KHICHDI_2.png" className='img5'/></div>
     <p className='dishes-text'>Kitchidi</p>
    </div>
    <div className='dishes-main'>
   <div className='dishes' ><img src="https://ik.imagekit.io/curefoods/image/eatfit-category/CFI_BIRYANI_1.png " className='img5'/></div>
    <p className='dishes-text'>Biriyani&kebab</p>
    </div>
    <div className='dishes-main'>
   <div className='dishes' ><img src="https://ik.imagekit.io/curefoods/image/eatfit-category/CFI_PIZZA_2.png " className='img5'/></div>
     <p className='dishes-text'>Pizza</p>
    </div>
    <div className='dishes-main'>
    <div className='dishes' ><img src=" https://ik.imagekit.io/curefoods/image/eatfit-category/CFI_CHINESE_C2.png" className='img5'/></div>
    <p className='dishes-text'>chinese</p>
    </div>
    <div className='dishes-main'>
   <div className='dishes' ><img src="https://ik.imagekit.io/curefoods/image/eatfit-category/VALUE_DEALS_2.png " className='img5'/></div>
     <p className='dishes-text'>Up to 60% off</p>
    </div>
    <div className='dishes-main'>
         <div className='dishes' ><img src="https://ik.imagekit.io/curefoods/image/eatfit-category/CFI_GOURMET_2.png " className='img5'/></div>
      <p className='dishes-text'>Gourmet</p>
    </div>
    </div>
    </div>
    </div>

       </>
  )
}

export default Search