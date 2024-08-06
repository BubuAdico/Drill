import { useState } from "react";
import {machines, spareParts} from "./ServiceData";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { ServiceAbout } from "./components";
import ServiceLocation from "./components/ServiceLocation";




const Services = () => {

	const [ ServiceParts, setServiceParts ] = useState(spareParts)
	function filter (type, e)  {
		setServiceParts(spareParts.filter(product => product.type === type))
		e.preventDefault()
	}
	
	const [animationParent] = useAutoAnimate()

	return (
		<section className="min-w-full text-black overflow-hidden">
			<head className="bg-white drop-shadow-lg flex justify-around">
					<div className="m-2 overflow-hidden">
						<h5 className="text-lg font-semibold text-bg-primary/90">Call our Support</h5>
						<code>24 / 7 Support Line: +233 (0) 2439-277-11</code>
					</div>

					<div className="m-2 overflow-hidden">
						<h5 className="text-lg font-semibold text-bg-primary/90">Regional Location</h5>
						<code>Tema, Greater Accra Region - Ghana</code>
					</div>

					{/* <div className="m-2">
						<h5 className="text-lg font-semibold text-bg-primary/90">Head Office</h5>
						<code>Alberta, Canada</code>
					</div> */}
			</head>

			<ServiceAbout />
			<ServiceLocation />

			<div>
				<div className="m-8 media-q-text text-center text-balance">
					<span className="text-bg-primary/90">TEMATS deliver product equipment and services across Africa</span>
				</div>

				<div name="products" className="">					
					<Splide options= {{
										perPage: 4,
										arrows: true,
										pagination: false,
										gap: '2rem',
										drag: 'free',
										type: 'loop',
										lazyLoad:'nearby',
										pauseOnFocus: false,
										flickPower: 600,
										easing:'cubic-bezier(0.25, 1, 0.5, 1)',
										speed: 2500,
										autoplay: true,
										updateOnMove : true,
										breakpoints: {
											1024: {
												perPage: 3,
											},
											767: {
												perPage: 2,
											},
											640: {
												perPage: 1,
											},
											620: {
												perPage: 1,
											},
											590: {
												perPage: 1,
											},
											480: {
												perPage: 1,
											},
											414: {
												perPage: 1,
											},
											375: {
												perPage: 1,
											},
											360: {
												perPage: 1,
											},
										},
									}}  className="med-q-g w-full place-items-center border-4 border-gray-300 p-4 overflow-hidden">
						{
							machines.map((machine, i) => (
								<SplideSlide key={i} className="w-full bg-neutral-300 hover:bg-bg-primary/80 borer-2 boder-bg-primary/80 hover:text-white rounded-lg splide_card hadow-lg m-auto flex flex-col flex-wrap px-4 py-2 overflow-hidden transition-lg cursor-grab active:cursor-grabbing">
									<div className="w-full min-h-[40vh]">
										<img src={machine.img} alt={machine.name} title={machine.name} className="w-full rounded-md my-2" />

										<div className="m-auto flex flex-col py-1">
											<figcaption className="media-q-text-sm">{machine.name}</figcaption>

											{/* <span className="bg-yellow-400 my-2 rounded-lg px-1 max-w-[7rem] hove:text-black">@ GHC { machine.price }</span> */}
											
											{/* <span>{machine.specs}</span> */}
										</div>
									</div>
								</SplideSlide>
							))
						}
					</Splide>

					<div className="p-10 overflow-hidden">
						{/* ? overflow carousek is the media query for the ul, when the letter l is added is gonna be active */}
						<ul className="flex media-q-text-sm p-[0.8rem] min-w-full justify-evenly items-center bg-white/75 border rounded-xl shadow-sm overflow-carouse gap-2 text-[.9rem] overflow-hidden">
							<li onClick={() => setServiceParts(spareParts) }
							className="cursor-pointer bg-neutral-400 bg-b-primary/80 hover:bg-bg-primary/90 text-center p-[0.1rem] flex justify-center hover:shadow-md boder-white/50 rounded-xl items-center w-20 text-white font-semibold overflow-hidden">all</li>

							<li onClick={ () => filter("Injectors") }
							className="cursor-pointer bg-neutral-400 bg-b-primary/80 hover:bg-bg-primary/90 text-center flex justify-center hover:shadow-md boder-white/50 rounded-full items-center w-[2rem] h-[2rem] text-white font-semibold overflow-hidden">1</li>

							<li onClick={ () => filter("tire") }
							className="cursor-pointer bg-neutral-400 bg-b-primary/80 hover:bg-bg-primary/90 text-center flex justify-center hover:shadow-md boder-white/50 rounded-full items-center w-[2rem] h-[2rem] text-white font-semibold overflow-hidden">2</li>

							<li onClick={ () => filter("Hydraulic Cylinder") }
							className="cursor-pointer bg-neutral-400 bg-b-primary/80 hover:bg-bg-primary/90 text-center p-[0.2rem] flex justify-center hover:shadow-md boder-white/50 rounded-full items-center w-[2rem] h-[2rem] text-white font-semibold text-balance overflow-hidden">3</li>

							<li onClick={ () => filter("Hydraulic Pump") }
							className="cursor-pointer bg-neutral-400 bg-b-primary/80 hover:bg-bg-primary/90 text-center p-[0.2rem] flex justify-center hover:shadow-md  boder-white/50 rounded-full items-center w-[2rem] h-[2rem] text-white font-semibold text-balance overflow-hidden">4</li>

							<li onClick={() => filter("Rod")}
							className="cursor-pointer bg-neutral-400 bg-b-primary/80 hover:bg-bg-primary/90 text-center p-[0.2rem] flex justify-center hover:shadow-md boder-white/50 rounded-full items-center w-[2rem] h-[2rem] text-white font- overflow-hidden">5</li>
						</ul>

						<p className="text-2xl my-8 font-semibold text-bg-primary/90">Spare-parts</p>
					</div>
					
					<div className="w-full overflow-hidden">
						<div ref={animationParent} className="bg-neutral-300 rounded-md mx-4 grid justify-items-center max-w gap-x-8 gap-y-16 py-8 lg:px-8 ss:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 splide_card overflow-hidden">
							{
								ServiceParts.map((parts) => (
									<figure key={parts.id} className="w-80 flex flex-row gap-3 bg-white px-2 rounded-md  h-28 overflow-hidden">
										<LazyLoadImage src={parts.img} title={parts.name} className="w-40 rounded-md my-2" />
										<div className="flex flex- items-center text-balance text-lg font-medium">
											<figcaption> { parts.name } </figcaption>
										</div>
									</figure>
								))
							}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Services