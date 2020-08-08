import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import CardContainer from "../components/CardContainer";
import SkillsCard from "../components/SkillsCard";
import api from "../utils/api";

function Skills() {
  const [template, setTemplate] = useState([]);
  const [styling, setStyling] = useState([]);
  const [javascript, setJavascript] = useState([]);
  const [database, setDatabase] = useState([]);
  const [library, setLibrary] = useState([]);
  const [resources, setResources] = useState([]);
  const [python, setPython] = useState([]);
  const [other, setOther] = useState([]);
  let tempArr = [];
  let styleArr = [];
  let jsArr = [];
  let dbArr = [];
  let libArr = [];
  let resArr = [];
  let pyArr = [];
  let otherArr = [];
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
        if (name.type === "resource") {
          resArr.push(name);
        }
        if (name.type === "python") {
          pyArr.push(name);
        }
        if (name.type === "other") {
          otherArr.push(name);
        }
      }
      setTemplate(tempArr);
      setStyling(styleArr);
      setJavascript(jsArr);
      setDatabase(dbArr);
      setLibrary(libArr);
      setResources(resArr);
      setPython(pyArr);
      setOther(otherArr);
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
            title="Template Engines"
            skills={template}
            animate="slide-up"
          />
          <SkillsCard title="Styling" skills={styling} animate="slide-up" />
          <SkillsCard
            title="JavaScript"
            skills={javascript}
            animate="slide-up"
          />
          <SkillsCard title="Databases" skills={database} animate="slide-up" />
          <SkillsCard title="Libraries" skills={library} animate="slide-up" />
          <SkillsCard title="Resources" skills={resources} animate="slide-up" />
          <SkillsCard title="Python" skills={python} animate="slide-up" />
          <SkillsCard title="Other" skills={other} animate="slide-up" />
        </div>
      </CardContainer>
    </>
  );
}

export default Skills;
