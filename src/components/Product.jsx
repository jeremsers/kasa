import { useParams } from "react-router-dom";
import dataset from "../datas/logements.json";
import Header from "./Header";
import Carrousel from "./Carrousel";
import Footer from "./Footer";

function Product() {
	const { id } = useParams();
	const product = dataset.filter((logement) => {
		return logement.id === id;
	});
	
    
    console.log(product[0].cover)
	return (
		<>
            <Header />
            <Carrousel  img={product[0].cover}/>
			<h1>{product[0].title}</h1>
            <Footer />
		</>
	);
}

export default Product;
