import React from "react";
import "./TripStyle.css";
import TripData from "./TripData";
import web from "../images/nature.jpg";
export default function Trip() {
  return (
    <>
      <div className="trip">
        <h1>Recent Trips</h1>
        <p>
          Lorem room in Chapursan Valley in Hunza.Lorem ipsum dolor sit amet
        </p>
   
      <div className="tripcard">
        <TripData
          image={web}
          heading="Trip in America"
          text="Lorem room in Chapursan Valley in Hunza.Lorem ipsum dolor sit ametLorem room in Chapursan Valley in Hunza."
        />


        <TripData
          image={web}
          heading="Trip in Turkey"
          text="Lorem room in Chapursan Valley in Hunza.Lorem ipsum dolor sit ametLorem room in Chapursan Valley in Hunza."
        />


        <TripData
          image={web}
          heading="Trip in Japan"
          text="Lorem room in Chapursan Valley in Hunza.Lorem ipsum dolor sit ametLorem room in Chapursan Valley in Hunza."
        />
      </div>
      </div>
    </>
  );
}
