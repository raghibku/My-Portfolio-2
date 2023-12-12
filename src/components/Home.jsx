import React from 'react'
import HeroImage from "../assets/heroImage1.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const Home = () => {
  return (
    <div name="home"
      className="w-full bg-gradient-to-b from-black py-10 via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-6xl font-bold text-white">I'm a <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500'>Front End Developer</span></h2>
            <p className="text-gray-300 py-4 max-w-md">I love making elegant responsive websites using ReactJS, TailwindCSS, NodeJS, ExpressJS and MongoDB. Learning new technologies and implementing them is always delightful to me.</p>
            {/* <div className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-400 to-cyan-400 cursor-pointer">
            
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            
            </div> */}
        </div>
        
          
        <div className='flex justify-center items-center'>
          <div className='bg-gradient-to-r from-cyan-400 to-yellow-400 rounded-full w-2/3  md:w-[80%]'>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-full"
          />
          </div>
      </div>
    </div>
      
    </div>
  )
}

export default Home