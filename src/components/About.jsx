import Footer from "./Footer"
import Header from "./Header"
import backgroundImage from "../assets/imgsrc2.png";
import Collapse from "./Collapse";
import "../styles/pages/About.scss"
import contenu from "../datas/aboutText.json"

function About() {
    return (
        <>
        <div className="page-container">

            <Header />
            <div className="background-img-container">
					<img
						src={backgroundImage}
						alt="paysage naturel"
						className="background-img"
					></img>
					<h1 hidden={true}>A propos</h1>

				</div>
                    <div className="collapse-container--about">

					<Collapse content={[contenu.fiabilite]} type="Fiabilité"/>
					<Collapse content={[contenu.respect]} type="Respect"/>
					<Collapse content={[contenu.service]} type="Service" />
					<Collapse content={[contenu.securite]} type="Sécurité" />
                    </div>
        </div>
        <Footer />
        </>
    )
}
 
export default About