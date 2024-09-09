import React, { useState } from "react";
import styles from "./Jupiter.module.scss";
import overview_icon from "../../assets/planet-jupiter.svg";
import structure_icon from "../../assets/planet-jupiter-internal.svg";
import surface_icon from "../../assets/planet-jupiter-surface.svg";
import source_icon from "../../assets/icon-source.svg";

function Jupiter() {
  const [activeTab, setActiveTab] = useState("overview");

  const content = {
    overview: {
      icon: overview_icon,
      title: "Jupiter",
      text: ` Jupiter is the fifth planet from the Sun and the largest in the Solar System. 
              It is a gas giant with a mass two and a half times that of all the other 
              planets in the Solar System combined, but less than one-thousandth the mass 
              of the Sun.`,
      source: "https://en.wikipedia.org/wiki/Jupiter",
    },
    structure: {
      icon: structure_icon,
      title: "Internal Structure",
      text: `When the Juno arrived in 2016, it found that Jupiter has a very diffuse core 
             that mixes into its mantle. A possible cause is an impact from a planet of 
             about ten Earth masses a few million years after Jupiter's formation, which 
             would have disrupted an originally solid Jovian core.`,
      source: "https://en.wikipedia.org/wiki/Jupiter#Internal_structure",
    },
    surface: {
      icon: surface_icon,
      title: "Surface Geology",
      text: `The best known feature of Jupiter is the Great Red Spot, a persistent 
             anticyclonic storm located 22° south of the equator. It is known to have 
             existed since at least 1831, and possibly since 1665.`,
      source: "https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices",
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
          <h2 className="info_title">9.93 Hours</h2>
        </div>
        <div className="info">
          <p className="info_text">Revolution time</p>
          <h2 className="info_title">11.86 Years</h2>
        </div>
        <div className="info">
          <p className="info_text">Radius</p>
          <h2 className="info_title">69,911 KM</h2>
        </div>
        <div className="info">
          <p className="info_text">Average temp</p>
          <h2 className="info_title">-108°c</h2>
        </div>
      </div>
    </div>
  );
}

export default Jupiter;
