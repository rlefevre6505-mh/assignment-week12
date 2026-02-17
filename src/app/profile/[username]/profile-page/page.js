import Header from "src/components/Header";
import NavBar from "@/components/NavBar";
import profilePageStyles from "@/app/profile/[username]/profile-page/profile-page.module.css"

export default function profilePage() {
  return(
    <>
      <Header/>
      {/* this will be within the header on desktop and at the bottom with icons for app*/}
      <NavBar/>

      <body className={profilePageStyles.mainSection}>

        <ProfileBioCard className={profilePageStyles.bioSection}/>

        <ProfileSports className={profilePageStyles.sportsSection}/>

        <ProfileConnections className={profilePageStyles.connectionsSection}/>

      </body>
      <Footer/>
    </>
  )
}
