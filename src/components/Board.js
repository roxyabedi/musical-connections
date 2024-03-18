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

  // Function to shuffle cards
  function shuffleCards() {
    const newCardOrder = shuffle([...cards]);
    setCards(newCardOrder);
  }

  // Function to deselect all cards
  function deselectAllCards() {
    const oldCards = [...cards];
    const updatedCards = oldCards.map((card) => ({
      ...card,
      highlighted: false,
    }));
    setCards(updatedCards);
  }

  // Function to handle correct guess
  function guessCorrect() {
    const highlightedCards = cards.filter((card) => card.highlighted);
    const remainingCards = cards.filter((card) => !card.highlighted);

    const correctCards = highlightedCards.slice(0, 4);

    setCards(remainingCards);
    setCorrectCards((prevCorrectCards) => [...prevCorrectCards, ...correctCards]);
  }

  // Function to handle wrong guess
  function guessWrong() {
    setWrongGuessState(true);
    decreaseMistakes();
    setTimeout(() => {
      setWrongGuessState(false);
      deselectAllCards();
    }, 1000);
  }

  // Function to submit guess
  function submitGuess() {
    const highlightedAnswers = cards
      .filter((card) => card.highlighted)
      .map((card) => card.ans);
    const allSameAnswer =
      highlightedAnswers.length > 0 &&
      highlightedAnswers.every((answer) => answer === highlightedAnswers[0]);
    if (allSameAnswer) {
      console.log("All highlighted cards have the same answer.");
      guessCorrect();
    } else {
      console.log("Highlighted cards have different answers.");
      guessWrong();
    }
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
            correctCards={correctCards}
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
            correctCards={correctCards}
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
          shuffleCards={shuffleCards}
          submitGuess={submitGuess}
          deselectAllCards={deselectAllCards}
          setCorrectCards={setCorrectCards}
          setWrongGuessState={setWrongGuessState}
          wrongGuessState={wrongGuessState}
          decreaseMistakes={decreaseMistakes}
        />
      </div>
      </div>
  );
}

export default GameBoard;
