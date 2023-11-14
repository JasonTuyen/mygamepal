import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

export default async function Navbar(){
  const loggedSession = await getServerSession(options)
  return (
    <>
      {loggedSession ? (
        <div className="navbar bg-primary fixed z-10">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl" href="/">mygamepal</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li><a href="/">Hello, {loggedSession?.user?.name}</a></li>
              <li><a href="/favorites">Favorites</a></li>
              <li><a href="/api/auth/signout?callbackUrl=/">Sign Out</a></li>
            </ul>
          </div>
        </div>
        ):(
        <div className="navbar bg-primary fixed z-10">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl" href="/">mygamepal</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li><a href="/favorites">Favorites</a></li>
              {/*<li><a href="/register">Register</a></li>*/}
              <li><a href="/api/auth/signin">Sign In</a></li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};