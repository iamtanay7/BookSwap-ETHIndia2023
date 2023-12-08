import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const ProductDetailsCarousel = () => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        // thumbWidth={60}
        showThumbs={false}
        className="productCarousel"
      >
        
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
