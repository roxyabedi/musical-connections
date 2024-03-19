import React from 'react';

function GridTile(props) {
    const { cards, setCards, card, index, handleClick, wrongGuessState, correctCards } = props;

    // Check if the card is correct
    const isCorrectCard = correctCards && correctCards.some(correctCard => correctCard.word === card.word);

    // Get the color for the correct category
    const correctCategory = correctCards ? correctCards.find(correctCard => correctCard.word === card.word) : null;
    const correctCategoryColor = correctCategory ? correctCategory.color : null;

    return (
        <div
            className='card'
            key={index}
            onClick={() => handleClick({index, cards, setCards})}
            style={{
                backgroundColor: card.highlighted
                    ? wrongGuessState
                        ? 'red'
                        : isCorrectCard && correctCategoryColor // Check if the card is correct and category color is defined
                            ? correctCategoryColor
                            : 'rgb(90, 89, 78)' // Default color for highlighted cards
                    : '',
            }}
        >
            <p style={{ color: card.highlighted ? 'white' : '' }}>{card.word}</p>
        </div>
    );
}

export default GridTile;
