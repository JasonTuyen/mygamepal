import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

export default async function FavoritesPage() {
  const loggedSession = await getServerSession(options)
  return (
    <>
      <div className="container">
        <div className="prose" style={{paddingTop:100, paddingBottom:20}}><h1 className="text-accent">Hello, {loggedSession?.user?.name}</h1></div>
      </div>
    </>
  )
}