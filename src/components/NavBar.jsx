import navBarStyles from "@/styles/navBar.module.css"
import Link from "next/link"
import {FaComments, FaUserFriends, FaMap, FaUser} from "react-icons/fa"

// ! Update the link paths

export default function NavBar(){
    return(
        <nav className={navBarStyles.nav}>
        
        {/* render both text and icons, CSS will decide what is visible */}
            <Link href="/chats" className={navBarStyles.navLink}>
                <FaComments className={navBarStyles.icon}/>
                <span className={navBarStyles.label}>Chats</span>
            </Link>

            <Link href="/feed" className={navBarStyles.navLink}>
                <FaUserFriends className={navBarStyles.icon}/>
                <span className={navBarStyles.label}>Matches</span>
            </Link>

            <Link href="/map" className={navBarStyles.navLink}>
                <FaMap className={navBarStyles.icon}/>
                <span className={navBarStyles.label}>Map</span>
            </Link>

            <Link href="/profile/[username]/profile-page" className={navBarStyles.navLink}>
                <FaUser className={navBarStyles.icon}/>
                <span className={navBarStyles.label}>My Profile</span>
            </Link>

        </nav>
    )
}