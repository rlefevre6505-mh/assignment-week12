"use client"

import {useState} from "react";
import MatchesList from "./MatchesList"
import { sportsIconData } from "@/data/sports";
import MatchListStyles from "@/styles/matchesList.module.css"
import { FaSort, FaFilter, FaGripLinesVertical } from "react-icons/fa";

export default function MatchesFilter({matches, userSports}){

    console.log("user sports:",userSports)
    const [selectedSport, setSelectedSport] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    // FILTER
    const filteredMatches = selectedSport
    ? matches.filter(match =>
        match.sports.some(
            sport => sport.sport_id === selectedSport
        )
    )
    : matches;

    // SORT
    let sortedMatches = [...filteredMatches];

    if(sortBy === "name"){
        sortedMatches.sort((a,b)=>
        a.screen_name.localeCompare(b.screen_name))
    }

    


    return(
        <>
        

        {/* BUTTONS
        
            <button className={MatchListStyles.sortButton}>
              <FaSort className={MatchListStyles.icon} />
              <span className={MatchListStyles.label}>Sort</span>
            </button>

            <FaGripLinesVertical className={MatchListStyles.lines} />

            <button className={MatchListStyles.filterButton}>
              <FaFilter className={MatchListStyles.icon} />
              <span className={MatchListStyles.label}>Filter</span>
            </button> */}
          

          {/* DROPDOWNS */}
          {/* Filter Dropdown */}
          <section className={MatchListStyles.controls}>
            <div className={MatchListStyles.dropdownSelectWrapper}>
                <FaFilter className={MatchListStyles.icon} />
                <select
                    className={MatchListStyles.dropdownSelect}
                    onChange={(e)=>
                    setSelectedSport(e.target.value ? Number(e.target.value):null
                    )}>
                
                    <option value="">All Sports</option>

                    {userSports?.map((sport) => {
                        const sportData = sportsIconData.find(
                        (s) => s.id === sport.sport_id
                        );

                        if (!sportData) return null;

                        return (
                            <option
                                key={sport.sport_id}
                                value={sport.sport_id}>
                                    {sportData.name}
                            </option>
                        );
                        })}
                </select>
            </div>

            {/* Sort button */}
            <div className={MatchListStyles.dropdownSelectWrapper}>
            <FaSort className={MatchListStyles.icon} />
            <select 
                className={MatchListStyles.dropdownSelect}
                onChange = {(e)=> setSortBy(e.target.value)}>

                    <option value="">Sort by</option>
                    <option value="name">Name (A-Z)</option>
                    <option value="name-desc">Name (Z-A)</option>
                </select>
            </div>
        </section>
            


            {/* Filtered results */}
            {/* <MatchesList matches={filteredMatches}/> */}
            <MatchesList matches={sortedMatches}/>

            
        </>
    )
}


//   console.log("matches filter:", MatchesFilter)

