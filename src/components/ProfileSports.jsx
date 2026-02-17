// this will be the section in the profile page which will display all of the sports that user has chosen at sign up - displaying the sport icon and the ability level

// TODO: ADD LOGIC so that the sport cards that show on the page are the ones that user has selected

import profileSportsStyle from "@/styles/profileSports.module.css"
import SportIcon from "./SportIcon"

// create array of sports names + icons
const sportsIconData = [
  {name: "Football", icon:"/icons/football.png"},
  {name: "Tennis", icon:"/icons/tennis.png"},
  {name: "Badminton", icon:"/icons/badminton.png"},
  {name: "Basketball", icon:"/icons/basketball.png"},
  {name: "Frisbee", icon:"/icons/frisbee.png"},
  {name: "Running", icon:"/icons/running.png"},
  {name: "Cycling", icon: "/icons/cycling.png"}
];

export default function ProfileSports(){
    return(
        <>
        <h2 className={profileSportsStyle.h2}>Sports</h2>
        
        {/* logic here to fetch sports data and levels from db, use .map to create a card for each one*/}
        <div className={profileSportsStyle.sportPlusLevel}>

            {/* TODO: BELOW .map will render all from the array - need to edit so it only renders those selected by the user */}
            {sportsIconData.map((sport)=>(
                <>
                <SportIcon
                    key={sport.name}
                    name={sport.name}
                    icon={sport.icon}
                    />
                <p>ability level goes here</p>
                </>
            ))}
            {/* <SportIcon className={profileSportsStyle.sportIcon}/> */}
            {/* <p className={profileSportsStyle.abilityLevel}>Ability Level</p> */}
        </div>
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