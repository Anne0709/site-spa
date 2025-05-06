import "./Header.css";
import { Link } from "react-router";

function Header() {
	return (
		<>
			<header>
				<img src="public/MicrosoftTeams-image-63.png" alt="logo" />

				<nav className="navbar">
					<Link to="/">
						<img src="public/don.svg" alt="coeur" /> <b>Adoption</b>
					</Link>

					<Link to="/Animal">
						<img src="public/adoption.svg" alt="patte" /> Nos animaux
					</Link>
					<Link to="/Alerte">
						<img src="public/maltraitance.svg" alt="girophare" /> Alertez-nous
					</Link>
				</nav>
			</header>
		</>
	);
}

export default Header;
