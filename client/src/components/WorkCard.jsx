import React from "react";
import sampleImg from "../assets/im1.png"; // replace with your image
import logo from "../assets/logo2.png";

const WorkCard = ({Pic, Title, Description}) => {
  return (
    <div className="w-[400px] max-w-[400px] m-5 border border-[#002800] bg-[#002800] rounded-[22px] shadow-md overflow-hidden hover:shadow-lg transition">
      {/* Container relative for absolute children */}
      <div className="relative">
        {/* Main image */}
        <img
          src={Pic}
          alt="Card"
          className="w-full h-48 object-cover"
        />

        {/* Logo overlapping image */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#002800] p-1 rounded-full">
          <img
            src={logo}
            alt="Logo"
            className="h-16 w-16 object-cover rounded-full border-2 border-white"
          />
        </div>
      </div>

      {/* Content */}
      <div className="pt-12 pb-4 px-4 text-center">
        <h3 className="text-lg font-semibold text-white">
          {Title}
        </h3>
        <p className="text-gray-100">
          {Description}
        </p>
      </div>
    </div>
  );
};

export default WorkCard;
