import React from "react";

import Search from "../Search/Search";

import "./HomeBody.scss";

const HomeBody = () => {
  return (
    <div className="home__body">
      <img
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        alt="Google logo"
      />
      <div className="home__inputContainer">
        <Search />
      </div>
    </div>
  );
};

export default HomeBody;
