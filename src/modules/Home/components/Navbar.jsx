// import { Disclosure} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link, animateScroll as scroll } from 'react-scroll';
// import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleClick = () => setNav(!nav);

    return (
        <>
            <nav name='nav' className='max-w-screen-xl h-[80px] z-10 bg-white  drop-shadow-lg'>
                <div className='px- flex justify-between items-center w-full h-full'>
                    <div className='flex items-center mx-3'>
                        <a href="" className="flex items-center">
                            <img src="temlogs.svg" className="h-12 mr-[-1.25rem]" alt="Temats Logo" />
                            <span className="self-center text-3xl font-bold whitespace-nowrap uppercase text-black flex flex-col justify-end h-[7vh]">emats</span>
                        </a>
                    </div>
                    <ul className="hidden font-medium sm:flex inset-0">
                        <li>
                            <Link to="home" smooth={true} offset={50} duration={1000} className="block py-2 pl-3 pr-4 text-white bg-orange-500 rounded dark:text-white  cursor-pointer" aria-current="page" >Home</Link>
                        </li>
                        <li>
                            <Link to="about" smooth={true} offset={50} duration={1000} className="block py-2 pl-3 pr-4 text-gray-900 hover:text-orange-500 cursor-pointer" >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="products" smooth={true} offset={50} duration={1000} className="block py-2 pl-3 pr-4 text-gray-900 hover:text-orange-500 cursor-pointer">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link to="services" smooth={true} offset={50} duration={1000} className="block py-2 pl-3 pr-4 text-gray-900 hover:text-orange-500 cursor-pointer">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="footer" smooth={true} offset={50} duration={1000} className="block py-2 pl-3 pr-4 text-gray-900 hover:text-orange-500 cursor-pointer">
                                Contact
                            </Link>
                        </li>
                    </ul>

                    <div className="sm:hidden m-3" onClick={handleClick}>
                        {
                            !nav ? <Bars3Icon className='w-8 text-black cursor-pointer' /> : <XMarkIcon className='w-8 text-black cursor-pointer' />
                        }
                    </div>

                    <ul className={!nav ? 'hidden' : 'absolute flex flex-col gap-2 bg-zinc-100 rounded-b-lg  w-full p-4 top-20'}>
                        <li>
                            <Link to="home" smooth={true} offset={50} duration={1000} className="block py-2 pl-3 pr-4 text-white  bg-orange-500  cursor-pointer rounded" aria-current="page" >Home</Link>
                        </li>
                        <li>
                            <Link to="about" smooth={true} offset={50} duration={1000} className="block py-2 pl-3 pr-4 text-gray-900 hover:text-orange-500 hover:bg-white cursor-pointer rounded" >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="products" smooth={true} offset={50} duration={1000} className="block py-2 pl-3 pr-4 text-gray-900 hover:text-orange-500 hover:bg-white cursor-pointer rounded">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link to="services" smooth={true} offset={50} duration={1000} className="block py-2 pl-3 pr-4 text-gray-900 hover:text-orange-500 hover:bg-white  cursor-pointer rounded">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="footer" smooth={true} offset={50} duration={1000} className="block py-2 pl-3 pr-4 text-gray-900 hover:text-orange-500  hover:bg-white cursor-pointer rounded">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar