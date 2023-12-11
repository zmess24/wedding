import React from "react";
import RouteWrapper from "../components/RouteWrapper";

function Wedding() {
	return (
		<RouteWrapper backgroundColor="bg-white">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl py-16">
					<div className="text-center">
						<h1 className="text-3xl tracking-tight text-black sm:text-6xl font-italiana pb-5">The Wedding</h1>
						<p className="text-md leading-6 text-gray-600 font-roboto pb-5">Itinerary to come!</p>
					</div>
				</div>
			</div>
		</RouteWrapper>
	);
}

export default Wedding;
