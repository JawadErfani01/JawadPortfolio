import React, { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const GoToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      {showButton && (
        <button
          className="fixed  hover:scale-110 m-2 animate-bounce hover:animate-none duration-300 bottom-4 right-4 bg-white dark:bg-black dark:text-white text-black p-3 text-lg   rounded-full  shadow-lg "
          onClick={handleClick}
        >
          <AiOutlineArrowUp />
        </button>
      )}
    </>
  );
};

export default GoToTopButton;
