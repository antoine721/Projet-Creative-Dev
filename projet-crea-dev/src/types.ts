export type Emotion = "joie" | "tristesse" | "amour" | "";

export interface EmotionsState {
  question1: Emotion;
  question2: Emotion;
  question3: Emotion;
}

export interface ResultData {
  image: string;
  description: string;
}
