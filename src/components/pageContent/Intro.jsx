import React from "react";

const Intro = () => {
  const data = [
    {
      intro: "Hi, i'm",
      name: "Wyeth",
      craft: "DESIGNER/ DEVELOPER",
      desc: "I love collaborative work, interactive UI, and creating admirable, useful products that benefit people.",
    },
  ];
  return (
    <>
      <div id="intro" className="intro flex">
        <div className="leftIntro">
          <div className="flex">
            <div className="box1">
              <p>
                <strong>Web Developer</strong> (React/Angular)
              </p>
              <img className="webBubble" src="laptopBubble.png" alt="" />
            </div>
            <div className="box2">
              <p>
                <strong>UI/UX Designer</strong>
              </p>
              <img className="uiBubble" src="uiBubble.png" alt="" />
            </div>
            <div className="box3">
              <p>
                <strong>3D Designer</strong>
              </p>
              <img className="tdBubble" src="bubble.png" alt="" />
            </div>
          </div>
        </div>
        <div className="rightIntro">
          <div className="introText">
            {data.map((data) => {
              return (
                <>
                  <p className="hi">{data.intro}</p>
                  <h1 className="name">{data.name}</h1>
                  <p className="craft">{data.craft}</p>
                  <div className="connectWMeDiv">
                    connect with me
                    <div className="socialIcons">
                      <a
                        href="https://www.linkedin.com/in/dana-wyeth-b-a5047923a/"
                        target="_blank"
                        rel="noreferrer">
                        <button
                          type="button"
                          className="btn fab fa-brands fa-linkedin"
                        ></button>
                      </a>
                      {/*<a
                        href=""
                        target="_blank"
                        rel="noreferrer">*/}
                      <button
                        type="button"
                        className="btn fab fa-brands fa-github"
                      ></button>
                          {/*</a>*/}
                          <a
                        href="mailto:danawyeth@proton.me"
                        target="_blank"
                        rel="noreferrer">
                      <button
                        type="button"
                        className="btn fa fa-regular fa-envelope"   
                      ></button>
                          </a>
                          <a
                        href="https://www.instagram.com/mooi.pearl/"
                        target="_blank"
                        rel="noreferrer">
                      <button
                        type="button"
                        className="btn fab fa-instagram instagram"
                      ></button>
                          </a>
                    </div>
                  </div>

                  <div className="long-text">
                    <p>{data.desc}</p>
                  </div>
                </>
              );
            })}
          </div>

          <img className="wyethPng" src="./wyeth.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Intro;
