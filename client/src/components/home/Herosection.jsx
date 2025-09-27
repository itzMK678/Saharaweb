import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../assets/hero.png";
import img2 from "../../assets/hero2.png";
import img3 from "../../assets/hero3.png";
import logo from "../../assets/logo2.png";

const Herosection = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Carousel */}
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={4000}
      >
        {/* Slide 1 */}
        <div className="relative w-full h-screen">
          <img src={img1} alt="Slide 1" className="w-full h-screen object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Slide 2 */}
        <div className="relative w-full h-screen">
          <img src={img2} alt="Slide 2" className="w-full h-screen object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Slide 3 */}
        <div className="relative w-full h-screen">
          <img src={img3} alt="Slide 3" className="w-full h-screen object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
      </Carousel>

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        {/* Logo */}
        <img src={logo} alt="SAHARA Logo" className="w-32 mb-1" />

        {/* Title */}
        <p className=" text-5xl md:text-7xl lg:text-[120px] font-extrabold text-stroke">
          SAHARA
        </p>

        {/* Description */}
        <p className="mt-4 text-lg md:text-2xl max-w-2xl ">
          Social Awareness and Health Association for Rural Areas
        </p>
      </div>
    </div>
  );
};

export default Herosection;
