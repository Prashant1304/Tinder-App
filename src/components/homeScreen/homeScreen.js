import React from "react"
import "./homeScreen.css"

function HomeScreen (props) {
    return(
        <div >

      <div className="header-top"><h2> &#128293; tinder</h2></div>
      <div className="header-below" >
        <div>

        <p style={{fontSize: "13px",textAlign:"center",color:"white"}}>By clicking login,you agree with our Terms.Learn how we process your data in private policy </p>
        </div>
        <div className ="login">
          <div className="login-btn">

        <img src="https://cdn.emojidex.com/emoji/seal/google.png?1489276340" style={{height:"15px"}} ></img>
        <button  onClick={props.handleTinder} style={{border:"none",backgroundColor:"white"}}>LOG IN WITH GOOGLE</button>
          </div>
        </div>
          </div>
        </div>
    )
}
export default HomeScreen