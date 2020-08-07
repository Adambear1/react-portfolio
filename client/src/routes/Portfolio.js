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
    api.getPortfolio().then((data) => setPortfolio(data.data));
  }, []);
  console.log(portfolio);
  return (
    <>
      <Navbar />
      <Header padding={70} title="Portfolio" id="portfolio" />
      <CardContainer>
        <div
          className="uk-child-width-1-2@m uk-grid-match"
          uk-grid="true"
          id="portfolio-section"
          uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 250; repeat: false"
        >
          {portfolio.map((item, learningExp) => {
            return (
              <PortfolioCard
                title={item.name}
                about={item.description}
                repoURL={item.githubCode}
                siteURL={item.githubRepo}
                learningExp={learningExp}
                imgURL={item.gif}
                key={item._id}
              />
            );
          })}
        </div>
      </CardContainer>
    </>
  );
}

export default Portfolio;
