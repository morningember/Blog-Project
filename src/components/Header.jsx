import React, { useState } from "react";
import { Images } from "../constants";

const navItem = [
  { name: "Home" },
  { name: "Articles" },
  { name: "Pages" },
  { name: "Pricing" },
  { name: "Faq" },
];

const NavLink = ({ name }) => {
  return (
    <li className="relative group">
      <a href="" className="px-4 py-2 group-hover:tex">
        {name}
      </a>
      <span className="text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
        /
      </span>
    </li>
  );
};

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navVisibilityHandler = () => {
    setIsVisible((prev) => {
      return !prev;
    });
  };
  return (
    <div>
      <section>
        <header className="container mx-auto px-6 flex justify-between items-center py-4">
          <div className="logo">
            <img src={Images.Logo} alt="Logo" />
          </div>
          <div className="fixed bottom-0 top-0 -right-full flex gap-x-9 items-center">
            <ul className="flex gap-x-2 font-semibold">
              {navItem.map((item) => (
                <NavLink key={item.name} name={item.name} />
              ))}
            </ul>
            <button className="border-2 border-blue-500 px-6 rounded-full text-blue-500 font-semibold py-2 hover:bg-blue-500 hover:text-white transition-all duration-300">
              Sign in
            </button>
          </div>
        </header>
      </section>
    </div>
  );
};

export default Header;
