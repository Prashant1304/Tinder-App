
import React, { Component } from "react"
import "./boys.css"

var boys = [

    {
      id:6,
      photo:"https://static.toiimg.com/photo/80482428.cms?imgsize=99038",
      name:"Rahul",
      age:"26"
    },
  
    {
      id:7,
      photo:"https://i.pinimg.com/originals/df/ee/81/dfee81d3be1ed3dffdd248110f03d7d0.jpg",
      name:"Rohan",
      age:"24"
    },
  
    {
      id:8,
      photo:"https://pbs.twimg.com/media/CUgET7rUcAAO_gP.jpg",
      name:"Ashoke",
      age:"22"
    },
  
    {
      id:9,
      photo:"https://images.pexels.com/photos/2741701/pexels-photo-2741701.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name:"Rahu",
      age:"18"
    },
  
    {
      id:10,
      photo:"https://i.pinimg.com/originals/dc/51/61/dc51612f96ea1258755c744528372bf2.jpg",
      name:"Ketan",
      age:"55"
    }
  ]
  
class Boys extends Component {
    state = {
      dataB:boys,
      respL:false,
      respR:false,
    }

    componentDidMount () {
      var inc = Math.floor( Math.random () *5 )
      var filter2 = boys.filter( (x) => {
        return x == boys[inc]
      })
      this.setState ({ dataB:filter2 })
    }

    handleClickLike = () => {
      var inc = Math.floor(Math.random()*5)
      this.setState ({ respL:!false })
      setTimeout(() => { this.setState ({respL:false}); },300);
      
      var filter2 = boys.filter( (x) => {
        return x == boys[inc]
      })
      this.setState({dataB:filter2})
    }

    handleClickRejcct = () => {
      var inc =Math.floor(Math.random()*5)
      this.setState ({ respR:!false })
      setTimeout(() => { this.setState ({ respR:false }); },300);
      
      var filter2 = boys.filter( (x) => {
        return x == boys[inc]
      })
      this.setState ({ dataB:filter2 })
    }

    render () {
      return (

        <div>

            { this.state.dataB.map((x,y) => {
              return <div key={y} >
                 <img src={x.photo}  style={{ borderRadius:"5px",position:"relative",top:"27px",height:"365px",width:"365px"}}></img>
                 <p style={{color:"black",position:"relative",bottom:"31px",fontSize:"22px"}}><b> {x.name}</b>  &nbsp;&nbsp; {x.age}</p>
                </div>
              })
            }
              <div>
                {this.state.respL&& <div  className="respL"><b>LIKE</b></div>}
                {this.state.respR&& <div className="respR"><b> REJECt</b></div>}    
              </div>
              <div className="but"> <button onClick={this.handleClickLike} style={{color:"green",borderRadius:"25px",textAlignLast:"center",height:"31px",width:"31px"}}>&#10004;</button> <button onClick={this.handleClickRejcct} style={{color:"red",borderRadius:"25px",height:"31px",width:"31px"}}>&#10005;</button></div>
        </div>
      )
    }
}

export {boys}
export default Boys