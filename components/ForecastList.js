import React from "react";
import WeatherCard from "./WeatherCard";
import styled from "styled-components";

const WeatherCardWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: wrap;
`;

const ForecastListHeader = styled.h1`
  text-align: center;
  font-size: 48px;
  text-transform: capitalize;
`;

class ForecastList extends React.Component {
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

  showWeatherList() {
    if (!this.props.city.length) {
      return <div>Getting Weather.....</div>;
    }
    return this.props.forecast.map((item, index) => {
      return (
        <WeatherCard
          key={index}
          item={item}
          city={this.props.match.params.city}
          index={index}
        />
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <ForecastListHeader>{this.props.city}</ForecastListHeader>
        <WeatherCardWrap>{this.showWeatherList()}</WeatherCardWrap>
      </React.Fragment>
    );
  }
}

export default ForecastList;
