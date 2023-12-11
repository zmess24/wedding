import React from "react";
import RouteWrapper from "../components/RouteWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faPersonHiking, faUmbrellaBeach, faMugHot } from "@fortawesome/free-solid-svg-icons";

const todos = [
	{
		id: 1,
		topic: "Our Favorite Things",
		answers: [
			{
				icon: faPersonHiking,
				description: "Kalalau Trail & Hanakāpī‘ai Beach (North Shore). One of the most famous hikes in the world, and where we got engaged!",
			},
			{
				icon: faUtensils,
				description: "Bar Acuda (North Shore). Amazing food, and where we had our engagement dinner with Lauren's parents!",
			},
			{
				icon: faUtensils,
				description: "Beach House Restaurant (South Shore). Amazing food, delicious mai tai's, & a gorgeous view right on the water",
			},
			{
				icon: faUmbrellaBeach,
				description: "Hideaway Beach (1 Hotel). Beautiful & secluded, but steep hike to get down. Situated next to the 1 Hotel",
			},
			{
				icon: faUtensils,
				description: "JoJo's Shave Ice (North Shore). Best shave ice on the island (get the macaedmia nut ice cream)!",
			},
			{
				icon: faMugHot,
				description: "Wishing Well Coffee (North Shore). Coffee, Acai Bowls, Shave Ice",
			},
			{
				icon: faPersonHiking,
				description: "Jack Harter Helicopter (Lihue). 1 hour helicopter rides around the island. Ask for doors off for the best experience!",
			},
			{
				icon: faPersonHiking,
				description:
					"Napali Coast Hanalei Tour Snorkel Adventure (North Shore). 4 hour boat tour up & down the Napali Coast with snorkling in a coral reef!",
			},
			{
				icon: faUtensils,
				description: "The Fish Express (Lihue). Always our first stop when we land for poke!",
			},
		],
	},
	{
		id: 2,
		topic: "The North Shore",
		answers: [
			{
				icon: faUtensils,
				description: "Kountry Kitchen. Best pancakes & french toast!",
			},
			{
				icon: faPersonHiking,
				description: "Hanalei Valley & Bay Lookouts. Go at sunset for the best views!",
			},
			{
				icon: faMugHot,
				description: "Java Kai (Coffee). Stop on the way to the North Shore for a macademia nut latte's!",
			},
			{
				icon: faUtensils,
				description: "Pono market (Poke)",
			},
			{
				icon: faPersonHiking,
				description: "Wailua Falls. Features a 180 foot waterfall!",
			},
			{
				icon: faPersonHiking,
				description: "Sleeping Giant Trail. Incredible 360 views of the island",
			},
			{
				icon: faUmbrellaBeach,
				description: "Hanalei Bay Beach (Great for Surfing)",
			},
			{
				icon: faUmbrellaBeach,
				description: "Tunnels Beach (Great for Snorkling)",
			},
			{
				icon: faUtensils,
				description: "AMA Restaurant (Ramen)",
			},

			{
				icon: faUtensils,
				description: "Hanalei Bread Company (Cofee & Breakfast)",
			},
		],
	},
	{
		id: 3,
		topic: "The South Shore",
		answers: [
			{
				icon: faUtensils,
				description: "Koloa Fish Market (Poke)",
			},
			{
				icon: faUmbrellaBeach,
				description: "Po'ipu Beach Park",
			},
			{
				icon: faUtensils,
				description: "Da Crack Mexican Grinds (Mexican)",
			},
			{
				icon: faUtensils,
				description: "Kukui’ula Local Market (Smoothies & Acai Bowls)",
			},
			{
				icon: faMugHot,
				description: "Dark Horse Coffee Roasters. Great coffee with quick service!",
			},
			{
				icon: faMugHot,
				description: "Little Fish Coffee. Good breakfast & coffee, but go early because the lines get super long!",
			},
		],
	},
	{
		id: 4,
		topic: "The West Side",
		answers: [
			{
				icon: faPersonHiking,
				description: "Waimea Canyon, the Grand Canyon of Hawaii.",
			},
			{
				icon: faPersonHiking,
				description: "Kalalau Lookout & Pu’uo Kila Hike. Incredile views of Kalalau Valley",
			},
			{
				icon: faUtensils,
				description: "Aloha Sweet Delights (donuts). Make sure to go early & on the way to Waimea Canyon!",
			},
			{
				icon: faUtensils,
				description: "The Shrimp Station in Waimea. Delicious coconut shrimp.",
			},
			{ icon: faUtensils, description: "Isihara Markets (poke)." },
		],
	},
];

function ThingsToDo() {
	return (
		<RouteWrapper styles="bg-gray-900 h-full">
			<img
				src="https://s7.bluegreenvacations.com/is/image/BGV/hawaii-kapaa-sunset-over-kalalau-valley?$bg2-hero-lg$&crop=6,64,2490,1605&anchor=1251,866"
				alt=""
				className="fixed inset-0 -z-10 h-full w-full object-cover opacity-50"
			/>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-4xl py-16">
					<div>
						<h1 className="text-center text-3xl tracking-tight text-white sm:text-6xl font-italiana pb-5">Things to Do</h1>
						<dl className="space-y-8 divide-y divide-white bg-gray-400 bg-opacity-30 rounded-md px-5 py-5">
							{todos.map((todo) => (
								<div key={todo.id} className="lg:grid lg:grid-cols-12 lg:gap-8">
									<dt className="text-2xl flex flex-col justify-center font-black font-italiana leading-7 text-white lg:col-span-5">
										{todo.topic}
									</dt>
									<dd className="my-5 lg:col-span-7 ">
										<ul className="list-disc list-inside">
											{todo.answers &&
												todo.answers.map((t) => {
													return (
														<li key={t.description} className="flex flex-row items-center mt-5">
															<span className="text-slate-800 bg-slate-50 inline-flex rounded-lg p-3 ">
																<FontAwesomeIcon icon={t.icon} />
															</span>
															<p className="ml-3 text-sm leading-6 text-white font-white font-roboto">
																{/* <span className="absolute inset-0" aria-hidden="true" /> */}
																{t.description}
															</p>
														</li>
													);
												})}
										</ul>
									</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
			</div>
		</RouteWrapper>
	);
}

export default ThingsToDo;
