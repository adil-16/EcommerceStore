"use client";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
// import DrawerHeader from "./components/DrawerHeader";
// import BagTypes from "./components/BagTypes";
// import BagDetails from "./components/BagDetails";
// import BagsPerDay from "./components/BagsPerDay";
// import DateSelection from "./components/DateSelection";
// import BagPricing from "./components/BagPricing";
import { useContext, useEffect, useState } from "react";

import { toast } from "sonner";
import DrawerHeader from "./DrawerHeader";
import NewImageSwipper from "@/components/sections/seller/products/NewImageSwipper";

const AddProductDrawer = ({ open, setIsOpen }) => {
  const [selectedBag, setSelectedBag] = useState({});
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [numberOfBags, setNumberOfBags] = useState(0);
  const [pricing, setPricing] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");
  const [selectedDates, setSelectedDates] = useState([]);
  const [dealTitle, setDealTitle] = useState("");
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState(null);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  const [selectState, setSelectState] = useState("initial");

  const [images, setImages] = useState([]);

  const resetForm = () => {
    setSelectedBag({});
    setSelectedTags([]);
    setSelectedCategories([]);
    setSelectedDates([]);
    setDescription("");
    setNumberOfBags(0);
    setPricing("");
    setOriginalPrice("");
    setDealTitle("");
    setStock("");
  };

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

  const handleClose = () => {
    setIsOpen((state) => !state);
  };

  return (
    <Dialog open={open} onClose={handleClose} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />
      <div className="fixed inset-0 overflow-hidden rounded-md">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-4">
            <DialogPanel
              transition
              className="pointer-events-auto relative lg:w-screen max-w-[29rem] transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white py-5 shadow-xl">
                <DialogTitle className="flex px-4 sm:px-6 justify-between ">
                  <DrawerHeader handleClose={handleClose} />
                </DialogTitle>
                <hr className="my-3 w-[90%] border-gray-300 ml-8" />
                <div className="relative mt-3 pb-3 flex-1 px-4 sm:px-6 flex flex-col gap-3">
                  <div className="font-semibold text-md">Upload Photos</div>

                  {selectState === "initial" && (
                    <div id="drop-zone">
                      <div className="flex items-center justify-center w-full">
                        <label
                          htmlFor="dropzone-file"
                          className="flex flex-col items-center justify-center w-full h-52 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <img src="/images/upload-image.png" />
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                              <span className="font-semibold">
                                Add Product Photo
                              </span>{" "}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Supports: PNG, JPG, JPEG, WEBP
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
                    <NewImageSwipper images={images} setImages={setImages} />
                  )}

                  <h2 className="font-semibold text-md">Upload Photos</h2>
                  <div className="flex flex-col gap-1">
                    <label>Product title</label>
                    <input className="bg-whiteLightest rounded-[4px] h-[50px] px-3 py-2" />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label>Category</label>
                    <input className="bg-whiteLightest rounded-[4px] h-[50px] px-3 py-2" />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label>Description</label>
                    <textarea
                      rows={5}
                      className="bg-whiteLightest rounded-[4px] px-3 py-2"
                    />
                  </div>

                  <div className="flex flex-col items-start gap-1">
                    <h2 className="font-semibold text-md">Colors</h2>
                    <div className="border px-5 py-2 rounded-[40px] border-black">
                      Add +
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <h2 className="font-semibold text-md">Size</h2>
                    <div className="border px-5 py-2 rounded-[40px] border-black">
                      Add +
                    </div>
                  </div>

                  <h2 className="font-semibold text-md">Pricing</h2>
                  <div className="flex flex-col gap-1 items-start">
                    <label>Price</label>
                    <div className="relative flex items-center">
                      <input
                        className="block bg-whiteLightest w-full placeholder:font-bold rounded-lg py-3 px-3 text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder="Original Price"
                        value={originalPrice}
                        onChange={(e) => setOriginalPrice(e.target.value)}
                      />
                      <span className="absolute right-3 text-primary font-bold">
                        $
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <button className="border py-2 flex-1 rounded-[40px] border-black">
                      Discard
                    </button>
                    <button className="rounded-[40px] py-2 flex-1 bg-buttonGradient text-white">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default AddProductDrawer;
