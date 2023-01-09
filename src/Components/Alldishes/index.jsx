import React from 'react'
import Indian from './../Indian/Indian'
import Beverages from './../Beverages/Beverages'
import Biriyani from './../Biriyani/Biriyani'
import Chinese from './../Chinese/Chinese'
import Desserts from './../Desserts/Desserts'
import Gourmet from './../Gourmet/Gourmet'
import Kitchidi from './../Kitchidi/Kitchidi'
import Kulcha from './../Kulcha/Kulcha'
import Pizza from './../Pizza/Pizza'
import Ricebowl from './../Ricebowl/Ricebowl'
import Upto from './../Upto/Upto'
import Alacart from './../Alacart/Alacart'
import Allday from './../Allday/Allday'
import Slides from '../Slides/index'
import Selectors from '../Selectors/index'
import Dishes from '../Dishes/index'
import Search from '../Search/Search'
import Secondheader from '../Secondheader'
import Footer from '../Footer/Footer'
const Alldishes = () => {
  return (
    <>
      <Secondheader />
      <Slides />
      <Selectors />
      <Dishes />
      <Indian />
      <Beverages />
      <Biriyani />
      <Chinese />
      <Desserts />
      <Gourmet />
      <Kitchidi />
      <Kulcha />
      <Pizza />
      <Ricebowl />
      <Upto />
      <Alacart />
      <Allday />
      <Footer/>

    </>
  )
}

export default Alldishes