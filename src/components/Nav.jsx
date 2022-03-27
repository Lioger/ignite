import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import styled from "styled-components";
import logo from "../img/logo.svg";
import { fetchSearch } from "../actions/gamesAction";
import { fadeIn } from "../animations.js";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };
  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };
  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearched}>
        <img src={logo} alt="Logo" />
        <h1>Ignite</h1>
      </Logo>
      <form className="search" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          onChange={(e) => setTextInput(e.target.value)}
          value={textInput}
        />
        <button type="submit">Search</button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  @media screen and (max-width: 768px) {
    padding: 2rem 2rem 1rem;
  }
  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
  }
  input {
    width: 40%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    outline: none;

    @media screen and (max-width: 991px) {
      width: 60%;
    }
    @media screen and (max-width: 768px) {
      width: 70%;
      font-size: 1.2rem;
    }
    @media screen and (max-width: 425px) {
      width: 100%;
    }
  }
  button {
    font-size: 1.5rem;
    border: none;
    outline: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background-color: #ff7676;
    color: white;

    @media screen and (max-width: 991px) {
      font-size: 1.2rem;
      padding: 0.5rem 1rem;
    }
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  padding: 1rem;
  cursor: pointer;
  img {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

export default Nav;
