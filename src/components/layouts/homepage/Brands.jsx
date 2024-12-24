import Image from "next/image";
import React from "react";

const Brands = () => {
  return (
    <div className="flex flex-row lg:px-[100px] md:px-8 px-4 md:justify-between justify-center gap-4 gap-y-5 flex-wrap bg-brandsbg py-10">
      <Image
        src="/images/versace.png"
        width={166.48}
        height={33.16}
        alt="Hero-image"
      />
      <Image
        src="/images/zara.png"
        width={91}
        height={37.98}
        alt="Hero-image"
      />
      <Image
        src="/images/gucci.png"
        width={156}
        height={32.29}
        alt="Hero-image"
      />
      <Image
        src="/images/prada.png"
        width={194}
        height={31.2}
        alt="Hero-image"
      />
      <Image
        src="/images/ck.png"
        width={206.79}
        height={33.35}
        alt="Hero-image"
      />
    </div>
  );
};

export default Brands;
