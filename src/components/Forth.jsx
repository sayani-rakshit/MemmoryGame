const Forth=({myData,handleClick})=>{
    const {name,start}=myData
    return <div className="intro">
        <div className="intro7"></div>
        <div className="intro8">
        <img src="images/Group 148.png"></img>
        <img src="images/Group 154.png" className="img1"></img>
        
        </div>
        <div className="intro9">
            <div className="intro12"></div>
            <div className="intro13">
                <div className="intro14">
                    01
                </div>
            </div>
            <p className="intro15">Select a pink card.</p>
            <p className="intro16">It has images.</p>
        </div>
        <div className="intro10">
        <div className="intro17"></div>
            <div className="intro13">
                <div className="intro14">
                    02
                </div>
            </div>
            <p className="intro15">Select a blue card.</p>
            <p className="intro16">It has alphabets.</p>
        </div>
        <div className="intro11">
        <div className="intro18"></div>
            <div className="intro13">
                <div className="intro14">
                    03
                </div>
            </div>
            <p className="intro15"> Its a match !</p>
            <p className="intro16">otherwise retry :(</p>
        </div>

        <div className="intro3">
            <div className="intro4">
            <button onClick={handleClick} className="intro5">{start}</button>
            </div>
            </div>
            </div>
    
}
export default Forth;