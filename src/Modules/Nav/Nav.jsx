import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import './Nav.module.scss';

import hamburger_icon from '../../assets/icon-hamburger.svg';
import close_icon from '../../assets/icon-close.svg';
import arrow_icon from '../../assets/icon-chevron.svg';

import home_icon from '../../assets/icon-home.svg';
import mercury_icon from '../../assets/planet-mercury.svg';
import venus_icon from '../../assets/planet-venus.svg';
import earth_icon from '../../assets/planet-earth.svg';
import mars_icon from '../../assets/planet-mars.svg';
import jupiter_icon from '../../assets/planet-jupiter.svg';
import saturn_icon from '../../assets/planet-saturn.svg';
import uranus_icon from '../../assets/planet-uranus.svg';
import neptune_icon from '../../assets/planet-neptune.svg';


function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
   const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

    const closeMenu = () => {
      setMenuOpen(false);
    };

  useEffect(() => {
    closeMenu();
  }, [location]);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("body_hidden");
    } else {
      document.body.classList.remove("body_hidden");
    }

    return () => {
      document.body.classList.remove("body_hidden");
    };
  }, [menuOpen]);

  return (
    <nav className="navigation">
      <div className="navigation_header">
        <h2 className="navigation_header_title">The planets</h2>
        <img
          src={menuOpen ? close_icon : hamburger_icon}
          alt="menu_icon"
          onClick={toggleMenu}
          className="navigation_header_icon"
        />
      </div>
      <div className={`list ${menuOpen ? "list_open" : "list_closed"}`}>
        <Link to="/" className="list_element">
          <img className="list_element_icon" src={home_icon} alt="planet_icon" />
          <p className="list_element_text">Home</p>
          <img
            src={arrow_icon}
            alt="arrow_icon"
            className="list_element_icon_arrow"
          />
        </Link>
        <Link to="/mercury" className="list_element">
          <img
            className="list_element_icon"
            src={mercury_icon}
            alt="planet_icon"
          />
          <p className="list_element_text">Mercury</p>
          <img
            src={arrow_icon}
            alt="arrow_icon"
            className="list_element_icon_arrow"
          />
        </Link>
        <Link to="/venus" className="list_element">
          <img
            className="list_element_icon"
            src={venus_icon}
            alt="planet_icon"
          />
          <p className="list_element_text">Venus</p>
          <img
            src={arrow_icon}
            alt="arrow_icon"
            className="list_element_icon_arrow"
          />
        </Link>
        <Link to="/earth" className="list_element">
          <img
            className="list_element_icon"
            src={earth_icon}
            alt="planet_icon"
          />
          <p className="list_element_text">Earth</p>
          <img
            src={arrow_icon}
            alt="arrow_icon"
            className="list_element_icon_arrow"
          />
        </Link>
        <Link to="/mars" className="list_element">
          <img
            className="list_element_icon"
            src={mars_icon}
            alt="planet_icon"
          />
          <p className="list_element_text">Mars</p>
          <img
            src={arrow_icon}
            alt="arrow_icon"
            className="list_element_icon_arrow"
          />
        </Link>
        <Link to="/jupiter" className="list_element">
          <img
            className="list_element_icon"
            src={jupiter_icon}
            alt="planet_icon"
          />
          <p className="list_element_text">Jupiter</p>
          <img
            src={arrow_icon}
            alt="arrow_icon"
            className="list_element_icon_arrow"
          />
        </Link>
        <Link to="/saturn" className="list_element">
          <img
            className="list_element_icon"
            src={saturn_icon}
            alt="planet_icon"
          />
          <p className="list_element_text">Saturn</p>
          <img
            src={arrow_icon}
            alt="arrow_icon"
            className="list_element_icon_arrow"
          />
        </Link>
        <Link to="/uranus" className="list_element">
          <img
            className="list_element_icon"
            src={uranus_icon}
            alt="planet_icon"
          />
          <p className="list_element_text">Uranus</p>
          <img
            src={arrow_icon}
            alt="arrow_icon"
            className="list_element_icon_arrow"
          />
        </Link>
        <Link to="/neptune" className="list_element">
          <img
            className="list_element_icon"
            src={neptune_icon}
            alt="planet_icon"
          />
          <p className="list_element_text">Neptune</p>
          <img
            src={arrow_icon}
            alt="arrow_icon"
            className="list_element_icon_arrow"
          />
        </Link>
      </div>
    </nav>
  );
}

export default Nav;