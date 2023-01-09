
import './App.css';

import Header from './Components/Header/index';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Alldishes from './Components/Alldishes';
import Search from './../src/Components/Search/Search'
import { createContext, useState } from 'react';
import { useEffect } from 'react';
import { ThemeContextProvider } from './Context/ThemeContextProvider';


function App() {
  
  return (
    <>
    <ThemeContextProvider>
   <BrowserRouter>
      <Header/>
      
      <Routes>
      <Route path='/' element={<Alldishes/>}/> 
      <Route path='/Order' element={<Alldishes/>}/>
      <Route path='/Search' element={<Search/>}/> 
       </Routes>
       </BrowserRouter>
    </ThemeContextProvider>
    </>
  )

}

export default App;
