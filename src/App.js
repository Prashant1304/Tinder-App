import React,{Component} from "react"
import HomeScreen  from "./components/homeScreen/homeScreen"
import NumberPart from "./components/numberComponent/number"
import Otp from "./components/otpPart/otp"
import Terms from "./components/tearmsCondition/terms"
import Name from "./components/nameComponent/name"
import BirthDay from "./components/birthdayComponent/birthDay"
import Gender from "./components/selfGender/gender"
import ShowGender from "./components/showGender/showGender"
import Girls from "./components/girlsData/girls"
import Boys from "./components/boysData/boys"
import "./tinder.css"


class Tinder extends Component {

	pages={
		HomeScreen:"homescreen",
		numberDiv:"numberpage",
		codeDiv:"codeDiv",
		termsDiv:"termsDiv",
		nameDiv:"nameDiv",
		birthdayDiv:"birthdayDiv",
		genderDiv:"genderDiv",
		ShowGenderDiv:"ShowGenderDiv",
		toggle:"toggle",
	}

  	state={
  	 	phoneNumValue:"7208801223",
  	 	phoneNumOtp:"",
  	 	name:"",
  	 	toggleG:false,
  	 	toggleB:false,
  	 	show:"",
  	 	currentPage:this.pages.HomeScreen
	}

	// this function toggle number page
	handleTinder = (e) => {	
		this.setState({currentPage:this.pages.numberDiv})
	}

	// this function toggle code page and send otp 
	handleNumber = (e) => {
		this.setState({currentPage:this.pages.codeDiv})
		alert(`your OTP for ${this.state.phoneNumValue} is 546828`)
	}

	// this function resend otp when handle is triggred
	handleResend = () => {
		alert (`your OTP for ${this.state.phoneNumValue} is 546828`)
	}

	// this function store phone number 
	handleNumberData = (e) => {
  		this.setState ({ phoneNumValue:e.target.value })
  	}

	// this function store otp
  	handleNumberOtp = (e) => {
  	 	this.setState ({ phoneNumOtp:e.target.value })
	}

	// this function calibrate otp and warn when otp is wrong 
	handleCode = () => {
		if (this.state.phoneNumOtp == 546828) {
			this.setState ({ currentPage:this.pages.termsDiv });
		} else {
			alert ( "wrong OTP" )
		}
	}

	// this function toggle name page
	handleTerms = () => {
		this.setState ({ currentPage:this.pages.nameDiv })
	}
	  
	// this function toggle birthday page
	handleName = () => {
		this.setState ({currentPage:this.pages.birthdayDiv})
	}

	// this function store name at name page
	handleNameValue = (e) => {
	    this.setState ({ name:e.target.value })
	}

	handelBirth = () => {
		this.setState ({ currentPage:this.pages.genderDiv });
	}

	// this function toggle numberDiv page
	handleGender = () => {
		this.setState ({currentPage:this.pages.ShowGenderDiv});
	}

	// yet to be compleated(incomplete)
	handleGenderColour = (e) => {
		this.setState ({ show:e.target.value })
		console.log ( this.state.show )
	}

	// this function toggle male or femail data if the condition is matched
	handleShowGender = () => {
		this.setState ({ currentPage:this.pages.toggle})

	 	if ( this.state.show == "MALE" ) {
			 this.setState ({toggleB:!false});
			console.log ( "Male" )
		} else if ( this.state.show == "FEMALE" ) {
			this.setState ({ toggleG:!false});
			console.log ( "FEMAIL" )
		}

	}
  
  render () {
    return (

	<div className = "aLL" >

		{ this.state.currentPage === this.pages.HomeScreen &&
			<div className = "header" >
				< HomeScreen
					handleTinder = { this.handleTinder }
				/>
			</div>
		}

        { this.state.currentPage === this.pages.numberDiv &&
			<div className = "Number" >
			<NumberPart
					handleNumber = { this.handleNumber }
					handleNumberData = { this.handleNumberData }
				/>
			</div>
    	}
        
        { this.state.currentPage===this.pages.codeDiv &&

			<div className = "otp" >
				<Otp
					handleResend ={ this.handleResend }
					handleNumberOtp = { this.handleNumberOtp }
					handleCode = { this.handleCode }
					phoneNumValue = { this.state.phoneNumValue }
					phoneNumOtp = { this.state.phoneNumOtp }
				
				/>
			</div>
        }

        { this.state.currentPage===this.pages.termsDiv &&

			<div className = "terms" >
				<Terms
					handleTerms = { this.handleTerms }
				/>
			</div>
        }

        { this.state.currentPage===this.pages.nameDiv &&

			<div className = "Name" >
				<Name
					handleNameValue = { this.handleNameValue }
					handleName = { this.handleName }
					name = { this.state.name }
				/>
			</div>
        }
        
        { this.state.currentPage===this.pages.birthdayDiv &&
        	<div className= "birthday" >
				<BirthDay
					handelBirth ={this.handelBirth}
				/>
        	</div>
        }
        
        { this.state.currentPage===this.pages.genderDiv &&

			<div className = "gender" >
				<Gender
					handleGender = { this.handleGender }
					handleGenderColour = { this.handleGenderColour }
				/>
			</div>
        }

        { this.state.currentPage===this.pages.ShowGenderDiv &&

			<div className = "showGender" >
				<ShowGender
					handleShowGender = { this.handleShowGender }
					handleGenderColour = { this.handleGenderColour }
				/>
			</div>
        }
		
        { this.state.currentPage === this.pages.toggle &&

            <div className = "nope" >
				<div>
					
					{ this.state.toggleG &&
					
						<div>
							<Girls/>
						</div>
  					}
					
					{ this.state.toggleB &&

						<div> 
							<Boys/>
						</div>
					}
				</div>
            </div>
		}
                
    </div>
    )
  }
}
export default Tinder