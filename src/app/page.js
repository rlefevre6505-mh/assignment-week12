import Link from "next/link";
import Footer from "src/components/Footer";

export default function Home() {
  return (
    <div>
      <section className="intro-section">
        <h1>Kickabout</h1>
        <h2>It's hard being a beginner.</h2>
        <h3>Take the pressure off and make friends with Kickabout</h3>
        <Link href="/sign-up">sign up</Link>
        <Link href="/sign-in">sign in</Link>
      </section>

      <section className="about-section">
        <img src="#" alt="animation of people playing football together"/>
        <p>
          Ever wanted to try a new hobby, but don’t know where to start?

            We know it can be difficult to try something new - especially when that means joining an established club or team, often with the requirement to commit to a set schedule

            That’s why we created Kickabout - so you can find like-minded people in your area who want to try the same activities as you at a beginner level.

            No pressure. No competition. Just fun!
        </p>
      </section>

      <section className="how-it-works-section">
        <h2>How it works</h2>

        <div className="how-it-works-cards">
          <div className="card">
            <h3>01 Create a profile</h3>
            <p>Explanation for card 1</p>
          </div>

          <div className="card">
            <h3>02 Get your matches</h3>
            <p>Explanation for card 2</p>
          </div>

          <div className="card">
            <h3>03 Arrange a meet-up</h3>
            <p>Explanation for card 3</p>
          </div>

          <div className="card">
            <h3>04 Play and have fun!</h3>
            <p>Explanation for card 4</p>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
}
