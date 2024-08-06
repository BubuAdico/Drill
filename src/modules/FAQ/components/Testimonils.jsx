import { testimonials } from "../data";

const Testimonials = () => {
    return (
        <main>
            <section className="m-3 bg-gradient-to-b from-yellow-300 to-orange-500 b-[#ffff88] rounded-lg border-inset overflow-hidden shadow-lg">
                <div className="overflow-hidden my-9">
                    <div className="mx-9">
                        <header className="text-4xl text-white font-semibold">What others think of us</header>
                        <p
                            className="text-xl text-balance
                                    text-[#ffffffdf]
                                        pb-5
                                        border-[snow]
                                        border-b-8
                                        rounded-md
                                        "
                        >
                            Our services still lingers in their hearts 
                        </p>
                    </div>
                    <div className="blog_write overflow-hidden flex w-full min-h-min gap-7 px-8 pt-8">
                        {testimonials.map((testimonial) => {
                            return (
                                <section
                                    key={testimonial.id}
                                    className="mx-auto
                                                w-full
                                                overflow-hidden
                                                rounded-xl
                                                p-2
                                                border-2
                                                border-[burlywood]
                                                hover:border-white
                                                bg-[#ffffff59]
                                                max-w-screen-ss
                                                transition-all
                                                hover:scale-up
                                                "
                                >
                                    <div className="p-3">
                                        <div className="m-1">
                                            <small
                                                className="
                                                            text-white
                                                            w-[70px]
                                                            flex 
                                                            justify-center
                                                            rounded-full
                                                            mb-2
                                                            "
                                                style={{background:testimonial.color}}
                                            >
                                                {testimonial.company}
                                            </small>
                                            <header className="text-2xl text-slate-600 font-semibold my-2 bolder">
                                                {testimonial.title}
                                            </header>
                                            <p className="text-lg">
                                                {testimonial.content}
                                            </p>
                                        </div>
                                        <figure className="flex hover:text-orange-500 gap-1 items-center justify-between mt-4">
                                            <span className="cursor-pointer text-sm tracking-tighter hover:underline transition-all"></span>

                                            <div className="flex items-center gap-1 cursor-pointer transition-all">
                                                <div className="rounded-full h-[50px] w-[50px] flex flex-col items-center justify-center">
                                                    <img
                                                        src={testimonial.photo}
                                                        alt="testimonials_image"
                                                        className="h-[40px] w-[40px] rounded-full"
                                                    />
                                                </div>
                                                <figcaption>
                                                    {testimonial.name}
                                                </figcaption>
                                            </div>
                                        </figure>
                                        {/* <span>{testimonial.date}</span> */}
                                    </div>
                                </section>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Testimonials;
