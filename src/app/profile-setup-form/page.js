import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "../../utils/dbConnection";

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
      clerk_id: rawFormData.get("clerk_id"),
      screen_name: rawFormData.get("screen_name"),
      dob: rawFormData.get("dob"),
      gender: rawFormData.get("gender"),
      date: rawFormData.get("date"),
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
    <form action={handleSubmit}>
      <label htmlFor="clerk_id"></label>
      <input type="hidden" name="clerk_id" value={userId} />
      <label htmlFor="screen_name">
        What name would you like matched users to see?
      </label>
      <input
        type="text"
        name="screen_name"
        minLength={5}
        maxLength={30}
        required
      />

      {/* set over 18s only? restrict to max and min*/}
      <label htmlFor="dob">Please enter your date of birth:</label>
      <input type="date" name="dob" required />

      <label htmlFor="gender">Please select your gender:</label>
      <select
        name="gender"
        defaultValue="--Please choose an option--"
        selected
        required
      >
        <option>--Please choose an option--</option>
        {/* add options here - needs setting up in DB*/}
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Non-binary">Non-binary</option>
        <option value="Prefer not to say">Prefer not to say</option>
      </select>

      <label htmlFor="date"></label>
      <input type="hidden" name="date" value={today} />

      <label htmlFor="bio">
        {`Tell matched users a little about yourself (Optional):`}
      </label>
      <textarea name="bio" rows="5" cols="33"></textarea>

      <button type="submit">Submit</button>
    </form>
  );
}
// needed for w12_app_users: clerk_id, screen_name, dob, gender, current date, bio(optional)
