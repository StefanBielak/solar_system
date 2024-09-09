import React, { useState } from "react";
import styles from "./Earth.module.scss";
import overview_icon from "../../assets/planet-earth.svg";
import structure_icon from "../../assets/planet-earth-internal.svg";
import surface_icon from "../../assets/planet-earth-surface.svg";
import source_icon from "../../assets/icon-source.svg";

function Earth() {
  const [activeTab, setActiveTab] = useState("overview");

  const content = {
    overview: {
      icon: overview_icon,
      title: "Earth",
      text: `Third planet from the Sun and the only known planet to harbor life. 
             About 29.2% of Earth's surface is land with remaining 70.8% is 
             covered with water. Earth's distance from the Sun, physical properties 
             and geological history have allowed life to evolve and thrive.`,
      source: "https://en.wikipedia.org/wiki/Earth",
    },
    structure: {
      icon: structure_icon,
      title: "Internal Structure",
      text: `Earth's interior, like that of the other terrestrial planets, is divided 
             into layers by their chemical or physical (rheological) properties. The 
             outer layer is a chemically distinct silicate solid crust, which is 
             underlain by a highly viscous solid mantle.`,
      source: "https://en.wikipedia.org/wiki/Earth#Internal_structure",
    },
    surface: {
      icon: surface_icon,
      title: "Surface Geology",
      text: `The total surface area of Earth is about 510 million km2. The continental 
             crust consists of lower density material such as the igneous rocks granite 
             and andesite. Less common is basalt, a denser volcanic rock that is the 
             primary constituent of the ocean floors.`,
      source: "https://en.wikipedia.org/wiki/Earth#Surface",
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
          <h2 className="info_title">0.99 Days</h2>
        </div>
        <div className="info">
          <p className="info_text">Revolution time</p>
          <h2 className="info_title">365.26 Days</h2>
        </div>
        <div className="info">
          <p className="info_text">Radius</p>
          <h2 className="info_title">6,371 KM</h2>
        </div>
        <div className="info">
          <p className="info_text">Average temp</p>
          <h2 className="info_title">430°c</h2>
        </div>
      </div>
    </div>
  );
}

export default Earth;
