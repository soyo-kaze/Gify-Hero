import React, { useEffect, useState } from "react";
import "./Hero.css";
import some from "./naruto.gif";

const Pointer = () => {
  return (
    <div className="Pointer">
      <img id="gify" src="" />
    </div>
  );
};

const HeroText = ({ children, GifSrc = some }) => {
  //   const [gif, setGif] = useState(); //for gif
  let back, Xposition, Yposition, giphyImg;
  const moved = (event) => {
    Xposition = event.pageX;
    Yposition = event.pageY;
    back.style.left = Xposition - 5 + "px";
    back.style.top = Yposition - 5 + "px";
    back.style.display = "flex";
  };
  const hover = (event) => {
    giphyImg.src = GifSrc;
    giphyImg.style.width = "400px";
    giphyImg.style.height = "400px";
  };
  const movedAway = (event) => {
    giphyImg.style.width = "0px";
    giphyImg.style.height = "0px";
  };

  useEffect(() => {
    // console.log(GifSrc);
    back = document.querySelector(".Pointer");
    giphyImg = document.querySelector("#gify");
    window.addEventListener("mousemove", moved);
    document.body.style.backgroundColor = "white";
  }, []);
  return (
    <div className="HeroIn">
      <div className="Hero" onMouseOver={hover} onMouseOut={movedAway}>
        {children}
      </div>
    </div>
  );
};

export { HeroText, Pointer };
