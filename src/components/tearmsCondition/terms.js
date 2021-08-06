import React, { Component } from "react"

class Terms extends Component {
    render() {
        return(
            <div className="divvvv">
            <div style={{textAlignLast:"center"}} >
            <p>&#128293;</p>
            <h3>WELCOME TO TINDER</h3>
            <p style={{fontSize:"15px"}}>Please Follow These House Rules</p>
            </div>
            <div className="terms"> 
            <div>
             <p> <i style={{color:"red"}}>&#x2713; </i>BE yourself  </p>
             <p style={{fontSize:"13px"}}>Make sure your photo,age,bio are true to who you are</p>
            </div>
            <div>
            <p> <i style={{color:"red"}}>&#x2713; </i>Stay safe  </p>
             <p style={{fontSize:"13px"}}>Dont Be Quick To Give Out Personal Information.</p>
            </div>
            <div>
            <p> <i style={{color:"red"}}>&#x2713; </i>Play it cool  </p>
             <p style={{fontSize:"13px"}}>Respect others and treat them as you like to be treated.</p>
            </div>
            <div>
            <p> <i style={{color:"red"}}>&#x2713; </i>BE proactive.  </p>
             <p style={{fontSize:"13px"}}>Always report bad behavior.</p>
            </div>
            </div>
            <div style={{position:"relative",top:"43px"}}>
            <div className="cont">
              <button style={{backgroundColor:"rgb(254, 60, 114)",border:"none"}} onClick={this.props.handleTerms}>I AGREE</button>
            </div>
            </div>
          </div>
        )
    }
}
export default Terms