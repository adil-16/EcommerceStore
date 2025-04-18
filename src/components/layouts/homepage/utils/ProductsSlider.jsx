"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProductCard from "@/components/cards/ProductCard";
import { products } from "@/utils/products";

const ProductsSlider = () => {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} id="slider-1">
      {products.map((product) => (
        <ProductCard key={product?.id} product={product} />
      ))}
    </Slider>
  );
};

export default ProductsSlider;
