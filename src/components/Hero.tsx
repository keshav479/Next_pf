"use client";
import Image from "next/image";
import cursor from "../assets/tensorflow.png";
import best from "../assets/js2.png";
import { motion } from "framer-motion";
import profilepic from "../assets/pp22.png"


const Hero = () => {
    return (
        <div className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]">

            <div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#2B1942)]">

            </div>

            <div className="relative">
                <div className="text-8xl font-bold text-center">
                    <h1 className="text-[#98B4CE]">Hi, I am</h1>
                    <h1 className="text-[#E48A57]">Keshav Lavania</h1>
                </div>

                <motion.div className="absolute left-[80px] top-[70px]" drag>
                    <Image src={cursor} height="170" width="170" alt="cursor" className="" draggable="false" />
                </motion.div>
                <motion.div className="absolute right-[17px] top-[200px]" drag>
                    <Image src={best} height="220" width="220" alt="cursor" className="" draggable="false" />
                </motion.div>




                <p className="text-center font-semibold text-xl max-w-[500px] mx-auto mt-8 text-white/60">
                    Passionate Software Developer from India specializing in Fullstack Development and Machine Learning. Focused on developing websites that provide the best user experience
                </p>

                <Image src={profilepic} alt="profile picture" className="h-auto w-auto mx-auto" />

            </div>

        </div>
    )
}

export default Hero
//22:14