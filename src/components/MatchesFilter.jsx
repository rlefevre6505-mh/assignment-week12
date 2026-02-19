"use client"

import {useState} from "react";
import MatchesList from "./MatchesList"
import { sportsIconData } from "@/data/sports";

export default function MatchesFilter({matches, userSports}){

    console.log("user sports:",userSports)
    const [selectedSport, setSelectedSport] = useState(null);

    const filteredMatches = selectedSport
    ? matches.filter(match =>
        match.sports.some(
            sport => sport.sport_id === selectedSport
        )
    )
    : matches;



    return(
        <>
        {/* Dropdown */}
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
            

            {/* Filtered results */}
            <MatchesList matches={filteredMatches}/>

            
        </>
    )
}


  console.log("matches filter:", MatchesFilter)

