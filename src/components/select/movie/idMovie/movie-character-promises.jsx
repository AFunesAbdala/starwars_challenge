import CharacterCard from "./movie-character-card";

async function getDataForEachCharacters(array) {
    const characters = await Promise.all(array.map(async element => {
        const res = await fetch(element);
        if (!res.ok) {
            throw new Error("Failed to Fetch Data")
        }
        return res.json()
    }))

    return characters
}

export default async function MovieCharacters(props) {

    const {
        arrayCharacters
    } = props

    const characters = await getDataForEachCharacters(arrayCharacters)

    return (
        <div className="flex flex-row gap-10 overflow-x-auto w-[90%] p-5">
            {
                characters.map(e => {
                    const id = e.url.split("/")
                    const index = id.length-2
                    return (
                        <CharacterCard name={e.name} key={e.name} urlId={id[index]}/>
                    )
                })
            }
        </div>
    )
}