import CharacterPreDataComponent from "@/components/select/character/character-predata"
import CharacterSelectComponent from "@/components/select/character/characters-grid"
import CharactersPagination from "@/components/select/character/pagination"
import Image from "next/image"
import { Suspense } from "react"
import BackgroundImage from "../../../../public/image/character/character-background1.jpg"

async function getCharactersData(number) {
    const res = await fetch(`https://swapi.dev/api/people?page=${number}`)
    if (!res.ok) {
        throw new Error("Failed to Fetch Data")
    }
    return res.json()
}

export default async function CharactersPage({ searchParams }) {

    const {
        page
    } = searchParams

    const data = await getCharactersData(page ? page : 1)

    return (
        <section className="flex justify-center item-center">
            <Image src={BackgroundImage} className="absolute top-0 -z-10 h-screen object-cover blur" alt="Background Image"></Image>
            <div className="w-11/12 mt-20">
                <div className="text-white mb-8">
                    <h1 className="italic font-bold text-lg">“Los Jedi no buscan la aventura, sino el conocimiento.”</h1>
                    <h2 className="font-light text-sm">Qui-Gon Jinn</h2>
                </div>
                <div className="flex flex-col text-white gap-2">
                    <div className="flex flex-row justify-between w-[50%]">
                        <h1 className="text-white font-bold text-sm">CHARACTERS</h1>
                        <CharactersPagination countCharacters={data.count} pageSize={10} page={page ? page : 1} />
                    </div>
                    <Suspense fallback={
                        <p>Loading...</p>
                    }>
                        <CharacterSelectComponent characters={data.results} />
                    </Suspense>
                </div>
                <CharacterPreDataComponent page={page}/>
            </div>
        </section>
    )
}