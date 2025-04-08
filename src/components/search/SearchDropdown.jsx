import React from "react";

const Dropdown = ({ products }) => {
  return (
    <div className="absolute bg-white shadow-lg w-[42%] max-h-60 overflow-y-auto z-50 mt-8 rounded-lg">
      <ul className="list-none p-2">
        {products.map((product) => (
          <li
            key={product.id}
            className="flex items-center p-2 hover:bg-gray-200 cursor-pointer"
          >
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-10 h-10 mr-3"
            />
            <span>{product.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
