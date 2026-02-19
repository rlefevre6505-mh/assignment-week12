// TODO: show bio cards for users whose locations & sports match the current logged in user

import matchesListStyles from "@/styles/matchesList.module.css";
import SportCard from "./SportIcon";
import Link from "next/link";
import { levelMap } from "@/data/levels";
import { sportsIconData } from "@/data/sports";

export default function MatchesList({ matches }) {
  // TODO: add .map logic to show all cards for users who 'match' within the matches Container

  if (!matches || matches.length === 0) {
    return <p>No matches yet!</p>;
  }

  return (
    <>
      <section className={matchesListStyles.matchesContainer}>
        {matches.map((match) => (
          <Link
            key={match.id}
            href={`/${match.id}/profile`}
            className={matchesListStyles.matchCard}
          >
            {/* <div className={matchesListStyles.matchUserBio}> */}
            <img
              src={match.profile_photo || "/icons/default-avatar.png"}
              alt={`${match.screen_name}'s profile`}
              className={matchesListStyles.matchUserPhoto}
            />
            {/* </div> */}

            <div className={matchesListStyles.matchUserContent}>
              <h2 className={matchesListStyles.username}>
                {match.screen_name}
              </h2>
              <p className={matchesListStyles.location}>{match.town_name}</p>

              <div className={matchesListStyles.matchUserSports}>
                {match.sports.map((sport) => {
                  const sportData = sportsIconData.find(
                    (s) => s.id === sport.sport_id,
                  );

    return(
        <>
        <section className={matchesListStyles.matchesContainer}>
            {matches.map((match)=>(
                <Link
                    key={match.id}
                    href={`/profile/${match.id}/profile-page`}
                    className={matchesListStyles.matchCard}>

                  return (
                    <SportCard
                      key={sport.sport_id}
                      name={sportData.name}
                      icon={sportData.icon}
                      level={levelMap[sport.sport_level_id]}
                      variant="mini"
                    />
                  );
                })}
              </div>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
