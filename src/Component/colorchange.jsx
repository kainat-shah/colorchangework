import { useState } from "react";
import "./colorchange.css";
function Color(){
    const [color, setColor] = useState('yellow');
  const handlePink = () =>{
        setColor ('pink')

    }
    const handleRed = () =>{
        setColor ('red')

    }
    return(
        <>
        <div className="Color" style={{backgroundColor:color}}>
            <button className="pink" style={{backgroundColor:"pink"}} onClick={handlePink}>Pink</button>
            <button className="red"style={{backgroundColor:"red"}} onClick={handleRed}>Red</button>
        </div>
        </>
    )
}
export default Color;