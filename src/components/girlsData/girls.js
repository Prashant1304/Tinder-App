import React, { Component } from "react"
import "./girls.css"

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
        toggleButton:true,

    }
    componentDidMount(){
        var inc =Math.floor(Math.random()*5)
    
        var filter1=girls.filter((x)=>{
          // console.log(girls[inc])
          return x==girls[inc]
        })
        this.setState({dataG:filter1})
    
    }
    handleClickLike=()=>{
      var inc =Math.floor(Math.random()*5)
      this.setState({respL:!false})
      setTimeout(() => { this.setState ({respL:false}); },300);
      
      var filter1=girls.filter((x)=>{
        // console.log(girls[inc])
        return x==girls[inc]
      })
      this.setState({dataG:filter1})
    }
    handleClickRejcct=()=>{
      var inc =Math.floor(Math.random()*5)
      this.setState({respR:!false})
      setTimeout(() => { this.setState ({respR:false}); },300);
      
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
                       <img src={x.photo} style={{ borderRadius:"5px",position:"relative",top:"27px",height:"365px",width:"365px"}}></img>
                       <p style={{color:"black",position:"relative",bottom:"31px",fontSize:"22px"}}><b> {x.name}</b>  &nbsp;&nbsp; {x.age}</p>
                       
                        {/* {console.log(x)} */}
                      </div>
                    })}
                  {this.state.respL&& <div  className="respL"><b>LIKE</b></div>}
                  {this.state.respR&& <div className="respR"><b> REJECt</b></div>}
               
                  <div>
                  <div className="but"> <button onClick={this.handleClickLike} style={{color:"green",borderRadius:"25px",textAlignLast:"center",height:"31px",width:"31px"}}>&#10004;</button> <button onClick={this.handleClickRejcct} style={{color:"red",borderRadius:"25px",height:"31px",width:"31px"}}>&#10005;</button></div>
                  </div>
                  </div>
        )
    }
}

export {girls}
export default Girls