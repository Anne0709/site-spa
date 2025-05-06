import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./components/Header/Header.tsx";
import "./components/pages/Adoption/Adoption.tsx";
import "./components/pages/Animal/Animal.tsx";
import "./components/pages/Alerte/Alerte.tsx";
import "./components/pages/Newletter/Newletter.tsx";
import "./components/pages/Login/Login.tsx";
import "./assets/globals.css";
import { RouterProvider } from "react-router";
import router from "./router.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
