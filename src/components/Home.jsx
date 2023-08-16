import "../styles/pages/Home.scss";
import Header from "./Header";
import backgroundImage from "../assets/imgsrc1.png";
import ProductList from "./ProductList";
import Footer from "./Footer";

function Home() {
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
					<p>Chez vous, partout et ailleurs</p>
				</div>
				<ProductList />
                <Footer />
			</div>
		</>
	);
}

export default Home;
