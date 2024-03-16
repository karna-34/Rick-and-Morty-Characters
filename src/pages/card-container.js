import React from 'react';
import "./card.css"

const CardContainer = () => {
  return (
    <div className="card-container">
      <img src="" alt="Card Image" />
      <div className="card-content">
        <h2>Card Heading</h2>
        <p>This is a paragraph inside the card.</p>
      </div>
    </div>
  );
};

export default CardContainer;
