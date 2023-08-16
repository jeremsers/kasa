import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/base/index.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import About from "./components/About";
import Error from "./components/Error";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/product/:id" element={<Product />}></Route>
				<Route path="/aboutus" element={<About />}></Route>
				<Route path="*" element={<Error />}></Route>
			</Routes>
		</Router>
	</React.StrictMode>
);

