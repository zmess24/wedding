import React from "react";
import RouteWrapper from "../components/RouteWrapper";

function Registry() {
	return (
		<RouteWrapper backgroundColor="bg-white">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl py-16">
					<div className="text-center">
						<h1 className="tracking-tight text-black text-6xl font-italiana pb-5">Registry</h1>
						<p className="text-md leading-6 text-gray-600 font-roboto pb-5">
							If you are interested in donating to our honeymoon fund, our registry can be found on Honeyfund by clicking{" "}
							<a
								href="https://www.honeyfund.com/site/messinger-donohoe-09-19-2024"
								target="_blank"
								rel="noreferrer"
								className="text-blue-500"
							>
								here
							</a>
							.
						</p>
						<p className="text-md leading-6 text-gray-600 font-roboto pb-5">
							However, please note that we understand we are asking a lot of our guests financially in traveling to Hawaii, and are not
							expecting registry donations. Your presence at our wedding is the greatest gift of all!
						</p>
					</div>
				</div>
			</div>
		</RouteWrapper>
	);
}

export default Registry;
