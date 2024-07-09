import React, { useState, useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";

const SlideShow = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = React.Children.count(children);
  const slideInterval = useRef(null);
  const childrenArray = React.Children.toArray(children);

  const startSlideShow = () => {
    slideInterval.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000);
  };

  const stopSlideShow = () => {
    clearInterval(slideInterval.current);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    startSlideShow();
    return () => stopSlideShow();
  }, [totalSlides]);

  return (
    <Box className="relative w-full h-full overflow-hidden">
      <Box
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {childrenArray.map((child, index) => (
          <Box key={index} className="w-full flex-shrink-0">
            {child}
          </Box>
        ))}
      </Box>

      <Box className="absolute bottom-0 left-0 right-0 flex justify-center p-4">
        {childrenArray.map((_, index) => (
          <Box
            key={index}
            className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-lightOrange" : "bg-gray-300"
            }`}
            onClick={() => {
              stopSlideShow();
              goToSlide(index);
              startSlideShow();
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SlideShow;
