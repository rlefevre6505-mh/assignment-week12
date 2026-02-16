import headerStyles from "@/styles/header.module.css"

export default function Header(){
    return(
        <>
        <h1 className={headerStyles.h1}>App Name</h1>
        <img src="#" alt="logo" className={headerStyles.logo}/>
        </>
    )
}