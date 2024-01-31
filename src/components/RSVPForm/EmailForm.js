import React from "react";

function EmailForm({ show, handleCancel, guest }) {
	return (
		<form hidden={!show}>
			<div className={`border-b border-gray-900/10 pb-12`}>
				<div className="mt-10 space-y-10">
					<fieldset>
						<legend className="text-sm font-semibold leading-6 text-gray-900">Hello {guest} Party!</legend>
						<p className="mt-1 text-sm leading-6 text-gray-600">Which guests will be attending the wedding?</p>
						<div className="mt-6 space-y-6">
							<div className="flex items-center gap-x-3">
								<input
									id="push-everything"
									name="push-notifications"
									type="radio"
									className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
								/>
								<label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
									Attending
								</label>
							</div>
							<div className="flex items-center gap-x-3">
								<input
									id="push-email"
									name="push-notifications"
									type="radio"
									className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
								/>
								<label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
									Not Attending
								</label>
							</div>
						</div>
					</fieldset>
				</div>
			</div>
			<div className="mt-6 flex items-center justify-end gap-x-6">
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
