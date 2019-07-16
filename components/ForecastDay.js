import React from "react";
import styled from "styled-components";
import { WeatherCloudy } from "styled-icons/typicons/WeatherCloudy";
import moment from "moment";
import ForecastDayChart from "./ForecastDayChart";

const WeatherIcon = styled(WeatherCloudy)`
  width: 150px;
  color: rgb(66, 113, 244);
`;

const WeatherDayCard = styled.div`
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

const HeaderSub = styled.h3`
  color: #000;
  text-align: center;
  margin-top: 32px;
  font-size: 32px;
  font-weight: 400;
`;

const WeatherDayHeader = styled.h1`
  font-size: 46px;
  margin-top: 0;
  margin-bottom: 10px;
`;

const WeatherDayDesc = styled.div`
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 10px;
`;

class ForecastDay extends React.Component {
  componentDidMount() {
    const { city } = this.props.match.params;
    if (city !== this.props.city) {
      this.props.getWeatherState(city);
    }
  }

  componentDidUpdate(prevProps) {
    const { city: prevCity } = prevProps.match.params;
    const { city: newCity } = this.props.match.params;
    if (prevCity !== newCity) {
      this.props.getWeatherState(newCity);
    }
  }
  render() {
    const { day } = this.props.match.params;
    const date = this.props.forecast[day];
    if (!date) {
      return <div>Getting Weather.....</div>;
    }
    const recommendMax =
      date.max <= 75 ? "It's gonna be a nice one" : "Its hot out there.";
    const recommendMin =
      date.min <= 69
        ? "You may need a jacket later on."
        : "Make sure you stay hydrated.";
    return (
      <React.Fragment>
        <WeatherDayCard>
          <WeatherIcon />
          <WeatherDayHeader>
            {moment(date.date).format("dddd")}
          </WeatherDayHeader>
          <WeatherDayDesc>
            <strong>Max:</strong>
            {date.max}
          </WeatherDayDesc>
          <WeatherDayDesc>
            <strong>Min:</strong>
            {date.min}
          </WeatherDayDesc>
          <WeatherDayDesc>
            <strong>Average:</strong>
            {date.average}
          </WeatherDayDesc>
        </WeatherDayCard>
        <HeaderSub>{recommendMax}</HeaderSub>
        <HeaderSub>{recommendMin}</HeaderSub>
        <ForecastDayChart />
      </React.Fragment>
    );
  }
}

export default ForecastDay;
