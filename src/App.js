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
import Portfoliosectionone from "./components/portfolio-section/Portfoliosectioone";
import Portfoliosectiontwo from "./components/portfolio-section/Portfoliosectiontwo";
import Reviews from "./components/portfolio-section/Reviews";
import Newshero from "./components/news-section/Newshero";
// import newsdata from "./newsdata"




function App() {
  const [about, setAbout] = React.useState(false);
  const [home, setHome] = React.useState(true);
  const [portfolio, setPortfolio] = React.useState(false);
  const [news, setNews] = React.useState(false);

// console.log(newsdata)

  return (
    <div className="App">
      <Nav
        checkAbout={setAbout}
        checkHome={setHome}
        checkPortfolio={setPortfolio}
        checkNews={setNews}
      />
      {about ? (
        <Abouthero />
      ) : portfolio ? (
        <Portfoliohero checkPortfolio={setPortfolio} checkNews={setNews} />
      ) : news ? (
        <Newshero  />
      ) : home ? (
        <Hero />
      ) : (
        ""
      )}
      {about ? (
        <Work />
      ) : portfolio ? (
        <Portfoliosectionone />
      ) : home ? (
        <Trending />
      ) : (
        ""
      )}
      {about ? (
        <Aboutsectionone />
      ) : portfolio ? (
        <Portfoliosectiontwo />
      ) : home ? (
        <MainSectionOne />
      ) : (
        ""
      )}
      {about ? <Team /> : portfolio ? <Reviews /> : home ? <Devsection /> : ""}
      {about ? "" : home ? <Projects /> : ""}
      <Emailsub />
      <Footer />
    </div>
  );
}

export default App;
