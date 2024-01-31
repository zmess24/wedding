import React from "react";

function GuestLookupForm({ handleSubmit, handleChange, found, error }) {
	return (
		<form onSubmit={handleSubmit}>
			<div className="space-y-12">
				<div className="border-b border-gray-900/10 pb-8">
					<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
						<div className="col-span-full">
							<label htmlFor="last_name" className="block text-sm font-medium leading-6 text-gray-900 text-center">
								Please lookup your reservation by your parties last name:
							</label>
							<div className="mt-2">
								<input
									type="text"
									name="last_name"
									id="last_name"
									disabled={found}
									onChange={handleChange}
									className="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
					</div>
					<div className="mt-6 flex items-center justify-center gap-x-6">
						<button
							type="submit"
							disabled={found}
							className={`rounded-md ${
								found ? "bg-gray-300" : "bg-indigo-600"
							} px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
						>
							Lookup Guest
						</button>
					</div>
					<div
						hidden={!error}
						className="p-2 mt-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
						role="alert"
					>
						<span className="font-medium">Sorry!</span> Unable to find your reservation.
					</div>
				</div>
			</div>
		</form>
	);
}

export default GuestLookupForm;
