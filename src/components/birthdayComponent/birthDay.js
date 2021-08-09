import React from "react"
import "./birthday.css"

function BirthDay (props) {
  return (
    <div>
        <div style = {{ padding:"1px 57px" }} >
          <div className = "birth-top" >
            <h3> My birthday is </h3>
          </div>

          <div className = "birth-middle" >
            <input className = "birth-input" type = "date"></input>
            <p style = {{ color:"rgb(169,169,169)",fontSize:"14px" }} > Your age will be public </p>
          </div>
        </div>
          <div className = "birth-bottom" >
            <div className = "birth-cont" >
              <button className = "birth-cont-butt"  onClick = { props.handelBirth } > CONTINUE </button>
            </div>
          </div>
    </div>
  )
}

export default BirthDay