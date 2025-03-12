import React from "react";
import { useNavigate } from "react-router-dom";
import { useEmotion } from "./EmotionContext";

import { Emotion } from "../types";

const Question3: React.FC = () => {
  const { updateEmotion } = useEmotion();
  const navigate = useNavigate();

  const handleChoice = (emotion: Emotion) => {
    updateEmotion("question3", emotion);
    navigate("/final");
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
        <div className="progress" style={{ width: "100%" }}></div>
      </div>
      <div className="question-info">
        <h2>Question 3</h2>
        <p>Que ressentez-vous lorsque vous êtes entouré de vos proches ?</p>
      </div>
    </div>
  );
};

export default Question3;
