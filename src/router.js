import React from "react";
import { Route, createRoutesFromElements, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./routes/Home";
import Rsvp from "./routes/Rsvp";
import Story from "./routes/Story";
import Wedding from "./routes/Wedding";
import Travel from "./routes/Travel";
import ThingsToDo from "./routes/ThingsToDo";
import Accomodations from "./routes/Accomodations";
import FAQ from "./routes/FAQ";
import ErrorPage from "./components/ErrorPage";
import Registry from "./routes/Registry";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<Layout />} errorElement={<ErrorPage />}>
			<Route path="/" element={<Home />} />
			<Route path="/story" element={<Story />} />
			<Route path="/rsvp" element={<Rsvp />} />
			<Route path="/wedding" element={<Wedding />} />
			<Route path="/accomodations" element={<Accomodations />} />
			<Route path="/travel" element={<Travel />} />
			<Route path="/registry" element={<Registry />} />
			<Route path="/things-to-do" element={<ThingsToDo />} />
			<Route path="/faq" element={<FAQ />} />
		</Route>
	)
);

export default router;
