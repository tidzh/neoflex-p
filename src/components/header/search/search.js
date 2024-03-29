import React from "react";
import "./search.sass";

const Search = () => {
  return (
    <div className="search">
      <input
        className="search__panel"
        type="search"
        id="site-search"
        name="q"
        placeholder="Search"
      ></input>
      <button className="btn search__btn">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 27C22.4183 27 26 23.4183 26 19C26 14.5817 22.4183 11 18 11C13.5817 11 10 14.5817 10 19C10 23.4183 13.5817 27 18 27Z"
            stroke="#5C5C5C"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M27.9999 28.9999L23.6499 24.6499"
            stroke="#5C5C5C"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default Search;
