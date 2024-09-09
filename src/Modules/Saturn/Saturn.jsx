import React, { useState } from "react";
import styles from "./Saturn.module.scss";
import overview_icon from "../../assets/planet-saturn.svg";
import structure_icon from "../../assets/planet-saturn-internal.svg";
import surface_icon from "../../assets/planet-saturn-surface.svg";
import source_icon from "../../assets/icon-source.svg";

function Saturn() {
  const [activeTab, setActiveTab] = useState("overview");

  const content = {
    overview: {
      icon: overview_icon,
      title: "Saturn",
      text: `  Saturn is the sixth planet from the Sun and the second-largest in the Solar 
               System, after Jupiter. It is a gas giant with an average radius of about 
               nine and a half times that of Earth. It only has one-eighth the average 
               density of Earth.`,
      source: "https://en.wikipedia.org/wiki/Saturn",
    },
    structure: {
      icon: structure_icon,
      title: "Internal Structure",
      text: `Despite consisting mostly of hydrogen and helium, most of Saturn's mass 
             is not in the gas phase, because hydrogen becomes a non-ideal liquid 
             when the density is above 0.01 g/cm3, which is reached at a radius 
             containing 99.9% of Saturn's mass.`,
      source: "https://en.wikipedia.org/wiki/Saturn#Internal_structure",
    },
    surface: {
      icon: surface_icon,
      title: "Surface Geology",
      text: `The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% 
             helium by volume. The planet's most famous feature is its prominent ring 
             system, which is composed mostly of ice particles with a smaller amount 
             of rocky debris and dust. `,
      source: "https://en.wikipedia.org/wiki/Saturn#Atmosphere",
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
          <h2 className="info_title">10.8 Hours</h2>
        </div>
        <div className="info">
          <p className="info_text">Revolution time</p>
          <h2 className="info_title">29.46 Years</h2>
        </div>
        <div className="info">
          <p className="info_text">Radius</p>
          <h2 className="info_title">58,232 KM</h2>
        </div>
        <div className="info">
          <p className="info_text">Average temp</p>
          <h2 className="info_title">-138°c</h2>
        </div>
      </div>
    </div>
  );
}

export default Saturn;
