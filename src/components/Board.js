import React, { useState, useEffect } from "react";
import { categories } from "./categories.js";
import Buttons from "./Buttons.js";
import GridTile from "./GridTile.js";
import Mistakes from "./mistakes.js";

function shuffle(array) {
  // Fisher-Yates shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Function to handle click on a card
function handleClick({ index, cards, setCards }) {
  const count = cards.reduce((acc, card) => {
    if (!!card.highlighted) {
      return acc + 1;
    }
    return acc;
  }, 1);
  if (count <= 4 || !!cards[index].highlighted) {
    const updatedCards = [...cards];
    updatedCards[index] = {
      ...updatedCards[index],
      highlighted: !updatedCards[index].highlighted,
    };
    setCards(updatedCards);
  }
}

function shuffleCards({ cards, setCards }) {
  const newCardOrder = shuffle([...cards]);
  setCards(newCardOrder);
}

function deselectAllCards({ cards, setCards }) {
  const oldCards = [...cards];
  const updatedCards = oldCards.map((card) => {
    return {
      ...card,
      highlighted: false,
    };
  });
  setCards(updatedCards);
}

function guessCorrect({ cards, setCards, setCorrectCards }) {
  const highlightedCards = cards.filter((card) => card.highlighted);
  const remainingCards = cards.filter((card) => !card.highlighted);

  const correctCards = highlightedCards.slice(0, 4);

  setCards(remainingCards);
  setCorrectCards((prevCorrectCards) => [...prevCorrectCards, ...correctCards]);
}

function guessWrong({
  cards,
  setCards,
  setWrongGuessState,
  decreaseMistakes, // Ensure decreaseMistakes is included in the parameters
}) {
  setWrongGuessState(true);
  decreaseMistakes(); // Call decreaseMistakes when a wrong guess is made
  setTimeout(() => {
    setWrongGuessState(false);
    deselectAllCards({ cards, setCards });
  }, 1000);
}

function submitGuess({
  cards,
  setCards,
  setCorrectCards,
  setWrongGuessState,
  decreaseMistakes, // Added decreaseMistakes parameter
}) {
  const highlightedAnswers = cards
    .filter((card) => card.highlighted)
    .map((card) => card.ans);
  const allSameAnswer =
    highlightedAnswers.length > 0 &&
    highlightedAnswers.every((answer) => answer === highlightedAnswers[0]);
  if (allSameAnswer) {
    console.log("All highlighted cards have the same answer.");
    guessCorrect({ cards, setCards, setCorrectCards });
  } else {
    console.log("Highlighted cards have different answers.");
    guessWrong({ cards, setCards, setWrongGuessState, decreaseMistakes });
  }
}

function GameBoard() {
  const [correctCards, setCorrectCards] = useState([]);
  const [cards, setCards] = useState([]);
  const [wrongGuessState, setWrongGuessState] = useState(false);
  const [mistakesMade, setMistakesMade] = useState(0);

  useEffect(() => {
    setCards(shuffle(categories));
  }, []);

  function decreaseMistakes() {
    setMistakesMade((prevMistakes) => prevMistakes + 1);
  }

  // Function to generate mistakesRemaining string based on mistakesMade count
  function generateMistakesRemaining() {
    const remainingMistakes = 4 - mistakesMade;
    return "⚫️ ".repeat(remainingMistakes).trim(); // Trim any extra space at the end
  }

  return (
    <div>
      <div className="container">
        {correctCards.map((card, index) => (
          <GridTile
            key={index}
            card={card}
            index={index}
            handleClick={handleClick}
            cards={cards}
            setCards={setCards}
          />
        ))}
        {cards.map((card, index) => (
          <GridTile
            key={index}
            card={card}
            index={index}
            handleClick={handleClick}
            cards={cards}
            setCards={setCards}
            wrongGuessState={wrongGuessState}
          />
        ))}
      </div>
      <div>
        <Mistakes mistakesRemaining={generateMistakesRemaining()} />
      </div>
      <div>
        <Buttons
          cards={cards}
          setCards={setCards}
          shuffle={shuffle}
          shuffleCards={shuffleCards}
          submitGuess={submitGuess}
          deselectAllCards={deselectAllCards}
          setCorrectCards={setCorrectCards}
          setWrongGuessState={setWrongGuessState}
          wrongGuessState={wrongGuessState}
          decreaseMistakes={decreaseMistakes} // Pass decreaseMistakes as a prop
        />
      </div>
    </div>
  );
}

export default GameBoard;
