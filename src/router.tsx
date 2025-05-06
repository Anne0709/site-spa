import { createBrowserRouter } from "react-router";
import App from "./App";
import Adoption from "./components/pages/Adoption/Adoption";
import Animal from "./components/pages/Animal/Animal";
import Alerte from "./components/pages/Alerte/Alerte";
import Newletter from "./components/pages/Newletter/Newletter";
import Login from "./components/pages/Login/Login";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				element: <Adoption />,
				path: "/",
			},
			{
				element: <Animal />,
				path: "/animal",
			},
			{
				element: <Alerte />,
				path: "/alerte",
			},

			{
				element: <Newletter />,
				path: "/newletter",
			},
			{
				element: <Login />,
				path: "/login",
			},
		],
	},
]);
export default router;
