import { Link } from "react-router";
import "./Alerte.css";

function Alerte() {
	return (
		<main className="alerte">
			<img src="public/maltraitance-deskop-3.jpg" alt="chien dans une cage" />

			<article className="text">
				<h1>Je signale une maltraitance</h1>
				<p>
					Un animal victime d’abus est un animal qui ne peut se défendre seul.
					Il en va donc de notre responsabilité commune de signaler toute
					situation nous semblant mettre en péril son bien-être. La SPA reçoit
					quotidiennement de nombreux signalements de souffrance, qu’elle va
					vérifier sur le terrain. Découvrez le parcours d’un signalement.
				</p>
				<p>
					Afin d’accélérer le processus de signalement, la SPA a mis en place un
					formulaire maltraitance que vous pourrez remplir selon la nature de
					l’abus constaté
				</p>
			</article>

			<button type="button">
				<Link to="/Newletter">Newsletter</Link>
			</button>
		</main>
	);
}

export default Alerte;
