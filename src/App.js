import React from "react";
import "./App.css";

import Background from "./components/Background";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Background />
      <section className="container--flex text-center">
        <h1 className="title">Hi, I'm Dinh</h1>
        <p className="subtitle">I make beautiful things that people enjoy</p>
      </section>
      <AboutMe id="about-me" />
      <Projects id="projects" />
      <section className="container--flex">
        <h1>Contact</h1>
      </section>
      <footer className="footer text-center">
        <span>Made by Dinh Q. Le, 2021</span>
      </footer>
    </div>
  );
}

export default App;
