import React from "react";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

import RouteWrapper from "../components/RouteWrapper";

const faqs = [
	{
		question: "What date should I RSVP by?",
		answer: "More to come!",
	},
	{
		question: "Could you give me a link to your wedding registry?",
		answer: "This will be updated in the next few weeks!",
	},
	{
		question: "What is the dress code for the wedding?",
		answer: "The dress code will be formal while accomodating due to the Hawaiin climate. If you have specific questions, please contact Lauren or Zac directly.",
	},
	{
		question: "What will the weather be like?",
		answer: "Princeville typically experiences warm and pleasant weather in September, with daytime temperatures in mid-70s to the high 80s, and nighttime temperatures in the mid-60s to low 70s. September is typically part of the dry season in Hawaii, so you can expect relatively low rainfall compared to other months. However, please note the weather may change depending on which side of the island you are on!",
	},
	{
		question: "Have you reserved a block of rooms at the 1 Hotel?",
		answer: "Yes! If you are interested in being a part of our room block which has discounted rates, please contact Lauren or Zac directly. Otherwise, check out our Accomodations page for some recommendations on where to stay!",
	},
	{
		question: "I have more questions about your wedding, who can I contact?",
		answer: "Please contact either Lauren or Zac directly with any additional questions, comments, or concerns!",
	},
];

function FAQ() {
	return (
		<RouteWrapper backgroundColor="bg-white h-screen">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl py-16">
					<div className="text-center">
						<h1 className="font-bold tracking-tight text-black text-6xl font-italiana pb-5">FAQ</h1>
						<dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
							{faqs.map((faq, i) => (
								<Disclosure as="div" key={i} className="pt-6">
									{({ open }) => (
										<>
											<dt>
												<Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
													<span className="text-base font-semibold leading-7">{faq.question}</span>
													<span className="ml-6 flex h-7 items-center">
														{open ? (
															<MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
														) : (
															<PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
														)}
													</span>
												</Disclosure.Button>
											</dt>
											<Disclosure.Panel as="dd" className="mt-2 pr-12">
												<p className="text-left text-base leading-7 text-gray-600">{faq.answer}</p>
											</Disclosure.Panel>
										</>
									)}
								</Disclosure>
							))}
						</dl>
					</div>
				</div>
			</div>
		</RouteWrapper>
	);
}

export default FAQ;
