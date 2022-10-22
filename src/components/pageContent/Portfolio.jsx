import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import { EffectFlip, EffectCoverflow } from "swiper";
import "swiper/scss/pagination";
import SwiperCore, { Pagination } from "swiper";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
//import Col from "react-bootstrap/Col";
//import Container from "react-bootstrap/Container";
//import Row from "react-bootstrap/Row";
import Data from './PortfolioData'
SwiperCore.use([Pagination]);

export default function Portfolio() {  
  let params = {
    pagination: {
      //  dynamicBullets: true,
      clickable: true,
    },
    speed: 500,
    slidesPerView: 3,
    spaceBetween: 40,
    //loop: true,
    className: "mySwiper",
    grabCursor: false,
  };

  let paramsModal = {
    ...params,
    slidesPerView: 1,
    loop: false,
  };

  let swiperPort = (x, name) => {
    console.log("swiperPort", x);
    return (
      <>
        <Swiper {...params}>
          {x.map((data, index) => {
            return (
              <>
                <SwiperSlide className={name} onClick={(event) => {updatedRole({x});handleShow();}}>
                  <img key={index} src={data.img}  alt="" />
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </>
    );
  };

  const handleShow = () => {
    setShow(true)
    console.log("Modal open clicked role handleshow modal", role);
  };


  let swiperModal = (x) => {
      console.log("Modal open clicked role swiper modal", role);

    return (
      <>
        <Swiper {...paramsModal}>
          {Object.keys(x).map((data, i) => {
            return (
              <>
                <SwiperSlide>
                    {/* HELP ME I AM STUCKED. 12:38 NA. SO PROBLEM IS SHOW MODAL IS NOT SHOWING ANYTHING FIX IT */}
                  <img key={i} src={x[data].img} alt=""/>
                  {console.log("ayoh pwede pala", Object.entries(x), x )}
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </>
    );
  };
 


  let [ role, updatedRole ] = useState(Data.webDev);
   //getting functioni to be used in an other function

   console.log("ROLE", role);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);


 


  const ref = useRef(null);

  return (
    <>
      <div id="portfolio" className="portfolio">
        <div className="portContainer">
          <h1>P O R T F O L I O</h1>
          <p>Web Development</p>
          <div className="webDev">{swiperPort(Data.webDev, "webDev")}</div>
          <p>UI UX Design</p>
          <div className="uixDesign">{swiperPort(Data.uixDesign, "uixDesign")}</div>
          <p>3D Design</p>
          <div className="rdDesign">{swiperPort(Data.rdDesign, "rdDesign")}</div>
        </div>
        <div className="modalDiv">
          <Modal
            show={show}
            onHide={handleClose}
            aria-labelledby="contained-modal-title-vcenter"
            size="xl"
          >
            <Modal.Header closeButton aria-labelledby="p-0"></Modal.Header>
            <Modal.Body>
              <div className="flex">
                <div className="left">{swiperModal(role)}</div>

                <div className="right">
                  <div className="modalText">
                    <h5>PROJECT</h5>
                    <h1>Baguio Visita</h1>
                    <h5 className="role">UI Design Front-End Development</h5>
                    <div className="capsules"></div>
                    <h6><strong>ABOUT</strong></h6>
                    <p>Built and designed web components for Baguio VIS.I.T.A - the Baguio VIS.I.T.A. (Visitor Information and Travel Assistant) is the online registration system for Baguio tourists and travelers. It has become an instrumental tool for the city’s cautious re-start of tourism activities and gradual re-opening of the local economy.</p>
                    <p><u>https://visita.baguio.gov.ph/</u></p>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </>
  );
}
