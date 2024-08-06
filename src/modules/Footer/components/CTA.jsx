// import Form from "./Form";

const CTA = () => {
    return (
        <main
            className="text-white
                        text-5xl
                        b-[#f4f4a9]
                        p-3
                        overflow-hidden
                        w-full
                        "
                        >
            <section className="bg-gradient-to-tr from-orange-600 to-zinc-700 p-10 rounded-2xl flex justify-center overflow-hidden cta-flip">
                <div className="bg-[tomato]/30
                                cta-img
                                bg-blend-multiply
                                rounded-l-lg
                                w-[100%]
                                flex
                                flex-col
                                justify-end
                                items-start
                                h-[60vh]
                                ">
                    <div className="p-1 bg-gradient-to-tr
                                    from-bg-basetrack
                                    via-orange-600
                                    via-transparent 
                                    w-full
                                    rounded-l-lg
                                    "
                    >
                        <header className="uppercase text-white font-bold text-5xl  antialiased overflow-hidden">
                            Temats
                        </header>

                        <p className="antialiased text-3xl overflow-hidden">
                            Drilling equipment you can trust
                        </p>
                    </div>
                </div>

                {/* <Form /> */}
            </section>
        </main>
    );
};

export default CTA;
