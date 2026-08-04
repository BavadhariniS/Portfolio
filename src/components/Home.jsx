import React from "react";

function Home(){
  return(
    <section id="home">

      <h1>Hello, I'm <span>Bavadharini S</span></h1>
      <h3>MCA Student</h3>

      <p>
        I am passionate about web development,
        Mobile development, UI/UX design and
        building creative digital experiences.
      </p>

      <a href="/Bavadharini_RESUME.pdf" download="Bavadharini_RESUME.pdf">
        <button>Download Resume</button>
      </a>


      <div className="image">
         <img id="bavaimg" src="bava.jpeg" alt="me"/>  
      </div>

    </section>
  )
}

export default Home