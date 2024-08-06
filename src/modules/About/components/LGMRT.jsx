const LGMRT = () => {
    return (
        <section className="min-w-full overflow-hidden text-black">
            <div className="bg_lgmrt m-4 bg-neutral-300 rounded-md flex flex-col flex-wrap items-end content-end p-8 gap-9">
                <div className="float-left w-full">

                {/* <img src="./lgmrt_tinted.svg" alt="lgmrt" className="float-left" /> */}
                </div>
                
                <div className="media-q-text text-balance text-slate-900">
                    LGMRT provides mining and rock <br /> equipment products including <br/> surface and underground drill rigs,<br/> underground loaders and trucks <br/> and services to China, other <br /> BRICS countries and B&R countries.
                    {/* Discover why millions of <br /> entrepreneurs chose Shopify to <br /> build their business — <br /> from hello world to IPO. */}
                </div>

                <div className="grid grid-cols-2 gap-2 bg-slate-100 p-2 rounded-md text-balance content-end items-end overflow-hidden">
                    <div className="bg-blue-600 text-white rounded-s-md flex flex-col p-1 gap-2 overflow-hidden lgmrt_blue_card">
                        <strong>Mining & Rock</strong>
                        <span>Robust equipment</span>
                    </div>

                    <div className="bg-blue-600 text-white rounded-e-md flex flex-col p-1 gap-2 overflow-hidden lgmrt_blue_card">
                        <strong>3+ Affiliations with</strong>
                        <span>SANDVIK, LINGONG Group</span>
                    </div>

                    <div className="bg-blue-600 text-white rounded-s-md flex flex-col p-1 gap-2 overflow-hidden lgmrt_blue_card">
                        <strong>4+ Categories of</strong>
                        <span>Hot-Sale equipment</span>
                    </div>

                    <div className="bg-blue-600 text-white rounded-e-md  flex flex-col p-1 gap-2 overflow-hidden lgmrt_blue_card">
                        <strong>24/7 Customer Support</strong>
                        <span>Maintenance & Service</span>
                    </div>

                </div>

                <span className="flex overflow-hidden">
                    <a href="http://en.lgmrt.com/" target="_blank" rel="noreferrer" className="lgmrt_hirebutton text-xl w-[10rem] p-2 border-[2.5px] bg-transparent text-center border-white">Learn more</a>
                </span>
            </div>
        </section>

    )
}

export default LGMRT;