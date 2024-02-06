import React, { useState } from "react";
import GuestLookupForm from "./GuestLookupForm";
import EmailForm from "./EmailForm";
import { Transition } from "@headlessui/react";

const GUESTS = JSON.parse(process.env.REACT_APP_GUEST_LIST);
debugger;
const RSVPForm = () => {
	const [guest, setGuest] = useState("");
	const [found, setFound] = useState(false);
	const [error, setError] = useState(false);
	const [party, setParty] = useState([]);
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e) => {
		if (found === true) setFound(false);
		if (error === true) setError(false);

		setGuest(e.target.value.toLowerCase());
	};

	const handleLookup = (e) => {
		e.preventDefault();
		if (GUESTS[guest]) {
			setFound(true);
			setParty(GUESTS[guest]);
		} else {
			setError(true);
		}
	};

	const handleCancel = () => {
		setFound(false);
	};

	return (
		<div>
			{!submitted && (
				<Transition show={!submitted} leave="transition-opacity duration-500" leaveFrom="opacity-100" leaveTo="opacity-0">
					<GuestLookupForm handleSubmit={handleLookup} handleChange={handleChange} found={found} error={error} />
					{found && <EmailForm show={found} handleCancel={handleCancel} guest={guest} party={party} handleSubmit={setSubmitted} />}
				</Transition>
			)}

			<Transition show={submitted} enter="transition-opacity duration-1000" enterFrom="opacity-0" enterTo="opacity-100">
				<p className="text-md leading-6 text-gray-600 font-roboto pb-5">
					Thank you for submitting! You're RSVP has been sent to the bride & groom!
				</p>
			</Transition>
		</div>
	);
};

export default RSVPForm;
