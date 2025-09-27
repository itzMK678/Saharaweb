import React from "react";
import img1 from "../assets/im1.png"
import img2 from "../assets/im2.png"
import img3 from "../assets/im3.png"
import img4 from "../assets/im4.png"
import img5 from "../assets/im5.png"
import img6 from "../assets/im6.png"
import img7 from "../assets/im7.png"
const ImageScroller = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7
  ];

  return (
    <div className="overflow-hidden whitespace-nowrap bg-gray-100 py-6">
      <div className="flex animate-scroll">
        {/* duplicate the list so it looks infinite */}
        {[...images, ...images].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`scroll-img-${idx}`}
            className="w-48 h-28 object-cover mx-3 rounded-[4px] shadow-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageScroller;
