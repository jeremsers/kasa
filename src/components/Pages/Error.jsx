import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import { Link } from "react-router-dom";

function Error() {
	return (
		<>
			<main className="page-container">
				<Header />
				<div className="error">
					<p>404</p>
					<h1>Oups! La page que vous demandez n'existe pas</h1>
					<Link to="/" className="error-link">
						Retourner sur la page d'accueil
					</Link>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default Error;
