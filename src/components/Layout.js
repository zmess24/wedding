import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Landing() {
	return (
		<div className="bg-white">
			<Navbar />
			<main>
				<Outlet />
			</main>
			{/* <footer className="fixed text-center inset-x-0 text-white bottom-0 font-italiana pb-3">Made with ❤️ by Zac</footer> */}
		</div>
	);
}
