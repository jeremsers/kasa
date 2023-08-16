import logements from "../datas/logements.json";
import "../styles/components/productlist.scss";
import Card from "./Card";
import "../styles/components/card.scss"

function ProductList() {
	return (
		<>
			<div className="productlist-container">
				{logements.map((logement) => (
					<article className="product-card" key={logement.id}>
						<Card title={logement.title} cover={logement.cover} id={logement.id} />
                        
					</article>
				))}
			</div>
		</>
	);
}

export default ProductList;
