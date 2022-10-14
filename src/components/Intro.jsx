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
      <div className="intro flex">
        <div className="leftIntro">
          <div className="flex">
            <img className="webBubble" src="laptopBubble.png" alt="" />
            <img className="uiBubble" src="bubble.png" alt="" />
            <img className="tdBubble" src="bubble.png" alt="" />
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
                  <button type="button" className="btn">
                    connect with me
                  </button>
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
