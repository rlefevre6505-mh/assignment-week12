"use server";
import { db } from "@/utils/dbConnection";

export async function SaveLocations(locationData) {
  locationData.forEach((item) => {
    db.query(
      `INSERT INTO w12_user_locations (user_id, location_id) VALUES ($1, $2)`,
      [item.user_id, item.location_id],
    );
  });
}
