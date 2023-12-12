import React from 'react'

const About = () => {
  return (
    <div name="about"
    className="w-full py-8 bg-gradient-to-b h-screen from-gray-800 to-black text-white">
        <div  className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8  ">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    About
                </p>
            </div>

            <p className="text-xl mt-20">

            I'm Raghib, Front End web developer with proficiency in React JS. I have made a number of functional and responsive full-stack websites using ReactJS, TailwindCSS, NodeJS, ExpressJS, and MongoDB.             </p>

            <br />

            <p className="text-xl">
            I'm committed to staying updated with the latest web development trends, technologies, and best practices, to contribute to the design and development of secure, user-friendly and robust web applications.</p>
        </div>
    </div>
  )
}

export default About