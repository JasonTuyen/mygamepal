import { fetchAll } from "@/app/api/data/route"
export async function generateStaticParams() {
    const games = await fetchAll()
    return games.map((game) => ({
        params: {
            id: game.id,
            slug: game.slug
        },
    }))
}

export default function GamesDetails({ params }: { params: { slug: string, id: number } }){
    return(
        <>
            <div className="container">
                <div className="prose" style={{paddingTop:100, paddingBottom:20}}><h1 className="text-accent">Game Details for {params.slug}</h1></div>
                <p>The id is {params.id}</p>
            </div>
        </>
    )
}

