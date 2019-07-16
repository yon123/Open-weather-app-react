import React from "react";
import { Link } from "react-router-dom";
import WeatherForm from "./WeatherForm";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  z-index: 5;
  padding: 10px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  background-color: rgb(66, 113, 244);
  font-size: 1.2rem;
  color: rgb(204, 204, 204);
  height: 3rem;
  font-weight: 400;
  width: 100%;
  box-sizing: border-box;
  margin: 0px;
  flex: 0 0 3rem;
  margin-bottom: 32px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;
const Header = () => {
  return (
    <React.Fragment>
      <Nav>
        <NavLink to="/" className="navbar-brand">
          Home
        </NavLink>
        <WeatherForm />
      </Nav>
    </React.Fragment>
  );
};

export default Header;
