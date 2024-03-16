import React from "react";

import Projects from "./components/Projects";

import Home from "./components/Home";
import Navbar from "./components/Navbar";

import Skills from "./components/Skills";

import Qualification from "./components/Qualification";

const App = () => (
  <div>
    <Navbar />

    <Home />
    <Skills />
    <Qualification />
    <Projects />
  </div>
);

export default App;
