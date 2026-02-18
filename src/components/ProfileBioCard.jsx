// this will be the section at the top of the profile page - it will contain the user's profile photo, their username, location, age and gender

import profileBioCardStyles from "@/styles/profileBioCard.module.css"

export default function ProfileBioCard(){
    return(
        <>
        <section className={profileBioCardStyles.profileBioCardContainer}>

            <img
                src={"/icons/default-avatar.png"}
                alt={`profile photo`}
                className={profileBioCardStyles.userPhoto}/>

            <div className={profileBioCardStyles.profileBioCardContent}>
                
                <h2 className={profileBioCardStyles.username}>Username</h2>
                <p className={profileBioCardStyles.p}>Location</p>
                <p className={profileBioCardStyles.p}>Age</p>
                <p className={profileBioCardStyles.p}>Gender</p>
            </div>
        </section>
        </>

    )
}