"use client"

import {useState} from "react";
import MatchesList from "./MatchesList"
import { sportsIconData } from "@/data/sports";
import MatchListStyles from "@/styles/matchesList.module.css"

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
        {/* Filter Dropdown */}
        <select
            onChange={(e)=>
                setSelectedSport(
                    e.target.value ? Number(e.target.value):null
                )
            }
            >
                <option value="">All Sports</option>

                {userSports?.map((sport) => {
                const sportData = sportsIconData.find(
                    (s) => s.id === sport.sport_id
                );

                if (!sportData) return null;

                return (
                    <option
                    key={sport.sport_id}
                    value={sport.sport_id}
                    >
                    {sportData.name}
                    </option>
                );
                })}
            </select>

            {/* Sort button */}
            <select 
                onChange = {(e)=> setSortBy(e.target.value)}>
                    <option value="">Sort by</option>
                    <option value="name">Name (A-Z)</option>
                    <option value="">Name (Z-A)</option>
                </select>
            


            {/* Filtered results */}
            {/* <MatchesList matches={filteredMatches}/> */}
            <MatchesList matches={sortedMatches}/>

            
        </>
    )
}


//   console.log("matches filter:", MatchesFilter)

