"use client";

import Image from "next/image";
import CharacterImg from "../../../../public/image/character/character-portrait2.jpg"
import { useState } from "react";
import useDataStore from "@/store";

export default function CharacterCardComponent(props) {

    const {
        character
    } = props

    const [classBar, setClassBar] = useState("relative -top-2 w-32 h-1")

    function handleHoverBar(bool) {
        if (bool) {
            setClassBar("relative -top-2 w-32 h-1 bg-sky-500 scale-105 animate-fadeIn shadow shadow-skyOne")
        } else {
            setClassBar("relative -top-2 w-32 h-1")
        }
    }

    const id = character.url.split("/")
    const index = id.length-2

    const { setCharactersPreData, charactersPreData } = useDataStore()

    return (
        <div>
            <div className={charactersPreData.id === id[index] ? "relative -top-2 w-32 h-1 bg-sky-500 scale-105 animate-fadeIn shadow shadow-skyOne" : classBar}></div>
            <div
                className={charactersPreData.id === id[index] ? "w-32 relative border-solid border-2 border-sky-500 scale-105 shadow-skyTwo duration-300" : "w-32 relative border-solid border-2 border-sky-500 hover:scale-105 hover:shadow-skyTwo duration-300 cursor-pointer"}
                onMouseEnter={() => handleHoverBar(true)}
                onMouseLeave={() => handleHoverBar(false)}
                onClick={() => setCharactersPreData({id: id[index], name: character.name, eyeColor: character.eye_color, gender : character.gender })}
            >
                <Image src={CharacterImg} alt="Character"></Image>
                <div className="absolute bottom-0 w-full p-3 bg-gradient-to-t from-sky-900">
                    <h1 className="font-bold leading-4">{character.name}</h1>
                </div>
            </div>
        </div>
    )
}