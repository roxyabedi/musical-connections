import React from "react";

function Buttons(props) {
    const {
        cards,
        setCards,
        shuffle,
        shuffleCards
    } = props;

    return (
      <div className='button'>
        <button onClick={() => shuffleCards({ cards, setCards })}>
          Shuffle
        </button>
        <br></br>
        <button>Deselect All</button>
        <br></br>
        <button>Submit</button>
        <br></br>
      </div>
    );
}

export default Buttons;