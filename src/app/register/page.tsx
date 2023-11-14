import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import Form from './form'

export default async function RegisterPage(){
    const session = await getServerSession();
    if(session){
        redirect('/');
    }
    return(
    <div className="container">
        <div className="prose" style={{paddingTop:100, paddingBottom:20}}><h1 className="text-accent">Registration</h1></div>
        <Form/>
    </div>
    )
}

{/*Currently disabled. Should sign in with 3rd party. Remeber to add link to navbar*/}