import { useState } from "react";

import logo from "../../assets/images/Navbar/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isShown, setIsShown] = useState(false);
  const handleClick = () => {
    setIsShown((prev) => !prev);
  };

  return (
    <nav className="bg-white text-black font-montserrat sticky z-30">
      <div className="flex justify-between px-10 py-1 relative">
        <a href="/home">
          <div className="w-[80px] hover:scale-105 transition-transform duration-300 mt-2">
            <img src={logo} alt="Logo" />
          </div>
        </a>
        {/* DEFAULT NAVBAR */}
        <ul className="hidden md:flex justify-around gap-x-5 items-center">
          <li className="hover:scale-105 transition-transform duration-300">
            <a href="/home">Home</a>
          </li>
          <li className="hover:scale-105 transition-transform duration-300">
            <a href="/about">About</a>
          </li>
          <li className="hover:scale-105 transition-transform duration-300">
            <a href="/services">Services</a>
          </li>
          <li className="hover:scale-105 transition-transform duration-300">
            <a href="/gallery">Gallery</a>
          </li>
          <li className="hover:scale-105 transition-transform duration-300">
            <a href="/contact">Contact Us</a>
          </li>
          <li className="hover:scale-105 transition-transform duration-300">
            <a href="/">Join Now</a>
          </li>
        </ul>
        {/* MOBILE NAVBAR */}
        {!isShown ? (
          <button onClick={handleClick} className="md:hidden">
            <div className="flex flex-col">
              <div className="text-2xl -my-3">&#8211;&#8211;</div>
              <div className="text-2xl -my-3">&#8211;&#8211;</div>
              <div className="text-2xl -my-3">&#8211;&#8211;</div>
            </div>
          </button>
        ) : (
          <button onClick={handleClick} className="text-3xl text-black">
            &#10005;
          </button>
        )}
      </div>
      {isShown && (
        <ul className="flex flex-col justify-start gap-10 origin-top animate-open-menu bg-white px-10 section-min-height absolute w-full top-[58px] left-0 pt-10">
          <li className="hover:opacity-70 transition-opacity duration-300">
            <a href="/home">Home</a>
            <hr className="border-t-black opacity-20" />
          </li>
          <li className="hover:opacity-70 transition-opacity duration-300">
            <a href="/about">About</a>
            <hr className="border-t-black opacity-20" />
          </li>
          <li className="hover:opacity-70 transition-opacity duration-300">
            <a href="/services">Services</a>
            <hr className="border-t-black opacity-20" />
          </li>
          <li className="hover:opacity-70 transition-opacity duration-300">
            <a href="/gallery">Gallery</a>
            <hr className="border-t-black opacity-20" />
          </li>
          <li className="hover:opacity-70 transition-opacity duration-300">
            <a href="/contact">Contact Us</a>
            <hr className="border-t-black opacity-20" />
          </li>
          <li className="hover:opacity-70 transition-opacity duration-300">
            <a href="/">Join Now</a>
            <hr className="border-t-black opacity-20" />
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
