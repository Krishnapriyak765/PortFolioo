
import ProficePic from "../assets/about.jpg"
import {ABOUT_TEXT} from "../constants/index"

export default function Hero() {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">About <span className="text-neutral-500">Me</span>
            </h1>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img src={ProficePic} className=" rounded-2xl lg:w-82 md:w-42 px-8" alt="Image 2 Not Avalable" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start px-8 ">
                        <p className="py-2 max-w-xl my-6 leading-9 ">{ABOUT_TEXT}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}