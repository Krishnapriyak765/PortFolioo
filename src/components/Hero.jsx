import logo from "../assets/kevinRushLogo.png";
import { HERO_CONTENT } from "../constants/index";
import profilepic from "../assets/kevinRushProfile.jpg";
import { motion } from "framer-motion";
import { Button, duration, Hidden } from "@mui/material";
import DownloadCV from "./Download";
import { UpdateFollower } from "react-mouse-follower";


const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
})




export default function Hero() {
    return (

        <div className="border-b border-neutral-900 pb-4 lg:mb-35 ">
            <div className="flex flex-wrap px-8">
                <div className="w-full lg:w-1/2">
                    <UpdateFollower mouseOptions={{
                        backgroundColor: "white",
                        zIndex: 99,
                        followSpeed: 1.5,
                        scale: 3.5,
                        mixBlendMode: "difference"
                    }}>
                        <div className="flex flex-col item-center lg:items-start">
                            <motion.h1 variants={container(0)} initial="hidden" animate="visible" className="pb-16 text-2xl font-thin tracking-tight lg:mt-16 lg:text-6xl md:text-4xl">Nandakishore C V</motion.h1>
                            <motion.span variants={container(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-300 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                                Full Stack Developer
                            </motion.span>
                            <motion.p variants={container(1)} initial="hidden" animate="visible" className="my-2 max-w-xl py-6 leading-7 font-light">{HERO_CONTENT}</motion.p>
                            <DownloadCV />
                        </div>
                        </UpdateFollower>

                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <img src={profilepic} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}