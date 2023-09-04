import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import backgroundImage from "../../assets/imgsrc2.png";
import Collapse from "../Collapse";

import contenu from "../../datas/aboutText.json";
import Banner from "../Banner";

function About() {
	return (
		<>
			<main className="page-container">
				<Header />
				<Banner backgroundImage={backgroundImage} />
				<div className="collapse-container--about">
					<Collapse content={[contenu.fiabilite]} type="Fiabilité" />
					<Collapse content={[contenu.respect]} type="Respect" />
					<Collapse content={[contenu.service]} type="Service" />
					<Collapse content={[contenu.securite]} type="Sécurité" />
				</div>
			</main>
			<Footer />
		</>
	);
}

export default About;
