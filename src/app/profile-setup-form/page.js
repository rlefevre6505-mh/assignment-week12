import { currentUser } from "@clerk/nextjs/server";

export default async function profileSetupFormPage() {
  // pull clerk id and current date here
  const signInName = await currentUser();
  const today = new Date();

  // insert formValues into appropriate tables, along with "today" and "signInName"
  function handleSubmit() {}

  return (
    <form action={handleSubmit}>
      <label htmlFor="screenName">
        What name would you like matched users to see?
      </label>
      <input
        type="text"
        name="screenName"
        minlemngth="5"
        maxlength="30"
        required
      />

      {/* set over 18s only? restrict to max and min*/}
      <label htmlFor="dob">Please enter your date of birth:</label>
      <input type="date" name="dob" required />

      <label htmlFor="gender">Please select your gender:</label>
      <select name="gender" required>
        <option value="" defaultValue selected disabled>
          --Please choose an option--
        </option>
        {/* add options here - needs setting up in DB*/}
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>

      <label for="story">Tell matched users a little about yourself:</label>
      <textarea name="bio" rows="5" cols="33"></textarea>

      <button type="submit">Submit</button>
    </form>
  );
}
// needed for w12_app_users: clerk_id, screen_name, dob, gender, current date, bio(optional)
