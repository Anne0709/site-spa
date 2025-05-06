import "./Login.css";

function Login() {
	return (
		<main className="login">
			<h1>Tu es bénévole / salarié de la SPA?</h1>

			<label>
				Email: <br />
				<input type="email" required />
			</label>

			<label>
				Mot de passe: <br />
				<input type="password" required />
			</label>

			<button className="connexion" type="submit">
				Connexion
			</button>
		</main>
	);
}

export default Login;
