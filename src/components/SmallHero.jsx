import React from "react";
import smallHeroImage from "../assets/page-hero.png";

const SmallHere = (props) => {
  return (
    <div className="w-full relative ">
      <div className="absolute flex w-full justify-center items-center h-full">
        <h4 className="text-3xl font-bold text-white">{props.title}</h4>
      </div>
      <img src={smallHeroImage} className="w-full h-[350px]" alt="" />
    </div>
  );
};

export default SmallHere;
