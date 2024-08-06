const Value = () => {
    return (
        <section name="services" className="text-black h-auto">
            <div className=" flex h-auto gap-5 blog_write_value my-4 ml-10 mr-4">
            <div className=" flex flex-col justify-evenly w-full">
                <div className="bg-white ml-4  mb3">
                <h2 className="font-semibold text-3xl text-orange-500 text-balance my-2">
                    Drilling is an extremely positive enterprise, find out? 
                </h2>
                <span className="text-slate-500">
                    Whether you're a construction company, partnering with TEMATS can bring numerous advantages to your business.
                </span>
                </div>

                <div className="px-8 flex flex-col gap-6 border-black border-l-4">
                <div>
                    <h1 className="text-xl font-semibold mb-2 text-neutral-700">
                        Performance Efficiency
                    </h1>
                    <span className="text-slate-700">
                        Drilling is a complex and challenging process that requires specialized skills and resources. Partnering with TEMATS allows you to benefit from our expertise, experience, and cutting-edge technology. We help you to streamline your operations, minimize downtime, increase productivity, and maximize profits.
                    </span>
                </div>

                <div>
                    <h1 className="text-xl font-semibold mb-2 text-neutral-700">
                        Cost Effective
                    </h1>
                    <span className="text-slate-700">
                        Outsourcing drilling services can save you money in various ways. Firstly, you don't have to invest in expensive equipment and tools required for drilling activities. Secondly, you can avoid the cost of hiring and training in-house drilling professionals. You only pay for the services and equipment that you need when you need them. It helps to keep your costs low while enjoying high-quality services
                    </span>
                </div>

                <div>
                    <h1 className="text-xl font-semibold mb-2 text-neutral-700">
                        Risk Mitigation
                    </h1>
                    <span className="text-slate-700">
                        Drilling is a hazardous activity that poses significant risks to workers and the environment. However, TEMATS have extensive experience in managing and mitigating these risks. We adhere to the strictest industry standards and best practices, ensuring your operations are not exposed to unnecessary risks.
                    </span>
                </div>
                </div>
            </div>

            <figure
                className="bg-gradient-to-tr from-yellow-300 to-orange-500 flex justify-center rounded-lg w-full">
                <video
                    src="./vid_1.mp4"
                    autoPlay
                    muted
                    loop
                    className="h-[75vh] rounded-md m-5"
                />
            </figure>
            </div>
        </section>
    );
}

export default Value