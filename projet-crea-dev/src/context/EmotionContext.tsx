import React, { createContext, useState, useContext, ReactNode } from "react";
import { EmotionsState, Emotion } from "../types";

interface EmotionContextType {
  emotions: EmotionsState;
  updateEmotion: (question: keyof EmotionsState, emotion: Emotion) => void;
}

export const EmotionContext = createContext<EmotionContextType | undefined>(
  undefined
);

interface EmotionProviderProps {
  children: ReactNode;
}

export const EmotionProvider: React.FC<EmotionProviderProps> = ({
  children,
}) => {
  const [emotions, setEmotions] = useState<EmotionsState>({
    question1: "",
    question2: "",
    question3: "",
  });

  const updateEmotion = (question: keyof EmotionsState, emotion: Emotion) => {
    setEmotions((prev) => ({
      ...prev,
      [question]: emotion,
    }));
  };

  return (
    <EmotionContext.Provider value={{ emotions, updateEmotion }}>
      {children}
    </EmotionContext.Provider>
  );
};

export const useEmotion = (): EmotionContextType => {
  const context = useContext(EmotionContext);
  if (context === undefined) {
    throw new Error("useEmotion must be used within an EmotionProvider");
  }
  return context;
};
