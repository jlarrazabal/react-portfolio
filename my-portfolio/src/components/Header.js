import React from "react";

function Header(props) {
  return (
    <header className="header">
      <div className="header-title">
        <h1>JAVIER'S PORTFOLIO</h1>
      </div>
      <div className="links">
        <a href="#home" onClick={()=>props.pageChange("Home")}>Home</a>
        <a href="#about-me" onClick={()=>props.pageChange("AboutMe")}>About Me</a>
        <a href="#my-projects" onClick={()=>props.pageChange("Projects")}>My Projects</a>
        <a href="#contact-me" onClick={()=>props.pageChange("ContactMe")}>Contact Me</a>
        <a href="https://jlarrazabal.github.io/Resume/" target="_blank" rel="noreferrer">Resume</a>
      </div>
    </header>
  );
}

export default Header;
