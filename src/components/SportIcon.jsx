// this will be the card which displays the sport icon and name together - it can be used within the form and also on the user profile under Sports and in the matches

// TODO;  build this so it populates the icons/names of each sport into a different card

// ! do I create all cards for all sports here? do I use an array to feed the information into the cards?

import sportIconStyles from "@/styles/sportCard.module.css"

export default function SportCard(){
    return(
        <>
        
            {/* use same cards as used in form? */}
            <div className={sportIconStyles.sportCard}>
                <img src="#" alt="sportname-icon" className={sportIconStyles.sportIcon}/>
                <p className={sportIconStyles.sportName}>Sport name</p>
            </div>
        
        </>
    )
}