import React from "react"

function Gender (props) {
    return(
        <div className="diV">
              <div>
              <h2>I am a</h2>
              </div>
              <div className="gender" >
              <div onClick={props.handleGenderColour}>
            <div  className="contt">
              <button className="one">MALE</button>
            </div>
            </div>
              <div onClick={props.handleGenderColour}>
            <div className="contt">
              <button className="one">FEMALE</button>
            </div>
              </div>
              <div onClick={props.handleGenderColour}>
            <div className="contt">
              <button className="one">TRANS</button>
            </div>
              </div>
              </div>
              <div style={{position:"relative",left:"67px",top:"254px"}}>
            <div className="cont">
              <button style={{backgroundColor:"rgb(254, 60, 114)",border:"none"}} onClick={props.handleGender}>CONTINUE</button>
            </div>
            </div>
            </div>
    )
}

export default Gender