import {fetchAll} from "./api/data/route"

export default async function Home() {
  const items = await fetchAll();
  return (
    <>
      <div className="container">
      <div className="overflow-x-auto">
      <div className="prose" style={{paddingTop:100, paddingBottom:20}}><h1 className="text-accent">Top Games</h1></div>
        <table className="table table-md">
          <thead>
              <tr>
                <th>Id</th> 
                <th>Name</th> 
              </tr>
          </thead> 
          {items.map(function(item) {
              return(
                <tbody key={item.id}>
                  <tr>
                    <td>{item.id}</td> 
                    <td>{item.slug}</td>
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
