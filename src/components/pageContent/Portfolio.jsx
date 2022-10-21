import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import {
  EffectFlip,
  EffectCoverflow,
} from "swiper";
import "swiper/scss/pagination";
import SwiperCore, { Pagination } from "swiper";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

SwiperCore.use([Pagination]);



export default function Portfolio() {
  const params = {
    pagination: {
      //  dynamicBullets: true,
      clickable: true,
    },
    speed: 500,
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    className: "mySwiper",
    grabCursor: "true",
  };

  const data = {
    webDev: [
      { img: "imgTest.jpg" },
      { img: "imgTest2.jpeg" },
      { img: "imgTest.jpg" },
      { img: "imgTest2.jpeg" },
      { img: "imgTest.jpg" },
      { img: "imgTest2.jpeg" },
    ],
    uixDesign: [
      { img: "imgTest.jpg" },
      { img: "imgTest.jpeg" },
      { img: "imgTest.jpg" },
      { img: "imgTest.jpeg" },
      { img: "imgTest.jpg" },
      { img: "imgTest.jpeg" },
    ],
    rdDesign: [
      { img: "imgTest1.jpg" },
      { img: "imgTest2.jpeg" },
      { img: "imgTest1.jpg" },
      { img: "imgTest2.jpeg" },
      { img: "imgTest1.jpg" },
      { img: "imgTest2.jpeg" },
    ],
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
    

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

  return (
    <>
      <div id="portfolio" className="portfolio">
        <div className="portContainer">
          <h1>P O R T F O L I O</h1>
          <p>Web Development</p>
          <div className="webDev">{swiperPort(data.webDev)}</div>
          <p>UI UX Design</p>
          <div className="uixDesign">{swiperPort(data.uixDesign)}</div>
          <p>3D Design</p>
          <div className="rdDesign">{swiperPort(data.rdDesign)}</div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
         
        </Modal.Footer>
      </Modal>
    </>
  );
};