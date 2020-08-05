import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PortfolioCard from "../components/PortfolioCard";
import CardContainer from "../components/CardContainer";
import api from "../utils/api";
// import imageURL from "../assets/images/background/green-leaves-flip.jpeg";

function Portfolio() {
  const [portfolio, setPortfolio] = useState([]);
  useEffect(() => {
    loadPortfolio();
  }, []);
  function loadPortfolio() {
    api.loadPortfolio().then((data) => setPortfolio(data));
  }
  return (
    <>
      <Navbar />
      <Header padding={70} title="Portfolio" />
      <CardContainer>
        <div
          className="uk-child-width-1-2@m uk-grid-match"
          uk-grid="true"
          id="portfolio-section"
          uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 250; repeat: false"
        >
          {portfolio.map((item) => {
            return (
              <PortfolioCard
                title={item.title}
                about={item.about}
                repoURL={item.repoURL}
                siteURL={item.siteURL}
                imgURL={item.imgURL}
                // key={index}
              />
            );
          })}
        </div>
      </CardContainer>
    </>
  );
}

export default Portfolio;
