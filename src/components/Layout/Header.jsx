import logo from "../../assets/logoHeader.svg";
import { Link } from "react-router-dom";


function Header() {
	return (
		<>
			<header className="header-container">
				<div className="link-container">
					<Link to="/" className="home-link"></Link>
					<img src={logo} alt="logo kasa" className="logo"></img>
				</div>

				<nav className="navbar">
					<Link to="/">Accueil</Link>
					<Link to="/aboutus">A propos</Link>
				</nav>
			</header>
		</>
	);
}

export default Header;
