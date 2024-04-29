import Intro4 from "./Intro4"
import Third from "./Third"
import { useState } from "react"
const Intro3=()=>{
    const myData={
        name:"Can you help me get some ? ",
       start:"YES"
      }
      const [showIntro2,setShowIntro2] =useState(false) 
      const handleClick=()=>{
         setShowIntro2(true)
      } 
        return <>
        {showIntro2 ? <Intro4/> : <Third myData={myData} handleClick={handleClick}></Third>}
          </>
}
export default Intro3;