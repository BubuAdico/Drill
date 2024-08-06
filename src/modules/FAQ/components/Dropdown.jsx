import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import faqsData from "../data";

const Dropdown = () => {
    return (
        <div className="w-full  px-4 h-auto  pt-6 pb-[4rem]">
            <header className="text-center text-orange-500 m-5">
				<span className="w-full text-5xl font-semibold text-center capitalize">
					Frequently Asked Questions
                </span>
            </header>
			<div className="mx-auto h-auto w-full max-w-6xl rounded-2xl bg-[#776e6bd1] p-2">
				<div className="flex flex-col gap-2">
					{
						faqsData.map((faq) => (
							<Disclosure key={faq.id}>
						{({ open }) => (
							<>
								<Disclosure.Button
									className="flex w-full justify-between rounded-lg bg-neutral-100 px-4 py-2 text-left text-xl font-medium text-bg-primary hover:bg-[#f5f583f9] focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75
									h-auto shadow-md">
								<span>{faq.title}</span>
								<ChevronUpIcon className={`${ open ? "rotate-180 transform" : "" } h-5 w-5 text-orange-500`} />
								</Disclosure.Button>

								<Disclosure.Panel className="px-4 pb-2 text-lg text-white">
									{faq.info}
								</Disclosure.Panel>
							</>
							)}
							</Disclosure>
						))
					}
				</div>
            </div>
        </div>
    );
};

export default Dropdown;
