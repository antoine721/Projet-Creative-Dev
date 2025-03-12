import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Link to="/question1" className="start-button">
        Commencer
      </Link>
    </div>
  );
};

export default Home;
