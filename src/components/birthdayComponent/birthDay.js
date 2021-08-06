import React from "react"

function BirthDay (props) {
    return(
        <div className="divvvvvv">
            <div>
            <h3>My birthday is</h3>
            <div style={{position:"relative",top:"105px"}}>
            <input style={{border:"none",color:"rgb(128,128,128)" }} type="date"></input>
            <p style={{color:"rgb(169,169,169)",fontSize:"10px"}}>Your age will be public</p>
            </div>
            </div>
            <div style={{position:"relative",left:"67px",top:"254px"}}>
            <div className="cont">
              <button style={{backgroundColor:"rgb(254, 60, 114)",border:"none"}} onClick={props.handelBirth}>CONTINUE</button>
            </div>
            </div>
          </div>
    )
}

export default BirthDay