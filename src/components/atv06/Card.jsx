function Card({ emoji, flipped, onClick }) {
  const classWhite = flipped ? "bg-white" : '';
  const emojiElement = flipped ? <span className="text-4xl">{emoji}</span> : ''

  return (
    <div
      className={`
        flex items-center justify-center bg-blue-500 rounded-md
        h-20 w-20 cursor-pointer ${classWhite}
      `}
      onClick={onClick}
    >
      {emojiElement}
    </div>
  );
};
  
export default Card;