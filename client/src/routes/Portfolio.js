import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PortfolioCard from "../components/PortfolioCard";
import ViewAllButton from "../components/ViewAllButton";
import { portfolio } from "../database/portfolio";

function Portfolio() {
  return (
    <>
      <Navbar />
      <Header padding={70} title="Portfolio" id="portfolio" />
      <div className="uk-container">
        <div
          className="uk-child-width-1-2@m uk-grid-match"
          uk-grid="true"
          id="portfolio-section"
          uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 250; repeat: false"
        >
          {portfolio.map(
            (
              {
                name,
                description,
                site,
                learningExp,
                timeSpent,
                giph,
                futureAdditions,
                technologiesUsed,
              },
              index
            ) => {
              return (
                <PortfolioCard
                  futureAdditions={futureAdditions}
                  technologiesUsed={technologiesUsed}
                  timeSpent={timeSpent}
                  giph={giph}
                  key={index}
                  name={name}
                  description={description}
                  site={site}
                  learningExp={learningExp}
                />
              );
            }
          )}
        </div>
      </div>
      <div className="uk-margin-top">
        <ViewAllButton />
      </div>
    </>
  );
}

export default Portfolio;
