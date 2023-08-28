import Header from "./Header";
import Carrousel from "./Carrousel";
import Footer from "./Footer";
import { Navigate } from "react-router-dom";
import Collapse from "./Collapse";
import "../styles/components/collapse.scss";
import "../styles/pages/product.scss";
import Details from "./Details";
import logdata from "../datas/logements.json";
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
			<div className="page-container">
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
			</div>
			<Footer />
		</>
	);
}

export default Product;
