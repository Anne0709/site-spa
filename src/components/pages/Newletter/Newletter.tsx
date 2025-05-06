import { Link } from "react-router";
import "./Newletter.css";

function Newletter() {
	return (
		<main className="newletter">
			<section className="section">
				<h1>Incription à la newsletter</h1>

				<article className="liste">
					<label>
						Civilité <br />
						<input name="civility" />
					</label>
					<label>
						Prénom <br />
						<input name="firstName" />
					</label>
					<label>
						Nom
						<br />
						<input name="name" />
					</label>
				</article>

				<form className="case">
					<label>
						Voulez-vous recevoir des informations complémentaires?:{" "}
						<input type="checkbox" name="myCheckbox" />
					</label>
				</form>

				<section className="button-inscription">
					<button className="inscription" type="button">
						<Link to="/login">Inscrivez-vous</Link>
					</button>
				</section>
			</section>
		</main>
	);
}

export default Newletter;
