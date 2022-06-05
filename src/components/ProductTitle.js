import React from "react"
import ReactDOM from "react-dom"
import {Link} from "react-router-dom"
import Navbar from "./Navbar.js";
import { BsFillPersonFill } from "react-icons/bs"

function ProductTitle() {
	return (
		// Website Name
				<>
				

					<nav  className="topNavbar" class="navbar navbar-expand-sm  bg-white navbar-dark fixed-top">
					<div class="container-fluid">
						<ul class="navbar-nav">
							<li class="nav-item">
								<span> <Navbar /> </span>
							</li>
							<li class="nav-item  mx-5" className="productName">
								<a class="nav-link text-black"href="#">iWristWatch</a>
							</li>
						</ul>
						<ul class="navbar-nav text-right">
							<li class="nav-item ">
								<a class="nav-link" href="../pages/MyProfile.js">
									<Link to="/profile">
										<BsFillPersonFill 
											style={{ 
												color: "black",
												width: "30px",
												height: "25px",
												
											}} 
										/>
									</Link>
								</a>
							</li>
							
						</ul>
					</div>
					</nav>


				




					{/* <h1 
					  style={{
					  	color:"turquoise",
					  	fontSize:"3rem",
					  	textAlign:"center",
						fontFamily:"Harlow solid italic",
						lineHeight: "1rem",
						fontWeight: "600",
						marginTop: "2rem"
						// background: "hotpink",
						// position: "fixed",
						// display:"block",
						// justifyContent:"center"

					  }}
					  className ="ProductTitle"
					>

						iWristWatch 

					</h1>

					// <form>
							<button 
							  style={{
							   float:"right",
							   margin:"-3.5rem 2rem",
							   background:"turquoise ",
							   border:"none"
							  }}
							>
								<Link to="/profile">
									<BsFillPersonFill 
									  style={{ 
									  	color: "black",
									  	width: "30px",
									  	height: "30px",
									  	
									  }} 
									/>
								</Link>
							</button>
						</form> */}
				</>
						
				
	)

}

export default ProductTitle