// this will be the view a user has of sports on other user's profiles, which will display all of the sports that user has chosen at sign up - displaying the sport icon and the ability level

import profileSportsStyle from "@/styles/profileSports.module.css";
import SportIcon from "./SportIcon";
import { sportsIconData } from "@/data/sports";
import { Fragment } from "react";
import { levelMap } from "@/data/levels";
import { db } from "@/utils/dbConnection";
import SportCard from "./SportIcon";

export default async function OtherProfileSports({ id }) {
  //   const { id } = params;
  //   console.log(id);

  const queryUser = await db.query(
    `SELECT id FROM w12_app_users WHERE id = $1`,
    [id],
  );
  const user = queryUser.rows[0].id;

  if (!user) {
    return <p>User not found.</p>;
  }

  const sportsQuery = await db.query(
    `SELECT sport_id, sport_level_id
        FROM w12_user_sports
        WHERE user_id = $1`,
    [user],
  );

  const userSports = sportsQuery.rows;

  return (
    <div className={profileSportsStyle.sportContainer}>
      <h2 className={profileSportsStyle.h2}>Sports</h2>

      <div className={profileSportsStyle.sportPlusLevel}>
        {userSports.map((sport) => {
          const sportData = sportsIconData.find(
            (item) => item.id === sport.sport_id,
          );

          if (!sportData) return null;

          return (
            <SportIcon
              key={sport.sport_id}
              name={sportData.name}
              icon={sportData.icon}
              level={levelMap[sport.sport_level_id]}
            />
          );
        })}
      </div>
    </div>
  );
}
