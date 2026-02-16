import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";
import { db } from "../utils/dbConnection.js";

export default async function Home() {
  // const queryLocations = await db.query(`SELECT * FROM w12_locations`);
  // console.log(await queryLocations.rows);

  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/sign-up">sign up</Link> <br></br>
      <Link href="/sign-in">sign in</Link> <br></br>
      <SignOutButton>
        <button>Sign out</button>
      </SignOutButton>
    </div>
  );
}
