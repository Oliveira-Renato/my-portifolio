import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
    const links = [
        { id: 1, name: "home" },
        { id: 2, name: "about" },
        { id: 3, name: "portifolio" },
        { id: 4, name: "experience" }, 
        { id: 5, name: "contact" }
    ];

    return (
        <div className="flex justify-between items-center w-full h-20 bg-black text-white fixed px-4">
            <div>
                <h1 className="text-5xl font-signature ml-2">Nathan</h1>
            </div>

            <ul className="flex">
                {links.map(({id, name}) => {
                    return (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
                            {name}
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default NavBar;