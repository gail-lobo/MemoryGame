// Card.js
import React, { useState } from "react";
import "./Card.css";

// Card component representing a single card in the deck
const Card = ({ card, index, handleClick }) => {
  // State to manage the animation class for flipping the card
  const [animationClass, setAnimationClass] = useState("slow-face-down");

  // Function to handle a click on the card
  const cardHandleClick = () => {
    // Toggle the animation class for flipping the card
    setAnimationClass((prevAnimationClass) => {
      return prevAnimationClass === "slow-face-down"
        ? "slow-face-down-duplicate"
        : "slow-face-down";
    });

    // Invoke the handleClick function provided by the parent component
    handleClick(index);
  };

  // Render the card with appropriate styling based on its status
  return (
    <div className="card" onClick={cardHandleClick}>
      <img
        className={
          // Determine the CSS class based on the card's status and animation
          card.status === "" && card.animate !== "flip"
            ? "face-down"
            : card.status === "selected"
            ? "face-up"
            : card.status === "selected-match-found"
            ? "face-up-lock"
            : card.status === "" && card.animate === "flip"
            ? animationClass
            : ""
        }
        src={card.img}
        alt={card.name}
      />
    </div>
  );
};

export default Card;
