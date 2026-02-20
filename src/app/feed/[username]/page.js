import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import MatchesList from "@/components/MatchesList";
import feedStyles from "@/app/feed/[username]/feed.module.css";
import { FaSort, FaFilter, FaGripLinesVertical } from "react-icons/fa";
import { auth } from "@clerk/nextjs/server";
import { db } from "../../../utils/dbConnection";
// import { Protect, clerkMiddleware, createRouteMatcher } from "@clerk/nextjs";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs";
import MatchesFilter from "@/components/MatchesFilter";
import { redirect } from "next/navigation";

export default async function feedPage() {
  // logic to identify current user ID fron DB based on Clerk log in
  const { userId } = await auth();

  if (!userId) {
  redirect("/");
}
  const queryUser = await db.query(
    `SELECT id FROM w12_app_users WHERE clerk_id = $1`,
    [userId],
  );
  const user = queryUser.rows[0].id;

  // SINEADS CODE  FOR FILTERING ===
  const userSportsQuery = await db.query(
    `SELECT sport_id, sport_level_id
    FROM w12_user_sports
    WHERE user_id = $1`,
    [user],
  );
  const userSports = userSportsQuery.rows;

  // ================================

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

  // Code to fetch sports separately, becuuse each user could have more than 1 sport
  const matchIds = matches.map((m) => m.id);
  const sportsQuery = await db.query(
    `
    SELECT user_id, sport_id, sport_level_id
    FROM w12_user_sports
    WHERE user_id = ANY($1)`,
    [matchIds],
  );

  const matchSports = sportsQuery.rows;

  const matchesWithSports = matches.map((user) => {
    return {
      ...user,
      sports: matchSports.filter((s) => s.user_id === user.id),
    };
  });
  console.log();
  // ADDED THIS TO REPLACE PROTECT
  if (!userId) {
    redirect("/");
  }

  return (
    <>
      <header className={feedStyles.headerSection}>
        <Header>
          <NavBar />
        </Header>
      </header>

      <main className={feedStyles.mainSection}>
        <h2 className={feedStyles.pageTitle}>Your matches</h2>

        <hr className={feedStyles.lineBreak}></hr>

        <section className={feedStyles.matchesSection}>
          <MatchesFilter matches={matchesWithSports} userSports={userSports} />
        </section>
      </main>

      <Footer />
    </>
  );
}
