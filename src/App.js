import React from "react";
import "./App.css";

import Background from "./components/Background";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

import Fade from "react-reveal/Fade";

function App() {
  return (
    <div className="App">
      <Background />

      <div className="snap-container">
        <Fade opposite>
          <div className="snap-item">
            <section className="container--flex text-center">
              <h1 className="title">Hi, I'm Dinh</h1>
              <p className="subtitle">
                I make beautiful things that people enjoy
              </p>
            </section>
          </div>
        </Fade>
        <Fade>
          <div className="snap-item">
            <AboutMe />
          </div>
        </Fade>
        <Fade>
          <div className="snap-item">
            <Projects />
          </div>
        </Fade>
        <Fade>
          <div className="snap-item">
            <section className="container--flex">
              <p>For any inqueries, please use the contact form below</p>
              <button
                className="btn mt-1"
                onClick={() =>
                  window.open(`https://forms.gle/zdRVLvSQhsKwoZqq8`, "_blank")
                }
              >
                <i class="far fa-envelope"></i>
                Go to Contact Form
              </button>
              <footer className="footer text-center">
                <span>Made by Dinh Q. Le, 2021</span>
              </footer>
            </section>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default App;
