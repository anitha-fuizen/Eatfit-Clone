import React,{createContext, useState,useEffect} from 'react'
const ThemeContext=createContext();
// const ThemeBodyContext=createContext();
const ThemeContextProvider = (props) => {
const [toggle,setToggle]=useState(false);
// const [bodytoggle,setBodyToggle]=useState(false);
const togglefunction=()=>{
    setToggle(toggle=>!toggle);
}
useEffect(()=>{
    document.body.className=toggle?"light":"dark";
   },[toggle])
  return (
    <>
<ThemeContext.Provider value={{toggle,togglefunction}}>
    {props.children}
</ThemeContext.Provider>
{/* <ThemeBodyContext.Provider value={{bodytoggle,setBodyToggle}}>
    {props.children}
</ThemeBodyContext.Provider> */}
</>
  )
}

export {ThemeContext,ThemeContextProvider}