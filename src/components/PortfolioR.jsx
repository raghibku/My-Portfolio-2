import React from 'react'
import fruitsmb from "../assets/portfolio/fruitsmb.png";
import fruitspc from "../assets/portfolio/fruitspc.png";
import summerpc from "../assets/portfolio/summer-sale-pc.png";
import summermb from "../assets/portfolio/summer-sale-mb.png";


const PortfolioR = () => {
  return (
    <div name="portfolio"
    className="bg-gradient-to-b from-black to-gray-800 w-full text-white ">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                <p className="py-6">Checkout some of my work right here</p>
            </div>
      <div className='flex flex-col'>
        <div className="flex items-center pb-8">
          <p className="text-3xl font-bold inline">Summer Sale</p>
          <button className="text-white bg-gradient-to-b mx-10 from-cyan-500 to-blue-500 px-6 py-3 rounded-md hover:scale-110 duration-300">
              <a href="https://steady-buttercream-9833b7.netlify.app/" target="_blank">View Page</a>
          </button>
        </div>
        
      {/* pc Summer Sale */}
        <div className='hidden relative h-[450px] w-[900px] lg:block'>
          <div class="absolute top-0 right-0  overflow-hidden  w-[700px] h-[300px] rounded-lg border-2 border-black">
            <img className='w-full animate-scrolling' src={summerpc} alt="" />
          </div>
          <div class="absolute bottom-0 left-0 overflow-hidden rounded-lg  w-[250px] h-[350px] border-2 border-black">
              <img className='w-full animate-scrolling' src={summermb} alt="" />
          </div>
        </div>
        {/* mobile gaming zone */}
        <div className='flex flex-col justify-center items center lg:hidden'>
            <div class="overflow-hidden rounded-lg  w-full h-[450px] border-2 border-black">
                <img className='w-full animate-scrolling' src={summermb} alt="" />
            </div>
        </div>
      </div>
      <br />
      <br />
      <div className='flex flex-col'>
        <div className="flex items-center pb-8">
          <p className="text-3xl font-bold inline">Fruit Burst</p>
          <button className="text-white bg-gradient-to-b mx-10 from-cyan-500 to-blue-500 px-6 py-3 rounded-md hover:scale-110 duration-300">
              <a href="https://raghibku.github.io/Fruit_Burst/" target="_blank">View Page</a>
          </button>
        </div>
        {/* pc fruitburst */}
        <div className='hidden relative h-[450px] w-[900px] lg:block'>
          <div class="absolute top-0 left-0 overflow-hidden w-[700px] h-[300px] rounded-lg border-2 border-black">
            <img className='w-full animate-scrolling' src={fruitspc} alt="" />
          </div>
          <div class="absolute bottom-0 right-0 overflow-hidden rounded-lg  w-[250px] h-[350px] border-2 border-black">
              <img className='w-full animate-scrolling' src={fruitsmb} alt="" />
          </div>
        </div>
      {/* mobile fruitBurst */}
        <div className='flex flex-col justify-center items center lg:hidden'>
            <div class="overflow-hidden rounded-lg  w-full h-[450px] border-2 border-black">
                <img className='w-full animate-scrolling' src={fruitsmb} alt="" />
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PortfolioR