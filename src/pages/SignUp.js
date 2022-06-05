import React,{useState,useEffect} from "react"
import ReactDOM from "react-dom";
import ProductTitle from "../components/ProductTitle.js";

// import useLocalStorage from "./useLocalStorage.js";

function SignUp() {



	// username variable
	const [usernameInput,setUsernameInput] = useState({
		title: ""
	})

	// email variable
	const [emailInput,setEmailInput] = useState({
		title:""
	})

	// state of origin  variable
	const [stateInput,setStateInput] = useState({
		title:""
	})

	// password variable
	const [passwordInput,setPasswordInput] = useState({
		title: ""
	})

	// username OnChange function 
	function usernameOnChange(e) {
		setUsernameInput(e.target.value)
	}

	// email OnChange function 
	function emailOnChange(e) {
		setEmailInput(e.target.value)
	}

	// state of origin OnChange function 
	function stateOnChange(e) {
		setStateInput(e.target.value)
	}

	// password OnChange function 
	function passwordOnChange(e) {
		setPasswordInput(e.target.value)
	}


	//storing of username input in the local storage 
    useEffect(() =>{
        const temp = JSON.stringify(usernameInput)
        localStorage.setItem("username", temp)
    },[usernameInput])

	//storing of email input in the local storage 
    useEffect(() =>{
        const temp = JSON.stringify(emailInput)
        localStorage.setItem("email", temp)
    },[emailInput])

    //storing of state of origin input in the local storage 
    useEffect(() =>{
        const temp = JSON.stringify(stateInput)
        localStorage.setItem("State", temp)
    },[stateInput])

     //storing of password input in the local storage 
    useEffect(() =>{
        const temp = JSON.stringify(passwordInput)
        localStorage.setItem("password", temp)
    },[passwordInput])



	//onclick function of deleting username input
	    function delUserInput(event) {
	    	// prevent page refresh
	    	event.preventDefault()
			 // clear all input values in the form
			 document.getElementById("signUpForm").reset();
			if(usernameInput.title,emailInput.title,stateInput.title,passwordInput.title===""){
				alert("Please write item")
			}
	    }

	return(
		<>
			<ProductTitle />
			<div className="SignUpPage">
				<h1> Register Here </h1>
				<form  onSubmit={delUserInput} id="signUpForm" className="SignUpForm">
				
					<label className="username"> Username : </label> <br />
					<input
					type="text" 
					className="input-text"
					placeholder="enter your usename..." 
						value={usernameInput.title}
						onChange={usernameOnChange}
						// id= "username"
					/><br /><br />
				
					<label className="email"> Email Address : </label> <br />
					<input
					type="text" 
					className="input-text"
					placeholder="enter a valid email..." 
					value={emailInput.title}
					onChange={emailOnChange}
					id="username"
					/><br /><br />
					
					<label className="state"> State Of Origin : </label> <br />
					<select 
						className="input-text" 
						value={stateInput.title}
						onChange={stateOnChange} 
						style={{background:"#fff"}}
					>
					<option>Abia</option>
					<option>Adamawa</option>
					<option>Akwa ibom</option>
					<option>Anambra</option>
					<option>Bauchi</option>
					<option>Benue</option>
					<option>Bornu</option>
					<option>Cross Rivers</option>
					<option>Delta</option>
					<option>Edo</option>
					<option>Ekiti</option>
					<option>Enugun</option>
					<option>Gombe</option>
					<option>imo</option>
					<option>Jigawa</option>
					<option>Kaduna</option>
					<option>Kano</option>
					<option>Katsina</option>
					<option>Kebbi</option>
					<option>Kogi</option>
					<option>Kwara</option>
					<option>Lagos</option>
					<option>Nasarawa</option>
					<option>Niger</option>
					<option>Ogun</option>
					<option>Ondo</option>
					<option>Osun</option>
					<option>Oyo</option>
					<option>Plateu</option>
					<option>Rivers</option>
					<option>Sokoto</option>
					<option>Taraba</option>
					<option>Yobe</option>
					<option>Zamfara</option>
					<option>FCT</option>
					</select><br /><br />

				
					<label className="gender"> Gender : </label> 
					<span className="radioInput">
						<input type="radio"  style={{marginLeft:"0.5rem"}} name="title" value="male" />male <br />
						<input type="radio" style={{marginLeft:"9.35rem"}} name="title" value="female"  />female <br />
						<input type="radio" style={{marginLeft:"9.35rem"}} name="title" value="others"  />others <br /><br />
					</span>

					<label className="password"> Password : </label> <br />
					<input
					type="text" 
					className="input-text"
					placeholder="enter password..." 
					value={passwordInput.title}
					onChange={passwordOnChange}
					/><br /> <br />
					<button> 
						Register 
					</button>
				</form>
			</div>
		</>
	)
}


export default SignUp
