import { Routes, Route } from "react-router-dom";
import Home from "./pages/dashboard/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/authentication/Login";
import Register from "./pages/registration/Register";
import HomeAdministrator from "./pages/dashboard/HomeAdministrator";

export default function AppRouter() {
	return (
		<Routes>
			<Route path="*" element={<NotFound />} />
			<Route path="/" element={<Home />} />
			<Route path="home" element={<Home />}/>
			<Route path="home/administrator" element={<HomeAdministrator />} />
			<Route path="auth/signin" element={<Login />} />
			<Route path="auth/signup" element={<Register />} />
		</Routes>
  	);
}