import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "../../../../utils/dbConnection";

export default async function SaveLocations({ params, searchParams }) {
  const { username } = await params;
  const { search } = await searchParams;

  async function locationUpdate() {
    "use server";

    // const updateValues = [loc1, loc2, loc3, loc4, loc5];

    console.log(username);
    console.log(search);

    // db.query(`UPDATE w12_user_locations SET location_id = $1`, [updateValues]);
    // // revalidatePath("/");
    // // redirect(`/`);
  }
  setTimeout(() => {
    locationUpdate();
  }, 2000);
  return <div>Saving Locations...</div>;
}
