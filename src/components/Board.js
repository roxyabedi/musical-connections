import React, {useState} from "react";
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

function submitGuess({ cards, setCards }) {
  const newCardOrder = shuffle([...cards]);
  setCards(newCardOrder);
};

function GameBoard() {
    const [cards, setCards] = useState(categories);


    // Render the cards
    return (
      <div>
        <div className='container'>
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
          />
        </div>
      </div>
    );
}

export default GameBoard;
