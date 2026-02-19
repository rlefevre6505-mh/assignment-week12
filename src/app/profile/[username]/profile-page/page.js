import { auth } from "@clerk/nextjs/server";
import { db } from "@/utils/dbConnection";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import ProfileBioCard from "@/components/ProfileBioCard";
import ProfileSports from "@/components/ProfileSports";
import ProfileConnections from "@/components/ProfileConnections";
import Footer from "@/components/Footer";
import profilePageStyles from "@/app/profile/[username]/profile-page/profile-page.module.css";
import Link from "next/link";

export default async function profilePage({ params }) {
  const { username } = params;
  const { userId } = await auth();

  const queryUser = await db.query(
    `SELECT * FROM w12_app_users WHERE clerk_id = $1`,
    [userId],
  );
  console.log("queryRows");
  console.log(queryUser.rows[0]);

  //variables for database values:
  const appUserId = queryUser.rows[0].id;
  const userName = queryUser.rows[0].screen_name;
  const userDob = queryUser.rows[0].dob;
  const userGender = queryUser.rows[0].gender;
  const userBio = queryUser.rows[0].bio;

  const timeNow = new Date();

  // subtract the current time's milliseconds from d.o.b
  const elapsed = new Date(timeNow.getTime() - userDob.getTime());

  //convert to full years
  const age = Math.abs(elapsed.getUTCFullYear() - 1970);
  console.log("User is " + age + " years old ");

  //matching location with user
  const queryUserLocations = await db.query(
    `SELECT location_id FROM w12_user_locations WHERE user_id = $1`,
    [appUserId],
  );
  const userLocations = queryUserLocations.rows[0].location_id;
  console.log("userLocations");
  console.log(userLocations);

  // matching user_location with data from locations
  const locations = await db.query(
    `SELECT town_name, county_unitary, country FROM w12_locations WHERE id = $1`,
    [userLocations],
  );
  const myLocation = locations.rows[0];
  const myTown = myLocation.town_name;
  const myCounty = myLocation.county_unitary;
  const myCountry = myLocation.country;
  const locationArray = [myTown, myCounty, myCountry];

  return (
    <>
      <header className={profilePageStyles.headerSection}>
        <Header>
          <NavBar />
        </Header>
      </header>

      <main className={profilePageStyles.mainSection}>
        <div className={profilePageStyles.profileLayout}>
          <Link href={`/profile/${userId}/profile-edit-form`}>
            Edit Profile
          </Link>
          <ProfileBioCard
            username={userName}
            locations={locationArray}
            age={age}
            gender={userGender}
            bio={userBio}
          />

          <ProfileSports username={username} />
        </div>
      </main>

      <Footer />
    </>
  );
}
