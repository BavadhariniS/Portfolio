import React from "react";

function Header(){
  return(
    <nav>
      <div className="container">

        <div className="logo">
          <h1>
            <img height="50px" width="50px" src="hacker.png" alt="hacker"/>
            Bavadharini S
          </h1>
        </div>

        <div className="header">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div id="icon">
          <i class="fa-brands fa-square-github"></i>
          <i class="fa-brands fa-linkedin-in"></i>
        </div>

      </div>
    </nav>
  )
}

export default Header