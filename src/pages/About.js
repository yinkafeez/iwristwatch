import React from "react"
import ReactDOM from "react-dom"
import {Link} from "react-router-dom"
// import {Button} from "react-bootstrap"

// import AboutPage from "./AboutPage.js"
// import AboutProduct from "./AboutProduct.js"

function About() {

	// About link
	const links = [
	  {
	    id: 1,
	    path: "/about/about-app",
	    text: "About the App",
	  },
	  {
	  	id:2,
	  	path:"/about/about-author",
	  	text: "About the Author",
	  },
	]

	return(
		<>
				<div className="aboutPage">
						<h1>About Data:</h1>
						<ul className="aboutList">
							{links.map(link =>{
								return(
									<li key={link.id}>
										<Link
											to={link.path}
										 >
										 	<h4>{link.text}</h4>
										 </Link>
									</li>
								)
							})}
						</ul>
				</div>
		</>
	)
}

export default About