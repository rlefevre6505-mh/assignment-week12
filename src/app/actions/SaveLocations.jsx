"use server";
import { db } from "/utils/dbConnection";

//TODO: OG:
export async function SaveLocations(locationData) {
  locationData.forEach((item) => {
    db.query(
      `INSERT INTO w12_user_locations (user_id, location_id) VALUES ($1, $2)`,
      [item.user_id, item.location_id],
    );
  });
}

//TODO: Didn't work:
// export async function SaveLocations(userid, filteredLocations) {
//   "use server";
//   console.log("SaveLocation");

//   db.query(
//     `INSERT INTO w12_user_locations (user_id, location_id) VALUES ($1, $2)`,
//     [userid, 1],
//   );
//   redirect(`/profile-setup-form/part2/part3`);
// }

// [locationData[index].user_id, locationData[index].location],

//TODO: OG Backup:
// locationData.forEach((item) => {
//     db.query(
//       `INSERT INTO w12_user_locations (user_id, location_id) VALUES ($1, $2)`,
//       [item.user_id, item.location_id],
//     );
//   });
