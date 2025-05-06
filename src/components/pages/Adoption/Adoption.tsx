import { Link } from "react-router";
import "./Adoption.css";

function Adoption() {
	return (
		<>
			<main className="adoption">
				<article>
					<h1>
						L’adoption responsable change autant la vie <br />
						de l’animal que la vôtre
					</h1>
					<p>
						<b>
							Attention, préalablement à l’adoption d’un animal, vous devez
							signer un contrat
						</b>
					</p>
					<section className="button">
						<button type="button">
							<Link to="/Newletter">Adoptez-nous!</Link>
						</button>
					</section>
				</article>
			</main>
		</>
	);
}

export default Adoption;
