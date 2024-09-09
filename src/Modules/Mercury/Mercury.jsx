import React, { useState } from "react";
import styles from "./Mercury.module.scss";
import overview_icon from "../../assets/planet-mercury.svg";
import structure_icon from "../../assets/planet-mercury-internal.svg";
import surface_icon from "../../assets/planet-mercury-surface.svg";
import source_icon from "../../assets/icon-source.svg";

function Mercury() {
  const [activeTab, setActiveTab] = useState("overview");

  const content = {
    overview: {
      icon: overview_icon,
      title: "Mercury",
      text: `Mercury is the smallest planet in the Solar System and the closest to the Sun. 
             Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. 
             Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.`,
      source: "https://en.wikipedia.org/wiki/Mercury_(planet)",
    },
    structure: {
      icon: structure_icon,
      title: "Internal Structure",
      text: `Mercury appears to have a solid silicate crust and mantle overlying a 
             solid, iron sulfide outer core layer, a deeper liquid core layer, and 
             a solid inner core. The planet's density is the second highest in the 
             Solar System at 5.427 g/cm3, only slightly less than Earth's density.`,
      source:
        "https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure",
    },
    surface: {
      icon: surface_icon,
      title: "Surface Geology",
      text: `Mercury's surface is similar in appearance to that of the Moon, showing 
              extensive mare-like plains and heavy cratering, indicating that it has 
              been geologically inactive for billions of years. It is more heterogeneous 
              than either Mars's or the Moon’s.`,
      source: "https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology",
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
          <h2 className="info_title">58.6 days</h2>
        </div>
        <div className="info">
          <p className="info_text">Revolution time</p>
          <h2 className="info_title">87.97 days</h2>
        </div>
        <div className="info">
          <p className="info_text">Radius</p>
          <h2 className="info_title">2,439.7 km</h2>
        </div>
        <div className="info">
          <p className="info_text">Average temp</p>
          <h2 className="info_title">430°c</h2>
        </div>
      </div>
    </div>
  );
}

export default Mercury;
