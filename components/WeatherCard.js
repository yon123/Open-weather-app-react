import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { WeatherCloudy } from "styled-icons/typicons/WeatherCloudy";
import moment from "moment";

const WeatherListCard = styled.div``;

const WeatherListItem = styled.div`
  display: block;
  margin: 10px;
  background: #fff;
  height: 350px;
  width: 350px;
  padding: 10px;
  border: 1px solid #fff;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.14);
  border-radius: 16px;
  text-align: center;
`;

const WeatherCardHdr = styled.h1`
  font-size: 32px;
  margin-top: 0;
`;

const WeatherCardSub = styled.h2`
  font-size: 24px;
`;

const WeatherCardLink = styled(Link)`
  text-decoration: none;
  color: #717171;
  font-size: 18px;
  font-weight: bold;
`;

const WeatherIcon = styled(WeatherCloudy)`
  width: 150px;
  color: rgb(66, 113, 244);
`;

const WeatherCard = ({ item, city, index }) => {
  return (
    <React.Fragment>
      <WeatherListCard>
        <WeatherListItem>
          <WeatherIcon />
          <WeatherCardHdr>{moment(item.date).format("dddd")}</WeatherCardHdr>
          <WeatherCardSub>{item.max}&deg;</WeatherCardSub>
          {item.clouds}
          <WeatherCardLink to={`/forecast/${city}/${index}`}>
            View More
          </WeatherCardLink>
        </WeatherListItem>
      </WeatherListCard>
    </React.Fragment>
  );
};

export default WeatherCard;
