// TODO: show bio cards for users whose locations & sports match the current logged in user

import matchesListStyles from "@/styles/matchesList.module.css"
import SportCard from "./SportIcon"

export default function MatchesList(){

    // TODO: add .map logic to show all cards for users who 'match' within the matches Container

    return(
        <>
        <section className={matchesListStyles.matchesContainer}>
            <div className={matchesListStyles.matchUserBio}>
                <img src="#" alt="User's profile photo" className={matchesListStyles.matchUserPhoto}/>

                <div className={matchesListStyles.matchUserContent}>
                {/* TODO: Add logic so username/location is dynamic */}
                    <h2 className={profileBioCardStyles.username}>Username</h2>
                    <p className={profileBioCardStyles.p}>Location</p>
                </div>

                <div className={matchesListStyles.matchUserSports}>
                    {/* TODO: insert here sport cards corresponding to all sports that user has selected */}
                    <SportCard/>
                </div>

            </div>
        </section>
        </>
    )
}

