import React from "react";

const Button = ({ text, link, theme = "dark" }) => {
  const style = `font-montserrat uppercase text-lg lg:text-xl xl:text-2xl mt-6 py-1 px-2 hover:scale-105 transition-transform duration-300 ${
    theme === "dark" ? "bg-black text-white" : "bg-white text-black"
  }`;

  return (
    <button className={style}>
      <a href={link}>{text}</a>
    </button>
  );
};

export default Button;
