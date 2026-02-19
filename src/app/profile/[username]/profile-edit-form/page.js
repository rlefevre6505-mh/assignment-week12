import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/utils/dbConnection";
import setupFormStyles from "@/app/profile-setup-form/profile-setup-form.module.css";

export default async function ProfileEditFormPage({ params }) {
  const { username } = await params;
  const userInfoQuery = await db.query(
    `SELECT * FROM w12_app_users WHERE clerk_id = $1`,
    [username],
  );
  const data = userInfoQuery.rows[0];
  console.log(username);

  const dateDay = data.dob.getDate();
  const dateMonth = data.dob.getMonth() + 1;
  const dateYear = data.dob.getFullYear();
  // const dateConcat = dateDa;
  console.log(dateDay);
  console.log(dateMonth);
  console.log(dateYear);
  // console.log(dateConcat);

  const user = userInfoQuery.rows[0].id;
  console.log(user);

  async function handleUpdate(rawFormData) {
    "use server";
    const formValues = {
      screen_name: rawFormData.get("screen_name"),
      dob: rawFormData.get("dob"),
      gender: rawFormData.get("gender"),
      bio: rawFormData.get("bio"),
    };

    try {
      await db.query(
        `UPDATE w12_app_users SET screen_name = $1, dob = $2, gender = $3, bio = $4 WHERE id = $5`,
        [
          formValues.screen_name,
          formValues.dob,
          formValues.gender,
          formValues.bio,
          user,
        ],
      );
    } catch (error) {
      console.error(error);
    }
    revalidatePath(`/profile/${username}/profile-edit-form`);
    redirect(`/profile/${username}/profile-edit-form/part2`);
  }
  return (
    
      <main className={setupFormStyles.main_section}>
        <h1 className={setupFormStyles.heading}>Edit Profile</h1>
        <h2 className={setupFormStyles.subheading}>Change your details here</h2>
        <form action={handleUpdate} className={setupFormStyles.form}>
          <label htmlFor="screen_name" className={setupFormStyles.form_label}>
            01 - What name would you like matched users to see?
          </label>
          <input
            type="text"
            name="screen_name"
            id="screen_name"
            minLength={5}
            maxLength={30}
            required
            className={setupFormStyles.input}
            defaultValue={data.screen_name}
          />

          {/* set over 18s only? restrict to max and min*/}
          <label htmlFor="dob" className={setupFormStyles.form_label}>
            02 - Please enter your date of birth:
          </label>
          <input
            type="date"
            name="dob"
            id="dob"
            required
            className={setupFormStyles.input}
            defaultValue={data.dob}
          />

          <label htmlFor="gender" className={setupFormStyles.form_label}>
            03 - Please select your gender:
          </label>
          <select
            name="gender"
            id="gender"
            selected
            required
            className={setupFormStyles.input}
            defaultValue={data.gender}
          >
            <option>--Please choose an option--</option>
            {/* add options here - needs setting up in DB*/}
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non-binary">Non-binary</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>

          <label htmlFor="bio" className={setupFormStyles.form_label}>
            {`04 - Tell matched users a little about yourself (Optional):`}
          </label>
          <textarea
            name="bio"
            id="bio"
            rows="5"
            cols="33"
            className={setupFormStyles.input}
            defaultValue={data.bio}
          ></textarea>

        <button type="submit" className={setupFormStyles.button}>
          Next
        </button>
      </form>
    </main>
  );
}
