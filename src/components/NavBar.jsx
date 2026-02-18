"use client"

import navBarStyles from "@/styles/navBar.module.css";
import Link from "next/link";
import { FaComments, FaUserFriends, FaMap, FaUser } from "react-icons/fa";
import { usePathname, useParams } from "next/navigation";

// ! Update the link paths

export default function NavBar() {

  const pathname = usePathname();
  const params = useParams();
  const username = params?.username;


  return (
    <nav className={navBarStyles.nav}>
      {/* render both text and icons, CSS will decide what is visible */}
      <Link 
          href="#" 
          className={`${navBarStyles.navLink}

          // TODO: update these file paths when ready 
          ${pathname === "/chats" ? navBarStyles.active : ""}`}>
          <FaComments className={navBarStyles.icon} />
          <span className={navBarStyles.label}>Chats</span>
      </Link>

      <Link 
          href={`/feed/${username}`} 
          className={`${navBarStyles.navLink}
          ${pathname.startsWith("/feed") ? navBarStyles.active : ""}`}>

          <FaUserFriends className={navBarStyles.icon} />
          <span className={navBarStyles.label}>Matches</span>
      </Link>

      <Link 
          href="#" 
          className={`${navBarStyles.navLink}
          ${pathname === "/map" ? navBarStyles.active : ""}`}>
          <FaMap className={navBarStyles.icon} />
          <span className={navBarStyles.label}>Map</span>
      </Link>

      <Link 
          href={`/profile/${username}`} 
          className={`${navBarStyles.navLink}
          ${pathname.startsWith("/profile") ? navBarStyles.active : ""}`}>
        <FaUser className={navBarStyles.icon} />
        <span className={navBarStyles.label}>My Profile</span>
      </Link>
    </nav>
  );
}
