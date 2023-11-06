//without the matcher on line 5, next-auth is applied to all pages
export {default} from "next-auth/middleware"

//this matcher applies next-auth to the following pages only
export const config = {matcher: ["/favorites"]}