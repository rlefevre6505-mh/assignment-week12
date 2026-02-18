import { auth, currentUser } from "@clerk/nextjs/server";
import EditLocationComponent from "@/components/EditLocationComponent";
import { db } from "@/utils/dbConnection";

export default async function profileEditFormPage2() {
  const { userId } = await auth();
  const signInName = await currentUser();

  const queryLocations = await db.query(`SELECT * FROM w12_locations`);
  // console.log(await queryLocations.rows);
  const queryUser = await db.query(
    `SELECT id FROM w12_app_users WHERE clerk_id = $1`,
    [userId],
  );
  const user = queryUser.rows[0].id;

  // const currentLocation = await db.query(
  //   `SELECT id FROM w12_app_users JOIN w12_user_locations ON w12_user_locations.user_id = w12_app_users.id
  //   JOIN w12_locations ON w12_locations.id = w12_user_locations.location_id WHERE w12_app_users.id = $1`,
  //   [user],
  // );

  async function handleUpdate() {
    "use server";
  }

  return (
    // <form action={handleSubmit}>
    //   {/* add location options here - search from options stored in DB*/}
    //   {/* add sports options here - search from options stored in DB*/}
    //   <button type="submit">Submit</button>
    // </form>
    <>
      <EditLocationComponent
        userid={user}
        locations={queryLocations.rows}
        key={queryLocations.rows.id}
      />
    </>
  );
}

// needed for w12_user_locations: user_id, location
