import React from "react";
import RouteWrapper from "../components/RouteWrapper";
import HomeImage from "../assets/home.JPG";

function Home() {
	return (
		<RouteWrapper styles={"bg-gray-900 overflow-hidden h-screen"}>
			<img src={HomeImage} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50" />
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
					<div className="text-center">
						<h1 className="tracking-tight text-white text-6xl font-italiana">Lauren & Zac Messinger</h1>
						<h3 className="mt-6 text-2xl leading-8 text-white font-italiana">Thursday, September 19th, 2023</h3>
						<h3 className="mt-3 text-2xl leading-8 text-white font-italiana">1 Hotel | Kauai, HI</h3>
					</div>
				</div>
			</div>
		</RouteWrapper>
	);
}

export default Home;
