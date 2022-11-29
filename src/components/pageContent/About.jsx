import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <>
        <div id="aboutMe" className="about">
          <div className="aboutContainer">
            <h1>ABOUT ME </h1>
            <div className="flex">
              <div className="left">
                <img src="../wyeth-balbin/about.png" alt="" loading="lazy"/>

              </div>
              <div className="right">
                <p>I am a highly motivated individual driven to create admirable, useful products that benefit people.</p>
                <p></p>
                <p>My specialties include quickly learning new skills and programming languages, problem solving, design principles, and the Model View View Model (MVVC) & Model View Controller (MVC) methods of organizing code.</p>
                <p></p>
                <p>So far I have <strong>ReactJS, Redux, Angular, JavaScript, HTML, SCSS, JSX, TypeScript, Java, Python, Kotlin,  REST APIs, Bootstrap, Figma, Adobe Creative Suite, Android Studio, and GIT </strong> under my belt. I’m still enthusiastically grabbing onto any other programming languages, frameworks, or principles I can integrate into the coding web in my head.</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;