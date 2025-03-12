import React from "react";
import { useNavigate } from "react-router-dom";
import { useEmotion } from "./EmotionContext";
import Aurora from "./Aurora";
import "../../public/styles/pages.css";

import { Emotion } from "../types";

const Question1: React.FC = () => {
  const { updateEmotion } = useEmotion();
  const navigate = useNavigate();

  const handleChoice = (emotion: Emotion) => {
    updateEmotion("question1", emotion);
    navigate("/question2");
  };

  return (
    <div className="question-container">
      {/* <Aurora
        colorStops={["#005050", "#808080", "#D3D3D3"]}
        blend={0.5}
        amplitude={0.5}
        speed={0.5}
      /> */}
      <div className="emotions-buttons">
        <button
          onClick={() => handleChoice("joie")}
          className="emotion-button joie joy"
        >
          <span className="emotion-emoji">😄</span>
          <span className="emotion-label">Joie</span>
        </button>
        <button
          onClick={() => handleChoice("tristesse")}
          className="emotion-button tristesse sadness"
        >
          <span className="emotion-emoji">😢</span>
          <span className="emotion-label">Tristesse</span>
        </button>
        <button
          onClick={() => handleChoice("amour")}
          className="emotion-button amour love"
        >
          <span className="emotion-emoji">❤️</span>
          <span className="emotion-label">Amour</span>
        </button>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: "33.3%" }}></div>
      </div>
      <div className="question-info">
        <h2>Question 1</h2>
        <p>Comment vous sentez-vous le matin au réveil ?</p>
      </div>
    </div>
  );
};

export default Question1;
