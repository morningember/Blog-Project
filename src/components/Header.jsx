import React, { useState } from "react";
import { Images } from "../constants";
import { Menu, X, ChevronDown } from "lucide-react";

const navItem = [
  { name: "Home", type: "link" },
  { name: "Articles", type: "link" },
  { name: "Pages", type: "dropdown", items: ["About Us", "Contact Us"] },
  { name: "Pricing", type: "link" },
  { name: "Faq", type: "link" },
];

const NavLink = ({ item }) => {
  const [dropDown, setDropDown] = useState(false);
  const handleDropDown = () => {
    setDropDown((prev) => !prev);
  };
  return (
    <li className="relative group">
      {item.type === "link" ? (
        <>
          <a href="" className="px-4 py-2">
            {item.name}
          </a>
          <span className="cursor-pointer text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
            /
          </span>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <button
            className="px-4 py-2 flex gap-x-1 items-center"
            onClick={handleDropDown}
          >
            <span>{item.name}</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <div
            className={`${
              dropDown ? "block" : "hidden"
            } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
          >
            <ul className="bg-(--dark-soft) lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg">
              {item.items.map((page) => (
                <a
                  key={item.items}
                  href="/"
                  className="hover:bg-(--dark-hard) hover:text-white px-4 py-2 text-white lg:text-(--dark-soft)"
                >
                  {page}
                </a>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  const navHandler = () => {
    setIsVisible((prev) => {
      return !prev;
    });
  };
  return (
    <section className="sticky top-0 left-0 right-0 z-50">
      <header className="container mx-auto px-5 flex justify-between items-center py-4">
        <div className="logo">
          <img src={Images.Logo} alt="Logo" className="W-16" />
        </div>
        <div className="z-50 lg:hidden">
          {isVisible ? (
            <X className="w-6 h-6" onClick={navHandler} />
          ) : (
            <Menu className="w-6 h-6" onClick={navHandler} />
          )}
        </div>

        <div
          className={`mt-14 lg:mt-0 transition-all duration-300 bg-(--dark-hard) lg:bg-transparent z-49 flex flex-col w-full lg:w-auto justify-center lg:justify-end fixed top-0 bottom-0 items-center lg:static lg:flex-row gap-x-9 ${
            isVisible ? "right-0" : "-right-full"
          }`}
        >
          <ul className="flex text-white items-center gap-y-5 lg:text-(--dark-soft) flex-col gap-x-2 font-semibold lg:flex-row">
            {navItem.map((item) => (
              <NavLink key={item.name} item={item} />
            ))}
          </ul>
          <button className="mt-5 lg:mt-0 border-2 border-blue-500 px-6 rounded-full text-blue-500 font-semibold py-2 hover:bg-blue-500 hover:text-white transition-all duration-300">
            Sign in
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;
