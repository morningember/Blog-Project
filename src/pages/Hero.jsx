import React from "react";
import { Images } from "../constants";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col px-5 lg:flex-row">
      <div className="mt-20 lg:w-1/2">
        <h1 className="text-3xl text-center font-bold text-(--dark-soft) md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-135">
          Read the most Intereting articles
        </h1>
        <p className="text-(--dark-light) mt-4 text-center md:text-xl lg:text-left lg:text-base xl:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          iste rem similique praesentium minima laudantium nesciunt in quis.
          Totam dignissimos nulla hic repudiandae eaque eius? Nihil mollitia
          aliquid inventore illum!
        </p>
        <div className="flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]" />
            <input
              type="text"
              placeholder="Search article"
              className="placeholder:font-bold font-semibold text-(--dark-soft) placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-fit py-3 focus:outline-none shadow-[rgba(13,38,76,0.19)_0px_9px_20px] md:py-4"
            />
          </div>
          <button className="w-full bg-(--primary) text-white font-semibold rounded-lg px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2 ">
            Search
          </button>
        </div>
        <div className="flex flex-col mt-4 lg:flex-row lg:flex-none lg:items-start lg:gap-x-4 lg:mt-7">
          <span className="lg:mt-4 mt-2 text-(--dark-light) font-semibold italic lg:text-sm xl:text-base">
            Popular Tags:
          </span>
          <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base">
            <li className="rounded-lg bg-(--primary)/10 px-3 py-1.5 text-(--primary) font-semibold">
              Design
            </li>
            <li className="rounded-lg bg-(--primary)/10 px-3 py-1.5 text-(--primary) font-semibold">
              User Experience
            </li>
            <li className="rounded-lg bg-(--primary)/10  px-3 py-1.5 text-(--primary) font-semibold">
              Technology
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden lg:block lg:1/2">
        <img
          className="w-full"
          src={Images.HeroImage}
          alt="user reading images"
        />
      </div>
    </section>
  );
};

export default Hero;
