import React from 'react'

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
        <div className="pb-8">
          <p className="text-3xl font-bold inline border-b-4 border-gray-500">Fruit Burst</p>
        </div>
        {/* pc fruitburst */}
        <div className='hidden relative h-[450px] w-[900px] lg:block'>
          <div class="absolute top-0 left-0 overflow-hidden w-[700px] h-[300px] rounded-lg border-2 border-black">
            <img className='w-full animate-scrolling' src='src\assets\portfolio\fruitspc.png' alt="" />
          </div>
          <div class="absolute bottom-0 right-0 overflow-hidden rounded-lg  w-[250px] h-[350px] border-2 border-black">
              <img className='w-full animate-scrolling' src='src\assets\portfolio\fruitsmb.png' alt="" />
          </div>
        </div>
      {/* mobile fruitBurst */}
        <div className='flex flex-col justify-center items center lg:hidden'>
            <div class="overflow-hidden rounded-lg  w-full h-[450px] border-2 border-black">
                <img className='w-full animate-scrolling' src='src\assets\portfolio\fruitsmb.png' alt="" />
            </div>
        </div>
      </div>


      <div className='flex flex-col'>
        <div className="pb-8">
          <p className="text-3xl font-bold inline border-b-4 border-gray-500">Gaming zone</p>
        </div>
      {/* pc gamingZone */}
        <div className='hidden relative h-[450px] w-[900px] lg:block'>
          <div class="absolute top-0 right-0  overflow-hidden  w-[700px] h-[300px] rounded-lg border-2 border-black">
            <img className='w-full animate-scrolling' src='src\assets\portfolio\gamingPc.png' alt="" />
          </div>
          <div class="absolute bottom-0 left-0 overflow-hidden rounded-lg  w-[250px] h-[350px] border-2 border-black">
              <img className='w-full animate-scrolling' src='src\assets\portfolio\gamingMb.png' alt="" />
          </div>
        </div>
        {/* mobile gaming zone */}
        <div className='flex flex-col justify-center items center lg:hidden'>
            <div class="overflow-hidden rounded-lg  w-full h-[450px] border-2 border-black">
                <img className='w-full animate-scrolling' src='src\assets\portfolio\gamingMb.png' alt="" />
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PortfolioR