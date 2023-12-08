import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import HeroBanner from "@/components/HeroBanner";
import ProudctCarousel from "@/components/ProductCarousel";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-white">
      <Header></Header>
      <HeroBanner></HeroBanner>
      <section className="w-full max-w-[1280px] px-5 md:px-20">
        <div className=" justify-start flex max-w-[800px]  my-[20px] md:my-[40px]">
          <div className="w-[245px] h-[31px] text-zinc-600 text-[20px] font-medium">
            Popular Books Near You
          </div>
        </div>
      </section>
      <div className=" my-12 px-8  md:px-20">
        <ProudctCarousel></ProudctCarousel>
      </div>
      <h1 className="text-4xl font-bold text-center">ETH INDIA</h1>
    </div>
  );
}
