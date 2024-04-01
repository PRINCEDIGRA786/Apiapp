import React, { useState, useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ImageSlider = ({ images }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(1);
  const [displayCount, setDisplayCount] = useState(1); // State to track the number of images to display
  const navigate=useNavigate();
  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex === 0 ? images.length - displayCount : prevIndex - 1));
    setLineIndex((prevLineIndex) => (prevLineIndex === 1 ? 4 : prevLineIndex - 1));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex === images.length - displayCount ? 0 : prevIndex + 1));
    setLineIndex((prevLineIndex) => (prevLineIndex === 4 ? 1 : prevLineIndex + 1));
  };

  useEffect(() => {
    const handleResize = () => {
      // Update the display count based on screen size
      setDisplayCount(window.innerWidth >= 1024 ? 3 : 1); // Use lg breakpoint for 3 images
    };

    // Initial call to handleResize to set the initial display count
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <div className="flex items-center py-7">
        <div className="flex overflow-hidden w-300 mx-auto text-center">
          {images.slice(startIndex, startIndex + displayCount).map((image, index) => (
            <img
              key={startIndex + index}
              src={image}
              alt={`Image ${startIndex + index + 1}`}
              className="w-80 h-80 rounded-xl mx-4 shadow-xl border-[2px] border-[#441616] hover:brightness-75 hover:contrast-150 cursor-pointer shadow-black"
              onClick={()=>navigate('/apiform')}
              />
          ))}
        </div>
      </div>
      <div className="mt-4  ml-5 hidden lg:flex">
        <p className='pt-3'>{startIndex + 1}</p>
        <div className='absolute  ml-8'>
          <hr className=' bg-white p-0 h-2 w-44 rounded-2xl'></hr>
        </div>
        <div className="mt-0 h-2  z-20 bg-red-500 rounded-xl" style={{ width: `${lineIndex * (4)}%` }}></div>
        <p className='pt-3'>4</p>
      </div>
      <div className='flex space-x-5 justify-center lg:justify-end lg:mr-32'>
        <FaArrowRight className="mr-2 rotate-180 hover:cursor-pointer" onClick={handlePrev}></FaArrowRight>
        <FaArrowRight className="ml-2 hover:cursor-pointer" onClick={handleNext}></FaArrowRight>
      </div>
    </div>
  );
};

export default ImageSlider;
