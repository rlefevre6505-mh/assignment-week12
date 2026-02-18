import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function profileEditFormPage({ params }) {
  const { username } = await params;
  const userInfoQuery = await db.query(
    `SELECT * FROM w12_app_users WHERE clerk_id = $1`,
    [username],
  );
  console.log(username);

  const userLocationsQuery = await db.query(
    `SELECT * FROM w12_user_locations WHERE user_id = $1`,
    [id],
  );

  const userSportsQuery = await db.query(
    `SELECT * FROM w12_user_sports WHERE user_id = $1`,
    [clerkId],
  );

  async function handleProfileEdit(rawFormData) {
    const formValues = {};
  }
  return <h1>Profile Edit Form</h1>;
}
