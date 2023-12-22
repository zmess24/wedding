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
						<h1 className="tracking-tight text-black text-6xl font-italiana pb-5">Our Story</h1>
						<Carousel autoPlay={true} interval={5000} transitionTime={1000}>
							<div>
								<img src={Gallery4} alt="Gallery 1" />
							</div>
							<div>
								<img src={Gallery1} alt="Gallery 2" />
							</div>
							<div>
								<img src={Gallery8} alt="Gallery 8" />
							</div>
							<div>
								<img src={Gallery2} alt="Gallery 2" />
							</div>
							<div>
								<img src={Gallery5} alt="Gallery 5" />
							</div>
							<div>
								<img src={Gallery6} alt="Gallery 6" />
							</div>
							<div>
								<img src={Gallery7} alt="Gallery 7" />
							</div>

							<div>
								<img src={Gallery9} alt="Gallery 9" />
							</div>
							<div>
								<img src={Gallery10} alt="Gallery 10" />
							</div>
						</Carousel>
						<h3 className="text-black text-xl font-roboto pb-5 text-left leading-6">2015: Stamford, CT -- The Introduction</h3>
						<p className="text-md leading-6 text-gray-600 font-roboto pb-5 text-left">
							Thanks to a few too many vodka sodas and a friend attempting to play cupid, Zac and Lauren are introduced at the local hot
							spot, Hudson Social. Despite the immediate attraction, Lauren decides to play her game of extremely hard to get to see
							what he's all about. After far too many rejections (sorry Zac), Zac's unwavering persistence eventually leads to a
							breakthrough and almost one full year later, Lauren says yes to a first date.
						</p>
						<h3 className="text-black text-xl font-roboto pb-5 text-left leading-6">2017: Stamford, CT -- Right Person, Wrong Time</h3>
						<p className="text-md leading-6 text-gray-600 font-roboto pb-5 text-left">
							Life finds Zac and Lauren at a crossroads, and the two end up moving in opposite directions -- Lauren heads to Boston and
							Zac to Los Angeles. For three years, they lose contact, living separate lives across the country, with Zac sending the
							occasional fire flames and heart eyes to Lauren's instagram story... We all know how that goes...
						</p>
						<h3 className="text-black text-xl font-roboto pb-5 text-left leading-6">
							2020: New York City / Los Angeles, CA -- The Question
						</h3>
						<p className="text-md leading-6 text-gray-600 font-roboto pb-5 text-left">
							Zac makes his boldest move yet, inviting Lauren to a friend's wedding in Malibu. Finding herself in the dead of winter in
							NYC, Lauren readily accepts, but as the universe would have it, the pandemic quickly ruins those plans. After a few months
							of back and forth, and some convincing from her father to "get back to living her life and have some fun," Lauren boards a
							nearly empty plane to LA on September 29th, 2020, for a visit that would change everything.
						</p>
						<p className="text-md leading-6 text-gray-600 font-roboto pb-5 text-left">
							Zac pulls up to LAX lookin' fly, ready to make a lasting impression to win Lauren over after 3 years apart. Stepping out
							of the car, playing it cool, Zac meets Lauren at the curb to grab her luggage, her beauty clearly stopping his brain cells
							where they were as he leaves his car in drive and steps away from the vehicle. The car begins inching forward, at which
							point Lauren notices and brings to Zac's attention. Not wanting to ruin the moment, Zac tries to keep his cool and make
							conversation, all while trying to get his foot in the car to stop it before it hits the older woman's car just a few feet
							in front of him. He finally gets his foot on the brake, just inches away from rear ending the car in front of him, and
							continues to try and act like nothing happened. Neither one of them mentioned the mishap on the drive back to Venice, even
							as Zac makes wrong turn after wrong turn, clearly flustered from what almost transpired. It was in that moment that Zac
							won Lauren over- anyone that would sacrifice a car for her deserved a second chance.
						</p>
						<h3 className="text-black text-xl font-roboto pb-5 text-left leading-6">Jan 2021: Los Angeles, CA -- It's Official</h3>
						<p className="text-md leading-6 text-gray-600 font-roboto pb-5 text-left">
							After flying out to LA every few weeks after that initial visit, Lauren begins looking for jobs in LA, and after flying
							out for Zac's birthday, she accepts a new position, has her car shipped across the country and finds a place to live. And
							just like that, Zac and Lauren start their next, and best chapter, together.
						</p>
						<h3 className="text-black text-xl font-roboto pb-5 text-left leading-6">July 2023: Kauai, HI -- Best. Day. Ever</h3>
						<p className="text-md leading-6 text-gray-600 font-roboto pb-5 text-left">
							7 years after their first encounter in CT, Zac plans the trip and gesture of a lifetime in his and Lauren's happy place,
							Kauai, HI. 6 miles into hiking the incredible Kalalau Trail, on the most stunning secluded beach known as Hanakapi'ai, Zac
							gets down on one knee and asks Lauren the question that changes the course of their lives forever. And this time, without
							any hesitation, Lauren immediately says, yes.
						</p>
					</div>
				</div>
			</div>
		</RouteWrapper>
	);
}

export default Story;
