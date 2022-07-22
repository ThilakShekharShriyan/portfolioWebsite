
import React, { useState } from "react";
import Link from 'next/link'
import Image from 'next/image'

import { Transition } from "@headlessui/react";

import { useTheme } from "next-themes"

export const NavigationBar = () => {
    const { theme, setTheme } = useTheme()
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="sticky top-0 p-5 ">
            <nav className="w-full ">
                <div className="w-full">
                    <div className="flex items-center w-full ">
                        <div className="flex items-center justify-between w-full mx-20">
                            <div className="flex items-center justify-center flex-shrink-0 ">
                                <button onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}>
                                    <span className="text-3xl font-semibold cursor-pointer">Thilak Shriyan </span>
                                </button>
                            </div>
                            <div className="hidden md:block ">
                                <div className="flex items-baseline ml-10 space-x-4">
                                    <Link
                                        href=""
                                        activeClass="Home"
                                        to="about"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="px-3 py-2 font-semibold text-blue-600 cursor-pointer text-md hover:font-black"
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        href=""
                                        activeClass="about"
                                        to="about"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="px-3 py-2 text-sm font-medium text-black rounded-md cursor-pointer hover:bg-blue-600 hover:text-white"
                                    >
                                        About
                                    </Link>
                                    <Link
                                        href=""
                                        activeClass="Blog"
                                        to="work"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="px-3 py-2 text-sm font-medium text-black rounded-md cursor-pointer hover:bg-blue-600 hover:text-white"
                                    >
                                        Blog
                                    </Link>

                                    <Link
                                        href=""
                                        activeClass="Contact"
                                        to="work"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="px-3 py-2 text-sm font-medium text-black rounded-md cursor-pointer hover:bg-blue-600 hover:text-white"
                                    >
                                        Contact
                                    </Link>

                                </div>
                            </div>
                        </div>
                        <div className="flex mr-10 md:hidden ">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="inline-flex items-center justify-center p-2 "
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block w-6 h-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block w-6 h-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div
                                ref={ref}
                                className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
                            >
                                <ul className="flex flex-col items-center space-y-6">
                                    <li>
                                        <Link
                                            href="/home"
                                            activeClass="home"
                                            to="home"
                                            smooth={true}
                                            offset={50}
                                            duration={500}
                                            className="block px-3 py-2 text-base font-medium text-black rounded-md cursor-pointer "
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/about"
                                            activeClass="about"
                                            to="about"
                                            smooth={true}
                                            offset={50}
                                            duration={500}
                                            className="block px-3 py-2 text-base font-medium text-black rounded-md cursor-pointer "
                                        >
                                            About
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            href="/blog"
                                            activeClass="work"
                                            to="work"
                                            smooth={true}
                                            offset={50}
                                            duration={500}
                                            className="block px-3 py-2 text-base font-medium text-black rounded-md cursor-pointer "
                                        >
                                            Blog
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            href="/contact"
                                            activeClass="work"
                                            to="work"
                                            smooth={true}
                                            offset={50}
                                            duration={500}
                                            className="block px-3 py-2 text-base font-medium text-black rounded-md cursor-pointer "
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>



    )
}
