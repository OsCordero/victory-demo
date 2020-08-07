import React from "react";
import "./searchbar.scss";

const SearchBar = ({ className }) => {
  return (
    <form action="#" className={`search ${className}`}>
      <input type="text" className="search__input" placeholder="Search some stuff" />
      <button className="search__button"></button>
    </form>
  );
};

export default SearchBar;
