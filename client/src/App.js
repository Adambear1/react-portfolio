import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./index.css";
import AboutPage from "./routes/About";
// import SkillsPage from "./pages/SkillsPage";
// import PortfolioPage from "./pages/PortfolioPage";
// import ContactCanvas from "./components/ContactCanvas";
import Footer from "./components/Footer";
// import ResumeModal from "./components/ResumeModal";
import MobileMenu from "./components/Navbar/MobileMenu";

function App() {
  return (
    <Router>
      <Route exact path="/" component={AboutPage} />
      {/* <Route path="/about" component={AboutPage} />
      <Route path="/portfolio" component={PortfolioPage} />
      <Route exact path="/skills" component={SkillsPage} /> */}
      <MobileMenu />
      {/* <ContactCanvas />
      <ResumeModal /> */}
      <Footer />
    </Router>
  );
}

export default App;
