import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import RoomIcon from "@material-ui/icons/Room";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import Search from "../Search/Search";

import "./ResultsHeader.scss";

const ResultsHeader = () => {
  return (
    <div className="searchPage__header">
      <Link to="/">
        <img
          className="searchPage__logo"
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="Google Logo, link to home"
        />
      </Link>
      <div className="searchPage__headerBody">
        <Search hideButtons />

        <div className="searchPage__options">
          <div className="searchPage__optionsLeft">
            <div className="searchPage__option">
              <SearchIcon />
              <Link to="/all">All</Link>
            </div>
            <div className="searchPage__option">
              <DescriptionIcon />
              <Link to="/news">News</Link>
            </div>
            <div className="searchPage__option">
              <ImageIcon />
              <Link to="/images">Images</Link>
            </div>
            <div className="searchPage__option">
              <LocalOfferIcon />
              <Link to="/shopping">Shopping</Link>
            </div>
            <div className="searchPage__option">
              <RoomIcon />
              <Link to="/maps">Maps</Link>
            </div>
            <div className="searchPage__option">
              <MoreVertIcon />
              <Link to="/more">More</Link>
            </div>
          </div>
          <div className="searchPage__optionsRight">
            <div className="searchPage__option">
              <Link to="/settings">Settings</Link>
            </div>
            <div className="searchPage__option">
              <Link to="/tools">Tools</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsHeader;
