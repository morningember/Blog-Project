import React from "react";
import { Check } from "lucide-react";
import { Images } from "../constants";

const ArticleCard = ({ className }) => {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-[rgba(7,65,210,0.1)_0px_9px_30px] ${className}`}
    >
      <img
        src={Images.Post1}
        alt="title"
        className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h*60"
      />
      <div className="p-5">
        <h2 className="text-xl font-bold text-(--dark-soft) md:text-2xl lg:text-[28px] ">
          Future of Work
        </h2>
        <p className="text-(--dark-light) mt-3 text-sm md:text-lg">
          Majority of the workforce is now working remotely, changing how we
          think about productivity and collaboration.
        </p>
        <div className="flex justify-between flex-nowrap items-center mt-6">
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            <img
              src={Images.Profile}
              alt="profile"
              className="w-9 h-9 md:w-10 md:h-10"
            />
            <div className="flex flex-col">
              <h4 className="font-bold italic text-(--dark-soft) text-sm">
                John Doe
              </h4>
              <div className="flex items-center gap-x-3">
                <span className="bg-[#36b37e] w-fit bg-opacity-20 p-1.5 rounded-full">
                  <Check className="w-1.5 h-1.5 bg-[#36b37e] " />
                </span>
                <span className="italic text-(--dark-light) text-xs md:text-sm">
                  Verified Writer
                </span>
              </div>
            </div>
          </div>
          <span className="font-bold text-(--dark-light) italic text-sm md:text-base">
            02 May
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
