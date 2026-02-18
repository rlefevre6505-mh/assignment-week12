import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import MatchesList from "@/components/MatchesList";
import feedStyles from "@/app/feed/[username]/feed.module.css";
import { FaSort, FaFilter, FaGripLinesVertical } from "react-icons/fa";
import { auth } from "@clerk/nextjs/server";
import { db } from "../../../utils/dbConnection";

export default async function feedPage() {
  // const queryUserDetails = await db.query(
  //   `SELECT * FROM w12_app_users JOIN w12_user_sports ON w12_app_users.id = w12_user_sports.user_id ,
  //   JOIN w12_user_locations ON w12_app_users.id = w12_user_locations.user_id WHERE w12_app_users.id = $1`
  //   [4], //!! change this back to user!
  // );
  // const userDetails = queryUserDetails.rows;
  // console.log(userDetails);

  // const detailsArray = [];
  // userDetails.map((detail) => {
  //   location_id;
  //   sport_id;
  //   sport_level;
  // });

  const { userId } = await auth();
  const queryUser = await db.query(
    `SELECT id FROM w12_app_users WHERE clerk_id = $1`,
    [userId],
  );
  // const user = queryUser.rows[0].id

  // const queryLocations = await db.query(
  //   "SELECT location_id FROM w12_user_locations WHERE user_id = $1",
  //   [4],
  // );
  // const locations = queryLocations.rows;
  // console.log(locations);

  // const querySports = await db.query(
  //   "SELECT sport_id, sport_level_id FROM w12_user_sports WHERE user_id = $1",
  //   [4],
  // );
  // const sports = querySports.rows;
  // console.log(sports);

  const queryMatches = await db.query(
    `SELECT id, screen_name, dob, gender, bio, sport_id, sport_level_id FROM w12_app_users FULL JOIN w12_user_sports on w12_app_users.id = w12_user_sports.user_id WHERE `,
    // nested query may be needed to complete this - "where any of the current user's locations match any other user's location"
  );
  const matches = queryMatches.rows;
  console.table(matches);

  return (
    <>
      <Header />

      <NavBar />

      <h1 className={feedStyles.pageTitle}>Your matches</h1>

      <hr className={feedStyles.lineBreak}></hr>

      <section className={feedStyles.controls}>
        <button className={feedStyles.sortButton}>
          <FaSort className={feedStyles.icon} />
          <span className={feedStyles.label}>Sort</span>
        </button>

        <FaGripLinesVertical className={feedStyles.lines} />

        <button className={feedStyles.filterButton}>
          <FaFilter className={feedStyles.icon} />
          <span className={feedStyles.label}>Filter</span>
        </button>
      </section>

      <hr className={feedStyles.lineBreak}></hr>

      <section className={feedStyles.matchesSection}>
        <MatchesList />
      </section>

      <Footer />
    </>
  );
}
