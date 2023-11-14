import { db } from '@vercel/postgres';
import { options } from "../auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

export async function fetchAll() {
  const client = await db.connect();
  var data = await client.sql`SELECT * FROM games`;
  return data.rows;
}

export async function fetchFav(){
  const loggedSession = await getServerSession(options)
  const email = loggedSession?.user?.email
  const client = await db.connect();
  var data = await client.sql`SELECT g.id, g.slug FROM games g INNER JOIN favorites f ON f.gid = g.id WHERE f.email = ${email}`;
  return data.rows;
}

export async function fetchNotFav() {
  const loggedSession = await getServerSession(options)
  const email = loggedSession?.user?.email
  const client = await db.connect();
  var data = await client.sql`SELECT * FROM games g WHERE g.id NOT IN (SELECT gid FROM favorites WHERE email=${email})`;
  return data.rows;
}

/*
The defualt COPY command that is used in the copyData() func below could not be used with @vercel/postgres due to insufficient privileges
As an alternative I used pgAdmin4 to copy the "test.csv" file: https://www.pgadmin.org/download/
The statement below works since anyone can copy using "\copy"
\copy games(id, slug) FROM '%FullFilePath/test.csv' DELIMITER ',' CSV
*/
export async function copyData(){
  const client = await db.connect();
  await client.sql`COPY games FROM 'test.csv' WITH (FORMAT csv)`;
}