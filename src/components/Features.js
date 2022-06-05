import React from "react"
import ReactDOM from "react-dom"
import product2 from "../images/product2.jpg"
import product3 from "../images/product3.jpg"
import product4 from "../images/product4.jpeg"
import product5 from "../images/product5.jpg"
import product6 from "../images/product6.jpeg"
import product14 from "../images/product14.jpeg"

import product8 from "../images/product8.jpeg"
import product12 from "../images/product12.jpeg"
import product13 from "../images/product13.jpeg"
import product15 from "../images/product15.jpeg"

import {Link} from "react-router-dom"

function Features() {

	// first FEATURES 
	const features =[
		{
			img:<img src ={product4} height={200} width={155} />,
			text:"Gold wrist watch ",
			price:"16,000 USD",
			path:"/Gold-wrist-watch",
		},
		{
			img:<img src ={product2} height={200} width={155} />,
			text:"silver wrist watch",
			price:"16,000 USD",
			path:"/Silver-wrist-watch",
		},
		{
			img:<img src ={product3} height={200} width={155} />,
			text:"brown wrist watch ",
			price:"16,000 USD",
			path:"/Brown-wrist-watch",
		},
		{
			img:<img src ={product5} height={200} width={155} />,
			text:"purple wrist watch",
			price:"16,000 USD",
			path:"/purple-wrist-watch",
		},
		{
			img:<img src ={product6} height={200} width={155} />,
			text:" black wrist watch",
			price:"16,000 USD",
			path:"/black-wrist-watch",
		},
		{
			img:<img src ={product14} height={200} width={155} />,
			text:"blue wrist watch",
			price:"16,000 USD",
			path:"/Blue-wrist-watch",
		},
		// {
		// 	img:<img src ={product9} height={200} width={150} />,
		// 	text:"brown wrist watch",
		// 	price:"16,000 USD",
		// 	path:"/Brown-wrist-watch",
		// },
		
	]

	// second Feature
	const secondFeature= [
		{
			img:<img src ={product8} height={200} width={500} />,
			text:"Yellow wrist watch ",
			price:"16,000 USD",
			path:"/Yellow-wrist-watch",
		},
		{
			img:<img src ={product12} height={200} width={500} />,
			text:"Cyan wrist watch ",
			price:"16,000 USD",
			path:"/Cyan-wrist-watch",
		},
		{
			img:<img src ={product13} height={200} width={500} />,
			text:"Grey wrist watch ",
			price:"16,000 USD",
			path:"/Grey-wrist-watch",
		},
		{
			img:<img src ={product15} height={200} width={500} />,
			text:"Magenta wrist watch ",
			price:"16,000 USD",
			path:"/Magenta-wrist-watch",
		},
		
	]

	// const thirdFeature= [
		
		
	// ]
	
	return (
		<>
		{/* first features */}
		<div class="container rounded" className="featuresDiv">
			<h5 style={{marginLeft:"0.7rem",marginTop:"2.8rem"}}>Top selling items </h5>
				<div class="row">
					{features.map(feature =>{
						return(
							<div class="col-sm-2 ">
								<form className="featuresBtn">
									<button className="featureButton">
										<Link to={feature.path}>
												<div className="featuresImg"> {feature.img} </div>
												<div className="featuresText">{feature.text} </div>
												<div className="featuresPrice">{feature.price} </div>
										</Link>
									</button>
								</form>
							</div>
						)	
					})}
				</div>
		</div>
		
				{/* second features */}
		<div class="container rounded" className="secondFeatureDiv">
			<h5 style={{marginTop:"2.8rem",textAlign:"center"}}>Don't Miss Out On These!!! </h5>
			<div class="row">
				{secondFeature.map(secondFeature =>{
					return(
						<div class="col-sm-6 ">
							<form className="secondFeatureBtn">
								<button className="secondFeatureButton">
									<Link to={secondFeature.path}>
											<div className="secondFeatureImg"> {secondFeature.img} </div>
											<div className="secondFeatureText">{secondFeature.text} </div>
											<div className="secondFeaturePrice">{secondFeature.price} </div>
									</Link>
								</button>
							</form>
						</div>
					)	
				})}

			</div>
		</div>

		</>
		
	)

}

export default Features