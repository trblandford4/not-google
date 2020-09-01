import React from "react";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";

import "./HomeHeader.scss";

const HomeHeader = () => {
  return (
    <div className="home__header">
      <div className="home__headerLeft">
        <Link to="/about">About</Link>
        <Link to="/store">Store</Link>
      </div>

      <div className="home__headerRight">
        <Link to="/gmail">Gmail</Link>
        <Link to="/images">Images</Link>
        <AppsIcon />
        <Avatar />
      </div>
    </div>
  );
};

export default HomeHeader;
