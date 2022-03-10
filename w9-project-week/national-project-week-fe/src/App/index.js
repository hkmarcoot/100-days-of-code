import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "../Header";
import Content from "../Content";

function App() {
  return (
    <Routes>
      <Route index element={<Header />} />
      <Route path="/content" element={<Content />} />
    </Routes>
  );
}

export default App;
