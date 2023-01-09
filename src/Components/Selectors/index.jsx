import React from 'react'
import '../../Assets/Styles/Selectors.scss'
import { CiClock2 } from "react-icons/ci";




const Selectors = () => {
    const [open, setOpen] = React.useState(false);
    
    const [openfilters, setOpenfilters] = React.useState(false);


const handleopenfilter = () =>{
  setOpenfilters(!openfilters)
}


  const handleOpen = () => {
    setOpen(!open);
  };
       
  return (
    <div>
 <div className="dropdown">
      <button className='main-button' onClick={handleOpen}><CiClock2 size={20}/><span>Eat now</span><img src="https://djgt4pi2uqo7n.cloudfront.net/prod/assets/images/down-arrow-white.svg"/></button>
      {open ? (
        <ul className="menu">
          <li className="menu-item">
            <button>Today's lunch</button>
          </li>
          <li className="menu-item">
            <button>Today's Snacks</button>
          </li>
          <li className="menu-item">
            <button>Tommorow's breakfast</button>
          </li>
          <li className="menu-item">
            <button>Tommorow's lunch</button>
          </li>
        </ul>
      ):null}
      
     
    <div className='main-check'>
    <div className='check-box'>
    < input type={"checkbox"}className="check" />
     <p className='veg'>Veg Only</p>
   </div>
   <div className='filtering'>
   
    <p className='fill' onClick={handleopenfilter} >Filters </p>
    {
      openfilters?(
        <div className='function'>
            <div className='clear-head'>
              
                <p className='clear' onClick={handleopenfilter}>Clear all</p>
                
            </div>
            <div>
                <p className='food'>Food</p>
            </div>
            <div className='button-row'>
                <div> <button className='all'>All</button></div>
                <div> <button  className='veg1'>Veg</button></div>
            </div>
            <div><p className='calories'>Calories</p></div>
            <div className='calories-range'>
            <div> <button className='all'>All</button></div>
               <div> <button className='all1'>0-200</button></div>
                <div> <button className='all2'>200-500</button></div>
                
                <div> <button className='range'>500+</button></div>
            
            </div>
            <div><p className="nutrition">Nutrition</p></div>
            <div className='total-num'>
                <div className='first-two'>
                    <div className='text-high'><img src='https://djgt4pi2uqo7n.cloudfront.net/prod/assets/images/un_select_tnc.svg' className='high'/><span className='protiene'>High protiene</span></div>
                    <div className='text-high'><img src='https://djgt4pi2uqo7n.cloudfront.net/prod/assets/images/un_select_tnc.svg'className='high'/>Low calorie</div>
                </div>
                 <div className='last-two'>
                    <div className='text-low'><img src='https://djgt4pi2uqo7n.cloudfront.net/prod/assets/images/un_select_tnc.svg'className='high'/>High fibre</div>
                    <div className='text-lo'><img src='https://djgt4pi2uqo7n.cloudfront.net/prod/assets/images/un_select_tnc.svg'className='high'/>Vegan</div>
                </div> 
                <div>
                    <button className='apply'>APPLY</button>
                </div>
            </div>
        </div>
      ):null}
    
   <img src='https://djgt4pi2uqo7n.cloudfront.net/prod/assets/images/filter-black.svg' className='filters'/></div>
   </div>
    </div>
    <hr className='horizontal'></hr>
    </div>
    
  )

      }

export default Selectors