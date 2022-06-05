import React from "react"
import ReactDOM from "react-dom"
import  Carousel from "react-bootstrap/carousel";

import ad1 from "../images/ad1.jpg"
import ad2 from "../images/ad2.jpg"
import ad3 from "../images/ad3.jpg"
import ad4 from "../images/ad4.jpg"
import ad5 from "../images/ad5.jpg"
import ad6 from "../images/ad6.jpg"
import ad7 from "../images/ad7.jpg"


function MarketingAds() {
	return (
		// Ad div
		// carousel div
		<div style={{marginTop:"5rem"}}>
			<Carousel>
				{/* carousel item */}
				<Carousel.Item>
					<img
						className="d-block"
						style={{width:"100%",height:"30rem"}}
						src={ad6}
						alt="ad1"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block"
						style={{width:"100%",height:"30rem"}}
						src={ad7}
						alt="ad1"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block"
						style={{width:"100%",height:"30rem"}}
						src={ad1}
						alt="ad1"
					/>
				</Carousel.Item>
				{/* carousel item */}	
				<Carousel.Item>
					<img
						className="d-block"
						style={{width:"100%",height:"30rem"}}
						src={ad2}
						alt="ad1"
					/>
				</Carousel.Item>
				{/* carousel item */}
				<Carousel.Item>
					<img
						className="d-block"
						style={{width:"100%",height:"30rem"}}
						src={ad3}
						alt="ad1"
					/>
				</Carousel.Item>
				{/* carousel item */}
				<Carousel.Item>
					<img
						className="d-block"
						style={{width:"100%",height:"30rem"}}
						src={ad4}
						alt="ad1"
					/>
				</Carousel.Item>
				{/* carousel item */}
				<Carousel.Item>
					<img
						className="d-block"
						style={{width:"100%",height:"30rem"}}
						src={ad5}
						alt="ad1"
					/>
				</Carousel.Item>		
			</Carousel>
		</div>



	// 	// <!-- Carousel -->
	// <div id="demo" class="carousel slide" data-bs-ride="carousel">
	// <carousel>

	// 	{/* <!-- Indicators/dots --> */}
	// 	<div class="carousel-indicators">
	// 		<button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
	// 		<button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
	// 		<button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
	// 	</div>

	// 	{/* <!-- The slideshow/carousel --> */}
	// 	<div class="carousel-inner">
	// 		<div class="carousel-item active">
	// 			<img src={ad5} alt="Los Angeles" class="d-block" style={{width:"100%",height:"30rem"}} />
	// 		</div>
	// 		<div class="carousel-item">
	// 			<img src={ad2} alt="Chicago" class="d-block" style={{width:"100%",height:"30rem"}} />
	// 		</div>
	// 		<div class="carousel-item">
	// 			<img src={ad3} alt="New York" class="d-block" style={{width:"100%",height:"30rem"}} />
	// 		</div>
	// 	</div>

	// 	{/* <!-- Left and right controls/icons --> */}
	// 	<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
	// 		<span class="carousel-control-prev-icon"></span>
	// 	</button>
	// 	<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
	// 		<span class="carousel-control-next-icon"></span>
	// 	</button>
	// </carousel>
	// </div>
	)

}

export default MarketingAds