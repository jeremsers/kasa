import "../styles/components/carrousel.scss"

function Carrousel({ img }) {
	return (
		<>
        <div className="carrousel-container">
			<img src={img} alt="paysage naturel" className="background-img"></img>
        </div>
		</>
	);
}

export default Carrousel;
