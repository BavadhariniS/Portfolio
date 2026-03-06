import React from "react";

function Home(){
  return(
    <section id="home">

      <h1>Hello, I'm <span>Bavadharini</span></h1>
      <h3>MCA Student</h3>

      <p>
        I am passionate about web development,
        Mobile development, UI/UX design and
        building creative digital experiences.
      </p>

      <button>Download Resume</button>

      <div className="image">
        <img src="bava.jpeg" alt="me"/>
      </div>

    </section>
  )
}

export default Home