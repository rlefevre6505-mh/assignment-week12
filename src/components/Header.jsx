import headerStyles from "@/styles/header.module.css"
import Link from "next/link"

export default function Header({children}){
    return(
        <header className={headerStyles.header}>
            <div className={headerStyles.brand}>

            <Link href="/" className={headerStyles.logoLink}>
                <h1 className={headerStyles.h1}>Kickabout</h1>
                {/* <img src="#" alt="logo" className={headerStyles.logo}/> */}
            </Link>
            </div>

            {/* container to keep navbar in header on desktop */}
            <div className={headerStyles.navSlot}>
                {children}
            </div>
        </header>
    )
}
