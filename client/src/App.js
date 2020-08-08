import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./index.css";
import About from "./routes/About.js";
import Portfolio from "./routes/Portfolio.js";
import Skills from "./routes/Skills.js";
import Footer from "./components/Footer";
import MobileMenu from "./components/Navbar/MobileMenu";

function App() {
  return (
    <Router>
      <About />
      <Portfolio />
      <Skills />
      <MobileMenu />
      <Footer />
    </Router>
  );
}

export default App;
