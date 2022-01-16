import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "../HomePage";
import AboutPage from "../BeetRoutePage";
import AceVenturaPage from "../AceVenturaPage";

function App() {
  return (
    <div className="App">
      <nav className="nav-bar">
        <h1>www.veg.com</h1>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="ace" element={<AceVenturaPage />} />
      </Routes>
    </div>
  );
}

export default App;
