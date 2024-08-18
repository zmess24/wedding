import React from "react";
import RouteWrapper from "../components/RouteWrapper";

const events = [
	{ time: "3:30PM - 4:00PM", title: "Guest Arrival", location: "Kamani Cove (1 Hotel)" },
	{ time: "4:00PM - 4:30PM", title: "Wedding Ceremony", location: "Kamani Cove (1 Hotel)" },
	{ time: "4:30PM - 5:45PM", title: "Cocktail Hour", location: "Kamani Cove (1 Hotel)" },
	{ time: "6:00PM - 8:00PM", title: "Reception & Dinner", location: "Hanalei Room (1 Hotel)" },
	{ time: "8:00PM - 12:00AM", title: "Late Night Reception", location: "Kukui Room (1 Hotel)" },
];

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
					</div>
					<div className="text-left mt-10">
						<h3 className="text-black text-xl font-roboto text-left leading-6">Thursday, September 19th, 2024 (Wedding Day)</h3>
						<div className="">
							<div className="mt-4 flow-root">
								<div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
									<div className="inline-block min-w-full py-2 align-middle">
										<table className="min-w-full divide-y divide-gray-300">
											<thead>
												<tr>
													<th
														scope="col"
														className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8"
													>
														Time
													</th>
													<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
														Title
													</th>
													<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
														Location
													</th>
												</tr>
											</thead>
											<tbody className="divide-y divide-gray-200 bg-white">
												{events.map((e) => (
													<tr key={e.title}>
														<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
															{e.time}
														</td>
														<td className="whitespace-nowrap px-3 py-4 text-md leading-6 text-gray-600 font-italiana font-extrabold">
															{e.title}
														</td>
														<td className="whitespace-nowrap px-3 py-4 text-md leading-6 text-gray-600 font-italiana font-extrabold">
															{e.location}
														</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
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
