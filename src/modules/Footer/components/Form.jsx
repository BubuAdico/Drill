const Form = () => {
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className="w-full">
            <form
                onSubmit={handleSubmit}
                className="flex
                            flex-col
                            gap-4
                            border-2
                            p-5
                            rounded-r-lg
                            border-white
                            shadow-//[inset_0_15px_2px_rgb(,1,1,.2)]
                            overflow-hidden
                            form-control
                            text-2xl
                            "
            >
                <div className="col-span-6 sm:col-span-4">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        placeholder="Name"
                        className="mt-1 block text-white md:text-lg border-b-[1px] p-2 w-full rounded-none border-white shadow-sm focus:border-bg-baseline focus:ring-bg-baseline sm:text-sm bg-transparent focus:outline-none outline-none transition-all"/>
                </div>

                <div className="col-span-6 sm:col-span-4">
                    <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        placeholder="E-mail"
                        className="mt-1 block md:text-lg text-white p-2 w-full bg-transparent autofocus:none border-white border-b-[1px]  rounded-none shadow-sm focus:border-bg-baseline
                                    focus:ring-black
                                    sm:text-sm
                                    outline-none
                                    focus:outline-none
                                    transition-all
                                    focus:none
                                    "/>
                </div>

                <div>
                    <div className="">
                        <textarea
                            id="about"
                            name="about"
                            rows={5}
                            cols={30}
                            className="mt-1
                                    block
                                    w-full
                                    text-gray
                                    md:text-xl
                                    p-3
                                    rounded-md
                                    shadow-sm focus:border-bg-baseline
                                    focus:ring-bg-baseline
                                    sm:text-sm
                                    border-[1px]
                                    b-gray-700
                                    text-xl
                                    rounded-t-md
                                    bg-transparent
                                    focus:outline-none
                                    border-white
                                    textarea-box
                                    "
                            placeholder="message us here"
                            defaultValue={""}
                        />
                    </div>
                </div>

                <div className="w-full flex justify-center">
                    <button type="submit" className="min-w-full rounded-lg transition-lg hover:bg-black text-white flex flex-col justify-center items-center p-3 m-5 border border-white hover:border-black cursor-pointer text-2xl overflow-hidden">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
