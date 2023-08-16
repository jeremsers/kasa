import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "../styles/layout/Header.scss";

function Header() {
	return (
		<>
			<div className="header-container">
				<div className="link-container">
					<Link to="/" className="home-link"></Link>
					<img src={logo} alt="logo kasa" className="logo"></img>
				</div>

				<nav className="navbar">
					<Link to="/aboutus">about</Link>
					<Link to="/product">produit</Link>
				</nav>
			</div>
		</>
	);
}

export default Header;
