const Card = ({ emoji, flipped, matched, onClick }) => {
  return (
    <div
      className={`flex items-center justify-center bg-blue-500 rounded-md h-20 w-20 cursor-pointer ${
        flipped || matched ? 'bg-white' : ''
      }`}
      onClick={onClick}
    >
      {flipped || matched ? <span className="text-4xl">{emoji}</span> : ''}
    </div>
  );
};

export default Card;