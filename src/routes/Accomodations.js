import React from "react";
import RouteWrapper from "../components/RouteWrapper";

const accomodations = [
	{
		name: "1 Hotel",
		description:
			"The 1 Hotel Hanalei Bay brings a world-class wellness resort and flagship sustainable sanctuary to Kauai's North Shore, and is the location of the wedding. For those interested, a block of rooms will be reserved for discounted rates. If you are interested in staying with us, please let Lauren & Zac know directly.",
		linkText: "View 1 Hotel Rooms",
		link: "https://www.1hotels.com/book?currency=USD&endDate=2024-09-21&exactMatchOnly=false&hotelCode=5826&hotelProvider=1&numRooms=1&primaryLangId=en&promoCode=WINTER&startDate=2024-09-18&adults=1&children=0&clientId=1hotels&theme=null",
		image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/349512531.jpg?k=14721da9872329d9df53784578495c86d01f1f9a18464eb3282f40a0d91085b2&o=&hp=1",
	},
	{
		name: "Princeville",
		description:
			"Princeville is situated on the northernmost part of Kauai, overlooking Hanalei Bay and the Pacific Ocean, and is known for its stunning landscapes, including lush greenery, mountains, and cliffs. Most Airbnb locations within Princeville are within walking distance to the 1 Hotel, or a short drive away.",
		linkText: "View Princeville Airbnb's",
		link: "https://www.airbnb.com/s/Princeville--Kauai--Hawaii--United-States/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-01-01&monthly_length=3&price_filter_input_type=0&channel=EXPLORE&query=Princeville%2C%20Kauai%2C%20HI&place_id=ChIJzeCnaan6BnwR8VbK0K3jMZA&date_picker_type=calendar&checkin=2024-09-18&checkout=2024-09-21&source=structured_search_input_header&search_type=autocomplete_click",
		image: "https://www.parrishkauai.com/wp-content/uploads/2021/06/Plantation-at-Princeville-Aerial-Parrish-Kauai.jpg",
	},
];

function Accomodations() {
	return (
		<RouteWrapper backgroundColor="bg-white">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-7xl py-16">
					<div className="text-center pb-5">
						<h1 className="text-3xl tracking-tight text-black sm:text-6xl font-italiana pb-5">Accomodations</h1>
					</div>
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
						{accomodations &&
							accomodations.map((a) => {
								return (
									<div className="relative">
										<dt className="text-3xl flex flex-col justify-center font-black font-italiana leading-7 text-black lg:col-span-5 pb-5">
											{a.name}
										</dt>
										<dd className="text-base font-roboto leading-7 text-gray-600 pb-5 gap-y-10">{a.description}</dd>
										<dd className="text-base leading-7 text-gray-600 pb-5 hover:underline cursor-pointer">
											<a target="_blank" href={a.link}>
												{a.linkText}
											</a>
										</dd>
										<img className="h-80 w-full mb-5" src={a.image} />
									</div>
								);
							})}
					</dl>
				</div>
			</div>
		</RouteWrapper>
	);
}

export default Accomodations;
