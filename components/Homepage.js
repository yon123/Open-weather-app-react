import React from "react";
import WeatherForm from "./WeatherForm";
import styled from "styled-components";
import { WeatherCloudy } from "styled-icons/typicons/WeatherCloudy";

const HomepageWrap = styled.div`
  text-align: center;
  margin: 0 auto;
  background: #fff;
  height: 350px;
  width: 350px;
  padding: 10px;
  border: 1px solid #fff;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.14);
  border-radius: 16px;
`;
const Header = styled.h2`
  color: #000;
  text-align: center;
  margin-top: 0;
  font-weight: 400;
`;
const HeaderSub = styled.h3`
  color: #000;
  text-align: center;
  margin-top: 0;
  font-weight: 400;
`;

const WeatherIcon = styled(WeatherCloudy)`
  width: 150px;
  color: rgb(66, 113, 244);
`;

const Homepage = () => {
  return (
    <React.Fragment>
      <HomepageWrap>
        <WeatherIcon />
        <Header className="homepage-wrap__hed text-center">
          Whats the weather like?
        </Header>
        <HeaderSub>Enter your city to find out</HeaderSub>
        <WeatherForm />
      </HomepageWrap>
    </React.Fragment>
  );
};

export default Homepage;
