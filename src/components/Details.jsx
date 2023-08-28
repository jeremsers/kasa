import Rating from "./Rating";
import "../styles/layout/Details.scss"
import Profile from "./Profile";

function Details({productName,location,user,tags,rating}) {
	return (
		<>
			<section className="details-container">
				<div className="section-right">
					<div className="details-title">
						<h1>{productName}</h1>
						<p>{location}</p>
					</div>
					
                        <ul className="tag-list">
                            {tags.map((tag,index) => (
                                <li className="tag-list-item" key={index}>{tag}</li>
                            ))}
                        </ul>
                    
				</div>
                <div className="section-left">
                    <Profile name ={user.name} picture={user.picture}/>
                    <Rating rating={rating}/>
                </div>
			</section>
		</>
	);
}

export default Details;
