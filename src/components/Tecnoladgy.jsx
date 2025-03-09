import { RiReactjsLine } from "react-icons/ri"
import { GrMysql } from "react-icons/gr"
import Asp from "../assets/core.png"
import css1 from '../assets/css1.png'
import html1 from '../assets/html1.png'
import js from '../assets/js.png'


export default function Bground() {
    return (
        <div className="border-b border-neutral-900 pb-24">
            <h1 className="py-20 text-center text-4xl uppercase">technology</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-400 p-4">
                    <RiReactjsLine className="text-2xl text-cyan-400 w-20 h-20" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-400 p-4">
                    <img src={Asp} alt="" width={80} height={80} />
                </div>
                <div className="rounded-2xl border-4 border-neutral-400 p-4">
                    <GrMysql className="text-2xl w-20 h-20" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-400 p-4">
                    <img src={css1} alt="" width={60} height={60} />

                </div>
                <div className="rounded-2xl border-4 border-neutral-400 p-4">
                    <img src={html1} alt="" width={70} height={70} />
                </div>
                <div className="rounded-2xl border-4 border-neutral-400 p-4">
                    <img src={js} alt="" width={70} height={70} />
                </div>
            </div>
        </div>
    )
}