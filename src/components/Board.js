import React, {useState, useEffect} from "react";
import { categories } from "./categories.js";
import Buttons from "./Buttons.js";
import GridTile from "./GridTile.js"

function shuffle(array) {
  // Fisher-Yates shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Function to handle click on a card
function handleClick({index, cards, setCards}) {
    const count = cards.reduce((acc, card) => {
      if(!!card.highlighted) {
        return acc + 1
      }
      return acc;
    }, 1)
    if(count <= 4 || !!cards[index].highlighted){
      // Create a copy of the cards array
      const updatedCards = [...cards];
      // Toggle the highlighted property of the clicked card
      updatedCards[index] = {
        ...updatedCards[index],
        highlighted: !updatedCards[index].highlighted,
      };
      // Update the state with the modified cards array
      setCards(updatedCards);
    }
}

function shuffleCards({cards, setCards})  {
    const newCardOrder = shuffle([...cards]);
    setCards(newCardOrder);
};

function deselectAllCards({ cards, setCards }) {
  const oldCards = [...cards];
  const updatedCards = oldCards.map(card => {
    return {
      ...card,
      highlighted: false
    }
  })
  setCards(updatedCards);
};

function guessCorrect({ cards, setCards, setCorrectCards }) {
    const highlightedCards = cards.filter(card => card.highlighted);
    const remainingCards = cards.filter(card => !card.highlighted);
  
    const correctCards = highlightedCards.slice(0, 4);
  
    setCards(remainingCards);
    setCorrectCards(prevCorrectCards => [...prevCorrectCards, ...correctCards]);
  }
  
  function submitGuess({ cards, setCards, setCorrectCards }) {
    const highlightedAnswers = cards
      .filter(card => card.highlighted)
      .map(card => card.ans);
  
    const allSameAnswer = highlightedAnswers.length > 0 &&
      highlightedAnswers.every(answer => answer === highlightedAnswers[0]);
  
    if (allSameAnswer) {
      console.log('All highlighted cards have the same answer.');
      guessCorrect({ cards, setCards, setCorrectCards });
    } else {
      console.log('Highlighted cards have different answers.');
    }
  }
  

function GameBoard() {
    // const [cards, setCards] = useState(categories);

    const [correctCards, setCorrectCards] = useState([]);
    const [cards, setCards] = useState([]);

    // Shuffle cards on initial call
    useEffect(() => {
      setCards(shuffle(categories));
    }, []);


    // Render the cards
    return (
      <div>
        <div className='container'>
          {correctCards.map((card, index) => (
            <GridTile
              card={card}
              index={index}
              handleClick={handleClick}
              cards={cards}
              setCards={setCards}
            />
          ))}
          {cards.map((card, index) => (
            <GridTile
              card={card}
              index={index}
              handleClick={handleClick}
              cards={cards}
              setCards={setCards}
            />
          ))}
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
          />
        </div>
      </div>
    );
}

export default GameBoard;
