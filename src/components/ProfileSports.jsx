// this will be the section in the profile page which will display all of the sports that user has chosen at sign up - displaying the sport icon and the ability level

import profileSportsStyle from "@/styles/profileSports.module.css"
import SportCard from "./SportCard"

export default function ProfileSports(){
    return(
        <>
        <h2 className={profileSportsStyle.h2}>Sports</h2>
        {/* logic here to fetch sports data and levels from db, use .map to create a card for each one*/}

        {/* OR use SportCard component here?? and reuse it in the form? */}
        <SportCard/>
        </>
    )
}

// put this back if SportCard doesn't work:
{/* <div className={profileSportsStyle.profileSportCard}>
            {/* use same cards as used in form? */}
            // <div className={profileSportsStyle.sportCard}>
                // <img src="#" alt="sportname-icon" className={profileSportsStyle.sportIcon}/>
                // <p className={profileSportsStyle.sportName}>Sport name</p>
            // </div>
            // <p className={profileSportsStyle.abilityLevel}>Ability level</p>
        // </div> */}