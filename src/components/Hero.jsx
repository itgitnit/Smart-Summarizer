import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/itgitnit/Smart-Summarizer")
          }
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Your Friendly Neighbourhood <br className="max md:hidden" />
        <span className="orange_gradient">Smart-AI Summarizer</span>
      </h1>
      <h2 className="desc">
        Simplifying complexity with a touch of warmth, this tool transforms
        lengthy content into concise summaries.Your go-to companion for
        hassle-free understanding.
      </h2>
    </header>
  );
};

export default Hero;
