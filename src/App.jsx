import Footer from "./components/Footer.jsx";
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

import useReveal from "./hook/useReveal.js";
import useScrollTop from "./hook/useScrollTop.js";

import Home from "./pages/Home.jsx";
import Band from "./pages/Band.jsx";
import Members from "./pages/Members.jsx";
import Discography from "./pages/Discography.jsx";
import Live from "./pages/Live.jsx";
import Films from "./pages/Films.jsx";
import Contact from "./pages/Contact.jsx";

const backgroundColors = {
  maastricht: "rgb(4, 26, 56)",
  charcoal: "rgb(57, 76, 92)",
  azureish: "rgb(216, 231, 238)",
};

function usePageBackground() {
  const location = useLocation();

  useEffect(() => {
    const bgLayer = document.getElementById("bg-layer");

    function updateBackground() {
      if (!bgLayer) return;

      const sections = Array.from(document.querySelectorAll("[data-bg]"));

      if (sections.length === 0) {
        bgLayer.style.backgroundColor = backgroundColors.maastricht;
        return;
      }

      let activeSection = sections[0];

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= window.innerHeight * 0.45) {
          activeSection = section;
        }
      });

      const colorName = activeSection.dataset.bg;
      bgLayer.style.backgroundColor =
        backgroundColors[colorName] || backgroundColors.maastricht;
    }

    updateBackground();

    window.addEventListener("scroll", updateBackground);
    window.addEventListener("resize", updateBackground);

    return () => {
      window.removeEventListener("scroll", updateBackground);
      window.removeEventListener("resize", updateBackground);
    };
  }, [location.pathname]);
}

function App() {
  useScrollTop();
  useReveal();
  usePageBackground();

  return (
    <>
      <div id="bg-layer"></div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/band" element={<Band />} />
        <Route path="/members" element={<Members />} />
        <Route path="/discography" element={<Discography />} />
        <Route path="/live" element={<Live />} />
        <Route path="/films" element={<Films />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;