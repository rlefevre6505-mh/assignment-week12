import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/utils/dbConnection";
import { Protect } from "@clerk/nextjs";
import setupFormStyles from "@/app/profile-setup-form/profile-setup-form.module.css";

export default async function ProfileEditFormPage3({ params }) {
  const { username } = await params;
  const querySports = await db.query(`SELECT * FROM w12_sport_list AS sports`);
  const sports = querySports.rows;

  const queryLevels = await db.query(
    `SELECT * FROM w12_sport_levels AS levels`,
  );

  const userInfoQuery = await db.query(
    `SELECT * FROM w12_app_users WHERE clerk_id = $1`,
    [username],
  );
  const user = userInfoQuery.rows[0].id;
  console.log(user);

  const levels = queryLevels.rows;

  const userSportsQuery = await db.query(
    `SELECT * FROM w12_user_sports WHERE user_id = $1`,
    [user],
  );
  const data = userSportsQuery.rows[0];

  async function handleUpdate(rawFormData) {
    "use server";
    const formValues = {
      sport_id: rawFormData.get("sport_id"),
      sport_level_id: rawFormData.get("sport_level_id"),
    };

    try {
      await db.query(
        `UPDATE w12_user_sports SET sport_id = $1, sport_level_id = $2 WHERE user_id = $3`,
        [formValues.sport_id, formValues.sport_level_id, username],
      );
    } catch (error) {
      console.error(error);
    }
    revalidatePath(`/profile/${username}/profile-edit-form/part2/part3`);
    redirect(`/feed/${username}`);
  }
  return (
    <>
      {" "}
      <Protect
        fallback={<p>Users that are not signed in cannot view this page.</p>}
      >
        <main className={setupFormStyles.main_section}>
          <h1 className={setupFormStyles.heading}>Edit Profile</h1>
          <h2 className={setupFormStyles.subheading}>
            Change your existing sports or levels, or add any new sports that
            you want to try here
          </h2>
          <form action={handleUpdate} className={setupFormStyles.form}>
            <label htmlFor="sport_1" className={setupFormStyles.form_label}>
              Choose a sport
            </label>
            <select
              name="sport_1"
              required
              defaultValue={data.sport_id}
              className={setupFormStyles.input}
            >
              <option>--Please choose an option--</option>
              {sports.map((sport, i) => {
                return (
                  <option key={`sportoption${i}`} value={sport.id}>
                    {sport.sport_name}
                  </option>
                );
              })}
            </select>
            <label htmlFor="level_1" className={setupFormStyles.form_label}>
              Choose your level
            </label>
            <select
              name="level_1"
              required
              className={setupFormStyles.input}
              defaultValue={data.sport_level_id}
            >
              <option>--Please choose an option--</option>
              {levels.map((level, i) => {
                return (
                  <option key={`leveloption${i}`} value={level.id}>
                    {level.level_name}
                  </option>
                );
              })}
            </select>
            <label htmlFor="sport_2" className={setupFormStyles.form_label}>
              Choose a sport
            </label>
            <select name="sport_2" className={setupFormStyles.input}>
              <option>--Please choose an option--</option>
              {sports.map((sport, i) => {
                return (
                  <option key={`sportoption${i}`} value={sport.id}>
                    {sport.sport_name}
                  </option>
                );
              })}
            </select>
            <label htmlFor="level_2" className={setupFormStyles.form_label}>
              Choose your level
            </label>
            <select name="level_2" className={setupFormStyles.input}>
              <option>--Please choose an option--</option>
              {levels.map((level, i) => {
                return (
                  <option key={`leveloption${i}`} value={level.id}>
                    {level.level_name}
                  </option>
                );
              })}
            </select>
            <label htmlFor="sport_3" className={setupFormStyles.form_label}>
              Choose a sport
            </label>
            <select name="sport_3" className={setupFormStyles.input}>
              <option>--Please choose an option--</option>
              {sports.map((sport, i) => {
                return (
                  <option key={`sportoption${i}`} value={sport.id}>
                    {sport.sport_name}
                  </option>
                );
              })}
            </select>
            <label htmlFor="level_3" className={setupFormStyles.form_label}>
              Choose your level
            </label>
            <select name="level_3" className={setupFormStyles.input}>
              <option>--Please choose an option--</option>
              {levels.map((level, i) => {
                return (
                  <option key={`leveloption${i}`} value={level.id}>
                    {level.level_name}
                  </option>
                );
              })}
            </select>
            <button type="submit" className={setupFormStyles.button}>
              Submit
            </button>
          </form>
        </main>
      </Protect>
    </>
  );
}
