import React from "react";

function Footer(props) {
  return (
    <footer>
        <div className="links footer-links">
          <a href="#home" onClick={()=>props.pageChange("Home")}>Home</a>
          <a href="#about-me" onClick={()=>props.pageChange("AboutMe")}>About Me</a>
          <a href="#my-projects" onClick={()=>props.pageChange("Projects")}>My Projects</a>
          <a href="#contact-me" onClick={()=>props.pageChange("ContactMe")}>Contact Me</a>
          <a href="https://jlarrazabal.github.io/Resume/" target="_blank" rel="noreferrer">Resume</a>
        </div>
      <div className="copy-rights">
        <h6>©Javier Larrazabal 2021</h6>
      </div>
    </footer>
  );
}

export default Footer;
