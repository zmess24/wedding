import React from "react";
import RouteWrapper from "../components/RouteWrapper";

function Wedding() {
	return (
		<RouteWrapper backgroundColor="bg-white">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl py-16">
					<div className="text-center">
						<h1 className="tracking-tight text-black text-6xl font-italiana pb-5">The Wedding</h1>
					</div>
					<div className="text-left mt-10">
						<h3 className="text-black text-xl font-roboto pb-5 text-left leading-6">Wendesday, September 18th, 2024 (Reception)</h3>
						<p className="text-lg leading-6 text-gray-600 font-italiana font-extrabold">Captain Andy’s Star Class Dinner Sunset Sail</p>
						<p className="text-md leading-6 text-gray-600 font-italiana font-extrabold">Port Allen Marina Center Office (South Shore)</p>
						<p className="text-md leading-6 text-gray-600 font-roboto pb-5">2:30PM - 6:30PM (1:45PM Checkin)</p>

						<p className="text-md leading-6 text-gray-600 font-roboto pb-5">
							We have booked a 4 hour sunset cruise around the island for our reception dinner via Captain Andy's Sailing, and we would
							love anyone who is on the island to join us for the afternoon and evening. Dinner and drinks will be provided.
						</p>
						<p className="text-md leading-6 text-gray-600 font-roboto pb-5">
							We are currently looking into providing group transportation given that the port is on the south shore and will update
							once confirmed. Please plan to be ready for departure from the 1Hotel by 12:15PM.
						</p>
						<p className="text-md leading-6 text-gray-600 font-roboto">
							Reach out to Zac and Lauren directly if you are interested in joining us!
						</p>
					</div>
					<div className="text-left mt-10">
						<h3 className="text-black text-xl font-roboto pb-5 text-left leading-6">Thursday, September 19th, 2024 (Wedding Day)</h3>
						<p className="text-md leading-6 text-gray-600 font-roboto pb-5">Itinerary to come!</p>
					</div>
					<div className="text-left mt-10">
						<h3 className="text-black text-xl font-roboto pb-5 text-left leading-6">Friday, September 20th, 2024 (Day After)</h3>
						<p className="text-md leading-6 text-gray-600 font-roboto pb-5">Itinerary to come!</p>
					</div>
				</div>
			</div>
		</RouteWrapper>
	);
}

export default Wedding;
