import { auth } from "@clerk/nextjs/server";
import LocationComponent from "@/components/LocationComponent";
import { db } from "../../../utils/dbConnection";

export default async function profileSetupFormPageCont() {
  const { userId } = await auth();

  //query and store locations that will be filtered through as user types their town/city
  const queryLocations = await db.query(`SELECT * FROM w12_locations`);
  const queryUser = await db.query(
    `SELECT * FROM w12_app_users WHERE clerk_id = $1`,
    [userId],
  );
  const user = queryUser.rows[0].id;
  console.log(user);

  return (
    <>
      <Protect
        fallback={<p>Users that are not signed in cannot view this page.</p>}
      >
        <LocationComponent
          userid={user}
          locations={queryLocations.rows}
          key={queryLocations.rows.id}
          route={"new"}
        />{" "}
      </Protect>
    </>
  );
}
