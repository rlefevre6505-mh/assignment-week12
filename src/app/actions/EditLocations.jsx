"use server";
import { db } from "@/utils/dbConnection";

export async function EditLocations(locationData) {
  locationData.forEach((item) => {
    db.query(
      `UPDATE w12_user_locations  SET location_id = $1 WHERE user_id = $2`,
      [item.location_id, item.user_id],
    );
  });
}
