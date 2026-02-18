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
  const user = queryUser.rows[0].id;
  console.log(userId);

  const queryMatches = await db.query(
    `
    WITH filtered_locations AS (
    SELECT * FROM w12_app_users WHERE id IN
    (SELECT DISTINCT user_id FROM w12_user_locations WHERE location_id IN
    (SELECT location_id FROM w12_user_locations WHERE user_id = $1)))
    ,
    filtered_sports AS (
    SELECT * FROM w12_app_users WHERE id IN
    (SELECT DISTINCT user_id FROM w12_user_sports WHERE sport_id IN
    (SELECT sport_id FROM w12_user_sports WHERE user_id = $1)))

    SELECT *
    FROM filtered_locations
    WHERE id <> $1 
    AND id IN (SELECT id FROM filtered_sports)
  `,
    [user],
  );
  const matches = queryMatches.rows;
  console.table(matches);

  return (
    <>
      <Header>
        <NavBar />
      </Header>

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
