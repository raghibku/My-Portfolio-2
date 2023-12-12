import React from 'react'
import fuemb from "../assets/portfolio/FUEMB.jpg";
import fuepc from "../assets/portfolio/FUEPC.gif";
import ehomemb from "../assets/portfolio/ehomemb.png";
import ehomepc from "../assets/portfolio/ehomepc.gif";
import phonemb from "../assets/portfolio/phone-vault-mb.png";
import phonepc from "../assets/portfolio/phone-vault.png";



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
                        <div className='flex flex-col'>
                            <p className="text-3xl font-bold inline">E-Home</p>
                            <p className="text-xl font-bold inline text-cyan-300">A Real Estate Platform</p>
                        </div>
                        <button className="text-white bg-gradient-to-b mx-10 from-cyan-500 to-blue-500 px-6 py-3 rounded-md hover:scale-110 duration-300">
                            <a href="https://e-home-2593c.web.app/" target="_blank">View Page</a>
                        </button>
                    </div>

                    {/* pc E-HOme */}
                    <div className='hidden relative h-[450px] w-[900px] lg:block'>
                        <div class="absolute top-0 right-0  overflow-hidden  w-[700px] h-[339px] rounded-lg border-2 border-black">
                            <img className='w-full ' src={ehomepc} alt="" />
                        </div>
                        <div class="absolute bottom-0 left-0 overflow-hidden rounded-lg  w-[250px] h-[350px] border-2 border-black">
                            <img className='w-full animate-scrolling' src={ehomemb} alt="" />
                        </div>
                    </div>
                    {/* mobile Ehome */}
                    <div className='flex flex-col justify-center items center lg:hidden'>
                        <div class="overflow-hidden rounded-lg  w-full border-2 border-black">
                            <img className='w-full' src={ehomepc} alt="" />
                        </div>
                    </div>
                </div>

                <br />
                <br />

                <div className='flex flex-col'>
                    <div className="flex items-center pb-8">
                        <div className='flex flex-col'>
                            <p className="text-3xl font-bold inline">Food Unity Exchange</p>
                            <p className="text-xl font-bold inline text-cyan-300">A Community Food Sharing Platform</p>
                        </div>
                        <button className="text-white bg-gradient-to-b mx-10 from-cyan-500 to-blue-500 px-6 py-3 rounded-md hover:scale-110 duration-300">
                            <a href="https://foodunityexchange.web.app/" target="_blank">View Page</a>
                        </button>
                    </div>
                    {/* pc FUE */}
                    <div className='hidden relative h-[450px] w-[900px] lg:block'>
                        <div class="absolute top-0 left-0 overflow-hidden w-[700px] h-[338px] rounded-lg border-2 border-black">
                            <img className='w-full ' src={fuepc} alt="" />
                        </div>
                        <div class="absolute bottom-0 right-0 overflow-hidden rounded-lg  w-[250px] h-[350px] border-2 border-black">
                            <img className='w-full animate-scrolling' src={fuemb} alt="" />
                        </div>
                    </div>
                    {/* mobile FUE */}
                    <div className='flex flex-col justify-center items center lg:hidden'>
                        <div class="overflow-hidden rounded-lg  w-full  border-2 border-black">
                            <img className='w-full ' src={fuepc} alt="" />
                        </div>
                    </div>
                </div>

                <br />
                <br />

                <div className='flex flex-col'>
                    <div className="flex items-center pb-8">
                        <p className="text-3xl font-bold inline">The Phone Vault</p>
                        <button className="text-white bg-gradient-to-b mx-10 from-cyan-500 to-blue-500 px-6 py-3 rounded-md hover:scale-110 duration-300">
                            <a href="https://fluffy-kleicha-1ebc7a.netlify.app/" target="_blank">View Page</a>
                        </button>
                    </div>
                    {/* pc Phone Vault */}
                    <div className='hidden relative h-[450px] w-[900px] lg:block'>
                        <div class="absolute top-0 right-0 overflow-hidden w-[700px] h-[300px] rounded-lg border-2 border-black">
                            <img className='w-full animate-scrolling' src={phonepc} alt="" />
                        </div>
                        <div class="absolute bottom-0 left-0 overflow-hidden rounded-lg  w-[250px] h-[350px] border-2 border-black">
                            <img className='w-full animate-scrolling' src={phonemb} alt="" />
                        </div>
                    </div>
                    {/* mobile Phone Vault */}
                    <div className='flex flex-col justify-center items center lg:hidden'>
                        <div class="overflow-hidden rounded-lg  w-full h-[250px] border-2 border-black">
                            <img className='w-full animate-scrolling' src={phonepc} alt="" />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default PortfolioR