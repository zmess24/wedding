import React from "react";
import Tabs from "./components/Tabs";

function Kauai() {
	return (
		<div className="relative h-full isolate overflow-hidden bg-gray-900 pb-16 pt-14 sm:pb-20">
			<img
				src="https://images.unsplash.com/photo-1598135753163-6167c1a1ad65?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt=""
				className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
			/>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl py-16">
					<Tabs />
				</div>
			</div>
		</div>
	);
}

export default Kauai;
