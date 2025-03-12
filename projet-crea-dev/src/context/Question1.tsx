import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useEmotion } from "./EmotionContext";
import Aurora from "./Aurora";
import "../../public/styles/pages.css";

import { Emotion } from "../types";

const Question1: React.FC = () => {
  const defaultColors = ["#a0a0a0", "#cccccc", "#a0a0a0"];

  // Couleurs pour chaque bouton
  const yellowColors = ["#ffcc00", "#ffe066", "#ffcc00"];
  const blueColors = ["#0066ff", "#66a3ff", "#0066ff"];
  const pinkColors = ["#ff3366", "#ff99aa", "#ff3366"];

  // État pour suivre les couleurs actuelles
  const [colors, setColors] = useState(defaultColors);

  // Fonctions pour gérer le survol de chaque bouton
  const handleYellowEnter = () => {
    setColors(yellowColors);
  };

  const handleBlueEnter = () => {
    setColors(blueColors);
  };

  const handlePinkEnter = () => {
    setColors(pinkColors);
  };

  const handleMouseLeave = () => {
    setColors(defaultColors);
  };

  const { updateEmotion } = useEmotion();
  const navigate = useNavigate();

  const handleChoice = (emotion: Emotion) => {
    updateEmotion("question1", emotion);
    navigate("/question2");
  };

  return (
    <>
      <div className="question-container">
        <div className="app-container">
          {/* Aurora en arrière-plan */}
          <div className="background-aurora">
            <Aurora colorStops={colors} />
          </div>
        </div>
        <div className="emotions-buttons">
          <button
            onClick={() => handleChoice("joie")}
            className="emotion-button joie joy"
            onMouseEnter={handleYellowEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="emotion-emoji">😄</span>
            <span className="emotion-label">Joie</span>
          </button>
          <button
            onClick={() => handleChoice("tristesse")}
            className="emotion-button tristesse sadness"
            onMouseEnter={handleBlueEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="emotion-emoji">😢</span>
            <span className="emotion-label">Tristesse</span>
          </button>
          <button
            onClick={() => handleChoice("amour")}
            className="emotion-button amour love"
            onMouseEnter={handlePinkEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="emotion-emoji">❤️</span>
            <span className="emotion-label">Amour</span>
          </button>
        </div>

        <div className="question-info">
          <h2>Question 1</h2>
          <p>Comment vous sentez-vous le matin au réveil ?</p>
        </div>
      </div>
    </>
  );
};

export default Question1;
