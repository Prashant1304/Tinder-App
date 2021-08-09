import React from "react"
import "./gender.css"

function Gender (props) {
    return(
      <div >
         <div className="gender-top">
            <h2>I am a</h2>
         </div>

           <div className="gender-box-box"  >
                <div className="gender-box">
                  <button className="gender-btn" >MALE</button>
                  <button className="gender-btn">FEMALE</button>
                  <button className="gender-btn">TRANS</button>
                </div>
           </div>
            
          <div className="gender-cont" >
            <button  className="gender-cont-btn" onClick={props.handleGender}>CONTINUE</button>
          </div>
      </div>
    )
}

export default Gender