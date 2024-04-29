// import First from "./First";
import { useState } from "react";
import Intro3 from "./Intro3";
import Second from "./Second";
import Intro from "./Intro";
const Intro2=()=>{
    const myData={
        name:"Hi , I am Mizo and I love bananas ",
       start:"NEXT"
      }
      const [showIntro2,setShowIntro2] =useState(false) 
    const handleClick=()=>{
       setShowIntro2(true)
    } 
    
      return <>
      {showIntro2 ? <Intro3/> : <Second myData={myData} handleClick={handleClick}></Second>}       
      </>
      
}
export default Intro2;