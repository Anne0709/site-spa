import { Link } from "react-router";
import "./Animal.css";
import { useEffect, useState } from "react";

function Animal() {
	const [animal, setAnimal] = useState("");

	useEffect(() => {
		fetch("https://dog.ceo/api/breeds/image/random")
			.then((response) => response.json())
			.then((data) => setAnimal(data.message));
	}, []);

	return (
		<main className="animals">
			<article>
				<img id="heart" src="public/amour-du-coeur.png" alt="coeur" />
				<img src={animal} alt="photos de chiens" />
				<p>
					GUGU
					<br />
					La SPA, refuge de Morée, Loire-Atlantique
				</p>
			</article>
			<button type="button">
				<Link to="/Newletter">Newsletter </Link>
			</button>
		</main>
	);
}

export default Animal;
