import MovieComponent from "@/components/select/movie/movie"
import VideoComponent from "@/components/video"

async function getMoviesData() {
    const res = await fetch('https://swapi.dev/api/films')
    if (!res.ok) {
        throw new Error("Failed to Fetch Data")
    }
    return res.json()
}

export default async function MoviesPage() {
    const data = await getMoviesData()
    return (
        <div className="absolute top-0 -z-10 flex items-end justify-center h-screen overflow-hidden">
            <VideoComponent className={"absolute top-0 z-10 w-auto min-w-full min-h-4/5 max-w-none"} src={'../video/movies.mp4'}/>
            <div className="relative z-20 inset-x-0 bottom-0 h-2/6 bg-gradient-to-t from-red-900 from-55% pt-5 w-screen flex item-center justify-center">
                <div className="w-5/6 overflow-x-auto flex flex-row items-center gap-12 h-4/5 shadow-xl p-5">
                    {
                        data.results.map(e => {
                            const id = e.url.split("/")
                            const index = id.length-2
                            return (
                                <MovieComponent title={e.title} episode_id={e.episode_id} urlId={id[index]} key={e.episode_id} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}