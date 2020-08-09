import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PortfolioCard from "../components/PortfolioCard";
import CardContainer from "../components/CardContainer";
import api from "../utils/api";
// import imageURL from "../assets/images/background/green-leaves-flip.jpeg";

function Portfolio() {
  const [front, setFront] = useState([]);
  const [back, setBack] = useState([]);
  const [full, setFull] = useState([]);
  const [professional, setProfessional] = useState([]);
  let frontArr = [];
  let backArr = [];
  let fullArr = [];
  let proArr = [];
  useEffect(() => {
    api.getPortfolio().then((data) => {
      const _data = data.data;
      for (const name of _data) {
        if (name.type === "front") {
          frontArr.push(name);
        }
        if (name.type === "back") {
          backArr.push(name);
        }
        if (name.type === "full") {
          fullArr.push(name);
        }
        if (name.type === "professional") {
          proArr.push(name);
        }
      }
      setFront(frontArr);
      setBack(backArr);
      setFull(fullArr);
      setProfessional(proArr);
    });
  }, []);
  // console.log(portfolio);
  return (
    <>
      <Header padding={70} title="Portfolio" id="portfolio" />
      <CardContainer>
        <h1>Front End Applications</h1>
        <div
          className="uk-child-width-1-2@m uk-grid-match"
          uk-grid="true"
          id="portfolio-section"
          uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 100; repeat: false"
        >
          {front.map((item) => {
            return (
              <PortfolioCard
                title={item.name}
                about={item.description}
                repoURL={item.githubCode}
                siteURL={item.githubRepo}
                lEx={item.learningExp}
                imgURL={item.gif}
                key={item._id}
              />
            );
          })}
        </div>
      </CardContainer>
      <CardContainer>
        <div class="uk-height-medium">
          <div class="js-wrapper uk-background-muted uk-margin-auto">
            <div uk-overflow-auto="selContainer: .uk-height-medium; selContent: .js-wrapper">
              <div class="uk-grid-large" uk-grid>
                <h1>Back End Applications</h1>
                <div
                  className="uk-child-width-1-2@m uk-grid-match "
                  uk-grid="true"
                  id="portfolio-section"
                  uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 100; repeat: false"
                >
                  {back.map((item) => {
                    return (
                      <PortfolioCard
                        title={item.name}
                        about={item.description}
                        repoURL={item.githubCode}
                        siteURL={item.githubRepo}
                        lEx={item.learningExp}
                        imgURL={item.gif}
                        key={item._id}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContainer>
      <CardContainer>
        <div class="uk-height-medium">
          <div class="js-wrapper uk-background-muted">
            <div uk-overflow-auto="selContainer: .uk-height-medium; selContent: .js-wrapper">
              <div class="uk-grid-medium" uk-grid>
                <h1>Full Stack Applications</h1>
                <div
                  className="uk-child-width-1-2@m uk-grid-match uk-margin-auto"
                  uk-grid="true"
                  id="portfolio-section"
                  uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 100; repeat: false"
                >
                  {full.map((item) => {
                    return (
                      <PortfolioCard
                        title={item.name}
                        about={item.description}
                        repoURL={item.githubCode}
                        siteURL={item.githubRepo}
                        lEx={item.learningExp}
                        imgURL={item.gif}
                        key={item._id}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContainer>
    </>
  );
}

export default Portfolio;
