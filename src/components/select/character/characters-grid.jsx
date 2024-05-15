"use client"

import Link from "next/link"

import CharacterCardComponent from "./character-card"

export default function CharacterSelectComponent(props) {
    const {
        characters
    } = props
    
    return (
        <div className="grid grid-rows-2 grid-flow-col gap-4 w-[50%]">
            {
                characters.map(e => {
                    return (
                        <CharacterCardComponent character={e} key={e.name} />
                    )
                })
            }
        </div>
    )
}