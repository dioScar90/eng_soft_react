const Card = ({ emoji, flipped, matched, onClick }) => {
  return (
    // <div
    //   className={`
    //     flex items-center justify-center bg-blue-500
    //     rounded-md h-20 w-20 cursor-pointer
    //     ${flipped || matched ? 'bg-white' : ''}
    //   `}
    //   onClick={onClick}
    // >
    //   {flipped || matched ? <span className="text-4xl">{emoji}</span> : ''}
    // </div>

    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div
            className={`
              flex items-center justify-center bg-blue-500
              rounded-md h-20 w-20 cursor-pointer
              ${flipped || matched ? 'bg-white' : ''}
            `}
            onClick={onClick}
          >
            {flipped || matched ? <span className="text-4xl">{emoji}</span> : ''}
          </div>
        </div>
        <div className="flip-card-back">
          {/* <img src="" alt="" srcset="" /> */}
          <h3>Wireless Headphone</h3>
          <h1>R1 249,99</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;