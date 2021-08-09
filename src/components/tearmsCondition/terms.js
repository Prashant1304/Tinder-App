import React, { Component } from "react"
import "./terms.css"


class Terms extends Component {
    render() {
        return(
          <div >
            <div className="terms-top" >
              <p>&#128293;</p>
              <h3 style={{color:"#5D5D5D"}}>WELCOME TO TINDER.</h3>
              <p style={{color:"gray"}}> Please Follow These House Rules </p>
            </div>

            <div className="terms-middle"> 
              <div>
                  <p> <i style={{color:"red"}}>&#x2713; &nbsp;&nbsp;&nbsp;</i>BE yourself  </p>
                  <p style={{fontSize:"16px",color:"gray"}}>Make sure your photo,age,bio are true to who you are</p>
              </div>

              <div>
                <p> <i style={{color:"red"}}>&#x2713; &nbsp;&nbsp;&nbsp;</i>Stay safe  </p>
                <p style={{fontSize:"16px",color:"gray"}}>Dont Be Quick To Give Out Personal Information.</p>
              </div>

              <div>
                <p> <i style={{color:"red"}}>&#x2713; &nbsp;&nbsp;&nbsp;</i>Play it cool  </p>
                <p style={{fontSize:"16px",color:"gray"}}>Respect others and treat them as you like to be treated.</p>
              </div>

              <div>
                <p> <i style={{color:"red"}}>&#x2713; &nbsp;&nbsp;&nbsp;</i>BE proactive.  </p>
                <p style={{fontSize:"16px",color:"gray"}}>Always report bad behavior.</p>
              </div>

            </div>

            <div className="terms-b">
              <div className="terms-bottom">
                <button className="terms-btn" onClick={this.props.handleTerms}>I AGREE</button>
              </div>
            </div>
            
          </div>
        )
    }
}
export default Terms