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
  const [correctCategorySubmitted, setCorrectCategorySubmitted] = useState(false);

  useEffect(() => {
    setCards(shuffle(categories));
  }, []);

  function decreaseMistakes() {
    setMistakesMade((prevMistakes) => prevMistakes + 1);
  }

  function generateMistakesRemaining() {
    const remainingMistakes = 4 - mistakesMade;
    return "⚫️ ".repeat(remainingMistakes).trim();
  }

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

  function submitGuess({
    cards,
    setCards,
    setCorrectCards,
    setWrongGuessState,
    decreaseMistakes,
  }) {
    const highlightedAnswers = cards
      .filter((card) => card.highlighted)
      .map((card) => card.ans);
    const allSameAnswer =
      highlightedAnswers.length > 0 &&
      highlightedAnswers.every((answer) => answer === highlightedAnswers[0]);
    if (allSameAnswer) {
      console.log("All highlighted cards have the same answer.");
      setCorrectCategorySubmitted(true);
      guessCorrect({ cards, setCards, setCorrectCards });
    } else {
      console.log("Highlighted cards have different answers.");
      guessWrong({ cards, setCards, setWrongGuessState, decreaseMistakes });
    }
  }

  function guessCorrect({ cards, setCards, setCorrectCards }) {
    const highlightedCards = cards.filter((card) => card.highlighted);
    const remainingCards = cards.filter((card) => !card.highlighted);
  
    const correctCategory = highlightedCards[0].ans;
    const correctCardsInCategory = highlightedCards.slice(0, 4);

    setCards(remainingCards);
    setCorrectCards((prevCorrectCards) => {
      const updatedCorrectCards = [...prevCorrectCards];
      const existingCategoryIndex = updatedCorrectCards.findIndex(category => category.category === correctCategory);
      if (existingCategoryIndex !== -1) {
        updatedCorrectCards[existingCategoryIndex].cards.push(...correctCardsInCategory);
      } else {
        updatedCorrectCards.push({
          category: correctCategory,
          cards: correctCardsInCategory
        });
      }
      return updatedCorrectCards;
    });
  }

  function guessWrong({
    cards,
    setCards,
    setWrongGuessState,
    decreaseMistakes,
  }) {
    setWrongGuessState(true);
    decreaseMistakes();
    setTimeout(() => {
      setWrongGuessState(false);
      deselectAllCards({ cards, setCards });
    }, 1000);
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

  function shuffleRemainingCards() {
    const remainingCards = cards.filter(
      (card) => !correctCards.some((c) => c.word === card.word)
    );
    const shuffledRemainingCards = shuffle(remainingCards);
    const newCards = cards.map((card) =>
      correctCards.some((c) => c.word === card.word) ? card : shuffledRemainingCards.pop()
    );
    setCards(newCards);
  }

  return (
    <div>
      <div className="container">
        {correctCategorySubmitted && correctCards.map((categoryObj, index) => (
          <div
            key={index}
            className="category-container"
            style={{
              backgroundColor: categories.find(cat => cat.ans === categoryObj.category).color,
              gridColumn: `1 / span 4`,
              borderRadius: "6px",
              padding: "8px",
              marginBottom: "8px",
            }}
          >
            <h2>{categoryObj.category}</h2>
            <div className="category-cards">
              <p>{categoryObj.cards.map(card => card.word).join(", ")}</p>
            </div>
          </div>
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
      <div className="mistake">
        <Mistakes mistakesRemaining={generateMistakesRemaining()} />
      </div>
      <div>
        <Buttons
          cards={cards}
          setCards={setCards}
          shuffle={shuffle}
          shuffleCards={shuffleRemainingCards}
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
