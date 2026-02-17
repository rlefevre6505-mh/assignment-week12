import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "../../../../utils/dbConnection";

export default async function ProfileSetupFormPage() {
  const { userId } = await auth();

  const querySports = await db.query(`SELECT * FROM w12_sport_list AS sports`);
  const sports = querySports.rows;
  console.log(sports);

  const queryLevels = await db.query(
    `SELECT * FROM w12_sport_levels AS levels`,
  );
  const levels = queryLevels.rows;
  console.log(levels);

  const queryUser = await db.query(
    `SELECT id FROM w12_app_users WHERE clerk_id = $1`,
    ["user_39kZhVFJWRVgA26RzTqBeKZ88J5"],
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
    redirect(`/feed`);
  }

  return (
    <form action={handleSubmit}>
      <div>
        <div>
          <label htmlFor="sport_1">Choose a sport</label>
          <select name="sport_1" required>
            <option>--Please choose an option--</option>
            {sports.map((sport, i) => {
              return (
                <option key={`sportoption${i}`} value={sport.id}>
                  {sport.sport_name}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label htmlFor="level_1">Choose your level</label>
          <select name="level_1" required>
            <option>--Please choose an option--</option>
            {levels.map((level, i) => {
              return (
                <option key={`leveloption${i}`} value={level.id}>
                  {level.level_name}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <label htmlFor="sport_2">Choose a sport</label>
          <select name="sport_2">
            <option>--Please choose an option--</option>
            {sports.map((sport, i) => {
              return (
                <option key={`sportoption${i}`} value={sport.id}>
                  {sport.sport_name}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label htmlFor="level_2">Choose your level</label>
          <select name="level_2">
            <option>--Please choose an option--</option>
            {levels.map((level, i) => {
              return (
                <option key={`leveloption${i}`} value={level.id}>
                  {level.level_name}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <label htmlFor="sport_3">Choose a sport</label>
          <select name="sport_3">
            <option>--Please choose an option--</option>
            {sports.map((sport, i) => {
              return (
                <option key={`sportoption${i}`} value={sport.id}>
                  {sport.sport_name}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label htmlFor="level_3">Choose your level</label>
          <select name="level_3">
            <option>--Please choose an option--</option>
            {levels.map((level, i) => {
              return (
                <option key={`leveloption${i}`} value={level.id}>
                  {level.level_name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
// needed for w12_user_sports: user_id, sport_id, sport_level_id
