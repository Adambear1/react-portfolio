import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PortfolioCard from "../components/PortfolioCard";
import CardContainer from "../components/CardContainer";
import api from "../utils/api";
import FavoritesCard from "../components/FavoritesCard";
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
          {portfolio.map((el, index) => {
            return (
              <PortfolioCard
                key={index}
                name={el.name}
                description={el.description}
                site={el.site}
                learningExp={el.learningExp}
              />
            );
          })}
        </div>
      </div>
      <div className="uk-margin-top">
        <ViewAllButton />
      </div>
    </>
  );
}

export default Portfolio;
