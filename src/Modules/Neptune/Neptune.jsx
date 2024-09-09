import React, { useState } from "react";
import styles from "./Neptune.module.scss";
import overview_icon from "../../assets/planet-neptune.svg";
import structure_icon from "../../assets/planet-neptune-internal.svg";
import surface_icon from "../../assets/planet-neptune-surface.svg";
import source_icon from "../../assets/icon-source.svg";

function Neptune() {
  const [activeTab, setActiveTab] = useState("overview");

  const content = {
    overview: {
      icon: overview_icon,
      title: "Neptune",
      text: `Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar 
             System, it is the fourth-largest planet by diameter, the third-most-massive planet, 
             and the densest giant planet. It is 17 times the mass of Earth, more massive than 
             its near-twin Uranus.`,
      source: "https://en.wikipedia.org/wiki/Neptune",
    },
    structure: {
      icon: structure_icon,
      title: "Internal Structure",
      text: `Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% 
             to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. 
             Increasing concentrations of methane, ammonia and water are found in the lower regions.`,
      source: "https://en.wikipedia.org/wiki/Neptune#Internal_structure",
    },
    surface: {
      icon: surface_icon,
      title: "Surface Geology",
      text: `Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also 
             present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in 
             the red and infrared portion of the spectrum.`,
      source: "https://en.wikipedia.org/wiki/Neptune#Atmosphere",
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
          <h2 className="info_title">16.08 Hours</h2>
        </div>
        <div className="info">
          <p className="info_text">Revolution time</p>
          <h2 className="info_title">164.79 Years</h2>
        </div>
        <div className="info">
          <p className="info_text">Radius</p>
          <h2 className="info_title">24,622 KM</h2>
        </div>
        <div className="info">
          <p className="info_text">Average temp</p>
          <h2 className="info_title">-201°c</h2>
        </div>
      </div>
    </div>
  );
}

export default Neptune;
