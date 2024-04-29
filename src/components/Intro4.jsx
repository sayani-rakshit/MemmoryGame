import { useState } from "react";
import Forth from "./Forth";
import Game from "./Game";
// import Second from "./Second";
const Intro4=()=>{
    const myData={
        name:"Hi , I am Mizo and I love bananas ",
       start:"Play"
      }
      const [showIntro2,setShowIntro2] =useState(false) 
      const handleClick=()=>{
         setShowIntro2(true)
      } 
        return <>
        {showIntro2 ? <Game/> : <Forth myData={myData} handleClick={handleClick}></Forth>}
        </>
          
}
export default Intro4;