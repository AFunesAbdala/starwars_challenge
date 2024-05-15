async function getHomeworldIdData(id) {
    const res = await fetch(`https://swapi.dev/api/planets/${id}`)
    if (!res.ok) {
        throw new Error("Failed to Fetch Data")
    }
    return res.json()
}

export default async function HomeworldComponent(props) {
    const {
        id
    } = props

    const data = await getHomeworldIdData(id)
    
    return (
        <h1 className="text-white font-bold text-4xl">{data.name}</h1>
    )
}