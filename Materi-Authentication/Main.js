import React from "react";
import Section from "./Section";
import Header from "./Header";
import { BrowserRouter as Router } from "react-router-dom";

const Main = () => {
  return (
    <Router>
      <Header />
      <Section />
      <footer style={{ textAlign: "center" }}>MST Bootcamp ReactJS</footer>
    </Router>
  );
};

export default Main;
