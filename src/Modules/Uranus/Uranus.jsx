import React, { useState } from "react";
import styles from "./Uranus.module.scss";
import overview_icon from "../../assets/planet-uranus.svg";
import structure_icon from "../../assets/planet-uranus-internal.svg";
import surface_icon from "../../assets/planet-uranus-surface.svg";
import source_icon from "../../assets/icon-source.svg";

function Uranus() {
  const [activeTab, setActiveTab] = useState("overview");

  const content = {
    overview: {
      icon: overview_icon,
      title: "Uranus",
      text: `Uranus is the seventh planet from the Sun. Its name is a reference to the 
             Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather 
             of Ares. It has the third-largest planetary radius and fourth-largest planetary 
             mass in the Solar System.`,
      source: "https://en.wikipedia.org/wiki/Uranus",
    },
    structure: {
      icon: structure_icon,
      title: "Internal Structure",
      text: `The standard model of Uranus's structure is that it consists of three layers: a 
             rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and 
             an outer gaseous hydrogen/helium envelope. The core is relatively small, with a 
             mass of only 0.55 Earth masses.`,
      source: "https://en.wikipedia.org/wiki/Uranus#Internal_structure",
    },
    surface: {
      icon: surface_icon,
      title: "Surface Geology",
      text: `The composition of Uranus's atmosphere is different from its bulk, consisting mainly 
             of molecular hydrogen and helium. The helium molar fraction, i.e. the number of 
             helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.`,
      source: "https://en.wikipedia.org/wiki/Uranus#Atmosphere",
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
          <h2 className="info_title"> 17.2 Hours</h2>
        </div>
        <div className="info">
          <p className="info_text">Revolution time</p>
          <h2 className="info_title">84 Years</h2>
        </div>
        <div className="info">
          <p className="info_text">Radius</p>
          <h2 className="info_title">25,362 KM</h2>
        </div>
        <div className="info">
          <p className="info_text">Average temp</p>
          <h2 className="info_title">-195°c</h2>
        </div>
      </div>
    </div>
  );
}

export default Uranus;
