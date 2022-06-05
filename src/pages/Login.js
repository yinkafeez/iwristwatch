import React,{useState,useEffect} from "react"
import ProductTitle from "../components/ProductTitle.js";


function Login() {
	// Email data
	const[loginEmailInput,setLoginEmailInput] = useState({
	    title:""
	})
	// password data
	const[loginPasswordInput,setLoginPasswordInput] = useState({
	    title:""
	})

	//storing of login email input in the local storage 
    useEffect(() =>{
        const temp = JSON.stringify(loginEmailInput)
        localStorage.setItem("emailLogin", temp)
    },[loginEmailInput])

    // //storing of login password input in the local storage 
    useEffect(() =>{
        const temp = JSON.stringify(loginPasswordInput)
        localStorage.setItem("passwordLogin", temp)
    },[loginPasswordInput])

	// Email onChange function 
	function loginEmailOnChange(event){
	    setLoginEmailInput(event.target.value)
	}
	// passwordInput onChange function
	function loginPasswordOnChange(event){
	    setLoginPasswordInput(event.target.value)
	}

	// on submit function
	function delLoginInput(e) {
		// prevent page refresh
		e.preventDefault()
			// clear all input values in the form
			document.getElementById("loginForm").reset();

			if(loginEmailInput,loginPasswordInput.title==""){
			   alert("Please write item")
			}
			// else if("email" != "emailLogin" || "password" != "passwordLogin" ){
			// 	alert("Incorrect Email")
			// }
			
	}


	return(
		<>
			<ProductTitle />
			<div className="LoginPage">
				<h1> Login Form </h1>
				<form onSubmit={delLoginInput} id="loginForm" className="LoginForm">
					<label> Email Address : </label> 
					<input
					type="text" 
					className="email"
					placeholder="enter a valid email..." 
					value={loginEmailInput.title}
					onChange={loginEmailOnChange}
					/><br /><br />

					<label> Password : </label> 
					<input
					type="text" 
					className="password"
					placeholder="enter password..." 
					value={loginPasswordInput.title}
					onChange={loginPasswordOnChange}
					/><br /> <br />
					<button> Login </button>
				</form>
			</div>
		</>
	)
}

export default Login