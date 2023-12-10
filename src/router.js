import React from "react";
import { Route, createRoutesFromElements, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./routes/Home";
import Kauai from "./routes/Kauai";
import Rsvp from "./routes/Rsvp";
import Story from "./routes/Story";
import Wedding from "./routes/Wedding";
import Travel from "./routes/Travel";
import ThingsToDo from "./routes/ThingsToDo";
import FAQ from "./routes/FAQ";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<Layout />}>
			<Route path="/" element={<Home />} />
			<Route path="/kauai" element={<Kauai />} />
			<Route path="/story" element={<Story />} />
			<Route path="/rsvp" element={<Rsvp />} />
			<Route path="/wedding" element={<Wedding />} />
			<Route path="/travel" element={<Travel />} />
			<Route path="/things-to-do" element={<ThingsToDo />} />
			<Route path="/faq" element={<FAQ />} />
		</Route>
	)
);

export default router;
