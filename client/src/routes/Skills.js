import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import CardContainer from "../components/CardContainer";
import SkillsCard from "../components/SkillsCard";
import api from "../utils/api";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [template, setTemplate] = useState([]);
  const [styling, setStyling] = useState([]);
  const [javascript, setJavascript] = useState([]);
  const [database, setDatabase] = useState([]);
  const [library, setLibrary] = useState([]);
  const [resources, setResources] = useState([]);
  let tempArr = [];
  let styleArr = [];
  let jsArr = [];
  let dbArr = [];
  let libArr = [];
  let resArr = [];
  useEffect(() => {
    api.getSkills().then((data) => {
      const _data = data.data;
      for (const name of _data) {
        if (name.type === "template") {
          tempArr.push(name);
        }
        if (name.type === "styling") {
          styleArr.push(name);
        }
        if (name.type === "javascript") {
          jsArr.push(name);
        }
        if (name.type === "database") {
          dbArr.push(name);
        }
        if (name.type === "library") {
          libArr.push(name);
        }
        if (name.type === "resources") {
          resArr.push(name);
        }
      }
      setTemplate(tempArr);
      setStyling(styleArr);
      setJavascript(jsArr);
      setDatabase(dbArr);
      setLibrary(libArr);
      setResources(resArr);
    });
  }, []);

  return (
    <>
      <Header padding={70} title="Skills" id="skills" />
      <CardContainer>
        <div
          className="uk-child-width-1-2@m uk-grid-match"
          uk-grid="true"
          id="portfolio-section"
          uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 175; repeat: false"
        >
          <SkillsCard
            title="Templating Engines"
            // key={item._id}
            skills={template}
            // name={item.name}
            // url={item.url}
            animate="slide-up"
          />

          {styling.map((item) => {
            return (
              <SkillsCard
                title="Styling"
                key={item._id}
                name={item.name}
                url={item.url}
                animate="slide-up"
              />
            );
          })}
          {javascript.map((item) => {
            return (
              <SkillsCard
                title="Javascript"
                key={item._id}
                name={item.name}
                url={item.url}
                animate="slide-up"
              />
            );
          })}
          {library.map((item) => {
            return (
              <SkillsCard
                title="Javascript"
                key={item._id}
                name={item.name}
                url={item.url}
                animate="slide-up"
              />
            );
          })}
          {resources.map((item) => {
            return (
              <SkillsCard
                title="Javascript"
                key={item._id}
                name={item.name}
                url={item.url}
                animate="slide-up"
              />
            );
          })}
        </div>
      </CardContainer>
    </>
  );
}

export default Skills;
