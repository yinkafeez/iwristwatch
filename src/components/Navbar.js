import React,{useState} from "react"
import {Link} from "react-router-dom"
import ReactDOM from "react-dom";
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

function Navbar() {
	// button state
	const [navbarOpen, setNavbarOpen] = useState(false)


	// Nav link
	const links = [
	  {
	    id: 1,
	    path: "/iwristwatch",
	    text: "Home",
	  },
	  {
	  	id:2,
	  	path:"/signUp",
	  	text: "Sign Up",
	  },
	  {
	  	id:3,
	  	path:"/login",
	  	text: "Login",
	  },
	  {
	    id:4,
	    path: "/about",
	    text: "About",
	  },
	]


	// hambuger btn onclick function
	function handleToggle(){
		setNavbarOpen(!navbarOpen)
	}
	// setting of onclick of button state to false,closing of nav button when any of link link is clicked.
	const closeMenu = () => {
	  setNavbarOpen(false)
	}

	return(
		<nav className="navBar">
			<button onClick={handleToggle}>
			 	 {navbarOpen ? (
				    <MdClose style={{ color: "#000", width: "30px", height: "30px",  }} />
				  ) : (
				    <FiMenu style={{ color: "#000", width: "30px", height: "30px",  }} />
				  )}
			 </button>

			<ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
				{links.map(link =>{
					return(
						<li key={link.id}>
							<Link
								to={link.path}
								className="active-link"
								onClick={closeMenu}
							 >
							 	{link.text}
							 </Link>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}

export default Navbar