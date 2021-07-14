import React, { useContext } from "react";
import { Link } from "react-router-dom";

import RMDBLogo from "../../images/react-movie-logo.svg";

import TMDBLogo from "../../images/tmdb_logo.svg";

/*Context*/
import { Context } from "../../context";

/*Styles*/

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

const Header = () => {
  const [user] = useContext(Context);
  console.log("user is: ", user);

  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={RMDBLogo} alt="rmdb-logo" />
        </Link>

        {user ? (
          <span>Logged in as: {user.username}</span>
        ) : (
          <Link to="/login">
            <span>Log in</span>
          </Link>
        )}
        <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">
          <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
        </a>
      </Content>
    </Wrapper>
  );
};

export default Header;
