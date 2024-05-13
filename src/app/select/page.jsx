import SectionComponent from "@/components/select/section";
import Background from "../../../public/image/select-background.jpg"
import Image from "next/image";

export default function SelectPage() {
    return (
        <div className="absolute top-0 flex flex-col items-center justify-center h-screen w-full -z-10">
            <Image src={Background} alt="Selection Background" className="absolute -z-10 h-screen object-cover opacity-65"></Image>
            <div className="flex flex-col items-center justify-center w-full">
                <h1 className="absolute top-52 font-extralight text-2xl text-white italic">Choose your side...</h1>
                <div className="flex flex-row justify-between w-3/5 b">
                    <SectionComponent color="Red" path="/select/movies" text="Movies" />
                    <SectionComponent path="/select/characters" text="Characters" />
                </div>
            </div>
        </div>
    )
}