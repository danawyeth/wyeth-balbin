import React, { Component } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/pagination";
import SwiperCore, { Pagination } from "swiper";
import { useState } from "react";

import Data from "./PortfolioData";

SwiperCore.use([Pagination]);

export default function PortDataTest() {
  let params = {
    pagination: {
      //  dynamicBullets: true,
      clickable: true,
    },
    speed: 500,
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    className: "mySwiper",
    grabCursor: false,
  };

  //  const webTest = () => {Data.map((x) => { return(<>{x.webDev}</>)})};
  //console.log("webTest", webTest);
  //console.log("web lang", Data.webDev);

  let swiperPort = (x) => {
    return (
      <>
        <Swiper {...params}>
          {x.map((data) => {
            return (
              <>
                <SwiperSlide onClick={handleShow}>
                  <img src={data.img} alt="" />
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </>
    );
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      ASDASDAS
      <div className="webDev">
        {/*{((webDev) => {
                    swiperPort(webDev); 
                })}*/}

        {swiperPort(Data.webDev)}
        {/*{Data.map((data) => {
                    return(
                        <>
                            {data.webDev.img}
                        </>
                    )
                })}*/}

        {/*{Data.map}*/}
        {/*<img src={Data.webDev.p1.img} alt="" />*/}

        {/*{Data.webDev.map((data, index) => {
                return (
                  <>
                  
                  <img src={data.img} alt="" />
                  
                  </>)
                  })}*/}
{/*
        <Swiper {...params}>
        {Data.webDev.map((data) => {
                return (
                  <>
                  huhu
                    <SwiperSlide onClick={handleShow}>
                      <img src={data.img} alt="" />
                    </SwiperSlide>
                  </>
                );
              })}
        </Swiper>*/}

        {/*<Swiper {...params}>
                {(help) => {Data.map((data) => {
                return (
                  <>
                  huhu
                    <SwiperSlide onClick={handleShow}>
                      <img src={data.webDev.img} alt="" />
                    </SwiperSlide>
                  </>
                );
              })}}
            </Swiper>*/}
      </div>
    </>
  );
}
