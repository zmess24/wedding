import React from "react";
import RouteWrapper from "../components/RouteWrapper";
import { Carousel } from "react-responsive-carousel";
import Gallery1 from "../assets/gallery_1.jpg";
import Gallery2 from "../assets/gallery_2.jpg";
import Gallery4 from "../assets/gallery_4.JPG";
import Gallery5 from "../assets/gallery_5.jpg";
import Gallery6 from "../assets/gallery_6.jpg";
import Gallery7 from "../assets/gallery_7.jpg";
import Gallery8 from "../assets/gallery_8.jpg";
import Gallery9 from "../assets/gallery_9.jpg";
import Gallery10 from "../assets/gallery_10.jpg";

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
						<p className="text-md leading-6 text-gray-600 font-roboto pb-5">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
							aliqua. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Bibendum est ultricies integer quis
							auctor elit sed vulputate. Sit amet cursus sit amet dictum sit. Adipiscing enim eu turpis egestas. Fames ac turpis egestas
							maecenas pharetra convallis posuere morbi. Et malesuada fames ac turpis egestas sed tempus urna et. Interdum velit laoreet
							id donec ultrices tincidunt. Morbi tristique senectus et netus et malesuada fames ac turpis. Nec tincidunt praesent semper
							feugiat nibh sed pulvinar. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Amet porttitor eget dolor morbi
							non arcu risus quis varius. Libero id faucibus nisl tincidunt eget nullam. Vitae nunc sed velit dignissim sodales ut eu.
							Nullam eget felis eget nunc lobortis. Sit amet nisl purus in mollis nunc. Id eu nisl nunc mi ipsum faucibus. Odio ut sem
							nulla pharetra diam. Nam aliquam sem et tortor consequat id.
						</p>
						<p className="text-md leading-6 text-gray-600 font-roboto pb-5">
							Nibh cras pulvinar mattis nunc sed. Risus at ultrices mi tempus imperdiet nulla malesuada. Diam sit amet nisl suscipit
							adipiscing bibendum est ultricies. Tellus pellentesque eu tincidunt tortor aliquam nulla. Nisl tincidunt eget nullam non
							nisi est. Sed viverra ipsum nunc aliquet bibendum enim. Vitae congue mauris rhoncus aenean vel elit. Proin libero nunc
							consequat interdum varius sit amet mattis. Ultricies tristique nulla aliquet enim tortor. Nulla pharetra diam sit amet
							nisl suscipit. Commodo odio aenean sed adipiscing diam donec adipiscing. Bibendum arcu vitae elementum curabitur vitae.
							Pharetra sit amet aliquam id diam maecenas ultricies. Sed risus ultricies tristique nulla aliquet. Dolor sit amet
							consectetur adipiscing elit pellentesque habitant morbi. Pretium vulputate sapien nec sagittis aliquam. In est ante in
							nibh mauris. Massa id neque aliquam vestibulum. Enim sit amet venenatis urna cursus eget nunc.
						</p>
						<p className="text-md leading-6 text-gray-600 font-roboto">
							Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Nascetur ridiculus mus mauris vitae ultricies leo. Egestas
							erat imperdiet sed euismod nisi porta lorem. Vulputate mi sit amet mauris. Nulla aliquet enim tortor at auctor urna nunc.
							Neque ornare aenean euismod elementum. Dignissim suspendisse in est ante in nibh mauris cursus mattis. Eget nullam non
							nisi est sit amet. At augue eget arcu dictum. Nibh tellus molestie nunc non blandit massa enim nec dui. Tristique risus
							nec feugiat in fermentum posuere urna nec tincidunt. Vitae congue eu consequat ac felis donec et odio pellentesque. Odio
							ut sem nulla pharetra diam sit amet nisl. Convallis a cras semper auctor neque vitae tempus quam. Sagittis purus sit amet
							volutpat.
						</p>
					</div>
				</div>
			</div>
		</RouteWrapper>
	);
}

export default Story;
