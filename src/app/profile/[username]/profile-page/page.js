import Header from "@/components/Header"
import NavBar from "@/components/NavBar";
import ProfileBioCard from "@/components/ProfileBioCard";
import ProfileSports from "@/components/ProfileSports";
import ProfileConnections from "@/components/ProfileConnections";
import Footer from "@/components/Footer";
import profilePageStyles from "@/app/profile/[username]/profile-page/profile-page.module.css"

// !Do i need to change username to clerk_id here?

export default function profilePage({params}) {

  const {username} = params;

  return(
    <>
    <header className={profilePageStyles.headerSection}>
      <Header>
      {/* Top Nav for desktop */}
        <NavBar/>
      </Header>
    </header>

      <main className={profilePageStyles.mainSection}>

        <div className={profilePageStyles.profileLayout}>

          <ProfileBioCard/>

          <ProfileSports username={username}/>

          <ProfileConnections/>
        </div>
      </main>

      {/* Bottom Nav for mobile */}
      <div className={profilePageStyles.mobileNav}>
        <NavBar/>
      </div>
      <Footer/>
    </>
  )
}
