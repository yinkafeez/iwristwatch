import React from "react"
import ReactDOM from "react-dom"
import product3 from "../images/product3.jpg"
import ProductTitle from "../components/ProductTitle.js";

function Feature3() {

	return(
		<div className="Feature1">
			<img src ={product3} height={350} width={250} />
					<div className="aboutFeature">
						<h4><b>Name:</b> Brown Wrist watch</h4>
						<h4><b>Price:</b> 26,000 USD </h4>
					</div>
					<form>
						<button>Purchase</button>
					</form>
		</div>
	)
}

export default Feature3