import Image from "next/image";
import React, { useState } from "react";

function Slider() {
  const sliderLink = ["/temp1.jpg", "/temp2.jpg", "/temp3.jpg", "/temp4.jpg"];
  const [imageSliderLink, setImageSliderLink] = useState(0);
  const handleLeftSlider = () => {
    if (imageSliderLink <= 0) {
      setImageSliderLink(sliderLink.length - 1);
    } else {
      setImageSliderLink(imageSliderLink - 1);
    }
  };
  const handleRightSlider = () => {
    if (imageSliderLink >= sliderLink.length - 1) {
      setImageSliderLink(0);
    } else {
      setImageSliderLink(imageSliderLink + 1);
    }
  };
  return (
    <div className="w-full flex flex-col justify-center items-center bg-slate-500 select-none">
      <div className="w-[96vw] font-sans absolute flex justify-between items-center mx-12 bold">
        <span
          className="bg-white text-4xl font-medium p-2 pb-4 pr-4 h-12 flex justify-center items-center rounded-[100%] cursor-pointer opacity-20 hover:opacity-60 duration-100"
          onClick={handleLeftSlider}
        >
          &lt;
        </span>
        <span
          className="bg-white text-4xl font-medium p-2 pb-4 pl-4 h-12 flex justify-center items-center rounded-[100%] cursor-pointer opacity-20 hover:opacity-60 duration-100"
          onClick={handleRightSlider}
        >
          &gt;
        </span>
      </div>
      <Image
        className="h-[550px] w-[100vw] object-cover"
        src={sliderLink[imageSliderLink]}
        alt=""
        width={400}
        height={300}
      />
    </div>
  );
}

export default Slider;
