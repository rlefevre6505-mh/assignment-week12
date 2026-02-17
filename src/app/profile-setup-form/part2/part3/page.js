import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "../../../../utils/dbConnection";
import setupFormStyles from "@/app/profile-setup-form/profile-setup-form.module.css";

export default async function ProfileSetupFormPage() {
  const { userId } = await auth();

  const querySports = await db.query(`SELECT * FROM w12_sport_list AS sports`);
  const sports = querySports.rows;
  // console.log(sports);

  const queryLevels = await db.query(
    `SELECT * FROM w12_sport_levels AS levels`,
  );
  const levels = queryLevels.rows;
  // console.log(levels);

  const queryUser = await db.query(
    `SELECT id FROM w12_app_users WHERE clerk_id = $1`,
    [userId],
  );
  const user = queryUser.rows[0].id;

  async function handleSubmit(rawFormData) {
    "use server";
    const formValues = {
      user_id: user,
      sport_id: rawFormData.get("sport_1"),
      sport_level_id: rawFormData.get("level_1"),
    };
    try {
      db.query(
        `INSERT INTO w12_user_sports (user_id, sport_id, sport_level_id) VALUES ($1, $2, $3)`,
        [formValues.user_id, formValues.sport_id, formValues.sport_level_id],
      );
    } catch (error) {
      console.error(error);
    }
    if (rawFormData.get("sport_2") && rawFormData.get("level_2")) {
      const formValues = {
        user_id: user,
        sport_id: rawFormData.get("sport_2"),
        sport_level_id: rawFormData.get("level_2"),
      };
      try {
        db.query(
          `INSERT INTO w12_user_sports (user_id, sport_id, sport_level_id) VALUES ($1, $2, $3)`,
          [formValues.user_id, formValues.sport_id, formValues.sport_level_id],
        );
      } catch (error) {
        console.error(error);
      }
    }
    if (rawFormData.get("sport_3") && rawFormData.get("level_3")) {
      const formValues = {
        user_id: user,
        sport_id: rawFormData.get("sport_3"),
        sport_level_id: rawFormData.get("level_3"),
      };
      try {
        db.query(
          `INSERT INTO w12_user_sports (user_id, sport_id, sport_level_id) VALUES ($1, $2, $3)`,
          [formValues.user_id, formValues.sport_id, formValues.sport_level_id],
        );
      } catch (error) {
        console.error(error);
      }
    }
    redirect(`/feed/:username`);
  }

  return (
    <main className={setupFormStyles.main_section}>
      <h1 className={setupFormStyles.heading}>Nearly there...</h1>
      <h2 className={setupFormStyles.subheading}>
        Choose at least one sport you would like to play and your desired level
      </h2>
      <form action={handleSubmit} className={setupFormStyles.form}>
        <label htmlFor="sport_1" className={setupFormStyles.form_label}>
          Choose a sport
        </label>
        <select name="sport_1" required className={setupFormStyles.input}>
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
        <select name="level_1" required className={setupFormStyles.input}>
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
  );
}
// needed for w12_user_sports: user_id, sport_id, sport_level_id
