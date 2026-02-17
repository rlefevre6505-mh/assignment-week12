import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "../../utils/dbConnection";
import setupFormStyles from "./profile-setup-form.module.css";

export default async function ProfileSetupFormPage() {
  // pull clerk id and current date here
  const { userId } = await auth();
  const signInName = await currentUser();
  const today = new Date();

  //   function setAdultAge() {
  //     const date = new Date();
  //     let dd = date.getDate();
  //     let mm = date.getMonth() + 1;
  //     // let minmax = [];
  //     const yyyy = date.getFullYear();
  //     if (dd < 10) {
  //       dd = "0" + dd;
  //     }
  //     if (mm < 10) {
  //       mm = "0" + mm;
  //     }
  //     const minYear = yyyy - 99;
  //     const maxYear = yyyy - 18;

  //     const min = `${dd}/${mm}/
  // ${minYear}`;
  //     const max = `${dd}/${mm}/
  // ${maxYear}`;
  //     console.log(minYear);
  //     console.log(maxYear);
  // return (minmax = [min, max]);
  // }
  // setAdultAge();

  // insert formValues into appropriate tables, along with "today" and "signInName"

  async function handleSubmit(rawFormData) {
    "use server";
    const formValues = {
      clerk_id: userId,
      screen_name: rawFormData.get("screen_name"),
      dob: rawFormData.get("dob"),
      gender: rawFormData.get("gender"),
      date: today,
      bio: rawFormData.get("bio"),
    };

    try {
      await db.query(
        `INSERT INTO w12_app_users (clerk_id, screen_name, dob, gender, date, bio) VALUES ($1, $2, $3, $4, $5, $6)`,
        [
          formValues.clerk_id,
          formValues.screen_name,
          formValues.dob,
          formValues.gender,
          formValues.date,
          formValues.bio,
        ],
      );
    } catch (error) {
      console.error(error);
    }
    revalidatePath(`profile-setup-form`);
    redirect(`profile-setup-form/profile-setup-form-cont`);
  }
  return (
    <main className={setupFormStyles.main_section}>
      <h1 className={setupFormStyles.heading}>Thanks for signing up!</h1>
      <h2 className={setupFormStyles.subheading}>
        You&apos;re almost there, we just need a bit more information about you
        to find your matches
      </h2>
      <form action={handleSubmit} className={setupFormStyles.form}>
        <label htmlFor="screen_name" className={setupFormStyles.form_label}>
          01 - What name would you like matched users to see?
        </label>
        <input
          type="text"
          name="screen_name"
          minLength={5}
          maxLength={30}
          required
          className={setupFormStyles.input}
        />

        {/* set over 18s only? restrict to max and min*/}
        <label htmlFor="dob" className={setupFormStyles.form_label}>
          02 - Please enter your date of birth:
        </label>
        <input
          type="date"
          name="dob"
          required
          className={setupFormStyles.input}
        />

        <label htmlFor="gender" className={setupFormStyles.form_label}>
          03 - Please select your gender:
        </label>
        <select
          name="gender"
          defaultValue="--Please choose an option--"
          selected
          required
          className={setupFormStyles.input}
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
          rows="5"
          cols="33"
          className={setupFormStyles.input}
        ></textarea>

        <button type="submit" className={setupFormStyles.button}>
          Next
        </button>
      </form>
    </main>
  );
}
// needed for w12_app_users: clerk_id, screen_name, dob, gender, current date, bio(optional)
