"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { crossIcon, plusIconImages } from "@/svgs";

const RefundFileUpload = ({ setState }) => {
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectState, setSelectState] = useState("initial");

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files) {
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setImages((prevImages) => [...prevImages, ...newImages]);
      setSelectState("selected");
    }
  };

  // Handle clicking on the plus button to open the file picker
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  // Clean up object URLs to avoid memory leaks
  useEffect(() => {
    return () => {
      images.forEach((image) => URL.revokeObjectURL(image.preview));
    };
  }, [images]);

  return (
    <div className="flex flex-col gap-5 p-8">
      <h1 className="text-2xl font-bold">Return & Refund</h1>
      <hr />

      {selectState === "initial" && (
        <div id="drop-zone">
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-52 border-gray-300 rounded-lg cursor-pointer bg-uploadBg hover:bg-whiteLight"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <img src="/images/green-gallery.png" />
                <p className="mb-2 text-sm text-grayDark">
                  <span className="font-semibold">Upload Photo</span>{" "}
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={handleFileChange} // Add the change handler
                multiple
              />
            </label>
          </div>
        </div>
      )}

      {selectState === "selected" && (
        <div className="w-full md:w-[600px]">
          <div className="flex w-full items-center gap-[10px]">
            <div className="w-[25%]">
              <button
                onClick={handleButtonClick}
                className="flex h-[99px] w-[100%] cursor-pointer items-center justify-center rounded-[10px] bg-white hover:bg-backgroundSecondary"
              >
                {plusIconImages}
              </button>
              <input
                type="file"
                className="hidden"
                ref={fileInputRef}
                multiple
                onChange={handleFileChange}
                accept="image/*"
              />
            </div>

            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={3}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper4 h-[99px] flex-1"
            >
              {images.map((image, index) => (
                <SwiperSlide
                  key={index}
                  className="cursor-pointer overflow-hidden rounded-xl bg-white"
                >
                  <Image
                    src={
                      image instanceof File ? URL.createObjectURL(image) : image
                    }
                    fill={true}
                    alt={`Thumbnail ${index + 1}`}
                    style={{ objectFit: "cover", background: "white" }}
                  />
                  {/* Remove thumbnail */}
                  <div
                    className="svg-icon absolute right-1 top-1 z-50 cursor-pointer rounded-full bg-white p-1"
                    onClick={() => {
                      const updatedFiles = images.filter((_, i) => i !== index);
                      setImages(updatedFiles);
                    }}
                  >
                    {crossIcon}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}

      <div className="flex w-full justify-end items-center gap-[19px]">
        <button
          onClick={() => setState("list")}
          className="rounded-[44px] w-[160px] text-grayDark border border-grayDark px-[22px] py-[10px] font-semibold"
        >
          Cancel
        </button>
        <button
          onClick={() => setState("list")}
          className="rounded-[44px] w-[160px] bg-buttonGradient px-[22px] py-[10px] font-semibold text-white"
        >
          {images.length > 0 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default RefundFileUpload;
