import React from "react";
//import Swiper from 'react-id-swiper';
import { Swiper, SwiperSlide } from "swiper/react";
//import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from 'swiper';
import "swiper/scss";
import {
  Navigation,
  EffectFade,
//  Pagination,
  EffectFlip,
  EffectCoverflow,
} from "swiper";
import "swiper/scss/navigation";
import 'swiper/scss/pagination';
import "swiper/scss/effect-fade";

SwiperCore.use([Pagination])

const portfolio = () => {
  //const swiper = new Swiper('.swiper', {
  //    // Optional parameters
  //    //direction: 'vertical',
  //    loop: true,

  //    // If we need pagination
  //    pagination: {
  //      el: '.swiper-pagination',
  //    },

  //    // Navigation arrows
  //    navigation: {
  //      nextEl: '.swiper-button-next',
  //      prevEl: '.swiper-button-prev',
  //    },

  //    // And if we need scrollbar
  //    scrollbar: {
  //      el: '.swiper-scrollbar',
  //    },
  //  });

  //let swiper = new Swiper('.mySwiper', {
  //    navigation: {
  //              nextEl: '.swiper-button-next',
  //              prevEl: '.swiper-button-prev',
  //            }
  //});

    const params = {
        //modules: {["EffectFade", "Pagination", "EffectCoverflow"]},
        //pagination: {
        //  dynamicBullets: true,
        //  clickable: true
        //}, 
        speed: 500,
        //navigation: true,
        //navigation: {
        //    nextEl: ".swiper-button-next",
        //    prevEl: ".swiper-button-prev"
        //  },
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,  
        className: "mySwiper",
        grabCursor: "true"
    };
    
    
  return (
    <>
      <div id="portfolio" className="portfolio">
        <div className="portContainer">
          <h1>P O R T F O L I O</h1>
          <p>Web Development</p>

          <button id="swiper-button-prev" className="swiper-button-prev"></button>
          <button className="swiper-button-next"></button>
          <Swiper {...params}
          pagination={{
                      dynamicBullets: true,
                      clickable: true
                    }}
          >
            <SwiperSlide>
              <img src="imgTest.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="imgTest2.jpeg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="imgTest.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="imgTest2.jpeg" alt="" />
            </SwiperSlide>
          </Swiper>
          

          <div className="flex">
            <button className="btn">aaa</button>
            <button className="btn">aaa</button>
          </div>
          <div className="flex"></div>
          <div className="flex"></div>
        </div>
      </div>
    </>
  );
};

export default portfolio;
