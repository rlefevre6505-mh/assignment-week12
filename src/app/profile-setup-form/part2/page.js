import { auth, currentUser } from "@clerk/nextjs/server";
import LocationComponent from "@/components/LocationComponent";
import { db } from "../../../utils/dbConnection";
import { Protect } from "@clerk/nextjs";

export default async function profileSetupFormPageCont() {
  // // pull clerk id and current date here
  // const signInName = await currentUser();
  // //get userID from newly created user in DB
  // pull clerk id and current date here
  //TODO: userId not currently in use, see red text in return > LocationComponent. Will need to get w12_app_users
  const { userId } = await auth();
  const signInName = await currentUser();
  //get userID from newly created user in DB
  // const queryUser = await db.query(
  //   `SELECT * FROM w12_app_users WHERE clerk_id = $1`,
  //   [signInName],
  // );
  const queryLocations = await db.query(`SELECT * FROM w12_locations`);
  // console.log(await queryLocations.rows);
  const queryUser = await db.query(
    `SELECT * FROM w12_app_users WHERE clerk_id = $1`,
    [userId],
  );
  console.log(userId);
  const user = queryUser.rows[0].id;
  console.log(user);
  // // insert formValues into appropriate tables, using userID
  // function handleSubmit() {}

  // insert formValues into appropriate tables, using userID
  async function handleSubmit() {
    "use server";
  }

  return (
    // <form action={handleSubmit}>
    //   {/* add location options here - search from options stored in DB*/}
    //   {/* add sports options here - search from options stored in DB*/}
    //   <button type="submit">Submit</button>
    // </form>
    <>
      <Protect
        fallback={<p>Users that are not signed in cannot view this page.</p>}
      >
        <LocationComponent
          userid={user}
          locations={queryLocations.rows}
          key={queryLocations.rows.id}
        />{" "}
      </Protect>
    </>
  );
}

// needed for w12_user_locations: user_id, location
