// this will be the section in the profile page which will display all of the sports that user has chosen at sign up - displaying the sport icon and the ability level

export default function ProfileSports(){
    return(
        <>
        <h2>Sports</h2>
        {/* logic here to fetch sports data and levels from db, use .map to create a card for each one*/}

        
        <div className="profile-sport-card">
            {/* use same cards as used in form? */}
            <div className="sport-card">
                <img src="#" alt="sportname-icon"/>
                <p>Sport name</p>
            </div>
            <p>Ability level</p>
        </div>
        </>
    )
}