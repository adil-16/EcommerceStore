import React from "react";
import { useRouter } from "next/navigation";

const Dropdown = ({ products, setSearch }) => {
  const router = useRouter();

  const handleClick = (productId) => {
    setSearch("");
    router.push(`/product/${productId}`);
  };

  return (
    <div className="absolute left-0 mt-10 w-full sm:w-[90%] md:w-[85%] lg:w-full bg-white shadow-lg max-h-60 overflow-y-auto rounded-lg border border-gray-200 no-scrollbar">
      <ul className="list-none p-2 space-y-1">
        {products.map((product) => (
          <li
            key={product.id}
            className="flex items-center p-2 hover:bg-gray-200 cursor-pointer transition"
            onClick={() => handleClick(product.id)}
          >
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-8 h-8 sm:w-10 sm:h-10 mr-3 object-cover rounded"
            />
            <span className="text-sm sm:text-base truncate">
              {product.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
