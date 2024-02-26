import React, { useState } from "react";

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  return (
    <div className="carousel" style={{ position: "relative", top: "25px" }}>
      <button className="prev carousel-button" onClick={prevSlide}>
        {"<"}
      </button>
      <img
        className="carousel-image"
        src={images[currentIndex].url}
        alt={images[currentIndex].alt}
        style={{ 
          width: "800px", 
          height: "475px",
          borderRadius: "25px",
          marginBottom: "20px",
        }}
      />
      <button className="next carousel-button" onClick={nextSlide}>
        {">"}
      </button>
    </div>
  );
}
