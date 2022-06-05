import React from "react"
import ReactDOM from "react-dom"
import product8 from "../images/product8.jpeg"

function Feature7() {
	
	return(
		<div className="Feature1">

			<img src ={product8} height={350} width={250} />
					<div className="aboutFeature">
						<h4><b>Name:</b> Yellow wrist watch</h4>
						<h4><b>Price:</b> 16,000 USD </h4>
					</div>
					<form>
						<button>Purchase</button>
					</form>
		</div>
	)
}

export default Feature7