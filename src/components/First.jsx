
const First=({myData,handleClick})=>{
    const {name,start}=myData
    
    return <div className="intro">
        <div className="intro1">
            <h1 className="intro2">{name}</h1>
        </div>
        <div className="intro6"></div>
        <div className="intro3">
    
            <div className="intro4">
            <button  onClick={handleClick} className="intro5">{start}</button>
            </div>
    
            </div>
    </div>
}
export default First;