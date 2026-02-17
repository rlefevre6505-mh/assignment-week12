import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import MatchesList from "@/components/MatchesList"
import feedStyles from "@/app/feed/[username]/feed.module.css"
import {FaSort, FaFilter, FaGripLinesVertical} from "react-icons/fa"

export default function feedPage() {
  return (
    <>
    <Header/>

    <NavBar/>

    <h1 className={feedStyles.pageTitle}>Your matches</h1>

    <hr className={feedStyles.lineBreak}></hr>

    <section className={feedStyles.controls}>

      <button className={feedStyles.sortButton}>
        <FaSort className={feedStyles.icon}/>
        <span className={feedStyles.label}>Sort</span>
      </button>

      <FaGripLinesVertical className={feedStyles.lines}/>

      <button className={feedStyles.filterButton}>
        <FaFilter className={feedStyles.icon}/>
        <span className={feedStyles.label}>Filter</span>
      </button>

    </section>

    <hr className={feedStyles.lineBreak}></hr>

    <section className={feedStyles.matchesSection}>
      <MatchesList/>
    </section>

    <Footer/>
    
    </>
  )
}


