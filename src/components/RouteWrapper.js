import React from "react";
import { Transition } from "@headlessui/react";

function RouteWrapper({ children, styles }) {
	return (
		<Transition
			appear={true}
			show={true}
			enter="transition-opacity duration-1000"
			enterFrom="opacity-0"
			enterTo="opacity-100"
			leave="transition-opacity duration-1000"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
			className={`relative h-full isolate ${styles} pb-16 pt-14 sm:pb-20`}
		>
			{children}
		</Transition>
	);
}

export default RouteWrapper;
