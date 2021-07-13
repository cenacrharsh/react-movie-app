import React, { useState, useEffect, useRef } from "react";

/*Image*/
import searchIcon from "../../images/search-icon.svg";

/*Styles*/
import { Wrapper, Content } from "./SearchBar.styles";

const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState("");
  const initial = useRef(true);

  /* useRef doesn't trigger a rerender upon being changed and we also don't need a setter for changing it*/

  /*We want to trigger useEffect only when user types something and not on first mount*/

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);
    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search Movie"
          onChange={(event) => {
            setState(event.currentTarget.value);
          }}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
