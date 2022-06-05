import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom";
import {Route,Routes} from "react-router-dom";
import ProductTitle from "./ProductTitle.js";
import Footer from "./Footer.js";
import Navbar from "./Navbar.js";
import Features from "./Features.js";
import MarketingAds from "./MarketingAds.js";
import SignUp from "../pages/SignUp.js";
import Login from "../pages/Login.js";
import About from "../pages/About.js";
import AboutApp from "../pages/AboutApp.js"
import AboutAuthor from "../pages/AboutAuthor.js"
import Feature1 from "../pages/Feature1.js"
import Feature2 from "../pages/Feature2.js"
import Feature3 from "../pages/Feature3.js"
import Feature4 from "../pages/Feature4.js"
import Feature5 from "../pages/Feature5.js"
import Feature6 from "../pages/Feature6.js"
import Feature7 from "../pages/Feature7.js"
import Feature8 from "../pages/Feature8"
import Feature9 from "../pages/Feature9.js"
import Feature10 from "../pages/Feature10.js"
import MyProfile from "../pages/MyProfile.js"
import NotMatch from "../pages/NotMatch"
import Card from "react-bootstrap/Card"

function MarketingContainer() {
	
	 return (
	 	<>
	 		{/* <Navbar /> */}
	 		<Routes>
	 		// Homepage
			 	<Route path="/iwristwatch"
            	element={
            		
						<Card>
							<Card.Header>
								<ProductTitle />
							</Card.Header>
							
								<Card.Body className="body">
									<div class="container">
										<MarketingAds />
										<Features />
									</div>
								</Card.Body>
							<Footer />
						</Card>
				 	
				}
				/>
				// Sign Up Page
				<Route 
					path="/SignUp" 
					element={<SignUp />}
					// usernameInput={usernameInput.title}
					// emailInput={emailInput.title}
					// stateInput={stateInput.title}
					// passwordInput={passwordInput.title}
					// usernameOnChange={usernameOnChange}
					// emailOnChange={emailOnChange}
					// stateOnChange={stateOnChange}
					// passwordOnChange={passwordOnChange}
				/>
				// Login Page
				<Route  
					path="/login" 
					element={<Login />}
					// emailInput={emailInput.title}
					// passwordInput={passwordInput.title}
				/>
				// About Page
				<Route  path="/about" element={<About />} />
				// About App Page
            	<Route path="about/about-app" element={<AboutApp />} />
            	// About Author Page
            	<Route path="about/about-author" element={<AboutAuthor />} />
            	// Feature1 page
            	<Route path="/Gold-wrist-watch" element={<Feature1 />} />
            	// Feature2 Page
            	<Route path="/Silver-wrist-watch" element={<Feature2 />} />
            	// Feature3 page
            	<Route path="/Brown-wrist-watch" element={<Feature3 />} />
				// Feature4 page
            	<Route path="/Purple-wrist-watch" element={<Feature4 />} />
				// Feature5 page
            	<Route path="/Black-wrist-watch" element={<Feature5 />} />
				// Feature6 page
            	<Route path="/Blue-wrist-watch" element={<Feature6 />} />
				// Feature7 page
            	<Route path="/Yellow-wrist-watch" element={<Feature7 />} />
				// Feature8 page
            	<Route path="/Cyan-wrist-watch" element={<Feature8 />} />
				// Feature9 page
            	<Route path="/Grey-wrist-watch" element={<Feature9 />} />
				// Feature10 page
            	<Route path="/Magenta-wrist-watch" element={<Feature10 />} />
            	// My Profile Page
            	<Route path="/profile" element={<MyProfile />} />
            	// MotMatch page
            	<Route path="*" element={<NotMatch />} /> 

		 	</Routes>
	 	</>
 	)
}



export default MarketingContainer