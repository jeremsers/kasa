import "../styles/components/card.scss"
import { Link } from "react-router-dom";


function Card({ cover, title, id }) {

    

	return (
		<>
			<div className="product-container">
				<img src={cover} alt={title} className="product-cover"></img>
				<h3 className="product-title">{title}</h3>
                <Link className="product-link" to={`/product/${id}`}></Link>
			</div>
		</>
	);
}

export default Card;
