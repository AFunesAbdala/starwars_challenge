"use client";

import Image from "next/image";
import Link from "next/link";
import Character from "../../../../../public/image/character-portrait.jpg"
import { useState } from "react";

export default function CharacterCard(props) {
    const {
        name,
        urlId
    } = props

    const [classBar, setClassBar] = useState("relative bottom-2 w-full h-1")

    function handleHoverBar(bool) {
        if (bool) {
            setClassBar("relative bottom-4 w-full h-1 bg-red-700 scale-105 animate-fadeIn shadow shadow-redOne")
        } else {
            setClassBar("relative bottom-4 w-full h-1")
        }
    }

    return (
        <Link key={name} href={`/select/characters/${urlId}`}>
            <div className={classBar}></div>
            <div className="relative w-32 h-40 hover:shadow-lg hover:shadow-redTwo hover:scale-105 duration-300" onMouseEnter={() => handleHoverBar(true)} onMouseLeave={() => handleHoverBar(false)}>
                <div className="absolute w-full bottom-0 z-30 text-white flex flex-row justify-between items-end px-3 py-3 bg-gradient-to-t from-red-700">
                    <h1 className="font-bold text leading-4">{name}</h1>
                </div>
                <Image src={Character} alt={name} className="absolute top-0 h-full object-cover z-10"></Image>
            </div>
        </Link>
    )
}