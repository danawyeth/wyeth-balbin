import React, { useEffect, useRef } from "react";
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
import Data from "./PortfolioData";
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
                  <SwiperSlide className={name} onClick={(event) => {updatedRole(x);handleShow(); updatedIndex(index)}}>
                    <img key={index} src={data.img}  alt="" />
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </>
      );
    };

  console.log("webDev", Data.webDev);
  //console.log("nEW object structure", Data.webDev.p1.img);

    //let swiperModal = (x) => {
    //    console.log("Modal open clicked role swiper modal", role);
    //    const objTest = Object.values(x);

    //  return (
    //    <>
    //      <Swiper {...paramsModal}>
    //        {objTest.map((data, {index}) => {
    //          return (
    //            <>
    //              <SwiperSlide >
    //                  {/* HELP ME I AM STUCKED. 12:38 NA. SO PROBLEM IS SHOW MODAL IS NOT SHOWING ANYTHING FIX IT */}
    //                <img key={index} src={data.imgModal} alt=""/>
    //              </SwiperSlide>
    //            </>
    //          );
    //        })}
    //      </Swiper>
    //    </>
    //  );
    //};

    //let swiperModal = (x, name) => {
    //  console.log("swipermodal", x[index]);
    //  const test = x[0];
    //  return (
    //    <>
    //      <Swiper {...paramsModal}>
    //        {x.map((data, index) => {
    //          return (
    //            <>
    //              <SwiperSlide className={name}>
    //                <img key={index} src={data.img}  alt="" />
    //              </SwiperSlide>
    //            </>
    //          );
    //        })}
    //      </Swiper>
    //    </>
    //  );
    //};

    let swiperModal = (x, name) => {
        console.log("swipermodal", x.imgModal, "role index", role[0]);
        const test = x[0];
        return (
          <>
            <Swiper {...paramsModal}>
              {x[index].imgModal.map((data, i) => {
                return (
                  <>
                    <SwiperSlide className={name}>
                      {/*<img key={data} src={x[index].imgModal[i]}  alt="" />*/}
                      <img key={data} src={x[index].imgModal[i]}  alt="" />
                      {console.log("mamamo", x[index].imgModal[i])}
                    </SwiperSlide>
                  </>
                );
              })}
            </Swiper>
          </>
        );
      };

  let [role, updatedRole] = useState();
  let [index, updatedIndex] = useState(0);


  console.log("ROLE", role);
  console.log("DATAWEBDEV", Data.webDev);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    console.log("Modal open clicked role handleshow modal", role);
  };

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
                {show ? <div className="left">{swiperModal(role)}</div> : <p>dead</p>}

                {show ? <div className="right">
                  <div className="modalText">
                    <h5 className="">PROJECT</h5>
                    <h1>{role[index].title}</h1>
                    <h5 className="role">{role[index].role}</h5>
                    <div className="capsules"></div>
                    <h6>
                      <strong>ABOUT</strong>
                    </h6>
                    <p>
                    {role[index].about}
                    </p>
                    <p>
                      <u>{role[index].link}</u>
                    </p>
                  </div>
                </div> : <p>🫠</p>}
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </>
  );
}
