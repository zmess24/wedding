import React from "react";
import RouteWrapper from "../components/RouteWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane, faCar, faSun, faWater } from "@fortawesome/free-solid-svg-icons";

const actions = [
	{
		title: "Airport",
		href: "#",
		icon: faPlane,
		textOne: "Located in Lihue on the southeast coast of Kauai, Lihue Airport is the main gateway to the island Kaua'i.",
		textTwo:
			"Lihue Airport serves as the major hub for domestic flights to and from the mainland United States, as well as inter-island flights within Hawaii.",
		iconForeground: "text-teal-700",
		iconBackground: "bg-teal-50",
	},
	{
		title: "Car Rentals",
		href: "https://www.expedia.com/carsearch?paandi=true&fdrp=1&styp=2&dagv=1&subm=1&locn=Lihue,%20HI,%20United%20States%20of%20America%20(LIH)&dpln=4737356&date1=12/17/2023&date2=12/19/2023&crfrr=defaultFlex&SearchType=Place&selCC=[%22economy%22]",
		icon: faCar,
		textOne: "To be able to explore the island of Kaua'i, renting a car is highly reccomended.",
		textTwo: "Most major car rental companies can be found onsite at Lihue Airport, & designated shuttles can take your preferred vendor",
		iconForeground: "text-purple-700",
		iconBackground: "bg-purple-50",
	},
	{
		title: "To the North Shore (Hanalei & Princeville)",
		href: "#",
		icon: faWater,
		textOne: "The North Shore of Kauai is known for its lush landscapes, beautiful beaches, and iconic locations like Hanalei Bay.",
		textTwo:
			"As a general estimate, the drive from Lihue Airport to the North Shore, particularly to Hanalei, can take approximately 45 minutes to an hour, covering a distance of around 30 to 40 miles.",
		iconForeground: "text-sky-700",
		iconBackground: "bg-sky-50",
	},
	{
		title: "To the South Shore (Poipu & Koloa)",
		href: "#",
		icon: faSun,
		textOne: "Kauai's South Shore is known for its sunny weather & beautiful beaches, making it a popular destination for visitors.",
		textTwo:
			"As a general estimate, the drive from Lihue Airport to the South Shore, particularly to the popular resort area of Poipu, usually takes around 30 to 40 minutes across approximately 15 to 20 miles.",
		iconForeground: "text-yellow-700",
		iconBackground: "bg-yellow-50",
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

function Travel() {
	return (
		<RouteWrapper styles="bg-gray-900 h-full">
			<img
				src="https://images.unsplash.com/photo-1598135753163-6167c1a1ad65?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt=""
				className="fixed inset-0 -z-10 h-full w-full object-cover opacity-50"
			/>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-4xl py-16">
					<div>
						<h1 className="text-center text-3xl tracking-tight text-white sm:text-6xl font-italiana pb-5">Travel</h1>
						<div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
							{actions.map((action, actionIdx) => (
								<div
									key={action.title}
									className={classNames(
										actionIdx === 0 ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none" : "",
										actionIdx === 1 ? "sm:rounded-tr-lg" : "",
										actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
										actionIdx === actions.length - 1 ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none" : "",
										"group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
									)}
								>
									<div className="flex flex-row items-center">
										<span
											className={classNames(
												action.iconBackground,
												action.iconForeground,
												"inline-flex rounded-lg p-3 ring-4 ring-white"
											)}
										>
											<FontAwesomeIcon icon={action.icon} />
										</span>
										<h3 className="ml-3 text-base text-lg leading-6 text-gray-900 font-black font-italiana">
											<span className="absolute inset-0" aria-hidden="true" />
											{action.title}
										</h3>
									</div>
									<div className="mt-6">
										<p className="mt-2 text-sm leading-6 text-gray-600 font-roboto">{action.textOne}</p>
										<p className="mt-2 text-sm leading-6 text-gray-600 font-roboto">{action.textTwo}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</RouteWrapper>
	);
}

export default Travel;
