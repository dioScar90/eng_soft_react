import React, { useState } from "react";
import Card from "./Card";

const emojis = ['🌻', '🌷', '🌸', '🌺', '🌹', '🌼', '🌿', '🍀'];

const Board = () => {
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  const handleCardClick = emoji => {
    if (flippedCards.length === 1 && flippedCards[0].emoji === emoji) {
      setMatchedCards([...matchedCards, ...flippedCards, { emoji }]);
      setFlippedCards([]);
    } else if (flippedCards.length === 1) {
      setTimeout(() => {
        setFlippedCards([]);
      }, 1000);
    } else {
      setFlippedCards([{ emoji }]);
    }
  };
  
  const mountCards = emojis => emojis.map((emoji, i) => (
    <Card
      key={i}
      emoji={emoji}
      flipped={
        flippedCards.find((card) => card.emoji === emoji) ||
        matchedCards.find((card) => card.emoji === emoji)
      }
      onClick={() => handleCardClick(emoji)}
    />
  ))

  const cards = mountCards(emojis);

  return (
    <div className="flex flex-wrap justify-center">
      {cards}
    </div>
  );
};

export default Board;
