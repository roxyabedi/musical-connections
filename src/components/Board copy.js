// import React from "react";
// import { categories } from "./categories.js";
// import Buttons from "./Buttons.js";

// function shuffle(array) {
//     // Fisher-Yates shuffle algorithm
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// }

// function GameBoard() {
//     // Flatten the categories array to get all words
//     let allWords = categories.reduce((accumulator, currentCategory) => {
//         return accumulator.concat(currentCategory.words);
//     }, []);

//     // Shuffle the words array
//     allWords = shuffle(allWords);

//     // Calculate how many words each category should contribute to 16 cards
//     const wordsPerCard = Math.ceil(allWords.length / 16);

//     // Distribute the words evenly across 16 cards
//     const cards = [];
//     let wordsRemaining = allWords.slice(); // Copy allWords to avoid mutating it
//     for (let i = 0; i < 16; i++) {
//         const currentCard = [];
//         for (let j = 0; j < wordsPerCard; j++) {
//             if (wordsRemaining.length > 0) {
//                 const word = wordsRemaining.shift(); // Take one word from the remaining words
//                 currentCard.push(word);
//             }
//         }
//         cards.push(currentCard);
//     }

//     return (
//         <div>
//             <div className="container">
//                 {cards.map((card, index) => (
//                     <div className="card" key={index}>
//                         <p>{card}</p>
//                     </div>
//                 ))}
//             </div>
//             <div>
//                     <Buttons />
//             </div>
//         </div>
//     );


// }

// export default GameBoard;
