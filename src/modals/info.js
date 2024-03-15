// import React from "react";
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// function InfoModal() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         ?
//       </Button>

//       <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>How to Play</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//         <p>Find groups of four items that share something in common.</p><br></br>
//         <ul>
//             <li>Select four items and tap 'Submit' to check if your guess is correct.</li><br></br>
//             <li>Find the groups without making 4 mistakes!</li><br></br>
//         </ul><br></br>
//         <p>Each puzzle has exactly one solution. Watch out for words that seem to belong to multiple categories!</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default InfoModal;

// // import React from "react";


// // function InfoModal() {
// //     const [showModal, setShowModal] = useState(false);

// //   return (
// //     <div className="overlay">
// //         <div className="modalContainer">
// //             <h1>How to Play</h1>
// //             <p onClick={onClose}>X</p>
// //             <div className="content">
// //             <p>Find groups of four items that share something in common.</p><br></br>
// //             <ul>
// //                 <li>Select four items and tap 'Submit' to check if your guess is correct.</li><br></br>
// //                 <li>Find the groups without making 4 mistakes!</li><br></br>
// //             </ul><br></br>
// //             <p>Each puzzle has exactly one solution. Watch out for words that seem to belong to multiple categories!</p>
// //             </div>
// //         </div>
// //     </div>
// //   )

   
       
// // }

// // export default InfoModal;

// // import React, { useState } from "react";

// // // Modal component
// // function Modal({ handleClose, show }) {
// //   const showHideClassName = show ? "modal display-block" : "modal display-none";

// //   return (
// //     <div className={showHideClassName}>
// //       <section className="modal-main">
// //         <button onClick={handleClose}>Close</button>
// //         <p>Instructions:</p>
// //         <p>1. Click on a card to reveal it.</p>
// //         <p>2. Match cards with the same word.</p>
// //         <p>3. Keep track of the cards you've seen to make matches.</p>
// //       </section>
// //     </div>
// //   );
// // }

// // // GameBoard component
// // function GameBoard() {
// //   const [showModal, setShowModal] = useState(false);

// //   // Function to handle opening/closing the modal
// //   const toggleModal = () => {
// //     setShowModal(!showModal);
// //   };

// //   return (
// //     <div>
// //       <button onClick={toggleModal}>Show Instructions</button>
// //       <Modal show={showModal} handleClose={toggleModal} />
// //       {/* Your existing game board code */}
// //       <div className="container">
// //         {/* Render your cards here */}
// //       </div>
// //       {/* Additional components such as buttons, etc. */}
// //     </div>
// //   );
// // }

// // export default GameBoard;
