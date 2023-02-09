"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import Image from "next/image";

function Banner() {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus
        showIndicators={false}
        showThumbs={false}
        interval={1500}>
        <div>
          <img loading="lazy" src="https://links.papareact.com/gi1" />
        </div>
        <div>
          <img loading="lazy" src="https://links.papareact.com/6ff" />
        </div>
        <div>
          <img loading="lazy" src="https://links.papareact.com/7ma" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
