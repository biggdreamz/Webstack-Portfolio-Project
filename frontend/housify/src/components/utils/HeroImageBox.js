import React from "react";
import h1 from "../../assets/h1.jpg";
import h2 from "../../assets/h2.jpg";

const HeroImageBox = (props) => {
  return (
    <div className="my-auto relative pt-12">
      <div className="img-wrap overflow-hidden bg-zinc-700 rounded-[100px] rounded-tr-none sm:w-[90%] md:ml-auto relative">
        <img
          className="w-full h-[75vh] object-cover"
          src={h2}
          alt="h1"
        />
      </div>
      <div className="absolute top-[75%]">
        <p className="button text-xl py-10 px-5">{props.p}</p>
      </div>
    </div>
  );
};

export default HeroImageBox;
