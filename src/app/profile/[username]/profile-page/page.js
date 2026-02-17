import Header from "src/components/Header";
import NavBar from "@/components/NavBar";
import profilePageStyles from "@/app/profile/[username]/profile-page/profile-page.module.css"

export default function profilePage() {
  return(
    <>
      <Header/>
      {/* this will be within the header on desktop and at the bottom with icons for app*/}
      <NavBar/>

      <ProfileBioCard/>

      <ProfileSports/>

      <ProfileConnections/>
      
      {/* only show this for desktop screen size */}
      <Footer/>
    </>
  )
}
