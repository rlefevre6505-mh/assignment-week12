"use client";
import { useState } from "react";
import { useEffect } from "react";

export default function LocationComponent({ locations }) {
  //search functionality state:
  const [searchLocation, setSearchLocation] = useState("");
  const [filteredLocations, setfilteredLocations] = useState([]);
  useEffect(() => {
    setfilteredLocations(filteredLocations);
  }, [filteredLocations]);
  useEffect(() => {
    const query = searchLocation.toLowerCase();
    const result = locations.filter((location) =>
      location.town_name.toLowerCase().includes(query),
    );
    setfilteredLocations(result);
    console.log(result);
  }, [searchLocation, locations]);

  //clear search
  //   const clearSearch = () => {
  //     setSearchLocation("");
  //     setfilteredLocations([]);
  //   };
  return (
    <div>
      <label>Search</label>
      <input
        tabIndex={0}
        type="text"
        onChange={(e) => setSearchLocation(e.target.value)}
      />
      <div>
        {filteredLocations.length != locations.length ? (
          filteredLocations.map((location) => (
            <p key={location.id}>{location.town_name}</p>
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}
