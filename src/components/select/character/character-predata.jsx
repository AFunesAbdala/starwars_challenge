"use client";

import useDataStore from "@/store";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import CharacterTransparent from "../../../../public/image/character/character-transparent.png"
import EyeIcon from "../../../../public/icon/character/eye-icon.png"
import FemaleIcon from "../../../../public/icon/character/female-icon.png"
import MaleIcon from "../../../../public/icon/character/male-icon.png"
import AgenderIcon from "../../../../public/icon/character/agender-icon.png"
import NullIcon from "../../../../public/icon/character/null-icon.png"

export default function CharacterPreDataComponent(props) {

    const {
        page
    } = props

    const { charactersPreData, setCharactersPreData } = useDataStore()

    useEffect(() => {
        return () => {
            setCharactersPreData({ id: "", name: "", eyeColor: "", gender: "" });
        };
    }, [page])

    if (Object.values(charactersPreData).every((e) => e !== "")) {
        return (
            <div className="text-white w-11/12 flex animate-fadeIn">
                <div className="w-[55%] flex flex-col gap-2 mt-6">
                    <h1 className="text-2xl font-bold">{charactersPreData.name}</h1>
                    <div className="flex gap-6 border-y-2 border-white p-4">
                        <div className="w-3/6 flex items-center gap-4">
                            <Image src={charactersPreData.eyeColor === "unknown" ? NullIcon : EyeIcon} alt="Eye Icon" className="w-20"></Image>
                            <h1 className="font-light text-sm">EyeColor: {charactersPreData.eyeColor != "n/a" && charactersPreData.eyeColor != "unknown" && charactersPreData.eyeColor}</h1>
                        </div>
                        <div className="w-3/6 flex items-center gap-4">
                            <Image src={charactersPreData.gender === "male" ? MaleIcon : charactersPreData.gender === "female" ? FemaleIcon  : charactersPreData.gender === "hermaphrodite" ? AgenderIcon : NullIcon} alt="Female Icon" className="w-20"></Image>
                            <h2 className="font-light text-sm">Gender: {charactersPreData.gender != "n/a" && charactersPreData.gender != "none" && charactersPreData.gender}</h2>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 right-0 w-[45%] h-screen flex flex-col">
                    <Link href={`/select/characters/${charactersPreData.id}`} className="absolute self-center bottom-20 bg-black/50 rounded-full py-4 px-6 flex justify-center items-center border-2 border-white hover:scale-105 duration-300 font-bold text-2xl">MORE ABOUT ME</Link>
                    <Image src={CharacterTransparent} alt="Character Transparent" className="absolute bottom-0 w-5/6 -z-10"></Image>
                </div>
            </div>
        )
    } else {
        return null
    }
}