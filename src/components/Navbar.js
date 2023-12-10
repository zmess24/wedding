import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const navigation = [
	{ name: "Home", href: "/" },
	{ name: "Our Story", href: "/story" },
	{ name: "The Wedding", href: "/wedding" },
	{ name: "Travel", href: "/travel" },
	{ name: "Things To Do", href: "/things-to-do" },
	{ name: "RSVP", href: "/rsvp" },
	{ name: "FAQ", href: "/faq" },
];

function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="absolute inset-x-0 top-0 z-50 lg:bg-white">
			<nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
				<div className="lg:flex lg:flex-1 hidden">
					<h4 className="text-black text-lg leading-6 font-semibold">ZM | LD</h4>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					{navigation.map((item) => (
						<a key={item.name} href={item.href} className="text-md leading-6 text-black hover:text-gray-500 font-roboto">
							{item.name}
						</a>
					))}
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
			</nav>
			<Transition.Root show={mobileMenuOpen} as={Fragment}>
				<Dialog as="div" className="relative z-50 lg:hidden" onClose={setMobileMenuOpen}>
					<Transition.Child
						as={Fragment}
						enter="transition-opacity ease-linear duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity ease-linear duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-gray-900/80" />
					</Transition.Child>

					<div className="fixed inset-0 flex">
						<Transition.Child
							as={Fragment}
							enter="transition ease-in-out duration-300 transform"
							enterFrom="-translate-x-full"
							enterTo="translate-x-0"
							leave="transition ease-in-out duration-300 transform"
							leaveFrom="translate-x-0"
							leaveTo="-translate-x-full"
						>
							<Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
								<Transition.Child
									as={Fragment}
									enter="ease-in-out duration-300"
									enterFrom="opacity-0"
									enterTo="opacity-100"
									leave="ease-in-out duration-300"
									leaveFrom="opacity-100"
									leaveTo="opacity-0"
								>
									<div className="absolute left-full top-0 flex w-16 justify-center pt-5">
										<button type="button" className="-m-2.5 p-2.5" onClick={() => setMobileMenuOpen(false)}>
											<span className="sr-only">Close sidebar</span>
											<XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
										</button>
									</div>
								</Transition.Child>
								{/* Sidebar component, swap this element with another sidebar if you like */}
								<div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4 ring-1 ring-white/10">
									<div className="flex flex-row justify-between h-16 shrink-0 items-center">
										<h4 className="text-black text-lg leading-6 font-semibold">ZM | LD</h4>
									</div>
									{navigation.map((item) => (
										<NavLink
											key={item.name}
											to={item.href}
											className={({ isActive, isPending }) =>
												isPending
													? "text-md leading-6 text-black font-roboto"
													: isActive
													? "text-md leading-6 text-black font-roboto"
													: "text-md leading-6 text-black font-roboto"
											}
										>
											{item.name}
										</NavLink>
									))}
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>
		</header>
	);
}

export default Navbar;
