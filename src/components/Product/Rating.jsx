import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Rating({rating}) {

    const range = [1,2,3,4,5]

    return ( 
        <div className="star">
            {range.map((rangeElem) =>
                rating >= rangeElem ? <span className="star-full" key={rangeElem.toString()}><FontAwesomeIcon icon={faStar} size="xl" /></span> : <span className="star-empty" key={rangeElem.toString()}><FontAwesomeIcon icon={faStar} size="xl" /></span>
            )}
        </div>
     );
}

export default Rating;