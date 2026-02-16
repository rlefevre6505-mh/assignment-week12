import Header from "src/components/Header";

export default function profilePage() {
  return(
    <>
      <Header/>
      <ProfileBioCard/>
      <ProfileSports/>
      <ProfileConnections/>
      {/* this will be within the header on desktop and at the bottom with icons for app*/}
      <NavBar/>
      {/* this will only be in the desktop version */}
      <Footer/>
    </>
  )
}
