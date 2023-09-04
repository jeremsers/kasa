
import leftArr from "../../assets/arrow_left.svg";
import rightArr from "../../assets/arrow_right.svg";


function Overlay({ selector, updateselector, img }) {
	function selectImageRight() {
		selector === img.length - 1
			? updateselector(0)
			: updateselector(selector + 1);
	}

	function selectImageLeft() {
		selector === 0
			? updateselector(img.length - 1)
			: updateselector(selector - 1);
	}
	function currentslide(selector) {
		return selector === img.length ? selector : selector + 1;
	}

	return (
		<>
			<img
				onClick={selectImageLeft}
				src={leftArr}
				alt="fleche gauche"
				className="arrow arrow-left"
			></img>

			<p className="number">
				{currentslide(selector)}/{img.length}
			</p>
			<img
				src={rightArr}
				alt="fleche droite"
				className="arrow arrow-right"
				onClick={selectImageRight}
			></img>
		</>
	);
}

export default Overlay;
