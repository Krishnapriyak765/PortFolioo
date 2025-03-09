import { Education } from "../constants/index"
import js from '../assets/js.png'


export default function Eduation() {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-2xl">Education</h1>
            <div className="mx-4">
                {Education.map((ex, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/4">
                            <p>{ex.year}</p>
                            <img src={ex.image} alt="" width={200} height={200} className="my-3" />
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold ">{ex.role} - <span>{ex.company}</span> </h6> 
                        <p className="mb-2 text-neutral-400">{ex.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}