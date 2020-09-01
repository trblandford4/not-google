import React from "react";

import "./Home.scss";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import HomeBody from "../../components/HomeBody/HomeBody";

const Home = () => {
  return (
    <div className="home">
      <HomeHeader />
      <HomeBody />
    </div>
  );
};

export default Home;
