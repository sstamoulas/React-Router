import React from "react";
import NavTab from "./NavTab.js";

const NavBar = () => {
  return (
    <div>
      <NavTab to="/about" label="About" />
      <NavTab to="/resume" label="Resume" />
      <NavTab to="/projects" label="Projects" />
      <NavTab to="/contact" label="Contact" />
    </div>
  );
};

export default NavBar;
