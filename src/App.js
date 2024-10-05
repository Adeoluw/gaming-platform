import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Trending from "./components/Trending";
import MainSectionOne from "./components/MainSectionOne";
import Devsection from "./components/Devsection";
import Projects from "./components/Projects";
import Emailsub from "./components/Emailsub";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Trending />
      <MainSectionOne />
      <Devsection />
      <Projects />
      <Emailsub />

    </div>
  );
}

export default App;
