import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import MatchesList from "@/components/MatchesList"
import feedStyles from "@/app/feed/[username]/feed.module.css"
import {FaSort, FaFilter, FaGripLinesVertical} from "react-icons/fa"

export default function feedPage() {
  return (
    <>
    <Header/>

    <NavBar/>

    <h1>Your matches</h1>

    <hr></hr>

    <button>
      <FaSort className={feedStyles.icon}/>
      <span className={feedStyles.label}>Sort</span>
    </button>

    <FaGripLinesVertical className={feedStyles.lines}/>

    <button>
      <FaFilter className={feedStyles.icon}/>
      <span className={feedStyles.label}>Filter</span>
    </button>

    <hr></hr>

    <MatchesList/>

    <Footer/>
    
    </>
  )
}


