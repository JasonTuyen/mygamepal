import type {NextAuthOptions} from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "Please use the OAuth options above."
                },
                password:{
                    label: "Password:",
                    type: "password",
                    placeholder: "Contact admin for credentials."
                }
            },
            async authorize(credentials) {
                // This is where you need to retrive user data to verify with credentials
                // See docs for more info: 
                // https://next-auth.js.org/providers/credentials
                const user = {id:"01", name: "jason", password: "auth"}
                if(credentials?.username === user.name && credentials?.password === user.password){
                    return user
                }else{
                    return null
                }
            }
        })
    ],

    /*
    This is where custom signin pages would go, but we will be using NextAuth defaults
    NextAuth.js automatically creates simple, unbranded authentication pages for handling Sign in, Sign out, Email Verification and displaying error messages.
    pages: {
        signIn: "/signin"
    }
    */
}