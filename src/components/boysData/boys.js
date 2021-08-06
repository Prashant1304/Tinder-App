
import React, { Component } from "react"
var boys=[
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
    state={
        dataB:boys,
        respL:false,
        respR:false,
        toggleButton:false,
    }
    componentDidMount(){
        var inc =Math.floor(Math.random()*5)
        console.log(inc)
        var filter2=boys.filter((x)=>{
          // console.log(girls[inc])
          return x==boys[inc]
        })
        this.setState({dataB:filter2})
    
    }
    
    render() {
        return(<div> 
            {this.state.dataB.map((x,y)=>{
              return <div key={y}>
                 <img src={x.photo} className="animation" style={{ borderRadius:"5px",position:"relative",top:"27px",height:"255px",width:"255px"}}></img>
                 <p style={{color:"pink",position:"relative",bottom:"15px",right:"80px"}}><b> {x.name}</b>  &nbsp;&nbsp; {x.age}</p>
                 
                  {/* {console.log(x)} */}
                </div>
              })}</div>
        )
    }
}

export {boys}
export default Boys