import React, {useState} from "react";
import { categories } from "./categories.js";
import Buttons from "./Buttons.js";

function shuffle(array) {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function GameBoard() {
    // Flatten the categories array to get all words
    let allWords = categories.reduce((accumulator, currentCategory) => {
        return accumulator.concat(currentCategory.words);
    }, []);

    // Shuffle the words array
    allWords = shuffle(allWords);

    // Calculate how many words each category should contribute to 16 cards
    const wordsPerCard = Math.ceil(allWords.length / 16);

    // Distribute the words evenly across 16 cards
    const initialCards = [];
    let wordsRemaining = allWords.slice(); // Copy allWords to avoid mutating it
    for (let i = 0; i < 16; i++) {
        const currentCard = [];
        for (let j = 0; j < wordsPerCard; j++) {
            if (wordsRemaining.length > 0) {
                const word = wordsRemaining.shift(); // Take one word from the remaining words
                currentCard.push(word);
            }
        }
        initialCards.push({ words: currentCard, highlighted: false });
    }

    // State to store the cards and their highlighting status
    const [cards, setCards] = useState(initialCards);

    // Function to handle click on a card
    function handleClick(index) {
        // Create a copy of the cards array
        const updatedCards = [...cards];
        // Toggle the highlighted property of the clicked card
        updatedCards[index].highlighted = !updatedCards[index].highlighted;
        // Update the state with the modified cards array
        setCards(updatedCards);
    }

    // Render the cards
    return (
        <div>
            <div className="container">
                {cards.map((card, index) => (
                    <div
                        className="card"
                        key={index}
                        onClick={() => handleClick(index)}
                        style={{ backgroundColor: card.highlighted ? "rgb(90, 89, 78)" : "" }}
                    >
                        <p style={{ color: card.highlighted ? "white" : "" }}>{card.words}</p>
                    </div>
                ))}
            </div>
            <div>
                <Buttons />
            </div>
        </div>
    );
}

export default GameBoard;
