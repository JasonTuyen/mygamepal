import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import {fetchFav, fetchNotFav} from "@/app/api/data/route"
import ButtonAdd from "./buttonAdd"
import ButtonRemove from "./buttonRemove"

export default async function FavoritesPage() {
  const loggedSession = await getServerSession(options)
  const games = await fetchNotFav();
  const faves = await fetchFav();
  return (
    <>
    <div className="container">
    <div className="overflow-x-auto">
      <div className="prose" style={{paddingTop:100, paddingBottom:20}}>
        <h1 className="text-accent">Hello {loggedSession?.user?.name}</h1>
      </div>
        <h2 className="text-accent">Your Favorites</h2>
        <table className="table table-sm">
          <thead>
              <tr>
                <th>Id</th> 
                <th>Name</th> 
                <th>Remove?</th>
              </tr>
          </thead> 
          {faves.map(function(fave) {
              return(
                <tbody key={fave.id}>
                  <tr>
                    <td>{fave.id}</td> 
                    <td>{fave.slug}</td>
                    <td><ButtonRemove id={fave.id} email={loggedSession?.user?.email}/></td>
                  </tr>
                </tbody> 
              )
          })}
        </table>
        <h2 className="text-accent mt-10">Add Favorites</h2>
        <table className="table table-sm">
          <thead>
              <tr>
                <th>Id</th> 
                <th>Name</th>
                <th>Add?</th>
              </tr>
          </thead> 
          {games.map(function(game) {
              return(
                <tbody key={game.id}>
                  <tr>
                    <td>{game.id}</td> 
                    <td>{game.slug}</td>
                    <td><ButtonAdd id={game.id} email={loggedSession?.user?.email}/></td>
                  </tr>
                </tbody> 
              )
          })}
        </table>
    </div>
    </div>
    </>
  )
}