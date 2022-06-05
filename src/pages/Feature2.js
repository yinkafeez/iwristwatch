import React from "react"
import ReactDOM from "react-dom"
import product2 from "../images/product2.jpg"
import ProductTitle from "../components/ProductTitle.js";

function Feature2() {

	return(
		<div className="Feature1">
		
			<img src ={product2} height={350} width={250} />
					<div className="aboutFeature">
						<h4><b>Name:</b> Silver Wrist watch</h4>
						<h4><b>Price:</b> 32,000 USD </h4>
					</div>
					<form>
						<button>Purchase</button>
					</form>
		</div>
	)
}

export default Feature2