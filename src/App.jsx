import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Modules/HomePage/HomePage";
import Mercury from "./Modules/Mercury/Mercury";
import Venus from "./Modules/Venus/Venus";
import Earth from './Modules/Earth/Earth';
import Mars from "./Modules/Mars/Mars";
import Jupiter from "./Modules/Jupiter/Jupiter";
import Saturn from "./Modules/Saturn/Saturn";
import Uranus from "./Modules/Uranus/Uranus";
import Neptune from "./Modules/Neptune/Neptune";
import Nav from "./Modules/Nav/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/mercury" element={<Mercury />} />
          <Route path="/venus" element={<Venus />} />
          <Route path="/earth" element={<Earth />} />
          <Route path="/mars" element={<Mars />} />
          <Route path="/jupiter" element={<Jupiter />} />
          <Route path="/saturn" element={<Saturn />} />
          <Route path="/uranus" element={<Uranus />} />
          <Route path="/neptune" element={<Neptune />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
