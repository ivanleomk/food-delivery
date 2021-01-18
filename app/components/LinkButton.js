import React from "react";

const LinkButton = ({ link, text, black = true }) => {
  const styling = black
    ? "block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
    : "block rounded-md px-3 py-2 text-base text-white font-medium hover:bg-gray-100 hover:text-gray-800";
  return (
    <a href={link} class={styling}>
      {text}
    </a>
  );
};

export default LinkButton;
