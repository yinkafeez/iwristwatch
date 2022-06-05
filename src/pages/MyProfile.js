import React from "react"
import ReactDOM from "react-dom"
import ProductTitle from "../components/ProductTitle.js";

	// getting stored username input from the local storage when the website unMount(reload)
	function getInitialUsername() {
		// getting stored items
		const temp = localStorage.getItem("username")
		const savedUsername = JSON.parse(temp)
		return savedUsername || ""
	} 

	// getting stored email input from the local storage when the website unMount(reload)
    function getInitialEmail() {
		// getting stored items
		const temp = localStorage.getItem("email")
		const savedEmail = JSON.parse(temp)
		return savedEmail || ""
	  } 

	// getting stored email input from the local storage when the website unMount(reload)
    function getInitialState() {
		// getting stored items
		const temp = localStorage.getItem("State")
		const savedEmail = JSON.parse(temp)
		return savedEmail || ""
	  } 

function MyProfile() {
	return(
		<>
			<ProductTitle />
			<div className="myProfile">
				<h1> My Profile </h1>
				<h3>Name: {getInitialUsername()} </h3>
				<h3> Email: {getInitialEmail()}</h3>
				<h3> State of Origin: {getInitialState()} </h3> 
			</div>
		</>
	)
}

export default MyProfile