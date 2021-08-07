import React from  "react"
import "./number.css"

function NumberPart (props) {
    return(
        <div className="Npad" >
          <div  className="Number-Top">
            <h2>My number is</h2>
          </div>
          <div className="Number-move">
          <div className="Number-input" >
            IN +91 <input style={{border:"none",fontSize:"16px"}} type="number" onChange={props.handleNumberData} value={props.phoneNumValue} placeholder="Phone Number"></input>
          </div>
            <div className="P-N-line"></div>
          <div >
          <div ><p style={{fontSize:"15px",fontFamily:"sans-serif",color:"gray" }}> when you tap continue,Tinder will send a text with verification code.Message and data rate may apply </p></div>
          <div className="cont-btn" >
            <button className="cont" style= {{border:"none",backgroundColor:"#E6E9F0",fontSize:"15px",color:"white" }}  onClick={props.handleNumber}> CONTINUE</button>
          </div>
          </div>
          </div>
        </div>
    )
}
export default NumberPart