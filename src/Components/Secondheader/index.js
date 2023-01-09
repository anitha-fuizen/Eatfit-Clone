import React,{useContext} from 'react';
import { ThemeContext } from '../../Context/ThemeContextProvider';
const a=[{id:0,url:"https://ik.imagekit.io/curefoods/image/listing-brands/CUREFOODS/CUREFOODS_IMAGE_1.svg"},
          {id:1,url:"https://ik.imagekit.io/curefoods/image/listing-brands/NEW_AND_POPULAR/NEW_AND_POPULAR_IMAGE_production_12th_Oct_22_6_30_58.svg"},
          {id:2,url:"https://ik.imagekit.io/curefoods/image/listing-brands/CHAAT_STREET/CHAAT_STREET_IMAGE_production_15th_Sep_22_11_07_55.svg"},
          {id:3,url:"https://ik.imagekit.io/curefoods/image/listing-brands/CHOW_TAO/CHOW_TAO_IMAGE_1.svg"},
          {id:4,url:"https://ik.imagekit.io/curefoods/image/listing-brands/GREAT_INDIAN_KHICHDI/GREAT_INDIAN_KHICHDI_IMAGE_1.svg"},
          {id:5,url:"https://ik.imagekit.io/curefoods/image/listing-brands/OLIO/OLIO_IMAGE_1.svg"},
          {id:6,url:"https://ik.imagekit.io/curefoods/image/listing-brands/ALIGARH_HOUSE/ALIGARH_HOUSE_IMAGE_1.svg"},
          {id:7,url:"https://ik.imagekit.io/curefoods/image/listing-brands/HOME_PLATE/HOME_PLATE_1.webp"},
          {id:8,url:"https://ik.imagekit.io/curefoods/image/listing-brands/PARATHA_BOX/PARATHA_BOX_IMAGE_1.svg"},
          {id:9,url:"https://ik.imagekit.io/curefoods/image/listing-brands/SMOODIES/SMOODIES_IMAGE_production_7th_Nov_22_7_00_08.svg"}
     ]

const b=[{id:0,url:"https://ik.imagekit.io/curefoods/image/listing-brands/CUREFOODS/CUREFOODS_SELECTED_IMAGE_1.svg"},
        {id:1,url:"https://ik.imagekit.io/curefoods/image/listing-brands/NEW_AND_POPULAR/NEW_AND_POPULAR_SELECTED_IMAGE_production_14th_Oct_22_5_23_36.svg"},
        {id:2,url:"https://ik.imagekit.io/curefoods/image/listing-brands/EAT_FIT/EAT_FIT_SELECTED_IMAGE_1.svg"},
        {id:3,url:"https://ik.imagekit.io/curefoods/image/listing-brands/HRX_BY_EATFIT/HRX_BY_EATFIT_SELECTED_IMAGE_1.svg"},
        {id:4,url:"https://ik.imagekit.io/curefoods/image/listing-brands/CHAAT_STREET/CHAAT_STREET_SELECTED_IMAGE_production_15th_Sep_22_11_08_07.svg"},
        {id:5,url:"https://ik.imagekit.io/curefoods/image/listing-brands/CHOW_TAO/CHOW_TAO_SELECTED_IMAGE_1.svg"},
        {id:6,url:"https://ik.imagekit.io/curefoods/image/listing-brands/GREAT_INDIAN_KHICHDI/GREAT_INDIAN_KHICHDI_SELECTED_IMAGE_1.svg"},
        {id:7,url:"https://ik.imagekit.io/curefoods/image/listing-brands/OLIO/OLIO_SELECTED_IMAGE_1.svg"},
        {id:8,url:"https://ik.imagekit.io/curefoods/image/listing-brands/ALIGARH_HOUSE/ALIGARH_HOUSE_SELECTED_IMAGE_1.svg"},
        {id:9,url:"https://ik.imagekit.io/curefoods/image/listing-brands/HOME_PLATE/HOME_PLATE_SELECTED_IMAGE_production_15th_Sep_22_11_20_17.svg"},
        ]

const Secondheader = () => {
  
     const {toggle,togglefunction}=useContext(ThemeContext);
    

  return (
    <div className='main'>
      
    
    
    <div className='img-text'>
     <div className='icondiv' ><img src={toggle?a[0].url:b[0].url} className='img1'onClick={togglefunction} /></div>
    <p>New&Popular</p>
    </div>
    
    <div className='img-text'>
     <div className='icondiv' ><img src={toggle?a[1].url:b[1].url} className='img1' onClick={togglefunction}/></div>
    <p>Eat-Fit</p>
    </div>
    <div className='img-text'>
     <div className='icondiv' ><img src={toggle?a[2].url:b[2].url} className='img1' /></div>
    <p>HRX</p>
    </div>
    <div className='img-text'>
     <div className='icondiv' ><img src={toggle?a[3].url:b[3].url} className='img1' onClick={togglefunction} /></div>
    <p>Chaat street</p>
    </div>
    <div className='img-text'>
    <div className='icondiv' ><img src={toggle?a[4].url:b[4].url} className='img1' onClick={togglefunction}/></div>
    <p>Chow tao</p> 
    </div>
    <div className='img-text'>
    <div className='icondiv' ><img src={toggle?a[5].url:b[5].url}className='img1' onClick={togglefunction}/></div>
    <p>Great indian<br></br>Kitchidi</p>
    </div>
    <div className='img-text'>
    <div className='icondiv'><img src={toggle?a[6].url:b[6].url} className='img1' onClick={togglefunction} /></div> 
    <p>Olio Pizzas</p>
    </div>
    <div className='img-text'>
   <div className='icondiv' ><img src={toggle?a[7].url:b[7].url} className='img1' onClick={togglefunction}/></div>
   <p>Paratha box</p>
   </div>
   <div className='img-text'>
   <div className='icondiv' ><img src={toggle?a[8].url:b[8].url} className='img1' onClick={togglefunction}/></div>
   <p>Home plate</p>
   </div>
   <div className='img-text'>
   <div className='icondiv' ><img src={toggle?a[9].url:b[9].url} className='img1' onClick={togglefunction}/></div> 
   <p>Smoodies</p>
   </div>

   </div>
   
  )
}

export default Secondheader