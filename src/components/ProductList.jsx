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
						<Card logement={logement} />
                        
					</article>
))}
			</div>
		</>
	);
}

export default ProductList;
