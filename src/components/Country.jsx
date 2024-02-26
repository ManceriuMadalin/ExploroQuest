import React from "react";
import Carousel from "./Carousel";
import primaimagine from "../assets/contact.jpeg"
import adouaimagine from "../assets/travel.jpg"

export default function Country() {
  const images = [
    {
      url: primaimagine,
      alt: "Image 1",
    },
    {
      url: adouaimagine,
      alt: "Image 2",
    },
  ];

  return (
    <div className="country">
      <div className="country-title">Name of Country</div>
      <div className="country-info">
        <div className="country-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
        <Carousel images={images} />
      </div>
    </div>
  );
}
