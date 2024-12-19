"use client"; // Ensure this is a client-side component

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { cardData } from "../data";
import Card from "./Card";
import styles from "./AppDesignWorkPlaces.module.css";

export const AppDesignWorkPlaces = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next card
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  // Function to go to the previous card
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length
    );
  };

  return (
    <div>
      <h1 className="text-2xl py-4 font-semibold">
        Most Popular Workplaces in{" "}
        <span className={`${styles.color}`}>App Design</span>
      </h1>

      {/* Carousel container */}
      <div className="relative">
        <div
          className="absolute top-40 left-0 transform translate-y-[-50%] p-2 cursor-pointer z-10"
          onClick={prevSlide}
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="text-xl p-2 border-2 rounded-full shadow-lg"
          />
        </div>

        <div
          className="absolute top-40 right-0 transform translate-y-[-50%] p-2 cursor-pointer z-10"
          onClick={nextSlide}
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-xl p-2 border-2 rounded-full shadow-lg"
          />
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / 3}%)`,
            }}
          >
            {cardData.map((card) => (
              <div
                key={card.id}
                className="flex-none w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2"
                style={{
                  flexShrink: 0,
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
