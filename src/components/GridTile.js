import React from 'react';

function GridTile(props) {
    const { cards, setCards, card, index, handleClick, wrongGuessState } =
      props;

  return (
    <div
      className='card'
      key={index}
      onClick={() => handleClick({index, cards, setCards})}
      style={{
        backgroundColor: card.highlighted ? wrongGuessState ? 'red' : 'rgb(90, 89, 78)' : '',
      }}
    >
      <p style={{ color: card.highlighted ? 'white' : '' }}>{card.word}</p>
    </div>
  );
}

export default GridTile;
