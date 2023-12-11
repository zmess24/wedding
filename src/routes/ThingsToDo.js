import React from "react";
import RouteWrapper from "../components/RouteWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faPersonHiking, faUmbrellaBeach, faMugHot, faGolfBallTee } from "@fortawesome/free-solid-svg-icons";

const todos = [
	{
		id: 1,
		topic: "Our Favorite Things",
		answers: [
			{
				icon: faPersonHiking,
				description:
					"Kalalau Trail & Hanakāpī‘ai Beach (North Shore). One of the most famous hikes in the world, & where we got engaged. You'll need to buy a shuttle pass & book 30 days out",
			},
			{
				icon: faUtensils,
				description: "Bar Acuda (North Shore). Amazing food, and where we had our engagement dinner with Lauren's parents",
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
				description: "JoJo's Shave Ice (North Shore). Best shave ice on the island (get the macaedmia nut ice cream)",
			},
			{
				icon: faMugHot,
				description: "Wishing Well Coffee (North Shore). Coffee, Acai Bowls, & Shave Ice. Probably the best coffee in Hanalei",
			},
			{
				icon: faPersonHiking,
				description: "Jack Harter Helicopter (Lihue). 1 hour helicopter rides around the island. Ask for doors off for the best experience",
			},
			{
				icon: faPersonHiking,
				description:
					"Napali Coast Hanalei Tour Snorkel Adventure (North Shore). 4 hour boat tour up & down the Napali Coast, with snorkling in a coral reef",
			},
			{
				icon: faUtensils,
				description: "The Fish Express (Lihue). Always our first stop after we land for some great poke",
			},
			{
				icon: faUtensils,
				description:
					"Welina Terrace (1 Hotel). Known for the best sunset views on Kaua'i, a is a modern, Japanese-inspired lounge overlooking Hanalei Bay",
			},
		],
	},
	{
		id: 2,
		topic: "The North Shore",
		answers: [
			{
				icon: faPersonHiking,
				description: "Hanalei Valley & Bay Lookouts. Stop on the way into Hanalei & go at sunset for the best views",
			},
			{
				icon: faUmbrellaBeach,
				description:
					"Ke`e Beach. Beautiful beach at the entrance to the Kalalau Trail. You'll need to buy a shuttle pass, book 30 days out, & bring food",
			},
			{
				icon: faPersonHiking,
				description:
					"The Town of Hanalei. Beautiful, sleepy but vibrant town with great restaurants & stores nestled in front of 3 massive mountains",
			},
			{
				icon: faUmbrellaBeach,
				description: "Hanalei Beach. The biggest public beach on the North Shore. Grab a bottle of wine to watch the sun go down",
			},
			{
				icon: faUmbrellaBeach,
				description: "Tunnels Beach. Parking can be tough, but known as one of the best snorkling beachs in Hawai'i",
			},
			{
				icon: faUtensils,
				description:
					"AMA Restaurant (Ramen). Warm, wood-clad eatery with a patio offers bowls of ramen noodles & steamed buns plus cocktails",
			},
			{
				icon: faUtensils,
				description: "Hanalei Bread Company (Cofee & Breakfast). Organic bakery and coffee house in the heart of Hanalei",
			},
			{
				icon: faGolfBallTee,
				description: "Makai Golf Course. Serene golf course situated in the middle of Princeville overlooking the ocean",
			},
		],
	},
	{
		id: 2,
		topic: "East Side (On the way to The North Shore)",
		answers: [
			{
				icon: faUtensils,
				description: "Kountry Kitchen. Best pancakes & french toast on Kauai, make sure to get the coconut syrup",
			},
			{
				icon: faMugHot,
				description: "Java Kai (Coffee). Stop on the way to the North Shore for a macademia nut latte's!",
			},
			{
				icon: faUtensils,
				description: "Pono market (Poke). Consistently rated one of the best Poke spots in Hawai'i",
			},
			{
				icon: faPersonHiking,
				description: "Wailua Falls. Features a 180 foot waterfall that can swim in, relatively tough hike to get to",
			},
			{
				icon: faPersonHiking,
				description: "Sleeping Giant Trail. Incredible 360 views of the northwest side of island, go in the morning before it gets too hot",
			},
		],
	},
	{
		id: 3,
		topic: "The South Shore",
		answers: [
			{
				icon: faUtensils,
				description: "Koloa Fish Market (Poke). Family-owned counter-serve providing Hawaiian & American plate lunches to go",
			},
			{
				icon: faUmbrellaBeach,
				description: "Po'ipu Beach Park. Named America's best beach by The Travel Channel",
			},
			{
				icon: faUtensils,
				description: "Da Crack Mexican Grinds (Mexican). Get takeout and bring to Po'ipu Beach",
			},
			{
				icon: faUtensils,
				description:
					"Kukui’ula Local Market (Smoothies & Acai Bowls). Great option for breakfast, with a beach equipment rental hut next door",
			},
			{
				icon: faMugHot,
				description: "Dark Horse Coffee Roasters. Great coffee with quick service situated in Koloa",
			},
			{
				icon: faMugHot,
				description: "Little Fish Coffee. Good breakfast & coffee, but go early because the lines get super long.",
			},
		],
	},
	{
		id: 4,
		topic: "The West Side",
		answers: [
			{
				icon: faPersonHiking,
				description: "Waimea Canyon, the Grand Canyon of Hawaii. A must see if you're on the West Side",
			},
			{
				icon: faPersonHiking,
				description: "Kalalau Lookout & Pu’uo Kila Hike. Incredile views of Kalalau Valley close to Waimea Canyon. Bring water!",
			},
			{
				icon: faPersonHiking,
				description: "Waipoo Falls (Red Dirt Waterfall). Waterfall in carved into Waimea Canyon makes you feel like you're on Mars!",
			},
			{
				icon: faUtensils,
				description: "Aloha Sweet Delights (donuts). Make sure to go early & on the way to Waimea Canyon",
			},
			{
				icon: faUtensils,
				description: "The Shrimp Station in Waimea. Delicious coconut shrimp, great to stop at for lunch after hiking in the morning",
			},
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
									<dt className="text-2xl flex flex-col justify-center font-black font-italiana leading-7 text-white lg:col-span-5 pt-5">
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
