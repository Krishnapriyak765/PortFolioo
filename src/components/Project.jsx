import { PROJECTS } from "../constants/index"

export default function Pro() {
    return (
        <div className="border-b  border-neutral-900  pb-4">
        <h1 className="my-20 text-center text-4xl ">Projects</h1>
        <div className="">
            {
                PROJECTS.map
                    (
                        (pro, index) =>
                        (
                            <div key={index} className="mb-8 flex flex-wrap lg:justify-center ">
                                <div className="w-full flex justify-center lg:w-1/4">
                                    <img src={pro.image} alt={pro.title} width={250}  height={150} className="mb-6 rounded"/>
                                </div>
                                <div className="w-full max-w-xl lg:3/4">
                                <h6 className="font-semibold mb-2 px-3">{pro.title}</h6>
                                <p className="mb-4 text-neutral-400 px-3">{pro.description}</p>
                               {pro.technologies.map((t,index) => (<span key={index} className="p-2 rounded px-3 ">{t}</span>))}
                                </div>
                            </div>
                            
                        )
                    )
            }
        </div>
    </div>
    )
}
