import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineStar } from "react-icons/ai";
import { useState } from "react";

import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  const id = router.query;

  return (
    <div className="w-full md:pt-20 md:pb-8 bg-white">
      <Wrapper>
        {/* book Image and Titles section start */}
        <section className="w-full  md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
          <div className=" flex flex-col md:flex-row gap-10">
            <div>
              <div className="transform md:w-[390px] h-[427px] flex items-center justify-center  overflow-hidden bg-[#F6F6F6] ">
                <div>
                  <img
                    className=" w-[214px] h-[324px]"
                    alt="product book image"
                    src="https://m.media-amazon.com/images/P/014118776X.01._SCLZZZZZZZ_SX500_.jpg"
                  />

                  <div className="w-8 h-8 rounded-full justify-center items-center flex  bg-white absolute top-2 right-2 ">
                    <IoMdHeartEmpty className="relative  text-[15px] md:text-[18px] cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
            {/* title, details and button start*/}
            <div className="gap-4 md:gap-16 flex flex-col justify-center  md:pt-4 md:pl-8">
              <section className="flex flex-col justify-center  ">
                <div className="text-center md:text-start md:w-full h-[30px] md:h-[49px] text-black text-[32px] font-semibold">
                  1984
                </div>
                <div className="text-center md:text-start md:w-full h-[63px] text-black text-[16px] font-normal -mb-4">
                  By George Well
                  <br />
                </div>
                <div className="flex md:gap-8 gap-4 md:justify-start justify-center">
                  <div className="text-black text-[24px] font-normal">4.5</div>
                  <div className="text-black text-[13px] font-normal underline">
                    (17 reviews)
                  </div>
                </div>
              </section>
              <div className="text-center md:text-start">
                <button className="shadow-sm md:w-[263px] w-[250px] h-[50px] md:h-[66px] bg-[#228D5A] rounded-xl transform hover:scale-105 duration-300 ease-in-out">
                  <div className="md:w-[245.54px] text-center text-[#FFF1F1] md:text-[20px] font-semibold">
                    Swap Book
                  </div>
                </button>
              </div>
            </div>
            {/* title, details and button end*/}
          </div>
        </section>
        {/* book Image and Titles section end */}
        
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
