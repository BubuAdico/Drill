import CTA from "./components/CTA"
import { FiTwitter } from "react-icons/fi";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import Flag from 'react-world-flags'
import { Link, animateScroll as scroll } from "react-scroll";


const Footer = () => {
	return (
		<main className="h-auto flex flex-col justify-between">
			{/* Call to Action (CTA) */}
			<CTA />
			{/* Call to Action (CTA) */}

			<section className="w-full h-auto bg-black	flex p-3 justify-between overflow-hidden footer-section gap-5">
				<section className="items-start h-auto flex ">
					<div className="p-5 h-auto">
					<header className="media-q-text tracking-wider">
							<figure className="w-full gap-3 items-center flex p-">
							<Link to="home" smooth={true} offset={50} duration={1000} className="flex items-center">
								<img src="temlogs.svg" className="h-12 mr-[-1.25rem]" alt="Temats Logo" />
								<span className="self-center text-3xl font-bold whitespace-nowrap dark:text-white uppercase text-white flex flex-col justify-end h-[7vh]">
										emats
								</span>
							</Link>

						</figure>
					</header>

					<div className="intro-foot-icons mt-3 flex gap-1">
						<div
						className="intro-foot-icons-twitter flex items-center">
						<span className="text-md hover:text-white social_media_names pl-2">
							<a href="">
							<FiTwitter />
							</a>
						</span>
						</div>

						<div
						className="intro-foot-icons-linkedIn flex items-center">
						<span className="text-md hover:text-white social_media_names pl-2">
							<a href="">
							<AiOutlineFacebook />
							</a>
						</span>
						</div>

						<div
						className="intro-foot-icons-instagram flex items-center">
						<span className="text-md hover:text-white social_media_names pl-2">
							<a href="">
							<FiInstagram />
							</a>
						</span>
						</div>
					</div>
					</div>
				</section>

				<section className="items-start h-auto flex">
					<div className="p-4 h-auto">
					<header className="media-q-text tracking-wider">
						<span className="text-white">Registered Office</span>
					</header>

					<ul className="mt-4">
						<li className="	flex items-center footer_info">
						<span className="text-lg my-2 pl-2 footer_info	text-white">
							TEMATS MTSS
						</span>
						</li>
					</ul>

					<address className=" flex items-center">
						<span className="text-lg pl-2 text-white">
						<p>C/O Box 1585 - Tema.</p>
						<p>Greater Accra Region</p>
						<p className="flex flex-row items-center w-[15rem]">West Africa - Ghana</p>
						<p className="flex flex-row gap-5"><Flag code="GH" width="30" /> +233 (0) 243927711</p>
						<p className="flex flex-row items-center w-[15rem] gap-[20px]"><Flag code="TG" width="30" /> +22896166465</p>
						<p className="flex flex-row items-center w-[15rem] gap-[20px]"><Flag code="BJ" width="30" /> +22950085390</p>
						<p className="flex flex-row items-center w-[15rem] gap-[20px]"><Flag code="GN" width="30" /> +224623207794</p>
						</span>
					</address>
					</div>
				</section>

				{/* <section className="items-start h-auto flex">
							<div className="p-5 h-auto">
								<header className="media-q-text tracking-wider">
									<span className="text-white">Canada Office</span>
								</header>

								<ul className="mt-4">
									<li className="	flex items-center footer_info">
										<span className="text-lg my-2 pl-2 footer_info text-white">
											Canada Office
										</span>
									</li>
								</ul>

								<address
									className=" flex items-center">
									<span
										className="text-lg pl-2 text-white">
										<p>Pavilion 4</p>
										<p>Westpoint Business Park</p>
										<p>JSQ 1B, Commercial lane</p>
										<p>Alberta AB32 6FE</p>
										<p className="my-1">+1(0) 1224 434327</p>
									</span>
								</address>
								
							</div>
				</section> */}

				<section className="items-start h-auto flex">
					<div className="p-5 h-auto">
					<header className="media-q-text tracking-wider">
						<span className="text-white">Contact</span>
					</header>

					<ul name="footer" className="cursor-pointer mt-4">
						<li className="	flex items-center">
						<span className="text-lg pl-2	text-white hover:text-orange-500 underline">
							<a href="mailto:info@tematsgroup.com">info@tematsgroup.com</a>
						</span>
						</li>

						{/* <li className=" flex items-center text-white">
						<span className="text-lg pl-2 text-white hover:text-orange-500 underline">
							<a
							href="https://www.tematsgroup.com"
							target="_blank"
							rel="noreferrer"
							>
							tematsgroup.com
							</a>
						</span>
						</li> */}
					</ul>
					</div>
				</section>

				<section className="items-start h-auto flex">
					<div className="p-5 h-auto">
					<header className="media-q-text tracking-wider">
						<span className="text-white">Menu</span>
					</header>

					<ul className="cursor-pointer mt-4">
						<li
						className="	flex items-center">
						<span className="text-lg pl-2 text-white hover:text-orange-500 underline ">
							Connect
						</span>
						</li>

						<li
						className="flex items-center text-white ">
						<span className="text-lg pl-2 text-white hover:text-orange-500 underline ">
							Enterprise
						</span>
						</li>
							
							<Link to="home" smooth={true} offset={50} duration={1000} className="flex items-center flex-col">
								<span className=" px-2 my-4">
									<BsArrowUpCircleFill size='30' className="w-24 animate-bounce" />
									
								</span>
								<li className="font-bold  text-center capitalize">Back to top</li>
							</Link>

					</ul>
					</div>
				</section>

			</section>

			<div className="border-t flex justify-between p-3 bg-black text-white ">
				<span>&copy; {new Date().getFullYear()} TEMATS</span>
				<span>All rights reserved</span>
			</div>
		</main>
	);
}

export default Footer