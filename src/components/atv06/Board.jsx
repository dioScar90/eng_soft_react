import { useState, useEffect } from "react";
import Card from "./Card";

const emojis = [
  "⚽️", // Futebol
  "🏀", // Basquete
  "🏈", // Futebol Americano
  "⚾️", // Beisebol
  "🎾", // Tênis
  "🏐", // Vôlei
  "🏉", // Rugby
  "🏸", // Badminton
];

const shuffleCards = (cards) => {
  const shuffledCards = cards.reduce(
    (acc, curr, i) => {
      const randomIndex = Math.floor(Math.random() * (i + 1));

      acc[i] = acc[randomIndex];
      acc[randomIndex] = curr;

      return acc;
    },
    [...cards]
  );

  return shuffledCards;
};

const Board = () => {
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const shuffledEmojis = shuffleCards(emojis.concat(emojis));
    const initialCards = shuffledEmojis.map((emoji, index) => ({
      id: index,
      emoji,
      flipped: false,
      matched: false,
    }));
    setCards(initialCards);
  }, []);

  const handleCardClick = (card) => {
    if (card.flipped || card.matched) return;

    if (flippedCards.length === 0) {
      setCards(
        cards.map((c) =>
          c.id === card.id ? { ...c, flipped: true } : { ...c }
        )
      );
      setFlippedCards([card]);

      return;
    }

    const flippedCard = flippedCards[0];
    const deuMatch =
      flippedCard.id !== card.id && flippedCard.emoji === card.emoji;

    if (deuMatch) {
      setMatchedCards([...matchedCards, flippedCard, card]);

      setCards(
        cards.map((c) =>
          c.id === flippedCard.id || c.id === card.id
            ? { ...c, matched: true }
            : c
        )
      );
      setFlippedCards([]);

      return;
    }

    setCards(
      cards.map((c) =>
        c.id === flippedCard.id || c.id === card.id
          ? { ...c, flipped: true }
          : c
      )
    );
    setFlippedCards(card);

    setTimeout(() => {
      setCards(
        cards.map((c) => (c.matched === true ? c : { ...c, flipped: false }))
      );
      setFlippedCards([]);
    }, 1000);
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {cards.map((card) => (
        <Card
          key={card.id}
          emoji={card.emoji}
          flipped={card.flipped}
          matched={card.matched}
          onClick={() => handleCardClick(card)}
        />
      ))}
    </div>
  );
};

export default Board;
