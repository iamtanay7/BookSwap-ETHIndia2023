import React from "react";
import Link from "next/link";

const NavIcons = () => {
  return (
    <div className="-ml-12 -mr-8 justify-between gap-4 hidden md:flex items-center">
      <Link href="">
        <div className="text-zinc-600  text-[16px] font-semibold">Browse</div>
      </Link>
      <Link href="/wishlist">
        <div className="text-zinc-600  text-[16px] font-semibold">Wishlist</div>
      </Link>

      <Link href="/login">
        <li className="hidden md:flex text-zinc-600  text-[16px] font-semibold justify-center items-center  transition-transform active:scale-90">
          Login
        </li>
      </Link>
      <Link href="/register">
        <li className=" hidden md:flex h-10 px-5  text-[14px] leading-tight text-white justify-center items-center  bg-[#228D5A] rounded-lg transition-transform hover:bg-[#228D5A]/[0.8] active:scale-90">
          Sign Up
        </li>
      </Link>
    </div>
  );
};

export default NavIcons;
