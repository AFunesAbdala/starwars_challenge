"use client";

import Link from "next/link";
import { useState } from "react";

function SectionComponent(props) {
    const {
        text,
        path,
        color
    } = props

    const stylesRed = "border-y text-center py-2 px-4 font-bold text-white text-2xl hover:border-red-500 hover:border-t-4 duration-100"

    const stylesBlue = "border-y text-center py-2 px-4 font-bold text-white text-2xl hover:border-sky-500 hover:border-t-4 duration-100"

    const [background, setBackground] = useState("")
    const setBackgroundColor = (color) => {
        if (color === "Red") {
            setBackground("mix-blend-multiply absolute top-0 left-0 -z-10 h-screen w-full bg-gradient-to-r from-red-700 animate-fadeIn")
        } else {
            setBackground("mix-blend-multiply absolute top-0 right-0 -z-10 h-screen w-full bg-gradient-to-l from-sky-500 animate-fadeIn")
        }
    }

    const setNullColor = () => {
        if (color === "Red") {
            setBackground("mix-blend-multiply absolute top-0 left-0 -z-10 h-screen w-full bg-gradient-to-r from-red-700 animate-fadeOut opacity-0")
        } else {
            setBackground("mix-blend-multiply absolute top-0 right-0 -z-10 h-screen w-full bg-gradient-to-l from-sky-500 animate-fadeOut opacity-0")
        }
    }

    return(
        <div>
            <Link 
                href={path} 
                className={color ? stylesRed : stylesBlue} 
                onMouseEnter={()=>setBackgroundColor(color)} 
                onMouseLeave={()=>setNullColor(color)}>{text}</Link>
            <div className={background}></div>
        </div>
    )
}

export default SectionComponent