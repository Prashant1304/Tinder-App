import React,{Component} from "react"
import "./tinder.css"
import HomeScreen  from "./components/homeScreen/homeScreen"
import NumberPart from "./components/numberComponent/number"
import Otp from "./components/otpPart/otp"
import Terms from "./components/tearmsCondition/terms"
import Name from "./components/nameComponent/name"
import BirthDay from "./components/birthdayComponent/birthDay"
import Gender from "./components/selfGender/gender"
import ShowGender from "./components/showGender/showGender"
import Girls,{girls} from "./components/girlsData/girls"
import Boys,{boys} from "./components/boysData/boys"


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
    phoneNumValue:"7208801223",
    phoneNumOtp:"",
    name:"",
    toggle:false,
    toggleG:false,
    toggleB:false,
    toggleButton:false,
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
    alert(`your OTP for ${this.state.phoneNumValue} is 546828`)
  }
  handleResend=()=>{
    alert(`your OTP for ${this.state.phoneNumValue} is 546828`)
  }
  handleNumberData=(e)=>{
    this.setState({phoneNumValue:e.target.value})
    
  }
  handleNumberOtp=(e)=>{
    this.setState({phoneNumOtp:e.target.value})

  }
  handleCode=()=>{
    if(this.state.phoneNumOtp==546828){
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
    console.log(this.state.show)
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
    
    var filter2=boys.filter((x)=>{
      return x==boys[inc]
    })
    this.setState({dataB:filter2})
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
    // console.log(this.state.dataB[0])
    console.log()
    return(
      <div className="aLL">

        {this.state.tinderDiv&&
        <div className="header">
        <HomeScreen
        handleTinder={this.handleTinder}
        />
      </div>
      }


          {this.state.numberDiv&&
          <div className="Number">
            <NumberPart
            handleNumber={this.handleNumber}
            handleNumberData={this.handleNumberData}
            />
            </div>
        }
          
            {this.state.codeDiv&&
              <div className="otp">
              <Otp

                 handleResend ={this.handleResend}
                 handleNumberOtp= {this.handleNumberOtp}
                 handleCode ={this.handleCode}
                 phoneNumValue= {this.state.phoneNumValue}
                 phoneNumOtp= {this.state.phoneNumOtp}
            
              />
              </div>
          }

              {this.state.termsDiv&&
              <div className="terms">
              <Terms
              handleTerms= {this.handleTerms}
              />
                </div>
          }


                {this.state.nameDiv&&
                <div className="Name">
                  <Name
                  handleNameValue = {this.handleNameValue}
                  handleName = {this.handleName}
                  name ={this.state.name}
                  />
                  </div>
          }
          
          {this.state.birthdayDiv&&
          <div className="birthday">
          <BirthDay
          handelBirth ={this.handelBirth}
          />
          </div>
          }
            
            {this.state.genderDiv&&
            <div className="gender">
            <Gender
            handleGender= {this.handleGender}
            handleGenderColour= {this.handleGenderColour}
            />
            </div>
            }

              {this.state.ShowGenderDiv&&
              <div className="showGender">
              <ShowGender
              handleShowGender ={this.handleShowGender}
              handleGenderColour= {this.handleGenderColour}

              />
              </div>
            }
            {this.state.toggle&&
                <div className="nope">
                  <div  >
                {this.state.toggleG&&
                <div>
                 <Girls/>
                 {this.state.respL&& <div  className="respL"><b>LIKE</b></div>}
                 {this.state.respR&& <div className="respR"><b> REJECt</b></div>}
                  
                </div>  }
                  {this.state.toggleB&&
                  <div> 
                  <Boys/>
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