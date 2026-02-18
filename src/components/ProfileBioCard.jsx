// this will be the section at the top of the profile page - it will contain the user's profile photo, their username, location, age and gender

import profileBioCardStyles from "@/styles/profileBioCard.module.css";

//TODO: use next image instead of <img>
export default function ProfileBioCard({
  username,
  locations,
  dob,
  gender,
  bio,
}) {
  return (
    <>
      <section className={profileBioCardStyles.profileBioCardContainer}>
        <img
          src="#"
          alt="User's profile photo"
          className={profileBioCardStyles.userPhoto}
        />

        <div className={profileBioCardStyles.profileBioCardContent}>
          <h2 className={profileBioCardStyles.username}>
            Username: {username}
          </h2>
          <p className={profileBioCardStyles.p}>Location: {locations}</p>
          <p className={profileBioCardStyles.p}>D.O:B: {dob}</p>
          <p className={profileBioCardStyles.p}>Gender: {gender}</p>
          <p className={profileBioCardStyles.p}>Bio: {bio}</p>
        </div>
      </section>
    </>
  );
}
