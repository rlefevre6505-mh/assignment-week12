"use client";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import { SaveLocations } from "../app/actions/SaveLocations";
import { redirect } from "next/navigation";

export default function LocationComponent({ userid, locations }) {
  //search functionality state:
  const [searchLocation, setSearchLocation] = useState("");
  const [filteredLocations, setfilteredLocations] = useState([]);
  // let showWarning = false;
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

  const handleChange = (e) => {
    // showWarning = false;
    setSearchLocation(e.target.value);
  };

  const handleSubmit = () => {
    if (
      filteredLocations.length === 0 ||
      filteredLocations.length === locations.length
    ) {
      // showWarning = true;
      console.error(
        "Attempting to submit filteredLocations[0] but array is either empty or is the same length as locations (not filtered)",
      );
    } else {
      const locationData = [
        { user_id: userid, location_id: filteredLocations[0].id },
      ];
      SaveLocations(locationData);
    }
    redirect(`profile-setup-form/part2/part3`);
  };

  //clear search
  //   const clearSearch = () => {
  //     setSearchLocation("");
  //     setfilteredLocations([]);
  //   };
  return (
    <div>
      <p>
        Please type in the name of your home town/city, a list of possible
        choices will appear. When you click &quot;Submit&quot;, the top entry in
        that list will be selected.{" "}
      </p>
      <label>Search</label>
      <p>{filteredLocations.length}</p>
      <input tabIndex={0} type="text" onChange={(e) => handleChange(e)} />
      {/* <p>{showWarning ? <p>Please Select a Location</p> : <p></p>}</p> */}
      <div>
        {filteredLocations.length != locations.length ? (
          filteredLocations.map((location) => (
            <p key={location.id}>{location.town_name}</p>
          ))
        ) : (
          <p></p>
        )}
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

{
  /* <input
        tabIndex={0}
        type="text"
        onChange={(e) => setSearchLocation(e.target.value)}
      /> */
}
