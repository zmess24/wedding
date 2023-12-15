import { useRouteError, Link } from "react-router-dom";
import RouteWrapper from "./RouteWrapper";
import Navbar from "./Navbar";

export default function ErrorPage() {
	const error = useRouteError();

	return (
		<div className="bg-white">
			<Navbar />
			<main>
				<RouteWrapper backgroundColor="bg-white">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="mx-auto max-w-2xl py-16">
							<div className="text-center">
								<h1 className="text-3xl tracking-tight text-black sm:text-6xl font-italiana pb-5">Apologies, page not found!</h1>
							</div>
						</div>
					</div>
				</RouteWrapper>
			</main>
		</div>
	);
}
