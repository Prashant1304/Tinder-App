import React from "react"

function Otp (props) {
    return(
        <div className="divvv">
            <div style={{textAlignLast:"center"}}>
              <h3>My Code is</h3>
            </div>
            <div onClick={props.handleResend} style={{fontSize:"11px",color:"rgb(169,169,169)",textAlignLast:"center",position:"relative",bottom:"5px" }}>
              {props.phoneNumValue}   RESEND
            </div>
            <div>
              <input onChange={props.handleNumberOtp} value={props.phoneNumOtp} type="number"></input>
            </div>
            <div style={{position:"relative",top:"15px"}}>

            <div className="cont" >
              <button style={{backgroundColor:"rgb(254, 60, 114)",border:"none"}} onClick={props.handleCode}>CONTINUE</button>
            </div>
          </div>
          </div>
    )
}

export default Otp