import "./App.css";

import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Service from "./routes/Service";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
   
    </div>
  );
}

export default App;
