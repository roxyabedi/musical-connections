import React from "react";

function Buttons(props) {
    const {
        cards,
        setCards,
        shuffle,
        shuffleCards,
        deselectAllCards,
        submitGuess
    } = props;

    return (
      <div className='button'>
        <button onClick={() => shuffleCards({ cards, setCards })}>
          Shuffle
        </button>
        <br></br>
        <button onClick={() => deselectAllCards({cards, setCards})}>Deselect All</button>
        <br></br>
        <button onClick={() => submitGuess(cards, setCards)}>Submit</button>
        <br></br>
      </div>
    );
}

export default Buttons;