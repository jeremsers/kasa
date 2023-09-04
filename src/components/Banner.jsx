

function Banner({backgroundImage}) {
    return (  
        <div className="banner">
					<img
						src={backgroundImage}
						alt="paysage naturel"
					></img>
					<h1>Chez vous, partout et ailleurs</h1>
				</div>
    );
}

export default Banner;