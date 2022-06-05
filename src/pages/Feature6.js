import React from "react"
import ReactDOM from "react-dom"
import product14 from "../images/product14.jpeg"

function Feature6() {
	
	return(
		<div className="Feature1">

			<img src ={product14} height={350} width={250} />
					<div className="aboutFeature">
						<h4><b>Name:</b> Blue wrist watch</h4>
						<h4><b>Price:</b> 16,000 USD </h4>
					</div>
					<form>
						<button>Purchase</button>
					</form>
		</div>
	)
}

export default Feature6