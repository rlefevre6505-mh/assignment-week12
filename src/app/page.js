import Link from "next/link";
import { db } from "../utils/dbConnection";
import Footer from "../components/Footer";
import homepageStyles from "@/app/homepage.module.css";
import { SignOutButton, SignInButton, SignUpButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  // const queryLocations = await db.query(`SELECT * FROM w12_locations`);
  // console.log(await queryLocations.rows);
  const { userId } = await auth();

  // Default screen name if not logged in or not found in DB
  let screenName = "Guest";

  if (userId) {
    const result = await db.query(
      `SELECT screen_name FROM w12_app_users WHERE clerk_id = $1`,
      [userId],
    );
    const screenName = result.rows[0]?.screen_name ?? "User";

    return (
      <>
        {/* INTRO SECTION */}
        <section className={homepageStyles.introSection}>
          {/* If user is logged in - show header */}

          {/* Header */}
          <header className={homepageStyles.header}>
            <h1 className={homepageStyles.appTitle}>Kickabout</h1>

            {/* If logged in -> welcome message to user & sign out button*/}
            {typeof userId === "string" && (
              <div className={homepageStyles.SignOutContainer}>
                {/* <div className={homepageStyles.clerkLinks}> */}
                <SignOutButton>
                  <button className={homepageStyles.SignOutButton}>
                    Sign Out
                  </button>
                </SignOutButton>
                {/* </div> */}
              </div>
            )}
          </header>

          {/* If user logged out -> sign in/up buttons */}
          {typeof userId !== "string" ? (
            <>
              <h2 className={homepageStyles.h2}>
                It&apos;s hard being a beginner.
              </h2>

              <h3 className={homepageStyles.h3}>
                Take the pressure off and make friends with Kickabout
              </h3>

              <div className={homepageStyles.clerkLinks}>
                <SignUpButton />
                <SignInButton />
              </div>
            </>
          ) : (
            // If user logged in -> view your matches button/sign out
            <>
              <h2 className={homepageStyles.h2}>{`Welcome ${screenName}!`}</h2>

              <h3 className={homepageStyles.h3}>
                Ready to find some friends to play with?
              </h3>

              {/* Link to matches */}
              <Link
                href={`/feed/${screenName}`}
                className={homepageStyles.button}
              >
                <div>View your matches</div>
              </Link>
            </>
          )}
        </section>

        {/* Rest of homepage always visible */}
        {/* ABOUT SECTION */}
        <section className={homepageStyles.aboutSection}>
          <img
            src="/images/football.png"
            alt="animation of people playing football together"
            className={homepageStyles.footballImage}
          />
          <p className={homepageStyles.aboutText}>
            Ever wanted to try a new hobby, but don’t know where to start? We
            know it can be difficult to try something new - especially when that
            means joining an established club or team, often with the
            requirement to commit to a set schedule That’s why we created
            Kickabout - so you can find like-minded people in your area who want
            to try the same activities as you at a beginner level. No pressure.
            No competition. Just fun!
          </p>
        </section>

        {/* TODO: Add text into these cards */}
        {/* HOW IT WORKS SECTION */}
        <section className={homepageStyles.howItWorksSection}>
          <h2 className={homepageStyles.howItWorksTitle}>How it works</h2>

          <div className={homepageStyles.howItWorksCards}>
            <div className={homepageStyles.card}>
              <h3 className={homepageStyles.cardTitle}>01 Create a profile</h3>
              <p className={homepageStyles.cardText}>Explanation for card 1</p>
            </div>

            <div className={homepageStyles.card}>
              <h3 className={homepageStyles.cardTitle}>02 Get your matches</h3>
              <p className={homepageStyles.cardText}>Explanation for card 2</p>
            </div>

            <div className={homepageStyles.card}>
              <h3 className={homepageStyles.cardTitle}>03 Arrange a meet-up</h3>
              <p className={homepageStyles.cardText}>Explanation for card 3</p>
            </div>

            <div className={homepageStyles.card}>
              <h3 className={homepageStyles.cardTitle}>
                04 Play and have fun!
              </h3>
              <p className={homepageStyles.cardText}>Explanation for card 4</p>
            </div>
          </div>
        </section>

        {/* FOOTER SECTION */}
        <section className={homepageStyles.homepageFooter}>
          <Footer />
        </section>
      </>
    );
  }
}
// } else {
//   return (
//     <>
//       <section className={homepageStyles.introSection}>
//         <h1 className={homepageStyles.appTitle}>Kickabout</h1>
//         <h2 className={homepageStyles.h2}>
//           It&apos;s hard being a beginner.
//         </h2>
//         <h3 className={homepageStyles.h3}>
//           Take the pressure off and make friends with Kickabout
//         </h3>
//         <div className={homepageStyles.clerkLinks}>
//           <Link href="/sign-up" className={homepageStyles.signUpLink}>
//             sign up
//           </Link>
//           <Link href="/sign-in" className={homepageStyles.signInLink}>
//             sign in
//           </Link>
//         </div>
//       </section>

//       <section className={homepageStyles.aboutSection}>
//         {/* TODO: Get this image working! */}
//         <img
//           src="/images/football.png"
//           alt="animation of people playing football together"
//           className={homepageStyles.footballImage}
//         />
//         <p className={homepageStyles.aboutText}>
//           Ever wanted to try a new hobby, but don’t know where to start? We
//           know it can be difficult to try something new - especially when that
//           means joining an established club or team, often with the
//           requirement to commit to a set schedule That’s why we created
//           Kickabout - so you can find like-minded people in your area who want
//           to try the same activities as you at a beginner level. No pressure.
//           No competition. Just fun!
//         </p>
//       </section>

//       {/* TODO: Add text into these cards */}
//       <section className={homepageStyles.howItWorksSection}>
//         <h2 className={homepageStyles.howItWorksTitle}>How it works</h2>

//         <div className={homepageStyles.howItWorksCards}>
//           <div className={homepageStyles.card}>
//             <h3 className={homepageStyles.cardTitle}>01 Create a profile</h3>
//             <p className={homepageStyles.cardText}>Explanation for card 1</p>
//           </div>

//           <div className={homepageStyles.card}>
//             <h3 className={homepageStyles.cardTitle}>02 Get your matches</h3>
//             <p className={homepageStyles.cardText}>Explanation for card 2</p>
//           </div>

//           <div className={homepageStyles.card}>
//             <h3 className={homepageStyles.cardTitle}>03 Arrange a meet-up</h3>
//             <p className={homepageStyles.cardText}>Explanation for card 3</p>
//           </div>

//           <div className={homepageStyles.card}>
//             <h3 className={homepageStyles.cardTitle}>
//               04 Play and have fun!
//             </h3>
//             <p className={homepageStyles.cardText}>Explanation for card 4</p>
//           </div>
//         </div>
//       </section>

//       <section className={homepageStyles.homepageFooter}>
//         <Footer />
//       </section>
//     </>
//     );
//   }
//
