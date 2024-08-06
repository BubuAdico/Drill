import { SiTrustpilot } from "react-icons/si";
import { GiBrickWall } from "react-icons/gi";
import { GiOilRig } from "react-icons/gi";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import { Navbar } from "./components";
import { Link, animateScroll as scroll } from 'react-scroll'


const Home = () => {

    return (
        <>
            <main name='home' className="min-h-screen mesh bg-fixed overflow-hidden border-b-2">
                <header className="bg-im bg-fixed z-40 text-2xl min-h-full overflow-hidden">
                    <div className="flex blog_write">
                        <div className="flex flex-col ">
                            <h1 className="text-7xl se:text-5xl p-2 xr:text-5xl xs:text-5xl cs:text-5xl ss:text-5xl sm:text-5xl mm:text-6xl md:text-text-6xl lg:text-7xl xl:text-xl overflow-hidden font-semibold se:p-3 xr:p-6 xs:p-6 cs:p-6 ss:px-9 sm:px-10 mm:px-14 md:px-16 lg:px-20 lg:pt-10 xl:px-20 txet-balance mt-3">Drilling <br/> made easy.</h1>
                            {/* <p className="text-2xl max-w-3xl overflow-hidden text-balance relative z-30 se:p-3 xr:p-6 xs:p-6 cs:p-6 ss:px-9 sm:px-10 mm:px-14 md:px-16 lg:px-20 xl:px-20 px-20">Reliable implementation of your water minerals and services in alignment with innovation, technical</p> */}
                            <p className="p-2 se:px-[1rem] xr:px-6 xs:px-6 cs:px-6 ss:px-9 sm:px-10 lg:px-[5rem]">Whether you need to drill or to maintain your drills, we have the expertise and equipement to get the job done</p>

                            <div className="flex flex-row space-x-8 p-2 se:p-3 xr:p-6 xs:p-6 cs:p-6 ss:px-9 sm:px-10 mm:px-14 md:px-16 lg:px-20 xl:px-20 mt-5">
                                <button className="hirebutton w-[10rem] border-[2.5px] border-white">
                                    <Link to="products" smooth={true} offset={50} duration={500} >Our Products</Link>
                                </button>
                                
                                <button className="hirebutton w-[10rem] p-2 border-[2.5px] border-white"><a href="mailto:info@Temats.com">Contact Us</a></button>
                            </div> 
                        </div>

                        <div className="flex flex-col justify-center">
                            <LazyLoadImage src="surface_th_drill2.png" className="float- w-[55rem] mt-[7rem] rounded-lg "/>
                        </div>
                    </div>

                    


                    <section className="w-full flex flex-row justify-center items-center">
                        <section className="h-auto my-[4rem] mx-[0.8rem] overflow-hidden  px-2">
                            <div className="cards flex gap-5 min-w-full">

                                <div className="bg-slate-50 h-[6rem] w-[20rem] border rounded-lg flex items-center space-x-2 pl-2 pr-2 overflow-hidden">
                                    <GiOilRig size={70} color="orangered" />
                                    <h5 className="font-semibold text-black w-full ss:text-lg sm:text-lg mm:text-2xl text-2xl text-justify overflow-hidden text-balance">Robust Drilling Tools</h5>
                                </div>

                                <div className="bg-slate-50 h-[6rem] w-[20rem] border rounded-lg flex items-center place-items-center space-x-2 pl-2 pr-2 overflow-hidden">
                                    <GiBrickWall size={70} color="orangered"/>
                                    <h5 className="font-semibold text-black w-full ss:text-lg sm:text-lg mm:text-2xl text-2xl text-justify overflow-hidden text-balance">Quality equipment</h5>
                                </div>

                                <div className="bg-slate-50 h-[6rem] w-[20rem] border rounded-lg flex items-center place-items-center space-x-2 pl-2 pr-2 overflow-hidden">
                                    <SiTrustpilot  size={70} color="orangered" />

                                    <h5 className="font-semibold text-black w-full ss:text-lg sm:text-lg mm:text-2xl text-2xl text-justify overflow-hidden text-balance">Secured Delivery</h5>
                                </div>

                                {/* <div className="flex flex-col place-items-center justify-center">
                                    <div className="cursor-pointer animate-bounce duration-1000 w-9 h-7">
                                        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" className="" />
                                        </svg>

                                    </div>
                                </div> */}

                            </div>
                        </section>

                    </section>
                </header>
            </main>
        </>
    )
}
export default Home