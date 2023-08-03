import React from 'react'

const About = () => {
  return (
    <div name="about"
    className="w-full h-screen py-8 bg-gradient-to-b from-gray-800 to-black text-white">
        <div  className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8  ">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    About
                </p>
            </div>

            <p className="text-xl mt-20">
            Besides being a tech enthusiast, I am into movies and music. I love participating in cultural activities. Thoughout my college and university life, I have engaged in various bands and organizations as a musician. I have also organized a number of events in my univesity life, which boosted my teamwork skills and leadership competency.
            </p>

            <br />

            <p className="text-xl">
            As an engineering student, I always feel thrilled to solve critical problems in a strategic manner. Adapting to new programming languages and utility tools has been effortless, as I learned so many programming languages like C,C++,Java,Python,Matlab and a numerous number of utility tools through my University course curriculum.  
            </p>
        </div>
    </div>
  )
}

export default About