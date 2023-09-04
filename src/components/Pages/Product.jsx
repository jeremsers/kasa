import Header from "../Layout/Header";
import Carrousel from "../Product/Carrousel";
import Footer from "../Layout/Footer";
import { Navigate } from "react-router-dom";
import Collapse from "../Collapse";
import Details from "../Product/Details";
import logdata from "../../datas/logements.json";
import { useParams } from "react-router-dom";

function Product() {
	let getId = useParams();
	const idlist = logdata.reduce(function (p, c) {
		return p.concat(c.id);
	}, []);

	if (!idlist.includes(getId.id)) {
		return <Navigate to="/error" replace={true} />;
	}

	const logementSelect = logdata.filter((log) => {
		return log.id === getId.id;
	});
	const logement = logementSelect[0];

	return (
		<>
			<main className="page-container">
				<Header />
				<Carrousel img={logement.pictures} />
				<Details
					rating={logement.rating}
					productName={logement.title}
					user={logement.host}
					location={logement.location}
					tags={logement.tags}
				/>
				<section className="collapse-container">
					<Collapse content={[logement.description]} type="Description" />
					<Collapse content={logement.equipments} type="Équipements" />
				</section>
			</main>
			<Footer />
		</>
	);
}

export default Product;
