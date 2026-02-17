import Header from "@/components/Header"
import NavBar from "@/components/NavBar";
import ProfileBioCard from "@/components/ProfileBioCard";
import ProfileSports from "@/components/ProfileSports";
import ProfileConnections from "@/components/ProfileConnections";
import Footer from "@/components/Footer";
import profilePageStyles from "@/app/profile/[username]/profile-page/profile-page.module.css"

export default function profilePage() {
  return(
    <>
      <Header>
      {/* Top Nav for desktop */}
        <NavBar/>
      </Header>

      <main className={profilePageStyles.mainSection}>

        <div className={profilePageStyles.profileLayout}>

          <ProfileBioCard/>

          <ProfileSports/>

          <ProfileConnections/>
        </div>
      </main>

      {/* Bottom Nav for mobile */}
      <NavBar/>
      <Footer/>
    </>
  )
}
