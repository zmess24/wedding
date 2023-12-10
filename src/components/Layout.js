import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Landing() {
	return (
		<div className="bg-white">
			<Navbar />
			<main className="h-screen">
				<Outlet />
			</main>
		</div>
	);
}
