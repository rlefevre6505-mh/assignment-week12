// this will be the section at the top of the profile page - it will contain the user's profile photo, their username, location, age and gender

import profileBioCardStyles from "@/styles/profileBioCard.module.css";

//TODO: use next image instead of <img>
export default function ProfileBioCard({
  username,
  locations,
  age,
  gender,
  bio,
}) {
  return (
    <>
      <section className={profileBioCardStyles.profileBioCardContainer}>
        <img
          src={"/icons/default-avatar.png"}
          alt={`profile photo`}
          className={profileBioCardStyles.userPhoto}
        />

        <div className={profileBioCardStyles.profileBioCardContent}>
          <h2 className={profileBioCardStyles.username}>{username}</h2>
          <p className={profileBioCardStyles.p}>
            {locations[0]}, {locations[1]}, {locations[2]}
          </p>
          <p className={profileBioCardStyles.p}>{age} years old</p>
          {/* Gender's last character for "Prefer not to say " is an empty space */}
          {gender != "Prefer not to say" ? (
            <p className={profileBioCardStyles.p}>{gender}</p>
          ) : (
            <p className={profileBioCardStyles.p}></p>
          )}
          <p className={profileBioCardStyles.p}>{bio}</p>
        </div>
      </section>
    </>
  );
}
