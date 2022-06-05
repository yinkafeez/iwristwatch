import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"

// component file
import MarketingContainer from "./components/MarketingContainer.js"

// importing bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


//stylesheet
import "./App.css"

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<MarketingContainer />
		</BrowserRouter>
	</React.StrictMode >,

document.getElementById("root"))