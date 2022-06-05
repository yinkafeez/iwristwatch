import React from "react"
import ReactDOM from "react-dom"
import product4 from "../images/product4.jpeg"
import ProductTitle from "../components/ProductTitle.js";


function Feature1() {
	
	return(
		<div className="Feature1">

			<img src ={product4} height={350} width={250} />
					<div className="aboutFeature">
						<h4><b>Name:</b> Gold Wrist watch</h4>
						<h4><b>Price:</b> 16,000 USD </h4>
					</div>
					<form>
						<button>Purchase</button>
					</form>
		</div>
	)
}

export default Feature1