import Link from "next/link";
import { db } from "../utils/dbConnection";
import Footer from "../components/Footer";
import homepageStyles from "@/app/homepage.module.css";
import { SignOutButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const queryLocations = await db.query(`SELECT * FROM w12_locations`);
  // console.log(await queryLocations.rows);
  const { userId } = await auth();

  if (typeof userId === "string") {
    return (
      <div>
        <section className={homepageStyles.introSection}>
          <h1 className={homepageStyles.appTitle}>Kickabout</h1>
          <h2 className={homepageStyles.h2}>
            It&apos;s hard being a beginner.
          </h2>
          <h3 className={homepageStyles.h3}>
            Take the pressure off and make friends with Kickabout
          </h3>
          <div className={homepageStyles.clerkLinks}>
            <SignOutButton />
          </div>
        </section>

        <section className={homepageStyles.aboutSection}>
          {/* TODO: Get this image working! */}
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
        <section className={homepageStyles.homepageFooter}>
          <Footer />
        </section>
      </div>
    );
  } else {
    return (
      <div>
        <section className={homepageStyles.introSection}>
          <h1 className={homepageStyles.appTitle}>Kickabout</h1>
          <h2 className={homepageStyles.h2}>
            It&apos;s hard being a beginner.
          </h2>
          <h3 className={homepageStyles.h3}>
            Take the pressure off and make friends with Kickabout
          </h3>
          <div className={homepageStyles.clerkLinks}>
            <Link href="/sign-up" className={homepageStyles.signUpLink}>
              sign up
            </Link>
            <Link href="/sign-in" className={homepageStyles.signInLink}>
              sign in
            </Link>
          </div>
        </section>

        <section className={homepageStyles.aboutSection}>
          {/* TODO: Get this image working! */}
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

        <section className={homepageStyles.homepageFooter}>
          <Footer />
        </section>
      </div>
    );
  }
}
