import Image from "next/image"
import BackgroundImage from "../../../../../public/image/character/character-background1.jpg"
import CharacterTransparent from "../../../../../public/image/character/character-transparent2.png"
import EyeIcon from "../../../../../public/icon/character/eye-icon.png"
import SkinIcon from "../../../../../public/icon/character/skin-icon.png"
import HairIcon from "../../../../../public/icon/character/hair-icon.png"
import FemaleIcon from "../../../../../public/icon/character/female-icon.png"
import MaleIcon from "../../../../../public/icon/character/male-icon.png"
import AgenderIcon from "../../../../../public/icon/character/agender-icon.png"
import NullIcon from "../../../../../public/icon/character/null-icon.png"
import HomeworldComponent from "@/components/select/character/homeworld"

async function getCharacterIdData(id) {
    const res = await fetch(`https://swapi.dev/api/people/${id}`)
    if (!res.ok) {
        throw new Error("Failed to Fetch Data")
    }
    return res.json()
}

export default async function Page({ params }) {

    const data = await getCharacterIdData(params.idCharacter)

    const id = data.homeworld.split("/")
    const index = id.length - 2

    return (
        <div className="flex justify-center animate-fadeIn">
            <div className="text-white flex flex-row items-center justify-around h-screen gap-24 w-11/12">
                <div className="w-4/12 h-fit flex flex-col items-center justify-center gap-2">
                    <h1 className="text-lg font-bold text-center">ANATOMY</h1>
                    <div className="w-full border-y-2 p-4 flex justify-center items-center">
                        <div className="w-full bg-black/50 border-solid border-2 border-white p-8 flex flex-col items-center justify-center gap-12">
                            <div className="w-full flex flex-row items-center justify-around">
                                <div className="w-3/5 flex flex-col items-center justify-center gap-2">
                                    <Image src={data.eye_color === "unknown" ? NullIcon : EyeIcon} alt="Eye Icon" className="w-16"></Image>
                                    <h1 className="font-light text-sm">Eye Color: {data.eye_color != "n/a" && data.eye_color != "none" && data.eye_color}</h1>
                                </div>
                                <div className="w-3/5 flex flex-col items-center justify-center gap-2">
                                    <Image src={data.hair_color === "unknown" ? NullIcon : HairIcon} alt="Eye Icon" className="w-16"></Image>
                                    <h1 className="font-light text-sm">Hair Color: {data.hair_color != "n/a" && data.hair_color != "none" ? data.hair_color : "..."}</h1>
                                </div>
                            </div>
                            <div className="w-full flex flex-row items-center justify-around">
                                <div className="w-3/5 flex flex-col items-center justify-center gap-2">
                                    <Image src={data.gender === "male" ? MaleIcon : data.gender === "female" ? FemaleIcon : data.gender === "hermaphrodite" ? AgenderIcon : NullIcon} alt="Female Icon" className="w-16"></Image>
                                    <h2 className="font-light text-sm">Gender: {data.gender != "n/a" && data.gender != "none" ? data.gender : "..."}</h2>
                                </div>
                                <div className="w-3/5 flex flex-col items-center justify-center gap-2">
                                    <Image src={data.skin_color === "unknown" ? NullIcon : SkinIcon} alt="Eye Icon" className="w-16"></Image>
                                    <h1 className="font-light text-sm">Skin Color: {data.skin_color != "n/a" && data.skin_color != "none" ? data.skin_color : "..."}</h1>
                                </div>
                            </div>
                            <div className="w-full flex flex-row items-center justify-around gap-2">
                                <div className="w-3/5 flex flex-col items-center justify-center">
                                    <h1 className="font-bold text-5xl">{data.height != "n/a" && data.height != "unknown" ? data.height : "?"}</h1>
                                    <h1 className="font-light text-sm">Height</h1>
                                </div>
                                <div className="w-3/5 flex flex-col items-center justify-center gap-2">
                                <h1 className="font-bold text-5xl">{data.mass != "n/a" && data.mass != "unknown" ? data.mass : "?"}</h1>
                                    <h1 className="font-light text-sm">Mass</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-4/12 flex flex-col justify-center items-end gap-20">
                    <div className="border-b-2 border-white w-4/5 py-6">
                        <h1 className="text-right font-bold text-5xl leading-10">{data.name}</h1>
                    </div>
                    <div className="w-5/6 flex flex-col justify-center items-center gap-2">
                        <h1 className="text-lg font-bold text-center">PERSONAL INFORMATION</h1>
                        <div className="w-full border-y-2 p-4 flex justify-center items-center">
                            <div className="w-full border-solid border-2 border-white flex flex-col items-center justify-center py-6 px-8">
                                <div className="w-full text-right pb-4 border-b-2">
                                    <h1 className="font-light text-xs">HOME WORLD</h1>
                                    <HomeworldComponent id={id[index]} />
                                </div>
                                <div className="w-full text-right pt-4">
                                    <h1 className="font-light text-xs">BIRTH</h1>
                                    <h1 className="text-white font-bold text-4xl">{data.birth_year != "n/a" && data.birth_year != "unknown" ? data.birth_year : "..."}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Image src={CharacterTransparent} alt="Background" className="absolute bottom-0 h-5/6 w-auto -z-10"></Image>
            </div>
            <Image src={BackgroundImage} alt="Background" className="absolute top-0 -z-20 h-screen object-cover blur"></Image>
        </div>
    )
}