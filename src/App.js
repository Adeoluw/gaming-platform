import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Trending from "./components/Trending";
import MainSectionOne from "./components/MainSectionOne";
import Devsection from "./components/Devsection";
import Projects from "./components/Projects";
import Emailsub from "./components/Emailsub";
import Footer from "./components/Footer";
import Abouthero from "./components/Abouthero";
import Work from "./components/Workwithus";
import Aboutsectionone from "./components/Aboutsectionone";
import Team from "./components/Team";

function App() {
  const [about, setAbout] = React.useState(false);
  const [home, setHome] = React.useState(true);

  return (
    <div className="App">
      <Nav checkAbout={setAbout} checkHome={setHome} />
      {about ? <Abouthero /> : home ? <Hero /> : ""}
      {about ? <Work /> : home ? <Trending /> : ""}
      {about ? <Aboutsectionone /> : home ? <MainSectionOne /> : ""}
      {about ? <Team /> : home ? <Devsection /> : ""}
      {about ? "" : home ? <Projects /> : ""}
      <Emailsub />
      <Footer />
    </div>
  );
}

export default App;
