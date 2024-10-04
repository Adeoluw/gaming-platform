import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Trending from "./components/Trending";
import MainSectionOne from "./components/MainSectionOne";
import Devsection from "./components/Devsection"

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Trending />
      <MainSectionOne />
      <Devsection />
    </div>
  );
}

export default App;
