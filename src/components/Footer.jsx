import footerStyles from "../styles/footer.module.css"
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa"

// TODO: add logos

export default function Footer(){
    return(
        <footer className={footerStyles.footerContainer}>
        <p className={footerStyles.p}>Kickabout (c)</p>

        <div className={footerStyles.socialMediaLogoContainer}>
            <FaFacebook className={footerStyles.socialMediaLogo}/>
            <FaInstagram className={footerStyles.socialMediaLogo}/>
            <FaTwitter className={footerStyles.socialMediaLogo}/>
        </div>
        </footer>
    )
}