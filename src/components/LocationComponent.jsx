"use client";
import { useState } from "react";
import { useEffect } from "react";
import { SaveLocations } from "../app/actions/SaveLocations";
import { EditLocations } from "../app/actions/EditLocations";
import { redirect } from "next/navigation";
import setupformStyles from "@/styles/locationcomponent.module.css";

export default function LocationComponent({ userid, locations, route }) {
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

  const handleChange = (e) => {
    setSearchLocation(e.target.value);
  };

  //handlesubmit conditional will prevent submission if nothing has been typed or all locations have been filtered out
  const handleSubmit = (e) => {
    const clickedId = e.target.id;
    const locationData = [{ user_id: userid, location_id: clickedId }];
    if (route === "new") {
      SaveLocations(locationData);
      //redirect user to next step
      redirect(`/profile-setup-form/part2/part3`);
    } else {
      EditLocations(locationData);
      //redirect user to next step
      redirect(
        `/profile/${locationData.user_id}/profile-edit-form/part2/part3`,
      );
    }
  };

  //for if user presses return key (hidden submit button)
  const handleReturnKey = (e) => {
    const key = e.keyCode || e.which;
    if (key == 13) {
      if (
        filteredLocations.length === 0 ||
        filteredLocations.length === locations.length
      ) {
        console.error(
          "Attempting to submit filteredLocations[0] but array is either empty or is the same length as locations (not filtered)",
        );
      } else {
        const locationData = [
          { user_id: userid, location_id: filteredLocations[0].id },
        ];
        if (route === "new") {
          SaveLocations(locationData);
          //redirect user to next step
          redirect(`/profile-setup-form/part2/part3`);
        } else {
          EditLocations(locationData);
        }
        //redirect user to next step
        redirect(
          `/profile/${locationData.user_id}/profile-edit-form/part2/part3`,
        );
      }
    } else {
    }
  };

  return (
    <main className={setupformStyles.main_section}>
      <h1 className={setupformStyles.heading}>Where are you based?</h1>
      <h2 className={setupformStyles.subheading}>
        Please type in the name of your home town/city, a list of possible
        choices will appear. When you see it, select it!{" "}
      </h2>
      <div className={setupformStyles.form}>
        <label htmlForfor="locationSearch" className={setupformStyles.form}>
          Search
        </label>
        <p>{filteredLocations.length}</p>
        <input
          tabIndex={0}
          type="text"
          name="locationSearch"
          id="locationSearch"
          onChange={(e) => handleChange(e)}
          onKeyDown={(e) => handleReturnKey(e)}
          className={setupformStyles.input}
        />
        <div>
          {filteredLocations.length != locations.length ? (
            filteredLocations.map((location) => (
              <p
                key={location.id}
                id={location.id}
                onClick={(e) => handleSubmit(e)}
                className={setupformStyles.searchResult}
              >
                {location.town_name}
              </p>
            ))
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </main>
  );
}
