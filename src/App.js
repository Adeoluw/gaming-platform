import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/home-section/Hero";
import Trending from "./components/home-section/Trending";
import MainSectionOne from "./components/home-section/MainSectionOne";
import Devsection from "./components/home-section/Devsection";
import Projects from "./components/home-section/Projects";
import Emailsub from "./components/home-section/Emailsub";
import Footer from "./components/Footer";
import Abouthero from "./components/about-section/Abouthero";
import Work from "./components/about-section/Workwithus";
import Aboutsectionone from "./components/about-section/Aboutsectionone";
import Team from "./components/about-section/Team";
import Portfoliohero from "./components/portfolio-section/portfoliohero";

function App() {
  const [about, setAbout] = React.useState(false);
  const [home, setHome] = React.useState(true);
  const [portfolio, setPortfolio] = React.useState(false);

  return (
    <div className="App">
      <Nav checkAbout={setAbout} checkHome={setHome} checkPortfolio={setPortfolio} />
      {about ? <Abouthero /> : portfolio ? <Portfoliohero /> : home ? <Hero /> : ""}
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
