"use client"; // Ensure this is a client-side component

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"; // Import FontAwesome icons
import Card from "./Card"; // Import the Card component
import styles from "./YouMayLikeWorkPlaces.module.css"; // Import your custom styles

const YouMayLikeWorkPlaces = ({ cardData }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Current card index

  // Function to go to the next card
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length); // Wrap around when reaching the end
  };

  // Function to go to the previous card
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length // Wrap around when reaching the start
    );
  };

  return (
    <div>
      <h1 className="text-2xl py-4 font-semibold">
        <span className={`${styles.color}`}>Workplaces</span> You May Like
      </h1>

      {/* Carousel container */}
      <div className="relative">
        {/* Left Arrow button */}
        <div
          className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 cursor-pointer z-10"
          onClick={prevSlide} // Trigger previous slide on click
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="text-xl p-2 border-2 rounded-full shadow-lg"
          />
        </div>

        {/* Right Arrow button */}
        <div
          className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 cursor-pointer z-10"
          onClick={nextSlide} // Trigger next slide on click
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-xl p-2 border-2 rounded-full shadow-lg"
          />
        </div>

        {/* Cards container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / 3}%)`, // Adjust for 3 cards visible at once
            }}
          >
            {cardData.map((card) => (
              <div
                key={card.id}
                className="flex-none w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2"
                style={{
                  flexShrink: 0, // Prevent shrinking of cards
                }}
              >
                <Card key={card.id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouMayLikeWorkPlaces;
