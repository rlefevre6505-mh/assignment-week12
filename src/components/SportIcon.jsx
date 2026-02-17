// this will be the card which displays the sport icon and name together - it can be used within the form and also on the user profile under Sports and in the matches

// TODO;  build this so it populates the icons/names of each sport into a different card

// ! do I create all cards for all sports here? do I use an array to feed the information into the cards?

import sportIconStyles from "@/styles/sportIcon.module.css"
import { sportsIconData } from "@/data/sports";


export default function SportCard({name, icon}) {


  return (
    <>
      {/* use same cards as used in form? */}
      <div className={sportIconStyles.sportCard}>
        <img
          src={icon}
          alt={`${name} icon`}
          className={sportIconStyles.sportIcon}
        />
        <p className={sportIconStyles.sportName}>{name}</p>
      </div>
    </>
  );
}
