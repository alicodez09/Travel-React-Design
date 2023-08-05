import React from "react";
import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Trip from "../components/Trip";

export default function Home() {
  return (
    <>
      <Hero
        cName="hero"
        heroImg="https://cdn.pixabay.com/photo/2020/04/25/01/36/road-5089188_1280.jpg"
        title="Adventures are the best way to learn"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fuga quidem, quae nostrum sequi sapiente officia deleniti, doloremque unde velit ipsum sunt explicabo odit, eius odio officiis qui optio debitis."
        buttonText="Travel Plain"
        btnClass="myBtn"
        url="service"
      />
      <Destination/>
      <Trip/>
    </>
  );
}
