import React from "react";

function Buttons(props) {
    const {
      cards,
      setCards,
      shuffleCards,
      deselectAllCards,
      submitGuess,
      setCorrectCards,
      setWrongGuessState,
      decreaseMistakes
    } = props;

    return (
      <div className='button'>
        <button class='shuffle' onClick={() => shuffleCards({ cards, setCards })}>
          Shuffle
        </button>
        <br></br>
        <button
          className={
            !cards.filter((card) => card.highlighted).length
              ? 'disabled-submit deselect'
              : 'enabled-submit deselect'
          }
          disabled={!cards.filter((card) => card.highlighted).length}
          onClick={() => deselectAllCards({ cards, setCards })}
        >
          Deselect All
        </button>
        <br></br>
        <button
          className={
            cards.filter((card) => card.highlighted).length !== 4
              ? 'disabled-submit'
              : 'enabled-submit'
          }
          disabled={cards.filter((card) => card.highlighted).length !== 4}
          onClick={() =>
            submitGuess({
              cards,
              setCards,
              setCorrectCards,
              setWrongGuessState,
              decreaseMistakes,
            })
          }
        >
          Submit
        </button>
        <br></br>
      </div>
    );
}

export default Buttons;