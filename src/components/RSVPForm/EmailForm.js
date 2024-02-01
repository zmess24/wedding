import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const EMAIL_JS_TEMPLATE_ID = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
const EMAIL_JS_SERVICE_ID = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
const EMAIL_JS_PUBLIC_KEY = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY;

function EmailForm({ show, handleCancel, handleSubmit, guest, party }) {
	const form = useRef();

	const sendEmail = async (e) => {
		e.preventDefault();

		try {
			await emailjs.sendForm(EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, form.current, EMAIL_JS_PUBLIC_KEY);
			handleSubmit(true);
		} catch (err) {
			console.error(err);
		}
	};

	const handleRSVPChange = (e) => {
		let status = e.target.id;
		let id = e.target.name.split("-")[1];
		document.querySelector(`[name="rsvp-${id}"]`).value = status;
	};

	let guestCap = guest.charAt(0).toUpperCase() + guest.slice(1);

	return (
		<form hidden={!show} ref={form} onSubmit={sendEmail} name="rsvp-form">
			<input hidden name="party_name" value={guestCap} type="text" onChange={() => {}} />
			<div className={`border-b border-gray-900/10 pb-12`}>
				<h3 className="mt-5 text-sm font-semibold leading-6 text-gray-900">Hello {guestCap} Party!</h3>
				<p className="mt-1 text-sm leading-6 text-gray-600">Please mark the RSVP status for each of your guests!</p>
				<div className="mt-10 space-y-10">
					{party.map((p, i) => {
						return (
							<fieldset key={i}>
								<div className="gap-x-6 flex flex-row justify-center">
									<input hidden name={`guest-${i}`} value={p} type="text" onChange={() => {}} />
									<input hidden name={`rsvp-${i}`} value={"Attending"} type="text" onChange={() => {}} />
									<p className="text-sm leading-6 text-gray-600">{p}: </p>
									<div className="flex flex-row items-center leading-6 gap-x-1">
										<input
											id="attending"
											name={`radio-${i}`}
											type="radio"
											onChange={handleRSVPChange}
											className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
										/>
										<label htmlFor="attending" className="block text-sm font-medium leading-6 text-gray-900">
											Attending
										</label>
									</div>
									<div className="flex flex-row items-center leading-6 gap-x-1">
										<input
											id="not-attending"
											name={`radio-${i}`}
											type="radio"
											onChange={handleRSVPChange}
											className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
										/>
										<label htmlFor="not-attending" className="block text-sm font-medium leading-6 text-gray-900">
											Not Attending
										</label>
									</div>
								</div>
							</fieldset>
						);
					})}
				</div>
			</div>
			<div className="mt-6 flex items-center justify-center gap-x-6">
				<button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={handleCancel}>
					Cancel
				</button>
				<button
					type="submit"
					className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					RSVP
				</button>
			</div>
		</form>
	);
}

export default EmailForm;
