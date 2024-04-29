import { useState } from "react";

const Card=({item,handleClick})=>{

       const[isToggled,setIsToggled]=useState(true)
       const toggleCard=()=>{
              setIsToggled(!isToggled)
              handleClick(item.id)
       }
       
return (
       <div className={`card ${isToggled ? "toggled" : ""} `} onClick={toggleCard}>
              {isToggled  ? null : <img src={item.img}/> }

       </div>
        
)

}
export default Card;