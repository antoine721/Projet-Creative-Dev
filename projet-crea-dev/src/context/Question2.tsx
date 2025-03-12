// components/Question2.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useEmotion } from "../context/EmotionContext";

import { Emotion } from "../types";

const Question2: React.FC = () => {
  const { updateEmotion } = useEmotion();
  const navigate = useNavigate();

  const handleChoice = (emotion: Emotion) => {
    updateEmotion("question2", emotion);
    navigate("/question3");
  };

  return (
    <div className="question-container">
      <div className="emotions-buttons">
        <button
          onClick={() => handleChoice("joie")}
          className="emotion-button joie"
        >
          <span className="emotion-emoji">😄</span>
          <span className="emotion-label">Joie</span>
        </button>
        <button
          onClick={() => handleChoice("tristesse")}
          className="emotion-button tristesse"
        >
          <span className="emotion-emoji">😢</span>
          <span className="emotion-label">Tristesse</span>
        </button>
        <button
          onClick={() => handleChoice("amour")}
          className="emotion-button amour"
        >
          <span className="emotion-emoji">❤️</span>
          <span className="emotion-label">Amour</span>
        </button>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: "66.6%" }}></div>
      </div>
      <div className="question-info">
        <h2>Question 2</h2>
        <p>Quelle émotion ressentez-vous quand vous pensez à votre futur ?</p>
      </div>
    </div>
  );
};

export default Question2;
