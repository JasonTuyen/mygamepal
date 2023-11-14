import { NextResponse } from 'next/server';

export async function POST(request: Request){
    try{
        const{username, password} = await request.json();
        //TO-DO: username and password validation
        console.log({ username, password });
    }catch(e){
        console.log({e});
    }
    return NextResponse.json({ message: 'success' });
}