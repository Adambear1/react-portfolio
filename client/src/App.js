import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./index.css";
import Home from "./routes/Home.js";
import About from "./routes/About.js";
import Portfolio from "./routes/Portfolio.js";
import Skills from "./routes/Skills.js";
import Footer from "./components/Footer";
import MobileMenu from "./components/Navbar/MobileMenu";
import ContactCanvas from "./components/ContactCanvas";
import ResumeModal from "./components/ResumeModal";

function App() {
  return (
    <>
      <Router>
        <>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/skills" component={Skills} />
          <MobileMenu />
          <ContactCanvas />
          <ResumeModal />
          <Footer />
        </>
      </Router>
    </>
  );
}

export default App;
