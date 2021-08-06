import React, { Component } from "react"
import "./name.css"

class Name extends Component {
    render() {
        return(
            <div  >
            <div className="Name-top">
              <h3>My first name is </h3>
            </div>
            <div className="Name-middle">
              <input className="Name-input" onChange={this.props.handleNameValue} value={this.props.name} placeholder="your name please"></input>
              <div className="Name-line"></div>
              <p style={{fontSize:"16px",color:"gray"}}>This is how it wil appear in Tinder and you will not be able to change it</p>
            </div>
            <div className="Name-bottom">
            <div className="Name-cont">
              <button className="Name-cont-butt" onClick={this.props.handleName} >CONTINUE</button>
            </div>
            </div>
          </div>
        )
    }
}
export default Name