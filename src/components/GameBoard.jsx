import { useEffect, useState } from "react";
import Cards from "./Cards";
import Card from "./Card";

const GameBoard=()=>{
const[items,setItems]=useState(Cards)
const[lastClickedId,setLastClickId]=useState(null)
const [matchFound,setMatchFound]=useState(false)

const[bananaCollected,setBananaCollected]=useState(0)
const[gamewon,setGamewon]=useState(false)


const handleClick=(id)=>{
    if(lastClickedId===id){
        setMatchFound(true)
        setBananaCollected(bananaCollected +1)
        // setItems(items.filter((card)=>card.id !==id))
    
    }else{
        setLastClickId(id);
        setMatchFound(false);
    }
}
const fillPercentage=(bananaCollected /items.length+0.5)*100
useEffect(()=>{
    if(bananaCollected ===items.length/2){
        setGamewon(true);
        setItems([]);
        setMatchFound(false)
    }
},[bananaCollected,items.length])
return (<>
    <div className="container">
        {items.map((item)=>(
            
                <Card key={item.id} item={item} id={item.id} handleClick={handleClick}/>
            
            ))
        }
        {matchFound && <p className="match"> It's match</p> }
        
    </div>

    <div className="banana-bar">
        <div className="banana-fill" style={{width:`${fillPercentage}%`}}></div>
        <img src="images/Group 154.png" className="img1 " ></img>
    </div>
    {gamewon && <div className="game-won">
        <div classname="bananacollect">
            <p className="bananacollectp"> Earned 7 Banana’s</p>
        </div>
        <div className="wondiv"></div>
        <p className="won">YAY, OK!</p>
        </div>}
    </>
)
}
export default GameBoard;