import React, { useState } from "react";
import Slider, { Settings } from "react-slick";
// Import slick-carousel's CSS in your main component or entry point (index.tsx, App.tsx, etc.)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./carousalimg.css";

// Define an interface for the testimonial data
interface Testimonial {
  image: string;
  id: string;
}

// Sample testimonial array with image paths
const TestimonialsArray: Testimonial[] = [
  { image: "/image1.jpeg", id: "1" },
  { image: "/image2.jpeg", id: "2" },
  { image: "/image3.jpeg", id: "3" },
  { image: "/image4.jpeg", id: "4" },
  { image: "/image5.jpeg", id: "5" },
  { image: "/image6.jpeg", id: "6" },
];

const Testimonials: React.FC = () => {
  // const [activeSlide, setActiveSlide] = useState<number>(0);

  // Function to handle the change of slides
  // const handleBeforeChange = (oldIndex: number, newIndex: number): void => {
  //   setActiveSlide(newIndex);
  // };

  // Slider settings with responsive breakpoints
  const settings: Settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3, // 3 slides when screen width is 900px and above
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // 2 second autoplay interval
    speed: 1000,
    centerMode: true, // Center mode enabled for larger screens
    // beforeChange: handleBeforeChange,
    centerPadding: "50px", // Adds padding on both sides of the center slide
    focusOnSelect: true, // Ensures that the centered slide is clickable
  
    responsive: [
      {
        // From 600px to 900px
        breakpoint: 900,
        settings: {
          centerMode: false, // Enable center mode between 600px and 900px
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerPadding: "50px", // Padding on each side for smaller screens
        },
      },
      {
        // Below 600px
        breakpoint: 600,
        settings: {
          centerMode: false, // Disable center mode for very small screens
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  

  return (
    <div className="ourCoreTeam">
      <div className="heading">
        <h1 className = "gallery-head" style={{ color: "rgb(107 33 168 )" }}>
          Gallery 
        </h1>
      </div>
      <div className="innerContainer">
        <div className="slider-container">
          <Slider {...settings}>
            {TestimonialsArray.map((eachPerson) => (
              <div key={eachPerson.id}>
                <img
                  src={eachPerson.image}
                  alt={`Image of ${eachPerson.id}`}
                  className="Crousel-image"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
