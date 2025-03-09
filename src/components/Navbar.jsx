import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"

export default function Nav(){
    return (
       <nav className="mb-20 flex item-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo}  alt="NO Image" />
        </div>
        <div className="m-2 flex items-center justify-center gap-4 text-2xl"> 
            <FaLinkedin/>
            <FaGithub />
            <FaTwitter/>
            <FaInstagram/>
        </div>
       </nav>
      )
}