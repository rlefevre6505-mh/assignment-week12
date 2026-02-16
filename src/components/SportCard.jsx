import sportCardStyles from "@/styles/sportCard.module.css"

export default function SportCard(){
    return(
        <>
        <div className={sportCardStyles.profileSportCard}>
            {/* use same cards as used in form? */}
            <div className={sportCardStyles.sportCard}>
                <img src="#" alt="sportname-icon" className={profileSportsStyle.sportIcon}/>
                <p className={sportCardStyles.sportName}>Sport name</p>
            </div>
            <p className={sportCardStyles.abilityLevel}>Ability level</p>
        </div>
        </>
    )
}