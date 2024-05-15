import Image from "next/image"
import Background from "../../../../../public/image/movie/movie-id-background.jpg"

export default function MovieIdLoadingPage() {
    return(
        <div className="flex flex-col items-center h-screen w-full text-white animate-pulse">
            <Image src={Background} alt="Movie Background" className="absolute -z-10 h-screen w-auto object-cover opacity-30"></Image>
            <h3 className="font-light mt-8">Episode</h3>
            <div className="w-2/6 h-[1px] bg-white my-4"></div>
            <h1 className="text-center font-bold text-4xl mb-10">Loading...</h1>
            <div className="text-center font-light flex flex-col gap-1 mb-5">
                <h2 className="italic text-sm">(Director)</h2>
            </div>
            <div className="text-center font-light flex flex-col gap-1 mb-5">
                <h2 className="italic text-sm">(Producers)</h2>
            </div>
            <div className="absolute w-full bottom-16">
                <h2 className="font-bold mb-4 text-center">CHARACTERS</h2>
                <div className="h-60 w-full bg-gradient-to-r from-transparent via-red-900 flex items-center justify-center"></div>
            </div>
        </div>
    )
}