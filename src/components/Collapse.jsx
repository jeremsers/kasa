
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Collapse({ content,type }) {
	const [isActive, setIsActive] = useState(false);

	const collapseClick = () => {
		setIsActive((current) => !current);
	};

	
	return (
		<>
			<div className="collapse">
				<div className="collapse-title-container" onClick={collapseClick}>
					<h3 className="collapse-title">{type}</h3>
					{isActive ? (
						<FontAwesomeIcon icon={faChevronDown} size="xl" />
					) : (
						<FontAwesomeIcon icon={faChevronUp} size="xl" />
					)}
				</div>
				<div
					className={
						isActive ? "list-container list-container--shown " : "list-container"
					}
				>
					<ul className="collapse-list">
						{content.map((item, index) => (
							<li className="collapse-item" key={index}>
								{item}
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}

export default Collapse;
