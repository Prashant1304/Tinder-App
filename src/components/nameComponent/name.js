import React, { Component } from "react"

class Name extends Component {
    render() {
        return(
            <div className="divvvvv" >
            <div>
              <h3>My first name is </h3>
            </div>
            <div >
              <input onChange={this.props.handleNameValue} value={this.props.name} placeholder="your name please"></input>
              <p style={{fontSize:"13px",color:"gray"}}>This is how it wil appear in Tinder and you will not be able to change it</p>
            </div>
            <div style={{position:"relative",left:"67px",top:"224px"}}>
            <div className="cont">
              <button style={{backgroundColor:"rgb(254, 60, 114)",border:"none"}}onClick={this.props.handleName} >CONTINUE</button>
            </div>
            </div>
          </div>
        )
    }
}
export default Name