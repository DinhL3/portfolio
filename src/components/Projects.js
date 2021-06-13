import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="container--flex">
      <h1 className="projects__header">Featured project</h1>
      <div className="projects">
        <div className="projects__left">
          <h1 className="about-me__header projects__title">[Kinder Words]</h1>
          <span className="tags mb-05">
            <i class="fab fa-react mr-1" />
            <i class="fab fa-node mr-1" />
            <i class="fab fa-sass" />
          </span>
          <p className="paragraph">
            Based on the game <i>Kind Words</i> by Popcannibal - send and
            receive anonymous letters. Snowy background, lofi music and fade
            transitions bring a relaxing experience.
          </p>
          <div className="btn-bar mt-1">
            <button
              className="btn mr-05"
              onClick={() =>
                window.open(`https://kinder-words.netlify.app/`, "_blank")
              }
            >
              <i class="fas fa-external-link-alt"></i>
              Demo
            </button>
            <button
              className="btn mr-05"
              onClick={() =>
                window.open(
                  `https://github.com/lqdquangdinh/kinderwords_react`,
                  "_blank"
                )
              }
            >
              <i className="fab fa-github" />
              Frontend
            </button>
            <button
              className="btn"
              onClick={() =>
                window.open(
                  `https://github.com/lqdquangdinh/kinderwords_be`,
                  "_blank"
                )
              }
            >
              <i className="fab fa-github" />
              Backend
            </button>
          </div>
        </div>
        <div className="projects__right">
          <Slider {...settings}>
            <img
              className="slide"
              src={`${process.env.PUBLIC_URL}/kw0.jpg`}
              alt="kinder words' sreenshot 0"
            />
            <img
              className="slide"
              src={`${process.env.PUBLIC_URL}/kw1.jpg`}
              alt="kinder words' sreenshot 1"
            />
            <img
              className="slide"
              src={`${process.env.PUBLIC_URL}/kw2.jpg`}
              alt="kinder words' sreenshot 2"
            />
            <img
              className="slide"
              src={`${process.env.PUBLIC_URL}/kw3.jpg`}
              alt="kinder words' sreenshot 3"
            />
            <img
              className="slide"
              src={`${process.env.PUBLIC_URL}/kw4.jpg`}
              alt="kinder words' sreenshot 4"
            />
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Projects;
