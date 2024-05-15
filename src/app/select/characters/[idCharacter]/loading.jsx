import Image from "next/image"
import BackgroundImage from "../../../../../public/image/character/character-background1.jpg"
import EyeIcon from "../../../../../public/icon/character/eye-icon.png"
import SkinIcon from "../../../../../public/icon/character/skin-icon.png"
import HairIcon from "../../../../../public/icon/character/hair-icon.png"
import AgenderIcon from "../../../../../public/icon/character/agender-icon.png"

export default function LoadingCharacterPage() {
    return(
        <div className="flex justify-center">
            <div className="text-white flex flex-row items-center justify-around h-screen gap-24 w-11/12 animate-pulse">
                <div className="w-4/12 h-fit flex flex-col items-center justify-center gap-2">
                    <h1 className="text-lg font-bold text-center">ANATOMY</h1>
                    <div className="w-full border-y-2 p-4 flex justify-center items-center">
                        <div className="w-full bg-black/50 border-solid border-2 border-white p-8 flex flex-col items-center justify-center gap-12">
                            <div className="w-full flex flex-row items-center justify-around">
                                <div className="w-3/5 flex flex-col items-center justify-center gap-2">
                                    <Image src={EyeIcon} alt="Eye Icon" className="w-16"></Image>
                                    <h1 className="font-light text-sm">Eye Color</h1>
                                </div>
                                <div className="w-3/5 flex flex-col items-center justify-center gap-2">
                                    <Image src={HairIcon} alt="Eye Icon" className="w-16"></Image>
                                    <h1 className="font-light text-sm">Hair Color</h1>
                                </div>
                            </div>
                            <div className="w-full flex flex-row items-center justify-around">
                                <div className="w-3/5 flex flex-col items-center justify-center gap-2">
                                    <Image src={AgenderIcon} alt="Female Icon" className="w-16"></Image>
                                    <h1 className="font-light text-sm">Gender</h1>
                                </div>
                                <div className="w-3/5 flex flex-col items-center justify-center gap-2">
                                    <Image src={SkinIcon} alt="Eye Icon" className="w-16"></Image>
                                    <h1 className="font-light text-sm">Skin Color</h1>
                                </div>
                            </div>
                            <div className="w-full flex flex-row items-center justify-around gap-2">
                                <div className="w-3/5 flex flex-col items-center justify-center">
                                    <h1 className="font-light text-sm">Height</h1>
                                </div>
                                <div className="w-3/5 flex flex-col items-center justify-center gap-2">
                                    <h1 className="font-light text-sm">Mass</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-4/12 flex flex-col justify-center items-end gap-20">
                    <div className="border-b-2 border-white w-4/5 py-6">
                        <h1 className="text-right font-bold text-5xl leading-10">Loading...</h1>
                    </div>
                    <div className="w-5/6 flex flex-col justify-center items-center gap-2">
                        <h1 className="text-lg font-bold text-center">PERSONAL INFORMATION</h1>
                        <div className="w-full border-y-2 p-4 flex justify-center items-center">
                            <div className="w-full border-solid border-2 border-white flex flex-col items-center justify-center py-6 px-8">
                                <div className="w-full text-right pb-4 border-b-2">
                                    <h1 className="font-light text-xs">HOME WORLD</h1>
                                    <h1 className="text-white font-bold text-4xl">1010</h1>
                                </div>
                                <div className="w-full text-right pt-4">
                                    <h1 className="font-light text-xs">BIRTH</h1>
                                    <h1 className="text-white font-bold text-4xl">0101</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Image src={BackgroundImage} alt="Background" className="absolute top-0 -z-20 h-screen object-cover blur"></Image>
        </div>
    )
}