import React from "react";
import NavAbout from "../about/TopNav";
import Footer from "../about/Footer";
import "./work.scss";
import "../../App.scss";

const Index = () => {
  const projects = [
    {
      name: "Recipe Finder App",
      img: "images/my-work/recipe-finder-app.jpg",
      sampleLink: "https://shokadinueu.github.io/recipe_finder-app/#46956",
      gitLink: "https://github.com/ShokadinuEU/recipe_finder-app",
    },
    {
      name: "Phase 8",
      img: "images/my-work/phase-8.jpg",
      sampleLink: "https://shokadinueu.github.io/phase-eight/",
      gitLink: "https://github.com/ShokadinuEU/phase-eight",
    },
    {
      name: "Get Weather App",
      img: "images/my-work/weather-app.jpg",
      sampleLink: "https://shokadinueu.github.io/get-weather-app/",
      gitLink: "https://github.com/ShokadinuEU/get-weather-app",
    },
    {
      name: "Fashion Today",
      img: "images/my-work/fashion-today.jpg",
      sampleLink: "https://shokadinueu.github.io/fashion-today/",
      gitLink: "https://github.com/ShokadinuEU/fashion-today",
    },
    {
      name: "Development Website",
      img: "images/my-work/development-website.jpg",
      sampleLink: "https://shokadinueu.github.io/development-website/",
      gitLink: "https://github.com/ShokadinuEU/development-website",
    },
    {
      name: "Type-n-Speak",
      img: "images/my-work/type-n-speak.jpg",
      sampleLink: "https://shokadinueu.github.io/type_n_speak_app/",
      gitLink: "https://github.com/ShokadinuEU/type_n_speak_app",
    },
    {
      name: "React Cool Apps",
      img: "images/my-work/react-apps.jpg",
      sampleLink: "https://shokadinueu.github.io/react-cool-apps/",
      gitLink: "https://github.com/ShokadinuEU/react-cool-apps",
    },
    {
      name: "Recipe Finder App",
      img: "images/my-work/first-cv-online.jpg",
      sampleLink: "https://shokadinueu.github.io/my-cv-tim/",
      gitLink: "https://github.com/ShokadinuEU/my-cv-tim/",
    },
    {
      name: "Lyric Finder",
      img: "images/my-work/lyric-finder.jpg",
      sampleLink: "https://shokadinueu.github.io/Lyric_Finder_App/",
      gitLink: "https://github.com/ShokadinuEU/Lyric_Finder_App",
    },
  ];

  return (
    <div id="work" className="work-main">
      <NavAbout />
      <div className="content-work">
        <div className="work-header">
          <h1 className="lg-heading">
            My
            <span className="text-secondary">Work</span>
          </h1>
          <h2 className="sm-heading">Check out some of my projects!</h2>
        </div>
        <div className="projects">
          {projects.map((project, i) => (
            <div className="item" key={i}>
              <button>
                <img
                  className="project-img"
                  src={project.img}
                  alt={project.name}
                />
              </button>
              <button className="btn-light">
                <a
                  href={project.sampleLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-light"
                >
                  <i className="fas fa-eye">{project.name} - View</i>
                </a>
              </button>
              <a
                href={project.gitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark"
              >
                <i className="fab fa-github"> GitHub </i>
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
