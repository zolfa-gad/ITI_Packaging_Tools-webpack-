import HeroSection from "./components/hero-section/hero-section.jsx";
import AboutMeSection from "./components/about-me-section/about-me-section.jsx";
import SkillsSection from "./components/skills-section/skill-section.jsx";
import PortofolioSection from "./components/portfolio-section/portfolio-section.jsx";
import Footer from "./components/footer-section/footer-section.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <PortofolioSection />

      <Footer />
    </div>
  );
}

export default App;
