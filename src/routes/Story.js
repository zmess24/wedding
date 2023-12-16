import React from "react";
import RouteWrapper from "../components/RouteWrapper";
// Images for Gallery
import Gallery1 from "../assets/gallery_1.jpg";
import Gallery2 from "../assets/gallery_2.jpg";
import Gallery4 from "../assets/gallery_4.JPG";
import Gallery5 from "../assets/gallery_5.jpg";
import Gallery6 from "../assets/gallery_6.jpg";
import Gallery7 from "../assets/gallery_7.jpg";
import Gallery8 from "../assets/gallery_8.jpg";
import Gallery9 from "../assets/gallery_9.jpg";
import Gallery10 from "../assets/gallery_10.jpg";
// React Responsive Carousel & Styles/
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../styles/overrides.css";

function Story() {
	return (
		<RouteWrapper backgroundColor="bg-white">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl py-16">
					<div className="text-center">
						<h1 className="text-3xl tracking-tight text-black sm:text-6xl font-italiana pb-5">Our Story</h1>
						<Carousel autoPlay={true} interval={5000} transitionTime={1000}>
							<div>
								<img src={Gallery4} />
							</div>
							<div>
								<img src={Gallery1} />
							</div>
							<div>
								<img src={Gallery8} />
							</div>
							<div>
								<img src={Gallery2} />
							</div>
							<div>
								<img src={Gallery5} />
							</div>
							<div>
								<img src={Gallery6} />
							</div>
							<div>
								<img src={Gallery7} />
							</div>

							<div>
								<img src={Gallery9} />
							</div>
							<div>
								<img src={Gallery10} />
							</div>
						</Carousel>
						<p className="text-md leading-6 text-gray-600 font-roboto pb-5 text-left">
							In 2015, Stamford, Connecticut, became the backdrop of a modern love story when Zac and Lauren first met in a local bar.
							Zac's unwavering persistence, despite Lauren's initial rejections, eventually led to a breakthrough. Almost a year later,
							in 2016, they embarked on their first date, marking the beginning of their unique journey together. However, life's
							unpredictable paths saw Lauren moving to Boston and Zac to Los Angeles, leading to a hiatus in their budding romance. For
							three years, they lost contact, living separate lives across the country. However, destiny hadn't finished its part in
							their story.
						</p>
						<p className="text-md leading-6 text-gray-600 font-roboto pb-5 text-left">
							In the midst of the unpredictable year that was 2020, Zac reached out inviting Lauren to a friend's wedding in Los
							Angeles. Lauren accepted, but the pandemic postponed the event. Undeterred, she traveled to LA on September 29th, 2020,
							for a visit that rekindled their connection. This visit ignited a long-distance relationship, with love bridging the miles
							between them. After three months of nurturing their love across the distance, Lauren made a bold decision in January 2021.
							She moved to Los Angeles, choosing to be with Zac and start a new chapter in their lives together, proving that love knows
							no bounds.
						</p>
						<p className="text-md leading-6 text-gray-600 font-roboto pb-5 text-left">
							7 years after their first initial encoutner, Zac decided to take the next step. Amidst the breathtaking scenery of the
							Kalalau Trail in Kaua'i, Zac proposed to Lauren. This romantic gesture on the Hawaiian trail marked the culmination of
							their unique journey and the beginning of a new adventure as life partners.
						</p>
						<p className="text-md leading-6 text-gray-600 font-roboto pb-5 text-left">
							Their love story, from the initial encounter in a Connecticut bar to a proposal in the Hawaiian paradise, is a testament
							to enduring love, resilience, and the belief that sometimes, taking a chance can lead to a lifetime of happiness.
						</p>
					</div>
				</div>
			</div>
		</RouteWrapper>
	);
}

export default Story;
