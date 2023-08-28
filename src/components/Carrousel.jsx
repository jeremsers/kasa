import "../styles/components/carrousel.scss";

import { useState } from "react";
import Overlay from "./Overlay";

function Carrousel({ img }) {
	const [selector, updateselector] = useState(0);

	
	return (
		<>
			<div className="carrousel-container">
				{img.length > 1 ? (
					<Overlay selector={selector} updateselector={updateselector} img={img} />
				) : (
					""
				)}
				<img
					src={img[selector]}
					alt="aperçu de l'appartement"
					className="background-img"
				></img>
			</div>
		</>
	);
}

export default Carrousel;
