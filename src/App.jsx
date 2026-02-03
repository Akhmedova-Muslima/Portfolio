import React from "react";
import { useSelector } from "react-redux";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Study from "./components/Study";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const darkMode = useSelector((state) => state.theme.dark);

  return (
    <div className={`wrapper ${darkMode ? "dark" : ""}`}>
      <Navbar />
      <Header />

      <section id="work">
        <Projects />
      </section>

      <section id="study">
        <Study />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}
