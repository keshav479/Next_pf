"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import book from "../assets/Bookstore.png"
import face from "../assets/faceemo.png"
import chat from "../assets/chatbot.png"

const projects = [
    {
        title:"Dexter",
        desc:"Developed an intelligent chatbot application leveraging the MERN stack and TypeScript. Integrated OpenAI API to power conversational AI capabilities",
        devStack:"ReactJS, NodeJS, ExpressJS, MongoDB, API, JWT",
        link:"https://gpt-bot-gamma.vercel.app",
        src:chat
    },

    {
        title:"Real Time Emotion Detection",
        desc:"Developed real-time emotion detection system which analyse facial expression in video streams",
        devStack:"CNN, Tensorflow, OpenCV, Python",
        link:"https://github.com/keshav479/Realtime_emotion_detection/tree/master/screenshotsofresult",
        src:face
    },

    {
        title:"Bookstore",
        desc:"Developed and deployed a full-featured e-commerce web application using ReactJS, Bootstrap and TailwindCSS",
        devStack:"ReactJS, TailwindCSS",
        link:"https://bookstore-beta-nine.vercel.app",
        src:book
    },
]


const Portfolio = () => {
  return (
    <div className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52" id="portfolio">
       <h1 className=" text-center my-12 text-7xl font-bold heading text-[#C8A1E0]">
                Selected <span className="text-7xl font-bold text-[#E48A57]">Projects</span> 
            </h1>
      
      <div className="px-6 md:px-0 max-w-[1200px] mx-auto mt-40 space-y-24">
        {projects.map((project, index)=>(
          <motion.div
          key={index}
          initial={{opacity:0, y:75}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className={`mt-12 flex flex-col ${index %2 === 1 ? "md:flex-row-reverse gap-12" : "md:flex-row"}`}
          >
            <div className="space-y-2 max-w-[550px]">
              <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
              <h2 className="text-4xl">{project.title}</h2>
              <p className="text-lg text-white/70 break-words p-4">{project.desc}</p>
              <p className="text-xl text-orange-400 font-semibold">{project.devStack}</p>
              <div className="w-64 h-[1px] bg-gray-400 my-4">
                <a href={project.link} className="mr-6">Link</a>
              </div>
            </div>

            <div className="flex justify-center items-center ">
              <Image src={project.src} alt={project.title} className="h-[350px] w-auto object-cover border rounded border-gray-700"/>
            </div>
            
          </motion.div>
        ))}
      </div>
    
    </div>
  )
}

export default Portfolio
