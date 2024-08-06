import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const ServiceLocation = () => {
    return (
        <section className="mx-4 my-4 overflow-hidden">
            <p className="text-3xl font-semibold text-orange-500 mx-4 my-5 sm:my-2">Our Sitemap</p>
            <div className="flex blog_write cards gap-3">
                <div className="mx-3 rounded-md gap-3 flex flex-col overflow-hidden">
                    <div className="">
                        <span className="text-3xl text-orange-500">
                            1,&nbsp;000+
                            <small><sub>drilling operations</sub></small>
                        </span>
                        <p className="my-4 font-medium">
                            The Company&apos;s core business activities are drilling boreholes, mining and construction and full range of rig-up services. The Company mainly operates in  Tema Ghana, Nigeria, Gambia and Mali.
                        </p>
                    </div>

                    <div className="">
                        <span className="text-3xl text-orange-500">
                            Maintenance, Repair Services and sales
                        </span>
                        <div className="my-4">
                            <p></p>
                            <ul className="space-y-3 font-medium">
                                <li>Drill Rig Repair & Construction</li>
                                <li>We rent equipment</li>
                                {/* <li>Control System Repair Services</li> */}
                                <li>Diesel Engine Overhaul & Repair</li>
                                <li>We train technicians and operators</li>
                                <li>We sell rock tools</li>
                                <li>Machinery Maintenance Services</li>
                                <li>We sell heavy duty equipment(LGMRT)</li>
                                {/* <li>General Machinery Services</li> */}
                                <li>We rebuild and repair the following; Hydraulic cylinders, drifters, hydraulic rammers, compressors, gear box and engine
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* <div className="">
                        <span className="text-3xl text-orange-500">
                            3,&nbsp;000+
                            <small><sub>drilling operations</sub></small>
                        </span>
                        <p className="my-4">
                            The Company&apos;s core business activities are drilling of oil and gas wells and full range of rig-up services. The Company mainly operates in  Tema Ghana, Nigeria, Gambia and Mali.
                        </p>
                    </div> */}
                </div>

                <figure className="overflow-hidden order-first w-full flex b-gradient-to-tr from-orange-500 to-yellow-400 justify-center">
                    <LazyLoadImage src="locations_temats.svg" alt="locations_temats" effect="blur" className="h-[39rem] rounded-lg" />
                </figure>
            </div>
        </section>
    )
}

export default ServiceLocation