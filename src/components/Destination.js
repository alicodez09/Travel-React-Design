import React from "react";
import DestinationData from "./DestinationData";
import './DestinationStyle.css'
import pakistan from '../images/mexico.jpg'
import america from '../images/america.jpg'
import pak1 from '../images/pak.jpg'
import nature from '../images/nature.jpg'
export default function Destination() {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the oppourtunity to see alot, within a time frame</p>
      {/* part1 */}
    <DestinationData
    cName="first-desc"
    heading="Turkey"
    text="ourism in Turkey is focused largely on a variety of historical sites, and on seaside resorts along its Aegean and Mediterranean Sea coasts. Turkey has also become a popular destination for culture, spa, and health care. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, delectus! Voluptatem quas esse aut nulla necessitatibus vitae illum deserunt quasi, assumenda enim voluptates libero facere ipsam obcaecati nam illo alias."
    src1={pakistan}
    src2={america}
    />
    {/* part2 */}
    <DestinationData
     cName="first-desc-reverse"
    heading="Pakistan"
    text="Pakistan on a budget of around $100 a week – this will cover food, accommodation, transport and plenty of awesome activities. It's also possible to spend even less if you have some quality adventure gear. A cheap backpacker room in Chapursan Valley in Hunza.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, delectus! Voluptatem quas esse aut nulla necessitatibus vitae illum deserunt quasi, assumenda enim voluptates libero facere ipsam obcaecati nam illo alias."
    src1={pak1}
    src2={nature}
    />
    </div>
  );
}
