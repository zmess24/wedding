import React from "react";
import RouteWrapper from "../components/RouteWrapper";
import RSVPForm from "../components/RSVPForm/index";

function Rsvp() {
	return (
		<RouteWrapper backgroundColor="bg-white">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl py-16">
					<div className="text-center">
						<h1 className="tracking-tight text-black text-6xl font-italiana pb-5">RSVP</h1>
						<RSVPForm />
					</div>
				</div>
			</div>
		</RouteWrapper>
	);
}

export default Rsvp;
