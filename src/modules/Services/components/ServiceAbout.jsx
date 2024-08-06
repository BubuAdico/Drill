// import { LazyLoadImage } from "react-lazy-load-image-component";

const ServiceAbout = () => {
	return (
	<main name="about" className="service_sec_ flex flex-col gap-2 h-auto ">
	<section className="flex	service_sec_con	xl:flex-row	lg:flex-row	md:flex-row mm:flex-row sm:flex-col ss:flex-col xs:flex-col xr:flex-col se:flex-col	sg:flex-col h-auto flex-row w-[100%] ">
		<section className="w-[100%] flex flex-col text-white">
		<header className="w-[100%] flex flex-col justify-evenly h-auto text-black ">
			<div className="mx-4 media-q-text  text-bg-primary my-5">
			<span>About Us</span>
			</div>
			<div className="flex flex-col h-auto overflow-hidden">
			{/* <figure className="w-full flex">
								<div className="shape-margin m-4 rounded-lg">
									<div className="shape"></div>
									<p className="text-black lowercase">
										<span className="capitalize"> TETTEY MTSS LTD (TEMATS) </span> is a well-established DRILL RIG, HYDRAULIC HAMMER SPARE PARTS, ROCK TOOLS, TECHNICAL TRAINING AND SERVICES SUPPLIER that serves its customers in West Africa with Head office in Alberta CANADA. TEMATS is constantly improving its product portfolio and services in alignment with innovation, technical expertise and customer-centric vision.
									</p>
								</div>
							</figure> */}

			<figure className="w-full flex">
				<div className="shape-margin about_service mx-4 rounded-lg">
				<div className="float-left shape1"></div>
				<p className="text-zinc-800 text-justify text-balance  font-semibold">
					<span className="capitalize">A</span>t{" "}
					<span className="capitalize">TEMATS MTSS</span>, we deliver the
					mission of generating real-world solutions for our
					customers. We export and import innovative solutions across
					the world from developed regions to emerging markets. We
					export to countries such as Benin, Burkina Faso, Cape Verde, Côte d&apos;Ivoire, The Gambia, Guinea, Guinea-Bissau, Liberia, Mali, Niger, Nigeria, Senegal, Sierra Leone, and
					Togo
				</p>
				</div>
			</figure>

			<figure className="w-full flex">
				<div className="shape-margin about_service mx-4 my-6 rounded-lg">
				<div className="float-right shape"></div>
				<p className="text-zinc-800 text-left text-balance  font-semibold">
					TEMATS is dedicated to customer services and after-sales maintenance supports to all its international customers. We also supply all equipment and machine parts used by the  following companies; Atlas Copco, Epiroc, Tamrock, Sandvik, Furukawa, Montabert and any other original equipment manufacturers with registered trademarks of their respective original equipment manufacturers.
				</p>
				</div>
			</figure>
			</div>
		</header>
		</section>

		<section className="p- text-4xl w-full">
		<section
			className="service_img bg-orange-500/75 min-h-[75vh] relative flex flex-col justify-end w-auto overflow-hidden ">
			<div className="h-full absolute flex flex-col justify-end w-auto overlay overflow-hidden ">
			<div className="h-50 transition-all flex flex-col justify-end bg-gradient-to-tl from-orange-500 via-orange-600 via-transparent ">
				<p className="pl-5	py-0 text-[#fffafa] xl:text-3xl lg:text-2xl md:text-2xl text-2xl overlay-text text- overflow-hidden">
				TEMATS is constantly improving its product portfolio and
				services in alignment with innovation, technical expertise and
				customer-centric vision.
				</p>
				<div className="p-5 text-end">
				<button type="button" className="bg-bg-intro text-[#fffafa] p-2 rounded xl:text-3xl lg:text-2xl mm:text-2xl md:text-2xl sm:text-2xl ss:text-xl xs:text-xl overflow-hidden  cursor-pointer ">
					<button className="hirebutton w-[10rem] p-2 border-[2.5px] border-white">
					<a href="mailto:foster.tettey@tematsgroup.com">Hire Us</a>
					</button>
				</button>
				</div>
			</div>
			</div>
		</section>
		</section>
	</section>

	{/* Another section of services */}
	</main>
);
}

export default ServiceAbout