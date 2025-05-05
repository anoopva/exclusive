import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./SearchInput.css";

function SearchInput() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log("Search query:", query);
    }
  };

  return (
    <div className={`search-container ${isFocused ? "focused" : ""}`}>
      <input
        type="text"
        placeholder="What are you looking for?"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyPress={handleKeyPress}
        className="search-input"
      />
      <FiSearch className="search-icon" />
    </div>
  );
}

export default SearchInput;
