import React from "react";
import FlashcardList from "./FlashcardList";
import "./App.css";

function App() {
  const sampleFlashcards = [
    {
      id: 1,
      question: "What is React?",
      answer: "A JavaScript library for building UI",
    },
    { id: 2, question: "What is JSX?", answer: "JavaScript XML" },
    {
      id: 3,
      question: "What is a component?",
      answer: "Reusable UI building block",
    },
  ];

  return (
    <div className="App">
      <h1>Flashcards</h1>
      <FlashcardList flashcards={sampleFlashcards} />
    </div>
  );
}

export default App;
