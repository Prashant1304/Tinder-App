import React from  "react"
import "./number.css"

function NumberPart (props) {
    return(
        <div className="divv">
          <div  style={{textAlignLast:"center"}}>
            <h2>My number is</h2>
          </div>
          <div style={{textAlignLast:"center"}}>
            IN +91 <input type="number" onChange={props.handleNumberData} value={props.phoneNumValue} placeholder="Phone Number"></input>
          </div>
          <div style={{textAlignLast:"center",fontSize:"12px"}}><p>when you tap continue,Tinder will send a text with verification code.Message and data rate may apply </p></div>
          <div >
          <div className="cont">
            <button style={{backgroundColor:"rgb(254, 60, 114)",border:"none"}} onClick={props.handleNumber}>CONTINUE</button>
          </div>
          </div>
        </div>
    )
}
export default NumberPart