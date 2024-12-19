"use client"; // Ensure this is a client-side component
import React, { useState } from "react";
import Card from "./Card";
import styles from "./CertifiedExpertise.module.css";

const CertifiedExpertise = ({ cardData }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className={`${styles.bg} ps-5 me-2 pb-5 mt-5`}>
      <div className="flex justify-between items-center pt-4">
        <h1 className="text-2xl pb-1 font-semibold">
          Certified Expertise In
          <span className={`${styles.blueColor}`}> App Design</span>
        </h1>

        {/* Toggle button to show all cards */}
        <button
          className={` ${styles.btn} me-6`}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "See All >"}
        </button>
      </div>
      <p className={`${styles.para} pb-3`}>
        Professionals meticulously screened and hand-selected to meet all your
        professional requirements
      </p>

      {/* Grid to display cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-6">
        {(showAll ? cardData : cardData.slice(0, 3)).map((card) => (
          <Card key={card.id} />
        ))}
      </div>
    </div>
  );
};

export default CertifiedExpertise;
