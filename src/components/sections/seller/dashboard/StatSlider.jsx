"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import Image from "next/image";

const StatSlider = ({
  totalUsers,
  totalPosts,
  percentageUsers,
  percentagePosts,
}) => {
  const [current, setCurrent] = useState(0);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    initialSlide: 0,
    beforeChange: (prev, next) => {
      setCurrent(next);
    },
    responsive: [
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div style={{ position: "relative", bottom: "30px" }}>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0px",
            padding: "0px",
            margin: "0px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (index) => (
      <div
        className={`h-2 w-2 rounded-full bg-primary
           ${index === current ? "opacity-100 w-4" : "opacity-50"}`}
      ></div>
    ),
  };

  return (
    <Slider {...settings}>
      <div className="">
        <Card
          title={totalUsers}
          content={"Total orders"}
          percentage={percentageUsers}
        />
      </div>
      <div className="">
        <Card
          title={totalPosts}
          content={"Pending orders"}
          percentage={percentagePosts}
        />
      </div>
    </Slider>
  );
};

export default StatSlider;
