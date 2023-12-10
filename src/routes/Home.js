import React from "react";
import RouteWrapper from "../components/RouteWrapper";

function Home() {
	return (
		<RouteWrapper styles={"bg-gray-900 overflow-hidden"}>
			<img
				src="https://images.unsplash.com/photo-1598135753163-6167c1a1ad65?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt=""
				className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
			/>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
					<div className="text-center">
						<h1 className="text-3xl tracking-tight text-white sm:text-6xl font-italiana">Lauren & Zac Messinger</h1>
						<h3 className="mt-6 text-2xl leading-8 text-white font-italiana">Thursday, September 19th, 2023</h3>
						<h3 className="mt-3 text-2xl leading-8 text-white font-italiana">1 Hotel | Kauai, HI</h3>
					</div>
				</div>
			</div>
		</RouteWrapper>
	);
}

export default Home;
