import React from "react"
import ReactDOM from "react-dom"
import product13 from "../images/product13.jpeg"

function Feature9() {
	
	return(
		<div className="Feature1">

			<img src ={product13} height={350} width={250} />
					<div className="aboutFeature">
						<h4><b>Name:</b> Grey wrist watch</h4>
						<h4><b>Price:</b> 16,000 USD </h4>
					</div>
					<form>
						<button>Purchase</button>
					</form>
		</div>
	)
}

export default Feature9