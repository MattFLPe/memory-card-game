import React, { useState } from 'react';
import './App.css';


const initialCards = [
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/192.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/195.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/181.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/324.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png",
];

function App() {
  const [cards, setCards] = useState(initialCards);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  const shuffleCards = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
  };

  const handleCardClick = (card) => {
    if(clickedCards.includes(card)) {
      if(score > bestScore) {
        setBestScore(score);
      }
      setScore(0);
      setClickedCards([]);
    } else {
      setScore(score + 1);
      setClickedCards([...clickedCards, card]);
    }
    shuffleCards();
  }

  return (
    <>
    <div className="score-container">
    Score: {score}
    <br></br>
    Best Score: {bestScore}
    <br></br>
    <h5>Instructions: Click on a card to get a point. Don't click on the same card more than once.</h5>
    </div>
    <div className="card-container">
      {cards.map((card, index) => (
        <div key={index} className="card" onClick={() => handleCardClick(card)}>
          <img src={card} alt={`pokemon-${index}`} />
        </div>
      ))}
    </div>
    </>
  );
}

export default App;
