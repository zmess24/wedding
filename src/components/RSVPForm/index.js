import React, { useRef, useState } from "react";
import emailjs from "email-js";
import GuestLookupForm from "./GuestLookupForm";
import EmailForm from "./EmailForm";

const TEMPLATE_ID = "template_a63ab3d";
const SERVICE_ID = "service_2ut2rvz";
const PUBLIC_KEY = "-rz6Rb0M8kLXKM_6J";
const GUESTS = ["messinger"];

const RSVPForm = () => {
	const form = useRef();
	const [guest, setGuest] = useState("");
	const [found, setFound] = useState(false);

	const sendEmail = async (e) => {
		e.preventDefault();

		try {
			let result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);
			console.log(result);
		} catch (err) {
			console.error(err);
		}
	};

	const handleChange = (e) => {
		if (found === true) {
			setFound(false);
		}

		setGuest(e.target.value);
	};

	const handleLookup = (e) => {
		e.preventDefault();
		console.log(guest);
		if (GUESTS.indexOf(guest.toLowerCase()) > -1) setFound(true);
	};

	const handleCancel = () => {
		setFound(false);
	};

	return (
		<div>
			<GuestLookupForm handleSubmit={handleLookup} handleChange={handleChange} found={found} />
			<EmailForm show={found} handleCancel={handleCancel} guest={guest} />
		</div>
		// <form ref={form} onSubmit={sendEmail}>
		// 	<label>Name</label>
		// 	<input type="text" name="user_name" />
		// 	<label>Email</label>
		// 	<input type="email" name="guest_names" />
		// 	<label>Message</label>
		// 	<textarea name="message" />
		// 	<input type="submit" value="Send" />
		// </form>
	);
};

export default RSVPForm;
