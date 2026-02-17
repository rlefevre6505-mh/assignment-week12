import { db } from "@/utils/dbConnection";
import { redirect } from "next/navigation";

export default async function delete4Page() {
  async function handleSubmit() {
    "use server";
    db.query(`DELETE FROM w12_user_sports WHERE user_id = 4`);
    redirect(`/`);
  }

  return (
    <>
      <form action={handleSubmit}>
        <button>delete</button>
      </form>
    </>
  );
}
