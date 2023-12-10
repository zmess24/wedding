import React from "react";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

import RouteWrapper from "../components/RouteWrapper";

const faqs = [
	{
		question: "What's the best thing about Switzerland?",
		answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
	},
	{
		question: "What's the best thing about Switzerland?",
		answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
	},
	{
		question: "What's the best thing about Switzerland?",
		answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
	},
	{
		question: "What's the best thing about Switzerland?",
		answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
	},
	{
		question: "What's the best thing about Switzerland?",
		answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
	},
	{
		question: "What's the best thing about Switzerland?",
		answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
	},
];

function FAQ() {
	return (
		<RouteWrapper backgroundColor="bg-white">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl py-16">
					<div className="text-center">
						<h1 className="text-3xl font-bold tracking-tight text-black sm:text-6xl font-italiana pb-5">FAQ</h1>
						<dl className="space-y-6 divide-y divide-gray-900/10">
							{faqs.map((faq) => (
								<Disclosure as="div" key={faq.question} className="pt-6">
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
