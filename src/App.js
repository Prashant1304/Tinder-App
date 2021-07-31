import React,{Component} from "react"
import "./tinder.css"

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
class Tinder extends Component {
  state={
    tinderDiv:true,
    numberDiv:false,
    codeDiv:false,
    termsDiv:false,
    nameDiv:false,
    birthdayDiv:false,
    genderDiv:false,
    ShowGenderDiv:false,
    phoneNumValue:"",
    phoneNumOtp:"",
    name:"",
    toggle:false,
    toggleG:false,
    toggleB:false,
    toggleButton:false,
    dataG:girls,
    dataB:boys,
    show:"",
    respL:false,
    respR:false

  }

  handleTinder=(e)=>{
    this.setState({tinderDiv:!true})
    this.setState({numberDiv:!false})
  }
  handleNumber=(e)=>{
    this.setState({numberDiv:!true})
    this.setState({codeDiv:!false})
    this.setState({tinderDiv:!true})
    alert(`your OTP for ${this.state.phoneNumValue} is 5468`)
  }
  handleResend=()=>{
    alert(`your OTP for ${this.state.phoneNumValue} is 5468`)
  }
  handleNumberData=(e)=>{
    this.setState({phoneNumValue:e.target.value})
    
  }
  handleNumberOtp=(e)=>{
    this.setState({phoneNumOtp:e.target.value})

  }
  handleCode=()=>{
    if(this.state.phoneNumOtp==5468){
      this.setState({tinderDiv:!true})
      this.setState({codeDiv:!true})
      this.setState({termsDiv:!false})
    }else{
      alert("wrong OTP")
    }
  }
  handleTerms=()=>{
    this.setState({tinderDiv:!true})
    this.setState({termsDiv:!true})
    this.setState({nameDiv:!false})
  }
  handleName=()=>{
    this.setState({tinderDiv:!true})
    this.setState({nameDiv:!true})
    this.setState({birthdayDiv:!false})
    console.log(this.state.name)
  }
  handleNameValue=(e)=>{
    this.setState({name:e.target.value})
  }
  handelBirth=()=>{
    this.setState({tinderDiv:!true})
    this.setState({birthdayDiv:!true})
    this.setState({genderDiv:!false})
  }
  handleGender=()=>{
    this.setState({tinderDiv:!true})
    this.setState({genderDiv:!true})

    this.setState({ShowGenderDiv:!false})
  }

  handleGenderColour=(e)=>{
    this.setState({show:e.target.value})
    e.target.className="change"
  }
  handleShowGender=()=>{
    this.setState({toggle:!false})
    this.setState({ShowGenderDiv:!true})
    if(this.state.show=="MALE"){
      this.setState({toggleButton:!false})
      this.setState({toggleB:!false})
      console.log("Male")
    }else if(this.state.show=="FEMALE"){
      this.setState({toggleG:!false})
      this.setState({toggleButton:!false})
      console.log("FEMAIL")
    }

    var inc =Math.floor(Math.random()*5)
    
    var filter1=girls.filter((x)=>{
      // console.log(girls[inc])
      return x==girls[inc]
    })
    var filter2=boys.filter((x)=>{
      return x==boys[inc]
    })
    this.setState({dataB:filter2})
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
    var filter2=boys.filter((x)=>{
      return x==boys[inc]
    })
    this.setState({dataB:filter2})
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
    var filter2=boys.filter((x)=>{
      return x==boys[inc]
    })
    this.setState({dataB:filter2})
    this.setState({dataG:filter1})
    
  }
  render() {
    document.body.style.backgroundColor = "#FEC5E5";
    // console.log(this.state.dataB[0])
    console.log()
    return(
      <div className="aLL">
        {this.state.tinderDiv&&
        <div className="div" >
      <div style={{color:"white",textAlignLast:"center",position:"relative",top:"55px"}}><h2> &#128293; tinder</h2></div>
      <div className="log" >
        <p style={{textAlign:"-webkit-center",fontSize:"12px"}}>By clicking login,yoagree with our Terms.Learn how we process your data in private policy </p>
        <div className="login">
        <img src="https://cdn.emojidex.com/emoji/seal/google.png?1489276340" style={{height:"20px"}} ></img>
        <button style={{backgroundColor:"white",border:"none"}} onClick={this.handleTinder}>LOG IN WITH GOOGLE</button>
        </div>
      </div>
        </div>}

          {this.state.numberDiv&&
        <div className="divv">
          <div  style={{textAlignLast:"center"}}>
            <h2>My number is</h2>
          </div>
          <div style={{textAlignLast:"center"}}>
            IN +91 <input type="number" onChange={this.handleNumberData} value={this.state.phoneNumValue} placeholder="Phone Number"></input>
          </div>
          <div style={{textAlignLast:"center",fontSize:"12px"}}><p>when you tap continue,Tinder will send a text with verification code.Message and data rate may apply </p></div>
          <div >
          <div className="cont">
            <button style={{backgroundColor:"rgb(254, 60, 114)",border:"none"}} onClick={this.handleNumber}>CONTINUE</button>
          </div>
          </div>
        </div>}
          
            {this.state.codeDiv&&
          <div className="divvv">
            <div style={{textAlignLast:"center"}}>
              <h3>My Code is</h3>
            </div>
            <div onClick={this.handleResend} style={{fontSize:"11px",color:"rgb(169,169,169)",textAlignLast:"center",position:"relative",bottom:"5px" }}>
              {this.state.phoneNumValue}   RESEND
            </div>
            <div>
              <input onChange={this.handleNumberOtp} value={this.state.phoneNumOtp} type="number"></input>
            </div>
            <div style={{position:"relative",top:"15px"}}>

            <div className="cont" >
              <button style={{backgroundColor:"rgb(254, 60, 114)",border:"none"}} onClick={this.handleCode}>CONTINUE</button>
            </div>
          </div>
          </div>}

              {this.state.termsDiv&&
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
              <button style={{backgroundColor:"rgb(254, 60, 114)",border:"none"}} onClick={this.handleTerms}>I AGREE</button>
            </div>
            </div>
          </div>}


                {this.state.nameDiv&&
          <div className="divvvvv" >
            <div>
              <h3>My first name is </h3>
            </div>
            <div >
              <input onChange={this.handleNameValue} value={this.state.name} placeholder="your name please"></input>
              <p style={{fontSize:"13px",color:"gray"}}>This is how it wil appear in Tinder and you will not be able to change it</p>
            </div>
            <div style={{position:"relative",left:"67px",top:"224px"}}>
            <div className="cont">
              <button style={{backgroundColor:"rgb(254, 60, 114)",border:"none"}}onClick={this.handleName} >CONTINUE</button>
            </div>
            </div>
          </div>}
          
          {this.state.birthdayDiv&&
          <div className="divvvvvv">
            <div>
            <h3>My birthday is</h3>
            <div style={{position:"relative",top:"105px"}}>
            <input style={{border:"none",color:"rgb(128,128,128)" }} type="date"></input>
            <p style={{color:"rgb(169,169,169)",fontSize:"10px"}}>Your age will be public</p>
            </div>
            </div>
            <div style={{position:"relative",left:"67px",top:"254px"}}>
            <div className="cont">
              <button style={{backgroundColor:"rgb(254, 60, 114)",border:"none"}} onClick={this.handelBirth}>CONTINUE</button>
            </div>
            </div>
          </div>}
            
            {this.state.genderDiv&&
            <div className="diV">
              <div>
              <h2>I am a</h2>
              </div>
              <div className="gender" >
              <div onClick={this.handleGenderColour}>
            <div  className="contt">
              <button className="one">MALE</button>
            </div>
            </div>
              <div onClick={this.handleGenderColour}>
            <div className="contt">
              <button className="one">FEMALE</button>
            </div>
              </div>
              <div onClick={this.handleGenderColour}>
            <div className="contt">
              <button className="one">TRANS</button>
            </div>
              </div>
              </div>
              <div style={{position:"relative",left:"67px",top:"254px"}}>
            <div className="cont">
              <button style={{backgroundColor:"rgb(254, 60, 114)",border:"none"}} onClick={this.handleGender}>CONTINUE</button>
            </div>
            </div>
            </div>}

              {this.state.ShowGenderDiv&&
            <div className="diVV">
            <div>
              <h2>Show Me</h2>
              </div>
              <div className="gender" >
              <div onClick={this.handleGenderColour}>
            <div className="contt">
              <button className="one" value="MALE">MALE</button>
            </div>
            </div>
              <div onClick={this.handleGenderColour}>
            <div   className="contt" >
              <button    className="one" value="FEMALE">FEMALE</button>
            </div>
              </div>
              </div>
              <div style={{position:"relative",left:"67px",top:"254px"}}>
            <div className="cont">
              <button onClick={this.handleShowGender} style={{backgroundColor:"rgb(254, 60, 114)",border:"none"}}>CONTINUE</button>
            </div>
            </div>
            </div>}
            {this.state.toggle&&
                <div className="nope">
                  <div  >
                {this.state.toggleG&&
                  <div >
                    {this.state.dataG.map((x,y)=>{
                      return <div  key={y}>
                       <img src={x.photo} style={{borderRadius:"5px", position:"relative",top:"27px",height:"255px",width:"255px"}}></img>
                       <p style={{color:"pink",position:"relative",bottom:"15px",right:"80px" }}><b> {x.name}</b>  &nbsp;&nbsp; {x.age}</p>
                       
                        {/* {console.log(x)} */}
                      </div>
                    })}
                    {this.state.respL&& <div  className="respL"><b>LIKE</b></div>}
                    {this.state.respR&& <div className="respR"><b> REJECt</b></div>}
                  </div>}
                  {this.state.toggleB&&
                  <div> 
                  {this.state.dataB.map((x,y)=>{
                    return <div key={y}>
                       <img src={x.photo} style={{ borderRadius:"5px",position:"relative",top:"27px",height:"255px",width:"255px"}}></img>
                       <p style={{color:"pink",position:"relative",bottom:"15px",right:"80px"}}><b> {x.name}</b>  &nbsp;&nbsp; {x.age}</p>
                       
                        {/* {console.log(x)} */}
                      </div>
                    })}
                    {this.state.respL&& <div  className="respL"><b>LIKE</b></div>}
                    {this.state.respR&& <div className="respR"><b> REJECt</b></div>}
                  </div>}
                </div>
               {this.state.toggleButton&&<div className="but"> <button onClick={this.handleClickLike} style={{color:"green",borderRadius:"25px",textAlignLast:"center",height:"31px",width:"31px"}}>&#10004;</button> <button onClick={this.handleClickRejcct} style={{color:"red",borderRadius:"25px",height:"31px",width:"31px"}}>&#10005;</button></div>}
                    </div>}
                    
      </div>
    )
  }
}
export default Tinder