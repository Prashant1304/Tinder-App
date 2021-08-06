import React from "react"
import {girls} from "../girlsData/girls"
import "./showGender.css"
function ShowGender (props) {
    return (
        <div >

            <div className="showGender-top">
              <h2>Show Me</h2>
              </div>

              <div className="showGender-middle-box"  >
              <div className="showGender-middle" >
            <div onClick={props.handleGenderColour}>
              <button className="showGender-btn" value="MALE">MALE</button>
            </div>

            <div   onClick={props.handleGenderColour} >
              <button    className="showGender-btn" value="FEMALE">FEMALE</button>
              </div>
              </div>
              </div>

            <div className="showGender-bottom">

              <button className="showGender-cont-btn" onClick={props.handleShowGender} >CONTINUE</button> 
            
            </div>
            </div>
    )
}

export default ShowGender