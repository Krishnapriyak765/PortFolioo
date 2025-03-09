import SimpleGrow from "./Image"
import { CONTACT } from '../constants/index'

import logo from "../assets/kevinRushLogo.png";
import { HERO_CONTENT } from "../constants/index";
import profilepic from "../assets/kevinRushProfile.jpg";
import { motion } from "framer-motion";
import { Button, duration, Hidden, TextField } from "@mui/material";
import DownloadCV from "./Download";
import { Input } from "postcss";



const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
})


export default function Con() {
    return (
        <div className="border-b border-neutral-900 pb-4 my-10 lg:mb-35 ">
            <div className="flex flex-wrap px-8">
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center">
                        <img src={profilepic} alt="" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8 ">
                    <h1 className="text-center font-medium fs text-3xl">GET IN TOUCH WITH ME </h1>
                    
                    <div className="flex flex-row justify-evenly content-center lg:items-start my-10">
                        <div class="h-10 content-center ...">
                        <div>01</div>
                    </div>
                        <label className="flex flex-col  items-center justify-center">Enter Your name</label>
                        <TextField variant="filled" label="Enter Your Name" color="success" />
                    </div>
                </div>
            </div>
        </div>
    )
}