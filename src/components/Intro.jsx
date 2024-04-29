import { useState } from "react";
import First from "./First";
import Intro2 from "./Intro2";
const Intro=()=>{
    const myData={
        name:"Welcome Kiddo !",
       start:"START"
      }
  const [showIntro2,setShowIntro2] =useState(false) 
    const handleClick=()=>{
       setShowIntro2(true)
    } 
      return <>
      {showIntro2 ? <Intro2/> :
        <First myData={myData} handleClick={handleClick}></First>
  }
        
      </>
}
export default Intro;