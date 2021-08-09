import React from "react"
import "./otp.css"

function Otp (props) {
    return (
      <div>
        <div className="otp-top">
          <h3>My Code is</h3>
        </div>

        <div className="otp-resend"  onClick={props.handleResend} >
          {props.phoneNumValue} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  RESEND
        </div>
            
        <div className="otp-contnar">
          <input className="otp-inpot" onChange={props.handleNumberOtp} value={props.phoneNumOtp} type="number"></input>
        </div>

         <div className="otp-continue-container">
           <div className="cont-btn" >
              <button  className="cont" style= {{border:"none",backgroundColor:"#E6E9F0",fontSize:"15px",color:"white" }} onClick={props.handleCode}>CONTINUE</button>
           </div>
         </div>
      </div>
    )
}

export default Otp