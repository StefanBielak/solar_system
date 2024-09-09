import React, { useState } from "react";
import styles from "./Mars.module.scss";
import overview_icon from "../../assets/planet-mars.svg";
import structure_icon from "../../assets/planet-mars-internal.svg";
import surface_icon from "../../assets/planet-mars-surface.svg";
import source_icon from "../../assets/icon-source.svg";

function Mars() {
  const [activeTab, setActiveTab] = useState("overview");

  const content = {
    overview: {
      icon: overview_icon,
      title: "Mars",
      text: `Third planet from the Sun and the only known planet to harbor life. 
             About 29.2% of Earth's surface is land with remaining 70.8% is 
             covered with water. Earth's distance from the Sun, physical properties 
             and geological history have allowed life to evolve and thrive.`,
      source: "https://en.wikipedia.org/wiki/Mars",
    },
    structure: {
      icon: structure_icon,
      title: "Internal Structure",
      text: `  Like Earth, Mars has differentiated into a dense metallic core overlaid 
               by less dense materials. Scientists initially determined that the core 
               is at least partially liquid. Current models of its interior imply a 
               core consisting primarily of iron and nickel with about 16–17% sulfur.`,
      source: "https://en.wikipedia.org/wiki/Mars#Internal_structure",
    },
    surface: {
      icon: surface_icon,
      title: "Surface Geology",
      text: `Mars is a terrestrial planet whose surface consists of minerals containing 
             silicon and oxygen, metals, and other elements that typically make up rock. 
             The surface is primarily composed of tholeiitic basalt, although parts are 
             more silica-rich than typical basalt.`,
      source: "https://en.wikipedia.org/wiki/Mars#Surface_geology",
    },
  };

  const currentContent = content[activeTab];

  return (
    <div className="planet">
      <div className="planet_box">
        <div className={styles.nav_mobile}>
          <button
            className={`${styles.nav_mobile_button} ${
              activeTab === "overview" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`${styles.nav_mobile_button} ${
              activeTab === "structure" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("structure")}
          >
            Structure
          </button>
          <button
            className={`${styles.nav_mobile_button} ${
              activeTab === "surface" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("surface")}
          >
            Surface
          </button>
        </div>
        <img
          src={currentContent.icon}
          alt={`${activeTab}_icon`}
          className={`planet_box_icon ${
            activeTab === "surface" ? "surface_icon" : ""
          }`}
        />
        <div>
          <h1 className="planet_box_title">{currentContent.title}</h1>
          <p className="planet_box_text">{currentContent.text}</p>
          <div className="source">
            <p className="source_title">Source :</p>
            <div className="source_click">
              <a
                href={currentContent.source}
                className="source_wiki"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wikipedia
              </a>
              <img
                src={source_icon}
                alt="source_icon"
                className="source_icon"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="info">
          <p className="info_text">Rotation time</p>
          <h2 className="info_title">1.03 Days</h2>
        </div>
        <div className="info">
          <p className="info_text">Revolution time</p>
          <h2 className="info_title">1.88 Years</h2>
        </div>
        <div className="info">
          <p className="info_text">Radius</p>
          <h2 className="info_title">3,389.5 KM</h2>
        </div>
        <div className="info">
          <p className="info_text">Average temp</p>
          <h2 className="info_title">-28°c</h2>
        </div>
      </div>
    </div>
  );
}

export default Mars;
