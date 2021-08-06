import React, { Component } from "react"

var girls=[
  
    {
      id:1,
      photo:"https://i.pinimg.com/736x/01/86/52/018652e1596cbc22353c1ce38a619dda.jpg",
      name:"Sonam",
      age:"25"
    },
    {
      id:2,
      photo:"http://fashionpro.me/wp-content/uploads/2016/06/Esha-Gupta.jpg",
      name:"Priya",
      age:"28"
    },

    {
      id:3,
      photo:"https://5.imimg.com/data5/VN/AO/MY-2/indian-female-models-500x500.jpg",
      name:"Anjali",
      age:"24"
    },

    {
      id:4,
      photo:"https://cdn.ceoworld.biz/wp-content/uploads/2020/05/Ujjwala-Raut.jpg",
      name:"Karisma",
      age:"32"
    },

    {
      id:5,
      photo:"https://qph.fs.quoracdn.net/main-qimg-178bf6f29b6403703f1304d1cedd94ab",
      name:"Neha",
      age:"56"
    },
  
] 
class Girls extends Component {
    state={
        dataG:girls,
        respL:false,
        respR:false,
    }
    componentDidMount(){
        var inc =Math.floor(Math.random()*5)
    
        var filter1=girls.filter((x)=>{
          // console.log(girls[inc])
          return x==girls[inc]
        })
        this.setState({dataG:filter1})
    
    }

    render() {
        return(
            <div >
                    {this.state.dataG.map((x,y)=>{
                      return <div  key={y}>
                       <img src={x.photo} style={{borderRadius:"5px", position:"relative",top:"27px",height:"255px",width:"255px"}}></img>
                       <p style={{color:"pink",position:"relative",bottom:"15px",right:"80px" }}><b> {x.name}</b>  &nbsp;&nbsp; {x.age}</p>
                       
                        {/* {console.log(x)} */}
                      </div>
                    })}
                  
                  </div>
        )
    }
}

export {girls}
export default Girls