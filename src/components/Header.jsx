import headerStyles from "@/styles/header.module.css"

export default function Header({children}){
    return(
        <header className={headerStyles.header}>
            <div className={headerStyles.brand}>
                <h1 className={headerStyles.h1}>Kickabout</h1>
                {/* <img src="#" alt="logo" className={headerStyles.logo}/> */}
            </div>

            {/* container to keep navbar in header on desktop */}
            <div className={headerStyles.navSlot}>
                {children}
            </div>
        </header>
    )
}
