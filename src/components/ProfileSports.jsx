// this will be the section in the profile page which will display all of the sports that user has chosen at sign up - displaying the sport icon and the ability level

// TODO: ADD LOGIC so that the sport cards that show on the page are the ones that user has selected

import profileSportsStyle from "@/styles/profileSports.module.css"
import SportIcon from "./SportIcon";
import { sportsIconData } from "@/data/sports";
import {Fragment} from "react"
import { levelMap } from "@/data/levels";
import {db} from "@/utils/dbConnection"
import SportCard from "./SportIcon";
import { auth } from "@clerk/nextjs/server";

// !Do I need to change username/screen_name here to clerk_id?

export default async function ProfileSports({username}){

    const { userId } = await auth();
  const queryUser = await db.query(
    `SELECT id FROM w12_app_users WHERE clerk_id = $1`,
    [userId],
  );
  const user = queryUser.rows[0].id;

    // const userQuery = await db.query(
    //     `SELECT id FROM w12_app_users WHERE id = $1`,
    //     [username]
    // )

    // console.log("Username:", username)

    // const user = userQuery.rows[0];

    if (!user) {
        return <p>User not found.</p>;
    }

    const sportsQuery = await db.query(
        `SELECT sport_id, sport_level_id
        FROM w12_user_sports
        WHERE user_id = $1`,
        [4]
    )

    const userSports = sportsQuery.rows

    return(
        <>
        <h2 className={profileSportsStyle.h2}>Sports</h2>
        
        <div className={profileSportsStyle.sportPlusLevel}>

            {userSports.map((sport)=>{
                const sportData = sportsIconData.find(
                    (item) => item.id === sport.sport_id
                );

                if (!sportData) return null;

                return(
                    <SportIcon
                        key={sport.sport_id}
                        name={sportData.name}
                        icon={sportData.icon}
                        level={levelMap[sport.sport_level_id]}/>
                )
            })}

        </div>
        </>
    )
}

// put this back if SportCard doesn't work:
{/* <div className={profileSportsStyle.profileSportCard}>
            {/* use same cards as used in form? */}
            // <div className={profileSportsStyle.sportCard}>
                // <img src="#" alt="sportname-icon" className={profileSportsStyle.sportIcon}/>
                // <p className={profileSportsStyle.sportName}>Sport name</p>
            // </div>
            // <p className={profileSportsStyle.abilityLevel}>Ability level</p>
        // </div> */}

        // test