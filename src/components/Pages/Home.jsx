import Header from "../Layout/Header";
import backgroundImage from "../../assets/imgsrc1.png";
import ProductList from "../Home/ProductList";
import Footer from "../Layout/Footer";
import Banner from "../Banner";

function Home() {
	return (
		<>
			<main className="page-container">
				<Header />
				<Banner backgroundImage={backgroundImage} />
				<ProductList />
			</main>
			<Footer />
		</>
	);
}

export default Home;
