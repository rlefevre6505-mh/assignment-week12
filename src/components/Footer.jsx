import footerStyles from "../styles/footer.module.css"

export default function Footer(){
    return(
        <footer>
        <p className={footerStyles.p}>Kickabout (c)</p>

        <div className={footerStyles.socialMediaLogoContainer}>
            <img src="#" alt="facebook-logo" className={footerStyles.socialMediaLogo}/>
            <img src="#" alt="twitter-logo" className={footerStyles.socialMediaLogo}/>
            <img src="#" alt="instagram-logo" className={footerStyles.socialMediaLogo}/>
        </div>
        </footer>
    )
}