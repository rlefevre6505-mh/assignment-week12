// this will be the card which displays the sport icon and name together - it can be used within the  user profile under Sports and in the matches


import sportIconStyles from "@/styles/sportIcon.module.css"
import { sportsIconData } from "@/data/sports";
import { levelMap } from "@/data/levels";
import {db} from "@/utils/dbConnection"


export default function SportIcon({name, icon, level, variant="default"}) {


  return (
    <div
      className={
        variant === "mini"
        ? sportIconStyles.sportCardMini
        : sportIconStyles.sportCard
      }>
      
        <img
          src={icon}
          alt={`${name} icon`}
          className={
            variant === "mini"
            ?sportIconStyles.sportIconMini
            : sportIconStyles.sportIcon}
        />

        {variant !== "mini" &&(
        <p className={sportIconStyles.sportLevel}>{level}</p>
        )}
      
    </div>
  );
}
