import "../styles/components/card.scss"
import { Link } from "react-router-dom";


function Card({ logement }) {

    

	return (
		<>
			<div className="product-container">
				<img src={logement.cover} alt={logement.title} className="product-cover"></img>
				<h3 className="product-title">{logement.title}</h3>
                <Link className="product-link" to={`/product/${logement.id}`} state={logement}></Link>
			</div>
		</>
	);
}

export default Card;
