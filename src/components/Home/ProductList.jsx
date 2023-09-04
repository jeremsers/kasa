import logements from "../../datas/logements.json";

import Card from "./Card";

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
