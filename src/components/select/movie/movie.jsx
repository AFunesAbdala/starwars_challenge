"use client";

import Image from "next/image";
import Link from "next/link";
import MoviePortrait from "../../../../public/image/movie/movie-portrait.jpg"
import { useState } from "react";

function MovieComponent(props) {
    const {
        urlId,
        title,
        episode_id,
        key
    } = props

    const [classBar, setClassBar] = useState("relative bottom-2 w-full h-1")

    function handleHoverBar(bool) {
        if (bool) {
            setClassBar("relative bottom-2 w-full h-1 bg-red-700 scale-105 animate-fadeIn shadow shadow-redOne")
        } else {
            setClassBar("relative bottom-2 w-full h-1")
        }
    }

    return (
        <Link href={`/select/movies/${urlId}`} key={key}>
            <div className={classBar}></div>
            <div className="relative w-60 hover:shadow-lg hover:shadow-redTwo hover:scale-105 duration-300" onMouseEnter={() => handleHoverBar(true)} onMouseLeave={() => handleHoverBar(false)}>
                <div className="absolute w-full bottom-0 z-30 text-white flex flex-row justify-between items-end p-4 bg-gradient-to-t from-red-700">
                    <h1 className="font-bold text-lg w-4/6 leading-5">Star Wars: {title}</h1>
                    <h2 className="font-light italic text-sm" >Episode {episode_id}</h2>
                </div>
                <Image src={MoviePortrait} alt="Movie Portrait"></Image>
            </div>
        </Link>
    )
}

export default MovieComponent