import React from "react"
import {girls} from "../girlsData/girls"
function ShowGender (props) {
    return (
        <div className="diVV">
            <div>
              <h2>Show Me</h2>
              </div>
              <div className="gender" >
              <div onClick={props.handleGenderColour}>
            <div className="contt">
              <button className="one" value="MALE">MALE</button>
            </div>
            </div>
              <div onClick={props.handleGenderColour}>
            <div   className="contt" >
              <button    className="one" value="FEMALE">FEMALE</button>
            </div>
              </div>
              </div>
              <div style={{position:"relative",left:"67px",top:"254px"}}>
            <div className="cont">
              <button onClick={props.handleShowGender} style={{backgroundColor:"rgb(254, 60, 114)",border:"none"}}>CONTINUE</button>
            </div>
            </div>
            </div>
    )
}

export default ShowGender