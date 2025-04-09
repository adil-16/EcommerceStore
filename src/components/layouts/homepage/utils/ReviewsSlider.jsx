"use client";
import React from "react";
import ReviewCard from "./ReviewCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";

const ReviewsSlider = ({ sliderRef }) => {
  const products = useSelector((state) => state.product.products); 

  const reviews = products.flatMap((product) => product.reviews);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "-100px",
    slidesToShow: 5,
    speed: 500,
    responsive: [
      {
        breakpoint: 1901,
        settings: {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "20px",
          slidesToShow: 3.5,
          speed: 500,
        },
      },
      {
        breakpoint: 1486,
        settings: {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "20px",
          slidesToShow: 2.5,
          speed: 500,
        },
      },
      {
        breakpoint: 1068,
        settings: {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "20px",
          slidesToShow: 2,
          speed: 500,
        },
      },

      {
        breakpoint: 851,
        settings: {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "-100px",
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
        },
      },
    ],
  };

  return (
    <div className="slider-container overflow-hidden">
      <Slider {...settings} id="slider-2" ref={sliderRef}>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <ReviewCard
              key={index} 
              user={review.user}
              comment={review.comment}
              rating={review.rating}
              className={"sm:w-[400px] w-[300px]"}
            />
          ))
        ) : (
          <p>No reviews available</p>
        )}
      </Slider>
    </div>
  );
};

export default ReviewsSlider;
