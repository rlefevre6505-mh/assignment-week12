import { auth } from "@clerk/nextjs/server";
import { db } from "@/utils/dbConnection";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import ProfileBioCard from "@/components/ProfileBioCard";
import ProfileSports from "@/components/ProfileSports";
import ProfileConnections from "@/components/ProfileConnections";
import Footer from "@/components/Footer";
import profilePageStyles from "@/app/profile/[username]/profile-page/profile-page.module.css";
import { Protect, clerkMiddleware, createRouteMatcher } from "@clerk/nextjs";

export default async function profilePage({ params }) {
  const { username } = params;
  const { userId } = await auth();
  // const queryUser = await db.query(
  //   `SELECT id, screen_name, bio FROM w12_app_users WHERE clerk_id = $1`,
  //   [userId],
  // );
  const queryUser = await db.query(
    `SELECT * FROM w12_app_users WHERE clerk_id = $1`,
    [userId],
  );
  console.log("queryRows");
  console.log(queryUser.rows[0]);
  const appUserId = queryUser.rows[0].id;
  const userName = queryUser.rows[0].screen_name;
  //TODO: DO stuff with dob:
  const userDob = queryUser.rows[0].dob;
  const userGender = queryUser.rows[0].gender;
  const userBio = queryUser.rows[0].bio;

  console.log("appUserId");
  console.log(appUserId);
  console.log("userName");
  console.log(userName);
  console.log("userDob");
  console.log(typeof userDob);
  console.log("userGender");
  console.log(userGender);
  console.log("userBio");
  console.log(userBio);

  const queryUserLocations = await db.query(
    `SELECT location_id FROM w12_user_locations WHERE user_id = $1`,
    [appUserId],
  );
  const userLocations = queryUserLocations.rows[0].location_id;
  console.log("userLocations");
  console.log(userLocations);

  const locations = await db.query(
    `SELECT town_name, county_unitary, country FROM w12_locations WHERE id = $1`,
    [userLocations],
  );
  const myLocation = locations.rows[0];
  const myTown = myLocation.town_name;
  const myCounty = myLocation.county_unitary;
  const myCountry = myLocation.country;
  const locationArray = [myTown, myCounty, myCountry];
  //comment
  console.log(locationArray);

  return (
    <>
      <Protect
        fallback={<p>Users that are not signed in cannot view this page.</p>}
      >
        <header className={profilePageStyles.headerSection}>
          <Header>
            {/* Top Nav for desktop */}
            <NavBar />
          </Header>
        </header>

        <main className={profilePageStyles.mainSection}>
          <div className={profilePageStyles.profileLayout}>
            <ProfileBioCard
              username={userName}
              locations={locationArray}
              dob={1}
              gender={userGender}
              bio={userBio}
            />

            {/* <ProfileBioCard/> */}

            <ProfileSports username={username} />

            <ProfileConnections />
          </div>
        </main>

        {/* Bottom Nav for mobile */}
        <div className={profilePageStyles.mobileNav}>
          <NavBar />
        </div>
        <Footer />
      </Protect>
    </>
  );
}

// let queryLocations = [];

// async function checkLocation(location, i) {
//   queryLocations[i] = await db.query(
//     `SELECT town_name, county_unitary, country FROM w12_locations WHERE id = $1`,
//     [location],
//   );
// }
//TODO:
// let locationsArray = [];

// userLocations.forEach(async function (location, i) {
//   console.log("For Each - location:");
//   console.log(location.location_id);
//   const queryThisLocation = await db.query(
//     `SELECT town_name, county_unitary, country FROM w12_locations WHERE id = $1`,
//     [location.location_id],
//   );
//   const thisTown = queryThisLocation.rows[0].town_name;
//   const thisCounty = queryThisLocation.rows[0].county_unitary;
//   const thisCountry = queryThisLocation.rows[0].country;
//   const thisArray = [thisTown, thisCounty, thisCountry, thisArray];
//   locationsArray[i] = thisArray;
// });
// queryUserLocations.forEach(checkLocation(location, i));
//TODO: END

// console.log("queryLocations:");
// console.log(queryLocations);
// console.log("locationsArray");
// console.log(locationsArray);
// // const locations =
// console.log("clerkId:");
// console.log(userId);
// console.log("appUserId:");
// console.log(appUserId);
// console.log("userName:");
// console.log(userName);
// console.log("userBio:");
// console.log(userBio);
// console.log("userLocations:");
// console.log(userLocations);
//   return (
// // !Do i need to change username to clerk_id here?

// export default function profilePage({params}) {

//   const {username} = params;

//   return(
//     <>
//       <header className={profilePageStyles.headerSection}>
//         <Header>
//           {/* Top Nav for desktop */}
//           <NavBar />
//         </Header>
//       </header>

//       <main className={profilePageStyles.mainSection}>
//         <div className={profilePageStyles.profileLayout}>
//           <ProfileBioCard
//             username={userName}
//             locations={userLocations}
//             dob={userDob}
//             gender={userGender}
//             bio={userBio}
//           />

//           <ProfileBioCard/>

//           <ProfileSports username={username}/>

//           <ProfileConnections />
//         </div>
//       </main>

//       {/* Bottom Nav for mobile */}
//       <div className={profilePageStyles.mobileNav}>
//         <NavBar/>
//       </div>
//       <Footer/>
//     </>
//   );
// }
