import React from "react";
import { Link } from "react-router-dom";
import "../../public/styles/accueil.css";

const Home: React.FC = () => {
  return (
    <div className="full">
    <h1 className="anim title hight white">TABLEAU </h1>
    <div className="anim middle">
      <h1 className="ml white">D'EMOTIONS</h1>
      <h1 className="mr">SPONTANES</h1>
    </div>
    <Link to="/question1" className="anim title black">
        COMMENCER
      </Link>
  </div>
  );
};

export default Home;
