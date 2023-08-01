import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
    const [nav, setNav] = useState(false);

    return (
        <div className='bg-black w-full h-20 flex justify-between items-center'>
            <div className="left text-white ml-4">
                <h1 className='text-4xl font-signature'>Raghib</h1>
            </div>
            <div className="right mr-4">

                <ul className="hidden md:flex justify-between items-center">

                    <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-100'><a href="">Home</a></li>
                    <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-100'><a href="">About</a></li>
                    <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-100'><a href="">Portfolio</a></li>
                    <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-100'><a href="">Experience</a></li>
                    <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200'><a href="">Contact</a></li>
                </ul>
            </div>
            <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {nav &&
                (<ul className=" flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 md:hidden">

                        <li className='px-4 cursor-pointer capitalize py-6 text-4xl text-gray-500 hover:scale-110 duration-100'><a href="">Home</a></li>
                        <li className='px-4 cursor-pointer capitalize py-6 text-4xl text-gray-500 hover:scale-110 duration-100'><a href="">About</a></li>
                        <li className='px-4 cursor-pointer capitalize py-6 text-4xl text-gray-500 hover:scale-110 duration-100'><a href="">Portfolio</a></li>
                        <li className='px-4 cursor-pointer capitalize py-6 text-4xl text-gray-500 hover:scale-110 duration-100'><a href="">Experience</a></li>
                        <li className='px-4 cursor-pointer capitalize py-6 text-4xl text-gray-500 hover:scale-110 duration-200'><a href="">Contact</a></li>
                </ul>)
            }
        </div>
        

    )
}

export default NavBar