import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
    const links = [
        { id: 1, name: "home" },
        { id: 2, name: "about" },
        { id: 3, name: "portifolio" },
        { id: 4, name: "experience" },
        { id: 5, name: "contact" }
    ];

    const [nav, setNav] = useState(false);

    return (
        <div className="flex justify-between items-center w-full h-20 bg-violet-900 text-white fixed px-4">
            <div>
                <h1 className="text-4xl font-signature ml-2">Nathan Felipe</h1>
            </div>

            <ul className="hidden md:flex">
                {links.map(({ id, name }) => {
                    return (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200">
                            {name}
                        </li>
                    );
                })}
            </ul>

            <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-white md:hidden">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-violet-900 to-violet-500 text-white">
                    {links.map(({ id, name }) => {
                        return (
                            <li
                                key={id}
                                className="px-4 cursor-pointer capitalize py-6 text-3xl">
                                {name}
                            </li>
                        );
                    })}

                </ul>
            )}
            
        </div>
    );
}

export default NavBar;