// TODO: show bio cards for users whose locations & sports match the current logged in user

import matchesListStyles from "@/styles/matchesList.module.css";
import SportIcon from "./SportIcon";
import Link from "next/link";
import { levelMap } from "@/data/levels";
import { sportsIconData } from "@/data/sports";

export default function MatchesList({ matches }) {
  if (!matches || matches.length === 0) {
    return <p>No matches yet!</p>;
  }
  console.log(matches);

  return (
    
    <section className={matchesListStyles.matchesContainer}>
      {matches.map((match) => (
        
        <div key={`match-${match.id}`}>
          
          <Link
            href={`/${match.id}/profile`}
            className={matchesListStyles.matchCard}
          >
            {/* <div className={matchesListStyles.matchUserBio}> */}
            <img
              src={match.profile_photo || "/icons/default-avatar.png"}
              alt={`${match.screen_name}'s profile`}
              className={matchesListStyles.matchUserPhoto}
            />

            <div className={matchesListStyles.matchUserContent}>
              <h2 className={matchesListStyles.username}>
                {match.screen_name}
              </h2>
              <p className={matchesListStyles.location}>{match.town_name}</p>

              <div className={matchesListStyles.matchUserSports}>
                {match.sports.map((sport,index) => {
                  const sportData = sportsIconData.find(
                    (s) => s.id === sport.sport_id,
                  );
                  console.log(sport.sport_id);
                  if(!sportData) return null;
                  return (
                    <SportIcon
                      key={`${sport.sport_id}-${index}`}
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
        </div>
      ))}
    </section>
  );
}
