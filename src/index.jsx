import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Product from "./components/Pages/Product";
import About from "./components/Pages/About";
import Error from "./components/Pages/Error";

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
