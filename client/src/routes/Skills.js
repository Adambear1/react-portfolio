import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import CardContainer from "../components/CardContainer";
import SkillsCard from "../components/SkillsCard";
import api from "../utils/api";
import Navbar from "../components/Navbar";
import { skills } from "../database/skills";

function Skills() {
  const [template, setTemplate] = useState([]);
  const [styling, setStyling] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [database, setDatabases] = useState([]);
  const [library, setLibrary] = useState([]);
  const [devops, setDevops] = useState([]);
  let tempArr = [],
    styleArr = [],
    lngArr = [],
    dbArr = [],
    libArr = [],
    resArr = [],
    doArr = [];
  useEffect(() => {
    skills.map((item) => {
      if (item.type === "templateEngine") tempArr.push(item);
      if (item.type === "languages") lngArr.push(item);
      if (item.type === "databases") dbArr.push(item);
      if (item.type === "styling") styleArr.push(item);
      if (item.type === "libraries") libArr.push(item);
      if (item.type === "resource") resArr.push(item);
      if (item.type === "devops") doArr.push(item);
    });
    //eslint-disable-next-line
    setTemplate(tempArr);
    setStyling(styleArr);
    setLanguages(lngArr);
    setDatabases(dbArr);
    setLibrary(libArr);
    setDevops(doArr);
  });

  return (
    <>
      <Navbar />
      <Header padding={70} title="Skills" id="skills" />
      <CardContainer>
        <div
          className="uk-child-width-1-3@m uk-grid-match"
          uk-grid="true"
          id="portfolio-section"
          uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 100; repeat: false"
        >
          <SkillsCard
            title="Template Engines"
            skills={template}
            animate="slide-left"
          />
          <SkillsCard
            title="Databases"
            skills={database}
            animate="slide-down"
          />
          <SkillsCard
            title="Languages"
            skills={languages}
            animate="slide-right"
          />
          <SkillsCard title="Styling" skills={styling} animate="slide-left" />
          <SkillsCard title="Libraries" skills={library} animate="slide-up" />
          <SkillsCard title="Dev Ops" skills={devops} animate="slide-right" />
        </div>
      </CardContainer>
    </>
  );
}

export default Skills;
