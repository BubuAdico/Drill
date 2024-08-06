import { GiArrowsShield } from "react-icons/gi";
import { GiMineTruck } from "react-icons/gi";
import { GiCircularSawblade } from "react-icons/gi";
import { ImPower } from "react-icons/Im";
import { GiCutDiamond } from "react-icons/gi";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const Truck = () => {
    return (
        <section className="truck min-w-full overflow-hidden text-black">
            <div className="m-[1rem] splide_card bg-neutral-300 rounded-md">
                <div className="p-2 text-black min-w-full flex">
                    <header className="text-black w-full flex flex-col items-center">
                        {/* <small>Oustanding machine</small> */}
                        <h3 className="font-semibold text-center text-2xl">The Tough built LGMRT Integrated DTH Drill Rig</h3>
                        <span className="text-center text-orange-500 text-lg">
                            LGMRT Horse Power is an outstanding truck with levers that can be used to drive through hard ground.
                        </span>
                    </header>
                </div>

                <div className="flex w-full h-auto py-8 justify-center tier-two-parent">
                    <div className="w-full flex h-auto items-center justify-around mx-[3rem] tier-two secondlayer">
                        <div className="flex flex-col gap-14 w-full">
                            <div className="flex flex-col items-center p-2 text-center">
                                <GiArrowsShield className="my-2 w-full" size={70} />
                                <span className="text-balance">
                                    Open layouts are easy to maintain and can reduce downtime. All daily maintenance points are located at ground level to simplify the process and improve the safety of service staff
                                </span>
                            </div>

                            <div className="flex flex-col items-center p-2 text-center">
                                <ImPower className="my-2 w-full" size={70} />
                                <span className="text-balance">
                                    The precise alignment of the power system and the hammer size, enables the drill rig to give higher productivity, keeping fuel consumption and operating costs as low as possible
                                </span>
                            </div>
                        </div>

                        <figure className="m-">
                            <LazyLoadImage src="surface_th_drill2.png" alt="LGMRT truck" effect="blur" className="w-[145rem]" />
                        </figure>

                        <div className="flex flex-col gap-14 w-full">
                            <div className="flex flex-col items-center p-2 text-center">
                                <GiCircularSawblade className="my-2 w-full" size={70} />
                                <span className="text-balance">
                                    Strong power output from engine and high pressure air compressor to ensure perfect drilling penetration
                                </span>
                            </div>

                            <div className="flex flex-col items-center p-2 text-center">
                                <GiMineTruck className="my-2 w-full" size={70} />
                                <span className="text-balance">
                                    The design concept of "SAFETY FIRST" and "EVIRONMENTAL PROTECTION" ensures the construction of green mines
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="w-full flex flex-col items-center">
                        <div className="w-[20rem] flex flex-col items-center p-2 text-center m-2">
                            <GiCutDiamond size={70} />
                            <span className="text-balance text-center">
                                LGMRT Horse Power is an outstanding truck with levers that can be used to drive through hard ground.
                            </span>
                        </div>
                    </div>

                    <div className="w-full flex justify-center ">
                        <a href="http://en.lgmrt.com/product/ltpro-detail-3139.htm" rel="noreferrer" className="hirebutton w-[10rem] p-2 border-[2.5px] bg-transparent text-xl text-center border-white mb-7">Learn more</a>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Truck