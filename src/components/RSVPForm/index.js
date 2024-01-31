import React, { useState } from "react";
import GuestLookupForm from "./GuestLookupForm";
import EmailForm from "./EmailForm";

const GUESTS = { messinger: ["Lauren Donohoe", "Zac Messinger"] };

const RSVPForm = () => {
	const [guest, setGuest] = useState("");
	const [found, setFound] = useState(false);
	const [error, setError] = useState(false);
	const [party, setParty] = useState([]);

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
			<GuestLookupForm handleSubmit={handleLookup} handleChange={handleChange} found={found} error={error} />
			<EmailForm show={found} handleCancel={handleCancel} guest={guest} party={party} />
		</div>
	);
};

export default RSVPForm;
