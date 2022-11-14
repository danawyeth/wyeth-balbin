import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import SwiperCore, { Pagination } from "swiper";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
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
    return (
      <>
        <Swiper {...params}>
          {x.map((data, index) => {
            return (
              <>
                <SwiperSlide
                  className={name}
                  onClick={(event) => {
                    updatedRole(x);
                    handleShow();
                    updatedIndex(index);
                    //preventDefault();
                  }}
                >
                  <img key={index} src={data.img} alt="" />
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </>
    );
  };

  let swiperModal = (x, name) => {
    const test = x[0];
    return (
      <>
        <Swiper {...paramsModal}>
          {x[index].imgModal.map((data, i) => {
            return (
              <>
                <SwiperSlide className={name}>
                  <img key={data} src={x[index].imgModal[i]} alt="" />
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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    
  };

//  this.$Modal.Header.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this));
  

  return (
    <>
      <div id="portfolio" className="portfolio">
        <div className="portContainer">
          <h1>P O R T F O L I O</h1>
          <p>Web Development</p>
          <div className="webDev">{swiperPort(Data.webDev, "webDev")}</div>
          <p>UI UX Design</p>
          <div className="uixDesign">
            {swiperPort(Data.uixDesign, "uixDesign")}
          </div>
          <p>3D Design</p>
          <div className="rdDesign">
            {swiperPort(Data.rdDesign, "rdDesign")}
          </div>
        </div>
        <div className="modalDiv">
          <Modal
        //  tabindex="-1" 
            show={show}
            onHide={handleClose}
            aria-labelledby="contained-modal-title-vcenter"
            size="xl"
          >
            <Modal.Header closeButton aria-labelledby="p-0"
            data-dismiss="modal" aria-label="Close"></Modal.Header>
            <Modal.Body>
              <div className="flex">
                {show ? (
                  <div className="left">{swiperModal(role)}</div>
                ) : (
                  <p>dead</p>
                )}

                {show ? (
                  <div className="right">
                    <div className="modalText">
                      <h5 className="">PROJECT</h5>
                      <h1>{role[index].title}</h1>
                      <h5 className="role">{role[index].role}</h5>

                      <div className="capsuleContainer">
                        {role[index].tools.map((data) => {
                          return (
                            <>
                              <div className="capsules">
                                <p>{data}</p>
                              </div>
                            </>
                          );
                        })}

                        <div className="capsules">
                          <p>HTML</p>
                        </div>
                      </div>

                      <h6>
                        <strong>ABOUT</strong>
                      </h6>
                      <p>{role[index].about}</p>
                      <a
                        href={role[index].link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <p>
                          <u>{role[index].link}</u>
                        </p>
                      </a>
                    </div>
                  </div>
                ) : (
                  <p>🫠</p>
                )}
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </>
  );
}
