import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PortfolioCard from "../components/PortfolioCard";
import CardContainer from "../components/CardContainer";
import api from "../utils/api";
import FavoritesCard from "../components/FavoritesCard";
import ViewAllButton from "../components/ViewAllButton";

function Portfolio() {
  const [front, setFront] = useState([]);
  const [back, setBack] = useState([]);
  const [full, setFull] = useState([]);
  //
  const [fav, setFav] = useState([]);
  //
  let frontArr = [];
  let backArr = [];
  let fullArr = [];
  useEffect(() => {
    // axios
    //   .get(
    //     "https://api.github.com/users/Adambear1/starred?page=1&per_page=5&client_id=b457e75c9719bdfdfd76/starred=true&client_secret=35f3055f4b29a23732ce2a18a62dc8ce9077a267"
    //   )
    //   .then((data) => {
    //     console.log(data.data);
    //     setFav(data.data);
    //   });
    api
      .getStarred()
      .then((data) => {
        try {
          setFav(data.data);
        } catch (err) {
          console.log(err);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    api.getPortfolio().then((data) => {
      const _data = data.data;
      console.log(_data);
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
      }
      setFront(frontArr);
      setBack(backArr);
      setFull(fullArr);
    });
  }, []);
  console.log(fav);
  return (
    <>
      <Navbar />
      <Header padding={70} title="Portfolio" id="portfolio" />
      <CardContainer>
        <div className="uk-height-medium">
          <div className="js-wrapper uk-background-muted uk-margin-auto">
            <div uk-overflow-auto="selContainer: .uk-height-medium; selContent: .js-wrapper">
              <div className="uk-grid-large" uk-grid>
                <h1>⭐ Top Rated Applications ⭐</h1>
                <div
                  className="uk-child-width-1-2@m uk-grid-match "
                  uk-grid="true"
                  id="portfolio-section"
                  uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 100; repeat: false"
                >
                  {fav.map((item) => {
                    return (
                      <FavoritesCard
                        key={item._id}
                        name={item.name}
                        url={item.url}
                        description={item.description}
                        html_url={item.html_url}
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
          <div class="js-wrapper uk-background-muted uk-margin-auto">
            <div uk-overflow-auto="selContainer: .uk-height-medium; selContent: .js-wrapper">
              <div class="uk-grid-large" uk-grid>
                <h1>Front End Applications</h1>
                <div
                  className="uk-child-width-1-2@m uk-grid-match "
                  uk-grid="true"
                  id="portfolio-section"
                  uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 100; repeat: false"
                >
                  {front.map((item) => {
                    return (
                      <PortfolioCard
                        key={item._id}
                        title={item.name}
                        about={item.description}
                        repoURL={item.githubCode}
                        siteURL={item.githubRepo}
                        lEx={item.learningExp}
                        imgURL={item.gif}
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
                        key={item._id}
                        title={item.name}
                        about={item.description}
                        repoURL={item.githubCode}
                        siteURL={item.githubRepo}
                        lEx={item.learningExp}
                        imgURL={item.gif}
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
                        key={item._id}
                        title={item.name}
                        about={item.description}
                        repoURL={item.githubCode}
                        siteURL={item.githubRepo}
                        lEx={item.learningExp}
                        gif={item.gif}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContainer>
      <ViewAllButton />
    </>
  );
}

export default Portfolio;
