import { db } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request){
    try{
        const{gid, uemail} = await request.json();
        const client = await db.connect();
        const id = gid
        const email = uemail
        const result = await client.sql`DELETE FROM favorites WHERE email=${email} AND gid=${id}`;
        return NextResponse.json({ result }, { status: 200 });
    }catch(e){
        return NextResponse.json({ e }, { status: 500 });
    }
}