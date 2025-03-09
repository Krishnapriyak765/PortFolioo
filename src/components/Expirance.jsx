import { EXPERIENCES } from "../constants/index"
import js from '../assets/js.png'


export default function Exp() {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-2xl">Expereiance</h1>
            <div className="mx-4">
                {EXPERIENCES.map((ex, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/4">
                            <p>{ex.year}</p>
                            <img src={ex.imgae} alt="" className="my-4" width={200} height={200} />
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold ">{ex.role} - <span>{ex.company}</span> </h6> 
                        <p className="mb-2 text-neutral-400">{ex.description}</p>
                        {ex.technologies.map((tex,index)=>(
                            <span className="mr-2 mt-4 rounded bg-neutral-900 py-1 text-sm font-medium text-purple-600" key={index}>{tex}</span>
                        ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}