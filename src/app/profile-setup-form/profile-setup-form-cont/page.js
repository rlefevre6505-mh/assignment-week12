import { currentUser } from "@clerk/nextjs/server";
import LocationComponent from "@/components/LocationComponent";
import { db } from "../../../utils/dbConnection";

export default async function profileSetupFormPageCont() {
  // // pull clerk id and current date here
  // const signInName = await currentUser();
  // //get userID from newly created user in DB
  // pull clerk id and current date here
  const signInName = await currentUser();
  //get userID from newly created user in DB
  // const queryUser = await db.query(
  //   `SELECT * FROM w12_app_users WHERE clerk_id = $1`,
  //   [signInName],
  // );
  const queryLocations = await db.query(`SELECT * FROM w12_locations`);
  // console.log(await queryLocations.rows);

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
      <LocationComponent
        userid={4} //! PLACEHOLDER
        locations={queryLocations.rows}
        key={queryLocations.rows.id}
      />
    </>
  );
}

// needed for w12_user_locations: user_id, location
// needed for w12_user_sports: user_id, sport_id, sport_level_id
