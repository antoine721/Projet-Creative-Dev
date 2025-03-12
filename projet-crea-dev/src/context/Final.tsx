import React from "react";
import { Link } from "react-router-dom";
import { useEmotion } from "./EmotionContext";

import { ResultData } from "../types";

const Final: React.FC = () => {
  const { emotions } = useEmotion();

  const getResultData = (): ResultData => {
    const pattern = `${emotions.question1} - ${emotions.question2} - ${emotions.question3}`;

    // Définir les résultats pour différentes combinaisons d'émotions
    const results: Record<string, ResultData> = {
      // Combinaisons avec joie en question 1
      "joie - joie - joie": {
        image: "🌈",
        description:
          "Vous rayonnez de joie et de positivité dans tous les aspects de votre vie. Votre optimisme inspire ceux qui vous entourent.",
      },
      "joie - joie - tristesse": {
        image: "",
        description:
          "Vous avez une attitude positive dans la vie, mais vous ressentez parfois de la mélancolie en présence des autres.",
      },
      "joie - joie - amour": {
        image: "☀️",
        description:
          "Votre joie de vivre est amplifiée par l'amour que vous portez à vos proches. Une combinaison rayonnante!",
      },
      "joie - tristesse - joie": {
        image: "🎭",
        description:
          "Votre humeur est contrastée : joyeux au quotidien, anxieux face à l'avenir, mais heureux en compagnie.",
      },
      "joie - tristesse - tristesse": {
        image: "🌦️",
        description:
          "Vous commencez la journée avec enthousiasme, mais des inquiétudes assombrissent votre perspective sociale et future.",
      },
      "joie - tristesse - amour": {
        image: "🌹",
        description:
          "Malgré vos inquiétudes pour l'avenir, l'amour que vous ressentez pour vos proches illumine votre quotidien.",
      },
      "joie - amour - joie": {
        image: "🎪",
        description:
          "Votre vie est une célébration de joie et d'amour partagés, créant une atmosphère de bonheur contagieux.",
      },
      "joie - amour - tristesse": {
        image: "🕊️",
        description:
          "Vous vivez intensément l'amour et la joie, mais une certaine mélancolie teinte vos relations sociales.",
      },
      "joie - amour - amour": {
        image: "💞",
        description:
          "Vous êtes entouré d'amour et de joie, créant un cercle vertueux d'émotions positives dans votre vie.",
      },

      // Combinaisons avec tristesse en question 1
      "tristesse - joie - joie": {
        image: "🌅",
        description:
          "Malgré un réveil difficile, vous voyez l'avenir avec optimisme et appréciez la compagnie des autres.",
      },
      "tristesse - joie - tristesse": {
        image: "🪞",
        description:
          "Vous oscillez entre espoir et mélancolie, avec un optimisme pour l'avenir malgré des moments de solitude.",
      },
      "tristesse - joie - amour": {
        image: "🌷",
        description:
          "Malgré un début de journée difficile, l'avenir vous semble prometteur et l'amour vous entoure.",
      },
      "tristesse - tristesse - joie": {
        image: "🎈",
        description:
          "Vous traversez des périodes sombres mais trouvez du réconfort et de la joie auprès de vos proches.",
      },
      "tristesse - tristesse - tristesse": {
        image: "☂️",
        description:
          "Vous vivez une période difficile émotionnellement. N'hésitez pas à rechercher du soutien autour de vous.",
      },
      "tristesse - tristesse - amour": {
        image: "🕯️",
        description:
          "Malgré la mélancolie qui vous habite, l'amour pour vos proches reste une lumière dans l'obscurité.",
      },
      "tristesse - amour - joie": {
        image: "🧩",
        description:
          "Vos journées commencent dans la mélancolie, mais l'amour et la joie sociale équilibrent votre vie émotionnelle.",
      },
      "tristesse - amour - tristesse": {
        image: "🌘",
        description:
          "L'amour que vous projetez vers l'avenir est votre refuge entre des moments de tristesse quotidienne.",
      },
      "tristesse - amour - amour": {
        image: "🔮",
        description:
          "Malgré un réveil mélancolique, l'amour est votre guide vers l'avenir et votre force en société.",
      },

      // Combinaisons avec amour en question 1
      "amour - joie - joie": {
        image: "🎁",
        description:
          "Vous commencez chaque jour avec amour et continuez avec joie, créant une vie remplie de positivité.",
      },
      "amour - joie - tristesse": {
        image: "📝",
        description:
          "L'amour et la joie dominent votre quotidien et vos aspirations, même si la tristesse teinte vos relations.",
      },
      "amour - joie - amour": {
        image: "🌟",
        description:
          "L'amour enveloppe votre quotidien et vos relations, avec une vision joyeuse de l'avenir. Une vie épanouie!",
      },
      "amour - tristesse - joie": {
        image: "🎨",
        description:
          "L'amour du matin contraste avec vos inquiétudes pour l'avenir, mais la joie sociale vous équilibre.",
      },
      "amour - tristesse - tristesse": {
        image: "🥀",
        description:
          "Vous commencez la journée avec amour, mais des nuages de tristesse assombrissent votre perspective.",
      },
      "amour - tristesse - amour": {
        image: "📔",
        description:
          "L'amour est votre force au réveil et en société, malgré des inquiétudes concernant votre avenir.",
      },
      "amour - amour - joie": {
        image: "🧿",
        description:
          "Votre vie est baignée d'amour, complétée par la joie que vous partagez avec vos proches.",
      },
      "amour - amour - tristesse": {
        image: "🎭",
        description:
          "L'amour abonde dans votre quotidien et vos aspirations, mais une certaine mélancolie teinte vos relations.",
      },
      "amour - amour - amour": {
        image: "💫",
        description:
          "Votre vie est un poème d'amour constant, irradiant dans chaque aspect de votre existence.",
      },
    };

    // Si la combinaison n'est pas trouvée, retourner un résultat par défaut
    return (
      results[pattern] || {
        image: "❓",
        description: `Résultat personnalisé pour la combinaison: ${pattern}`,
      }
    );
  };

  const result = getResultData();

  return (
    <div className="final-container">
      <div className="left">
        <div className="result-image">{result.image}</div>
      </div>
      <div className="right"></div>
      <Link to="/" className="restart-button">
        Home
      </Link>
      <h1>Projet Name</h1>
      <p>{result.description}</p>
      <div className="result-path">
        <h1>mood</h1>
        <div>
          <span className="emotion-pill">{emotions.question1 || "?"}</span>
          <span className="emotion-pill">{emotions.question2 || "?"}</span>
          <span className="emotion-pill">{emotions.question3 || "?"}</span>
        </div>
      </div>
    </div>
  );
};

export default Final;
