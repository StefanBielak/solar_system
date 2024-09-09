import React, { useState } from "react";
import styles from "./Venus.module.scss";
import overview_icon from "../../assets/planet-venus.svg";
import structure_icon from "../../assets/planet-venus-internal.svg";
import surface_icon from "../../assets/planet-venus-surface.svg";
import source_icon from "../../assets/icon-source.svg";

function Venus() {
  const [activeTab, setActiveTab] = useState("overview");

  const content = {
    overview: {
      icon: overview_icon,
      title: "Venus",
      text: `Venus is the second planet from the Sun. It is named after the 
             Roman goddess of love and beauty. As the brightest natural object 
             in Earth's night sky after the Moon, Venus can cast shadows and 
             can be, on rare occasions, visible to the naked eye in broad daylight.`,
      source: "https://en.wikipedia.org/wiki/Venus",
    },
    structure: {
      icon: structure_icon,
      title: "Internal Structure",
      text: ` The similarity in size and density between Venus and Earth suggests 
              they share a similar internal structure: a core, mantle, and crust. 
              Like that of Earth, Venusian core is most likely at least partially 
              liquid because the two planets have been cooling at about the same rate.`,
      source: "https://en.wikipedia.org/wiki/Venus#Internal_structure",
    },
    surface: {
      icon: surface_icon,
      title: "Surface Geology",
      text: `Much of the Venusian surface appears to have been shaped by volcanic activity. 
             Venus has several times as many volcanoes as Earth, and it has 167 large 
             volcanoes that are over 100 km (60 mi) across. The only volcanic complex 
             of this size on Earth is the Big Island of Hawaii.`,
      source: "https://en.wikipedia.org/wiki/Venus#Volcanism",
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
          <h2 className="info_title">243 Days</h2>
        </div>
        <div className="info">
          <p className="info_text">Revolution time</p>
          <h2 className="info_title">224.7 Days</h2>
        </div>
        <div className="info">
          <p className="info_text">Radius</p>
          <h2 className="info_title">6,051.8 KM</h2>
        </div>
        <div className="info">
          <p className="info_text">Average temp</p>
          <h2 className="info_title">471°c</h2>
        </div>
      </div>
    </div>
  );
}

export default Venus;
